import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";
import { projects, plmCaseStudy } from "../../../content/projects";

export const metadata: Metadata = { title: "PLM 知识问答助手 Case Study" };
const project = projects[0];

export default function PlmCaseStudyPage() {
  return (
    <main>
      <div className="shell"><SiteHeader /></div>
      <article className="case-study">
        <header className="case-hero shell">
          <div>
            <p className="kicker">CASE STUDY 01 · ENTERPRISE KNOWLEDGE AGENT</p>
            <h1>PLM 知识问答助手</h1>
            <p className="case-lead">{plmCaseStudy.overview}</p>
            <div className="hero-actions">
              <a className="primary-button" href={project.demoUrl} target="_blank" rel="noreferrer">打开脱敏展示 Demo ↗</a>
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
            <p>PLM 日常咨询中存在大量重复问题，历史解决方案虽有沉淀，但仍依赖管理员人工查找、判断和回复，难以形成持续复用。</p>
            <p>将高频问题与历史解决方案沉淀为可检索知识库，让用户优先自助查询；有明确答案时直接返回，未检索到或无法判断时再转管理员处理。</p>
          </div>
          <div className="before-after">
            <div><p className="eyebrow">BEFORE · 人工链路</p>{plmCaseStudy.before.map((item) => <p key={item}>{item}</p>)}</div>
            <div><p className="eyebrow">AFTER · 助手链路</p>{plmCaseStudy.after.map((item) => <p key={item}>{item}</p>)}</div>
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="shell">
            <div className="case-section-title"><span>02</span><div><p className="eyebrow">PROBLEM BREAKDOWN</p><h2>从业务问题拆到技术实现</h2></div></div>
            <div className="breakdown-grid">
              {plmCaseStudy.breakdown.map((item) => <article key={item.label}><h3>{item.label}</h3><p>{item.value}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>03</span><div><p className="eyebrow">SOLUTION</p><h2>一条可控的问答闭环</h2></div></div>
          <div className="solution-flow">
            {plmCaseStudy.solution.map((item, index) => <div key={item}><span>{index + 1}</span><p>{item}</p></div>)}
          </div>
          <div className="evidence-grid">
            <figure className="evidence-card">
              <img src={project.image} alt={project.imageAlt} />
              <figcaption><strong>真实运行证据</strong><span>飞书内的 PLM 问答助手运行过程。截图展示文档发布报错问题及基于知识库的原因与解决方法。</span></figcaption>
            </figure>
            <div className="demo-card">
              <p className="eyebrow">PORTFOLIO DEMO</p>
              <h3>脱敏展示界面</h3>
              <p>为了便于公开浏览，另行制作了更适合展示的网页 Demo。它用于说明产品流程与规则，不连接真实企业 Agent、知识库或内部数据。</p>
              <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer">访问展示 Demo ↗</a>
            </div>
          </div>
        </section>

        <section className="case-section section-tint">
          <div className="shell">
            <div className="case-section-title"><span>04</span><div><p className="eyebrow">AI BOUNDARY</p><h2>哪些交给 AI，哪些不交</h2></div></div>
            <div className="boundary-grid">
              {plmCaseStudy.boundaries.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>05</span><div><p className="eyebrow">KEY DECISIONS</p><h2>关键判断，不只是实现</h2></div></div>
          <div className="decision-list">
            {plmCaseStudy.decisions.map((item) => (
              <article key={item.question}><p className="eyebrow">{item.question}</p><h3>{item.choice}</h3><p>{item.why}</p></article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="shell">
            <div className="case-section-title"><span>06</span><div><p className="eyebrow">ITERATION</p><h2>三个关键难题</h2></div></div>
            <div className="challenge-list">
              {plmCaseStudy.challenges.map((item) => (
                <article key={item.title}><h3>{item.title}</h3><p><span>问题</span>{item.problem}</p><p><span>处理</span>{item.solution}</p><p><span>结果</span>{item.result}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>07</span><div><p className="eyebrow">RESULT & REFLECTION</p><h2>已验证结果与边界</h2></div></div>
          <div className="result-layout">
            <div><h3>已验证结果</h3><ul>{plmCaseStudy.results.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="limitation-card"><h3>当前边界与下一步</h3><ul>{plmCaseStudy.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </section>
      </article>
    </main>
  );
}
