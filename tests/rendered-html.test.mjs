import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoutes = [
  ["/projects/plm-knowledge-agent", "PLM 知识问答助手"],
  ["/projects/code-generator", "编码自动生成器"],
  ["/projects/creatoros", "CreatorOS"],
  ["/projects/ai-content-studio", "AI 内容创作工作台"],
  ["/projects/transcription-assistant", "音视频转录助手"],
];

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://portfolio.test${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the public portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>AI 应用 × 业务流程 × 产品落地<\/title>/i);
  assert.match(html, /项目1：PLM知识问答助手/);
  assert.match(html, /项目2：编码自动生成器/);
  assert.match(html, /项目3：会议纪要转录助手/);
  assert.doesNotMatch(html, /localhost|127\.0\.0\.1|file:\/\//i);
});

test("server-renders every project detail route", async () => {
  for (const [pathname, heading] of projectRoutes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, new RegExp(heading), pathname);
    assert.doesNotMatch(html, /localhost|127\.0\.0\.1|file:\/\//i, pathname);
  }
});

test("all portfolio image assets referenced by project content exist", async () => {
  const source = await readFile(new URL("../content/projects.ts", import.meta.url), "utf8");
  const assetPaths = [...source.matchAll(/(?:image|diagram):\s*"(\/[^\"]+)"/g)].map(
    ([, assetPath]) => assetPath,
  );

  assert.ok(assetPaths.length > 0);
  for (const assetPath of new Set(assetPaths)) {
    await access(new URL(`../public${assetPath}`, import.meta.url));
  }
});
