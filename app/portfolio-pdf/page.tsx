import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "../../components/PrintButton";
import { ProjectCard } from "../../components/ProjectCard";
import { approach, capabilities, profile } from "../../content/profile";
import { featuredProjects, otherProjects } from "../../content/projects";

export const metadata: Metadata = { title: "A4 横向导出版" };

export default function PortfolioPdfPage() {
  return (
    <main className="pdf-view">
      <div className="print-toolbar"><Link href="/">← 返回网站</Link><span>网页同步版：9 页 A4 横向 PDF · 内容与首页顺序一致</span><PrintButton /></div>
      <div className="paper-stack">
        <section className="a4-sheet cover-sheet editorial-pdf-cover">
          <div className="editorial-pdf-meta"><span>AI PRODUCT PORTFOLIO</span><span>作品集</span><span>2026</span></div>
          <div className="editorial-pdf-word" aria-hidden="true"><span>POR</span><span>TFOLIO</span></div>
          <div className="editorial-pdf-title">
            <h1><span>PORTFOLI<b>O</b></span><em>作品集</em></h1>
            <p>裘慧铃 / QIU HUILING</p>
          </div>
        </section>

        <section className="a4-sheet">
          <PdfHeader page="02" title="ABOUT ME / 关于我" />
          <div className="pdf-about-heading"><p>FROM BUSINESS TO PRODUCT</p><h2>把业务问题，<br />转化为可运行的 AI 解决方案。</h2></div>
          <div className="pdf-about-grid">
            <div className="pdf-about-story">
              <p className="pdf-about-summary"><strong>将解决方案真正做成可运行的产品。</strong>{profile.summary}</p>
              <p>{profile.background}</p>
              <p>这些经历让我熟悉如何进入一个真实业务现场：理解参与者和流程，识别人工环节中的问题，把分散经验整理成规则，再借助 AI 与编程工具形成可运行的解决方案。</p>
              <blockquote>我的核心能力不是“会写多少代码”，而是把真实业务问题逐步转化为可运行产品。</blockquote>
            </div>
            <div className="pdf-about-facts">
              <article><span>01</span><h3>理解真实业务</h3><p>识别角色、任务、约束、例外和责任边界。</p></article>
              <article><span>02</span><h3>结构化隐性经验</h3><p>把口头经验、业务规则和失败案例转成可验证条件。</p></article>
              <article><span>03</span><h3>推进到可运行产品</h3><p>完成 AI 方案、系统集成、测试迭代与产品交付。</p></article>
              <article className="pdf-about-focus"><span>FOCUS</span><h3>优先方向</h3><p>AI 项目应用 / 实施、流程管理；延展至 AI 解决方案、FDE 与企业 AI 落地。</p></article>
            </div>
          </div>
          <div className="pdf-about-focus-strip">
            <blockquote>“把一个真实业务问题，逐步转化为可运行的 AI / 自动化产品。”</blockquote>
            <dl><div><dt>背景</dt><dd>企业数字化</dd></div><div><dt>优先</dt><dd>AI 项目应用 / 实施 · 流程管理</dd></div><div><dt>方法</dt><dd>问题 → 规则 → 方案 → 交付</dd></div></dl>
          </div>
        </section>

        <section className="a4-sheet">
          <PdfHeader page="03" title="CORE CAPABILITIES" />
          <div className="pdf-section"><h2>我能解决什么问题</h2><p>从真实业务问题出发，将需求、规则与流程结构化，将解决方案转化为可运行产品。</p></div>
          <div className="pdf-capability-grid">
            {capabilities.map((item, index) => <article key={item.en}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.zh}</h3><p>{item.en}</p><small>{item.description}</small></article>)}
          </div>
        </section>

        <section className="a4-sheet">
          <PdfHeader page="04" title="MY APPROACH" />
          <div className="pdf-section"><h2>从问题到产品</h2><p>源于企业数字化实践，可复用于不同业务场景的 AI 应用落地。</p></div>
          <ol className="pdf-approach-grid">
            {approach.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}
          </ol>
        </section>

        {featuredProjects.map((project, index) => (
          <section className="a4-sheet pdf-project-sheet" key={project.slug}>
            <PdfHeader page={String(index + 5).padStart(2, "0")} title={index === 0 ? "FEATURED WORK / 重点项目 · 从企业知识、业务规则到内容情报，展示可迁移的问题解决能力。" : "FEATURED WORK / 重点项目"} />
            <ProjectCard project={project} />
          </section>
        ))}

        <section className="a4-sheet pdf-more-projects">
          <PdfHeader page="08" title="MORE PROJECTS / 其他项目" />
          <div className="compact-projects">
            {otherProjects.map((project) => <ProjectCard compact key={project.slug} project={project} />)}
          </div>
        </section>

        <section className="a4-sheet pdf-back-cover">
          <div className="pdf-brand">THANKS FOR VIEWING</div>
          <div className="pdf-back-main">
            <p>AI PROJECT PORTFOLIO · 2026</p>
            <h2>感谢阅读</h2>
            <p>希望把对业务的理解、对规则的拆解，以及 AI 产品落地能力，带到更多真实场景中。</p>
          </div>
          <div className="pdf-back-keywords"><span>AI APPLICATION</span><span>BUSINESS WORKFLOW</span><span>PRODUCT DELIVERY</span></div>
          <div className="cover-footer"><span>姓名:裘慧铃</span><span>邮箱:j71315618@gmail.com</span></div>
        </section>
      </div>
    </main>
  );
}

function PdfHeader({ page, title }: { page: string; title: string }) {
  return <header className="pdf-header"><span>{title}</span><b>{page}</b></header>;
}
