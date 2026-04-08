import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { FadeInSection } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Projects — Suhail Ahmed",
  description:
    "Azure DevOps, Agentic AI, and DevSecOps projects — autonomous pipelines, MCP agents, and production-grade AI systems on Azure.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <FadeInSection>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">
              Portfolio
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Projects
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Azure-native DevSecOps and Agentic AI projects — from self-healing pipelines
              to autonomous multi-agent platforms powering production deployments.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
