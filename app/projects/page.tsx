import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { ProjectFilter } from "../../components/ProjectFilter";
import { projects } from "../../content/projects";

export const metadata: Metadata = { title: "项目" };

export default function ProjectsPage() {
  return (
    <main className="shell">
      <SiteHeader />
      <header className="page-hero">
        <p className="kicker">PROJECT INDEX · 05</p>
        <h1>五个项目，五种真实问题</h1>
        <p>按业务问题、解决路径和本人职责组织，而不是堆叠技术名词。所有事实与数据均来自现有项目资料。</p>
      </header>
      <ProjectFilter projects={projects} />
      <SiteFooter />
    </main>
  );
}
