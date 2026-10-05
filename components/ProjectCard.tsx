import Link from "next/link";
import type { Project } from "../content/projects";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const hideStatus = ["plm-knowledge-agent", "code-generator", "transcription-assistant"].includes(project.slug);

  return (
    <article className={`project-card ${compact ? "project-card-compact" : ""}`}>
      {project.image ? (
        <div className="project-image">
          <img src={project.image} alt={project.imageAlt ?? project.title} />
          <span className="evidence-badge">{project.imageBadge ?? "真实运行截图"}</span>
        </div>
      ) : (
        <div className={`project-placeholder placeholder-${project.slug}`} aria-hidden="true">
          <span>{project.englishTitle}</span>
          <div className="placeholder-lines"><i /><i /><i /></div>
        </div>
      )}
      <div className="project-body">
        <div className="project-heading">
          <div>
            <p className="eyebrow">{project.englishTitle}</p>
            <h3>{project.title}</h3>
          </div>
          {!hideStatus && <span className="status-pill">{project.status}</span>}
        </div>
        <p className="project-summary">{project.summary}</p>
        {!compact && (
          <div className="problem-solution">
            <p><span>业务问题</span>{project.problem}</p>
            <p><span>解决方式</span>{project.solution}</p>
          </div>
        )}
        <div className="tag-list">
          {project.capabilities.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="project-meta">
          <p><span>我的角色</span>{project.role}</p>
          {project.caseStudyAvailable ? (
            <Link className="text-link" href={`/projects/${project.slug}`}>查看完整 Case Study →</Link>
          ) : (
            <span className="muted-link">Case Study 整理中</span>
          )}
        </div>
      </div>
    </article>
  );
}
