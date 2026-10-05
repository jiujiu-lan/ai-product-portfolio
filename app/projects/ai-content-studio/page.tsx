import type { Metadata } from "next";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { aiContentStudioCaseStudy, projects } from "../../../content/projects";

export const metadata: Metadata = { title: "AI 内容创作工作台 Case Study" };
const project = projects[3];

export default function AiContentStudioCaseStudyPage() {
  return (
    <main>
      <div className="shell"><SiteHeader /></div>
      <article className="case-study">
        <header className="case-hero shell">
          <div>
            <p className="kicker">CASE STUDY 03 · STRUCTURED CONTENT WORKFLOW</p>
            <h1>AI 内容创作工作台</h1>
            <p className="case-lead">{aiContentStudioCaseStudy.overview}</p>
            <div className="hero-actions">
              <a className="primary-button" href="/demos/wechat-article-generator.html" target="_blank">打开公众号 Demo ↗</a>
              <span className="secondary-button" aria-disabled="true">小红书本地 MVP（未公开）</span>
            </div>
          </div>
          <dl className="case-facts">
            <div><dt>我的角色</dt><dd>{project.role}</dd></div>
            <div><dt>项目结构</dt><dd>公众号规则原型 + 小红书全栈 MVP</dd></div>
            <div><dt>当前 AI 状态</dt><dd>公众号无运行时 AI；小红书当前 Mock</dd></div>
            <div><dt>能力关键词</dt><dd>{project.capabilities.join(" / ")}</dd></div>
          </dl>
        </header>

        <section className="case-section shell">
          <div className="case-section-title"><span>01</span><div><p className="eyebrow">CONTEXT</p><h2>为什么做</h2></div></div>
          <div className="case-copy two-column-copy">
            <p>目标用户的困难并不只是“不会写一句文案”，而是缺少一条从模糊选题到标题、正文、封面、配图和发布建议的完整创作路径。</p>
            <p>因此产品没有停留在聊天框，而是把创作方法转成结构化输入、候选标题、人工选择、多资产输出和可管理结果。</p>
          </div>
          <div className="before-after">
            <div><p className="eyebrow">BEFORE · 分散创作链路</p>{aiContentStudioCaseStudy.before.map((item) => <p key={item}>{item}</p>)}</div>
            <div><p className="eyebrow">AFTER · 结构化工作台</p>{aiContentStudioCaseStudy.after.map((item) => <p key={item}>{item}</p>)}</div>
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="shell">
            <div className="case-section-title"><span>02</span><div><p className="eyebrow">PROBLEM BREAKDOWN</p><h2>把“写爆文”拆成可交付流程</h2></div></div>
            <div className="breakdown-grid">
              {aiContentStudioCaseStudy.breakdown.map((item) => <article key={item.label}><h3>{item.label}</h3><p>{item.value}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>03</span><div><p className="eyebrow">SOLUTION</p><h2>从输入到可管理内容资产</h2></div></div>
          <div className="solution-flow">
            {aiContentStudioCaseStudy.solution.map((item, index) => <div key={item}><span>{index + 1}</span><p>{item}</p></div>)}
          </div>
          <div className="subcase-grid">
            {aiContentStudioCaseStudy.subcases.map((subcase) => (
              <article className="subcase-card" key={subcase.key}>
                <div className="subcase-image"><img src={subcase.image} alt={subcase.imageAlt} /><span>{subcase.status}</span></div>
                <div className="subcase-body">
                  <p className="eyebrow">{subcase.subtitle}</p>
                  <h3>{subcase.title}</h3>
                  <p>{subcase.description}</p>
                  <dl><div><dt>可验证</dt><dd>{subcase.verified}</dd></div><div><dt>能力边界</dt><dd>{subcase.boundary}</dd></div></dl>
                  {subcase.demoUrl ? (
                    <a className="text-link" href={subcase.demoUrl} target="_blank" rel="noreferrer">打开演示 ↗</a>
                  ) : (
                    <span className="muted-link">本地原型，暂无公网入口</span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="local-demo-note">小红书是本地运行原型，未提供公网交互入口；公众号版本已复制到作品集，可直接打开。</p>
        </section>

        <section className="case-section section-tint">
          <div className="shell">
            <div className="case-section-title"><span>04</span><div><p className="eyebrow">AI BOUNDARY</p><h2>两个子案例，两种 AI 边界</h2></div></div>
            <p className="boundary-intro">公众号先用确定性模板验证工作流；小红书预留真实模型能力，但当前证据只支持 Mock 模式。两者都把状态、存储、安全和人工确认留给普通程序与人。</p>
            <div className="boundary-grid">
              {aiContentStudioCaseStudy.boundaries.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>05</span><div><p className="eyebrow">KEY DECISIONS</p><h2>不是一次性生成最终稿</h2></div></div>
          <div className="decision-list">
            {aiContentStudioCaseStudy.decisions.map((item) => (
              <article key={item.question}><p className="eyebrow">{item.question}</p><h3>{item.choice}</h3><p>{item.why}</p></article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="shell">
            <div className="case-section-title"><span>06</span><div><p className="eyebrow">ITERATION</p><h2>从内容方法到工程闭环</h2></div></div>
            <div className="challenge-list challenge-list-four">
              {aiContentStudioCaseStudy.challenges.map((item) => (
                <article key={item.title}><h3>{item.title}</h3><p><span>问题</span>{item.problem}</p><p><span>处理</span>{item.solution}</p><p><span>结果</span>{item.result}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>07</span><div><p className="eyebrow">RESULT & REFLECTION</p><h2>已验证结果与诚实边界</h2></div></div>
          <div className="result-layout">
            <div><h3>现有资料可验证</h3><ul>{aiContentStudioCaseStudy.results.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="limitation-card"><h3>限制与下一步</h3><ul>{aiContentStudioCaseStudy.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <p className="case-closing">这个项目的重点不是证明 AI 能自动制造爆款，而是把不稳定的内容生成能力放进一条有结构合同、人工选择、安全规则和资产管理的产品流程。</p>
        </section>
      </article>
      <div className="shell"><SiteFooter /></div>
    </main>
  );
}
