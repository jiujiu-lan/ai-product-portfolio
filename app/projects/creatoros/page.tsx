import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { creatorOsCaseStudy, projects } from "../../../content/projects";

export const metadata: Metadata = { title: "CreatorOS 热点趋势情报台 Case Study" };
const project = projects[2];

const runtimeMetrics = [
  ["9", "SQLite 业务表"],
  ["8", "内容 / 飞书同步记录"],
  ["11", "采集运行记录"],
  ["2", "AI 报告运行"],
  ["6", "文章结构化摘录"],
  ["10", "选题洞察"],
];

export default function CreatorOsCaseStudyPage() {
  return (
    <main>
      <div className="shell"><SiteHeader /></div>
      <article className="case-study">
        <header className="case-hero shell">
          <div>
            <p className="kicker">CASE STUDY 05 · AI CONTENT INTELLIGENCE</p>
            <h1>CreatorOS<br />热点趋势情报台</h1>
            <p className="case-lead">{creatorOsCaseStudy.overview}</p>
            <div className="hero-actions">
              <span className="primary-button" aria-disabled="true">本地工作台（未公开）</span>
              <Link className="secondary-button" href="/portfolio-pdf">查看 A4 版</Link>
            </div>
          </div>
          <dl className="case-facts">
            <div><dt>我的角色</dt><dd>{project.role}</dd></div>
            <div><dt>交付形态</dt><dd>{project.status}</dd></div>
            <div><dt>能力关键词</dt><dd>{project.capabilities.join(" / ")}</dd></div>
          </dl>
        </header>

        <section className="case-section shell">
          <div className="case-section-title"><span>01</span><div><p className="eyebrow">CONTEXT</p><h2>为什么做</h2></div></div>
          <div className="case-copy two-column-copy">
            <p>内容运营真正困难的不是找不到热点，而是研究动作分散：多平台分别搜索、手工复制到表格、临时结果无法回看，最后再凭经验把高热内容转换成选题。</p>
            <p>这个项目的判断是，产品不应停在抓取或数据看板，而要把“采集、沉淀、分析、复用”串成内容研究闭环，并让每条 AI 洞察能回到来源文章。</p>
          </div>
          <div className="before-after">
            <div><p className="eyebrow">BEFORE · 分散研究链路</p>{creatorOsCaseStudy.before.map((item) => <p key={item}>{item}</p>)}</div>
            <div><p className="eyebrow">AFTER · 研究工作台</p>{creatorOsCaseStudy.after.map((item) => <p key={item}>{item}</p>)}</div>
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="shell">
            <div className="case-section-title"><span>02</span><div><p className="eyebrow">PROBLEM BREAKDOWN</p><h2>从内容监控拆到研究资产</h2></div></div>
            <div className="breakdown-grid">
              {creatorOsCaseStudy.breakdown.map((item) => <article key={item.label}><h3>{item.label}</h3><p>{item.value}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>03</span><div><p className="eyebrow">SOLUTION</p><h2>从内容线索到可追溯选题</h2></div></div>
          <div className="solution-flow">
            {creatorOsCaseStudy.solution.map((item, index) => <div key={item}><span>{index + 1}</span><p>{item}</p></div>)}
          </div>
          <div className="evidence-grid">
            <div className="runtime-evidence-card">
              <p className="eyebrow">LOCAL RUNTIME EVIDENCE</p>
              <h3>本地 SQLite 运行样本</h3>
              <div className="runtime-metrics">
                {runtimeMetrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
              </div>
              <p>仅用于证明链路实际写入过数据，不代表用户规模、生产流量或业务效果。页面当前仍混合静态演示内容与真实数据库内容。</p>
            </div>
            <div className="demo-card">
              <p className="eyebrow">LOCAL DEMO</p>
              <h3>本地运行工作台</h3>
              <p>包含内容池、选题分析与报告、监控设置和历史库。当前保留为本地运行证据，未对外开放交互入口。</p>
              <span className="muted-link">本地原型，暂无公网入口</span>
            </div>
          </div>
        </section>

        <section className="case-section section-tint">
          <div className="shell">
            <div className="case-section-title"><span>04</span><div><p className="eyebrow">AI BOUNDARY</p><h2>AI 做归纳，不替代数据与判断</h2></div></div>
            <p className="boundary-intro">当前运行时不是 Agent、RAG 或 MCP：AI 位于研究链路中段，负责语义摘录与跨文章归纳；采集、存储、排序、同步与调度仍由 API、数据库和规则系统完成。</p>
            <div className="boundary-grid">
              {creatorOsCaseStudy.boundaries.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>05</span><div><p className="eyebrow">KEY DECISIONS</p><h2>关键判断，不只是堆功能</h2></div></div>
          <div className="decision-list">
            {creatorOsCaseStudy.decisions.map((item) => (
              <article key={item.question}><p className="eyebrow">{item.question}</p><h3>{item.choice}</h3><p>{item.why}</p></article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="shell">
            <div className="case-section-title"><span>06</span><div><p className="eyebrow">ITERATION</p><h2>四个关键难题</h2></div></div>
            <div className="challenge-list challenge-list-four">
              {creatorOsCaseStudy.challenges.map((item) => (
                <article key={item.title}><h3>{item.title}</h3><p><span>问题</span>{item.problem}</p><p><span>处理</span>{item.solution}</p><p><span>结果</span>{item.result}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>07</span><div><p className="eyebrow">RESULT & REFLECTION</p><h2>已验证结果与诚实边界</h2></div></div>
          <div className="result-layout">
            <div><h3>现有资料可验证</h3><ul>{creatorOsCaseStudy.results.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="limitation-card"><h3>限制与下一步</h3><ul>{creatorOsCaseStudy.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <p className="case-closing">这个项目最能体现的不是“接了多少平台”，而是把业务研究过程拆成数据契约、历史资产、两阶段 AI 和人工采用节点，并在第三方能力不稳定时保住主流程。</p>
        </section>
      </article>
      <div className="shell"><SiteFooter /></div>
    </main>
  );
}
