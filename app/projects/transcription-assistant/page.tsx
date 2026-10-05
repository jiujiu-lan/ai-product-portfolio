import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { projects, transcriptionAssistantCaseStudy } from "../../../content/projects";

export const metadata: Metadata = { title: "音视频转录助手 Case Study" };
const project = projects[4];

export default function TranscriptionAssistantCaseStudyPage() {
  return (
    <main>
      <div className="shell"><SiteHeader /></div>
      <article className="case-study">
        <header className="case-hero shell">
          <div>
            <p className="kicker">CASE STUDY 04 · AUDIO & VIDEO INTELLIGENCE</p>
            <h1>音视频转录助手</h1>
            <p className="case-lead">{transcriptionAssistantCaseStudy.overview}</p>
            <div className="hero-actions">
              <a className="primary-button" href={project.demoUrl} target="_blank" rel="noreferrer">打开公开展示 Demo ↗</a>
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
            <p>视频、播客和会议音频里有大量有效信息，但它们不能像文档一样快速搜索、引用和复用。真正耗时的不只是语音识别，而是获取文件、处理格式、等待结果、整理纪要和回传交付的整条链路。</p>
            <p>这个项目的目标，是把这些步骤收拢到用户熟悉的飞书入口，并为长耗时任务补上状态、去重、恢复与证据校验，让转录结果成为可继续使用的工作资料。</p>
          </div>
          <div className="before-after">
            <div><p className="eyebrow">BEFORE · 分散处理链路</p>{transcriptionAssistantCaseStudy.before.map((item) => <p key={item}>{item}</p>)}</div>
            <div><p className="eyebrow">AFTER · AGENT 链路</p>{transcriptionAssistantCaseStudy.after.map((item) => <p key={item}>{item}</p>)}</div>
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="shell">
            <div className="case-section-title"><span>02</span><div><p className="eyebrow">PROBLEM BREAKDOWN</p><h2>从“转文字”拆到完整交付</h2></div></div>
            <div className="breakdown-grid">
              {transcriptionAssistantCaseStudy.breakdown.map((item) => <article key={item.label}><h3>{item.label}</h3><p>{item.value}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>03</span><div><p className="eyebrow">SOLUTION</p><h2>一条可追踪的异步处理闭环</h2></div></div>
          <div className="solution-flow">
            {transcriptionAssistantCaseStudy.solution.map((item, index) => <div key={item}><span>{index + 1}</span><p>{item}</p></div>)}
          </div>
          <div className="evidence-grid">
            <figure className="evidence-card">
              <img src={project.image} alt={project.imageAlt} />
              <figcaption><strong>真实运行证据</strong><span>飞书内的音视频转录 Agent 接通测试。截图展示用户提交视频链接后，Agent 检查 yt-dlp 与 Whisper 环境并给出后续执行计划。</span></figcaption>
            </figure>
            <div className="demo-card">
              <p className="eyebrow">PORTFOLIO DEMO</p>
              <h3>公开展示界面</h3>
              <p>网页 Demo 用于说明产品流程与能力边界，不连接真实飞书机器人、本地媒体文件、任务目录或模型密钥，也不代表生产环境。</p>
              <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer">访问展示 Demo ↗</a>
            </div>
          </div>
        </section>

        <section className="case-section section-tint">
          <div className="shell">
            <div className="case-section-title"><span>04</span><div><p className="eyebrow">AI BOUNDARY</p><h2>模型、工具与人的分工</h2></div></div>
            <p className="boundary-intro">语音识别和会议内容理解交给模型；文件处理、任务状态、去重与引用校验留在确定性程序中；最终内容仍由人复核。</p>
            <div className="boundary-grid">
              {transcriptionAssistantCaseStudy.boundaries.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>05</span><div><p className="eyebrow">KEY DECISIONS</p><h2>关键判断，不只是接一个模型</h2></div></div>
          <div className="decision-list">
            {transcriptionAssistantCaseStudy.decisions.map((item) => (
              <article key={item.question}><p className="eyebrow">{item.question}</p><h3>{item.choice}</h3><p>{item.why}</p></article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="shell">
            <div className="case-section-title"><span>06</span><div><p className="eyebrow">ITERATION</p><h2>四个关键难题</h2></div></div>
            <div className="challenge-list challenge-list-four">
              {transcriptionAssistantCaseStudy.challenges.map((item) => (
                <article key={item.title}><h3>{item.title}</h3><p><span>问题</span>{item.problem}</p><p><span>处理</span>{item.solution}</p><p><span>结果</span>{item.result}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-title"><span>07</span><div><p className="eyebrow">RESULT & REFLECTION</p><h2>已验证结果与诚实边界</h2></div></div>
          <div className="result-layout">
            <div><h3>现有资料可验证</h3><ul>{transcriptionAssistantCaseStudy.results.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="limitation-card"><h3>限制与下一步</h3><ul>{transcriptionAssistantCaseStudy.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <p className="case-closing">这个项目的重点不是把 Whisper 包装成聊天机器人，而是把来源识别、耗时任务、工具依赖、总结依据和结果交付组织成一条可观察、可排查、可继续迭代的产品链路。</p>
        </section>
      </article>
      <div className="shell"><SiteFooter /></div>
    </main>
  );
}
