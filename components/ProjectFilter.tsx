"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "../content/projects";

const filters = ["全部", "Agent / RAG", "业务规则", "内容工作流"];

function matches(project: Project, filter: string) {
  if (filter === "全部") return true;
  if (filter === "Agent / RAG") return project.slug === "plm-knowledge-agent";
  if (filter === "业务规则") return project.slug === "code-generator";
  return ["creatoros", "ai-content-studio", "transcription-assistant"].includes(project.slug);
}

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("全部");
  return (
    <>
      <div className="filter-row" role="group" aria-label="项目筛选">
        {filters.map((filter) => (
          <button className={active === filter ? "active" : ""} key={filter} onClick={() => setActive(filter)}>{filter}</button>
        ))}
      </div>
      <div className="projects-list">
        {projects.filter((project) => matches(project, active)).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
