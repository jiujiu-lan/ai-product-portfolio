import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { ProjectCard } from "../components/ProjectCard";
import { approach, capabilities, profile } from "../content/profile";
import { featuredProjects, otherProjects } from "../content/projects";

export default function HomePage() {
  return (
    <main>
      <section className="editorial-cover" id="cover">
        <div className="shell editorial-cover-inner">
          <div className="editorial-cover-meta">
            <span>AI PRODUCT PORTFOLIO</span>
            <span>作品集</span>
            <span>2026</span>
          </div>
          <div className="editorial-cover-word" aria-hidden="true"><span>POR</span><span>TFOLIO</span></div>
          <div className="editorial-cover-title">
            <h1><span>PORTFOLI<b>O</b></span><em>作品集</em></h1>
            <p>裘慧铃 / QIU HUILING</p>
          </div>
        </div>
      </section>

      <div className="shell home-section-nav"><SiteHeader /></div>

      <section className="section about-page" id="about">
        <div className="shell">
          <div className="about-page-heading">
            <div><p className="eyebrow">ABOUT ME / 关于我</p><h2>把业务问题，<br />转化为可运行的 AI 解决方案。</h2></div>
            <div className="about-page-intro">
              <p>将解决方案真正做成可运行的产品。</p>
              <p>{profile.summary}</p>
              <div className="hero-actions">
                <Link className="primary-button" href="/projects">浏览 5 个项目</Link>
                <Link className="secondary-button" href="#capabilities">了解我的方法</Link>
              </div>
            </div>
          </div>
          <div className="about-me-grid">
            <div className="about-story">
              <p>{profile.background}</p>
              <p>这些经历让我熟悉如何进入一个真实业务现场：理解参与者和流程，识别人工环节中的问题，把分散经验整理成规则，再借助 AI 与编程工具形成可运行的解决方案。</p>
              <blockquote>我的核心能力不是“会写多少代码”，而是把真实业务问题逐步转化为可运行产品。</blockquote>
            </div>
            <div className="about-facts">
              <article><span>01</span><div><h3>理解真实业务</h3><p>识别角色、任务、约束、例外和责任边界。</p></div></article>
              <article><span>02</span><div><h3>结构化隐性经验</h3><p>把口头经验、业务规则和失败案例转成可验证条件。</p></div></article>
              <article><span>03</span><div><h3>推进到可运行产品</h3><p>完成 AI 方案、系统集成、测试迭代与产品交付。</p></div></article>
              <article className="about-direction"><span>FOCUS</span><div><h3>优先方向</h3><p>AI 项目应用 / 实施、流程管理；延展至 AI 解决方案、FDE 与企业 AI 落地。</p></div></article>
            </div>
          </div>
          <div className="about-focus-strip">
            <blockquote>“把一个真实业务问题，逐步转化为可运行的 AI / 自动化产品。”</blockquote>
            <dl>
              <div><dt>背景</dt><dd>企业数字化</dd></div>
              <div><dt>优先</dt><dd>AI 项目应用 / 实施 · 流程管理</dd></div>
              <div><dt>方法</dt><dd>问题 → 规则 → 方案 → 交付</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section shell" id="capabilities">
        <div className="section-heading">
          <div><p className="eyebrow">CORE CAPABILITIES</p><h2>我能解决什么问题</h2></div>
          <p>从真实业务问题出发，将需求、规则与流程结构化，将解决方案转化为可运行产品。</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article key={item.en}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.zh}</h3><p>{item.en}</p><small>{item.description}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="eyebrow">MY APPROACH</p><h2>从问题到产品</h2></div>
          <p>源于企业数字化实践，可复用于不同业务场景的 AI 应用落地。</p>
        </div>
        <ol className="approach-grid">
          {approach.map((step, index) => (
            <li key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>
          ))}
        </ol>
      </section>

      <section className="section section-tint">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">FEATURED WORK</p><h2>重点项目</h2></div>
            <p>从企业知识、业务规则到内容情报，展示可迁移的问题解决能力。</p>
          </div>
          <div className="projects-list">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">MORE PROJECTS</p><h2>其他项目</h2></div>
          <Link className="text-link" href="/projects">查看全部项目 →</Link>
        </div>
        <div className="compact-projects">
          {otherProjects.map((project) => <ProjectCard compact key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="back-cover">
        <div className="shell back-cover-inner">
          <div>
            <p className="eyebrow">THANKS FOR VIEWING</p>
            <h2>感谢阅读</h2>
            <p className="back-cover-copy">希望把对业务的理解、对规则的拆解，以及 AI 产品落地能力，带到更多真实场景中。</p>
          </div>
          <div className="back-cover-bottom">
            <div className="back-cover-keywords"><span>AI APPLICATION</span><span>BUSINESS WORKFLOW</span><span>PRODUCT DELIVERY</span></div>
            <div className="back-cover-contact"><span>姓名:裘慧铃</span><a href="mailto:j71315618@gmail.com">邮箱:j71315618@gmail.com</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
