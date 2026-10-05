import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { codeGeneratorCaseStudy, projects } from "../../../content/projects";

export const metadata: Metadata = { title: "编码自动生成器 Case Study" };
const project = projects[1];

export default function CodeGeneratorCaseStudyPage() {
  return (
    <main>
      <div className="shell"><SiteHeader /></div>
      <article className="case-study">
        <header className="case-hero shell">
          <div>
            <p className="kicker">CASE STUDY 02 · BUSINESS RULES AUTOMATION</p>
            <h1>编码自动生成器</h1>
            <p className="case-lead">{codeGeneratorCaseStudy.overview}</p>
            <div className="hero-actions">
              <a className="primary-button" href={project.demoUrl} target="_blank" rel="noreferrer">打开公开交互 Demo ↗</a>
              <Link className="secondary-button" href="/portfolio-pdf">查看 A4 版</Link>
            </div>
          </div>
          <dl className="case-facts">
            <div><dt>我的角色</dt><dd>{project.role}</dd></div>
            <div><dt>交付形态</dt><dd>{project.status}</dd></div>
            <div><dt>运行时 AI</dt><dd>无 · 正式编号由确定性规则生成</dd></div>
            <div><dt>能力关键词</dt><dd>{project.capabilities.join(" / ")}</dd></div>
          </dl>
        </header>

        <section className="case-section shell">
          <div className="case-section-title"><span>01</span><div><p className="eyebrow">CONTEXT</p><h2>为什么做</h2></div></div>
          <div className="case-copy two-column-copy">
            <p>四类编码有不同字段、流水号区间、平台前缀和写入位置。真正的风险不是“字符串不会拼”，而是历史最大号查错、规则例外漏判、重复申请未拦截以及台账写入失控。</p>
            <p>第一版没有要求业务放弃 Excel，也没有建设在线审批系统，而是先把管理员最容易出错的判断转成离线、可预览、可解释的规则流程。</p>
          </div>
          <div className="before-after">
            <div><p className="eyebrow">BEFORE · 人工链路</p>{codeGeneratorCaseStudy.before.map((item) => <p key={item}>{item}</p>)}</div>
            <div><p className="eyebrow">AFTER · 工具链路</p>{codeGeneratorCaseStudy.after.map((item) => <p key={item}>{item}</p>)}</div>
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="shell">
            <div className="case-section-title"><span>02</span><div><p className="eyebrow">PROBLEM BREAKDOWN</p><h2>从经验判断拆到执行规则</h2></div></div>
            <div className="breakdown-grid">
              {codeGeneratorCaseStudy.breakdown.map((item) => <article key={item.label}><h3>{item.label}</h3><p>{item.value}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>03</span><div><p className="eyebrow">SOLUTION</p><h2>先预览，再确认，成功才占号</h2></div></div>
          <div className="solution-flow">
            {codeGeneratorCaseStudy.solution.map((item, index) => <div key={item}><span>{index + 1}</span><p>{item}</p></div>)}
          </div>
          <div className="evidence-grid">
            <figure className="evidence-card">
              <img src={project.image} alt={project.imageAlt} />
              <figcaption><strong>公开交互 Demo</strong><span>使用模拟数据展示四类编码入口、历史检索和结果预览；不连接真实 Excel、数据库、业务 API 或完整正式规则服务。</span></figcaption>
            </figure>
            <div className="demo-card code-evidence-card">
              <p className="eyebrow">FORMAL TOOL EVIDENCE</p>
              <h3>正式能力由本地代码与交付物验证</h3>
              <p>现有资料可验证 Python/Tkinter 桌面工具、9 个 Excel Sheet、5 个通过的核心测试、Windows 绿色版 ZIP 和 SHA256 校验文件。</p>
              <p className="evidence-note">桌面真实运行截图：【待本人补充】</p>
              <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer">访问公开 Demo ↗</a>
            </div>
          </div>
        </section>

        <section className="case-section section-tint">
          <div className="shell">
            <div className="case-section-title"><span>04</span><div><p className="eyebrow">AI BOUNDARY</p><h2>这个项目为什么不让 AI 生成编号</h2></div></div>
            <p className="boundary-intro">编号必须稳定、可解释、可复核。AI 加速了实施过程，但正式决策留在确定性规则和人工确认中。</p>
            <div className="boundary-grid">
              {codeGeneratorCaseStudy.boundaries.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>05</span><div><p className="eyebrow">KEY DECISIONS</p><h2>范围控制也是产品能力</h2></div></div>
          <div className="decision-list">
            {codeGeneratorCaseStudy.decisions.map((item) => (
              <article key={item.question}><p className="eyebrow">{item.question}</p><h3>{item.choice}</h3><p>{item.why}</p></article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="shell">
            <div className="case-section-title"><span>06</span><div><p className="eyebrow">ITERATION</p><h2>反例驱动的四次关键修正</h2></div></div>
            <div className="challenge-list challenge-list-four">
              {codeGeneratorCaseStudy.challenges.map((item) => (
                <article key={item.title}><h3>{item.title}</h3><p><span>问题</span>{item.problem}</p><p><span>处理</span>{item.solution}</p><p><span>结果</span>{item.result}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>07</span><div><p className="eyebrow">RESULT & REFLECTION</p><h2>已验证结果与诚实边界</h2></div></div>
          <div className="result-layout">
            <div><h3>现有资料可验证</h3><ul>{codeGeneratorCaseStudy.results.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="limitation-card"><h3>限制与下一步</h3><ul>{codeGeneratorCaseStudy.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <p className="case-closing">这个项目证明的不是“所有产品都要接入大模型”，而是能够先判断问题的确定性，再选择合适的技术：用 AI 加速实施，用规则保证结果，用人工承担业务责任。</p>
        </section>
      </article>
      <div className="shell"><SiteFooter /></div>
    </main>
  );
}
