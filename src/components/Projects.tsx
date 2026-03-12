"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 circuit-bg">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--green), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs mb-3" style={{ color: "var(--green)" }}>
            <span style={{ color: "var(--magenta)" }}>05.</span> PROJECTS
          </p>
          <h2 className="section-title text-neon-green mb-4">ENGINEERING PORTFOLIO</h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, var(--green), var(--magenta))" }} />
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/projects/${project.slug}`} className="block group h-full">
                <div
                  className="cyber-card h-full p-5 flex flex-col"
                  style={{ borderColor: `${project.color}25` }}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{project.icon}</span>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded transition-colors"
                        style={{ color: "var(--gray-light)" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = project.color}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--gray-light)"}
                      >
                        <Github size={16} />
                      </a>
                      <div className="p-1.5" style={{ color: "var(--gray-light)" }}>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Category badge */}
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded mb-3 w-fit"
                    style={{
                      background: `${project.color}10`,
                      border: `1px solid ${project.color}30`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-display text-base font-bold mb-2 group-hover:text-neon-cyan transition-colors"
                    style={{ color: "var(--white)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--gray-light)" }}>
                    {project.tagline}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div
                        key={m}
                        className="font-mono text-xs px-2 py-1 rounded text-center"
                        style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)", color: project.color }}
                      >
                        {m}
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "var(--gray-light)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="font-mono text-xs" style={{ color: "var(--gray-light)" }}>
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-1 font-mono text-xs transition-all group-hover:gap-2"
                    style={{ color: project.color }}
                  >
                    View case study <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {rest.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={`/projects/${project.slug}`} className="block group">
                <div
                  className="p-4 rounded-lg flex items-start gap-3 transition-all duration-300"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${project.color}40`;
                    el.style.boxShadow = `0 0 15px ${project.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <span className="text-xl flex-shrink-0">{project.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-sm font-bold mb-0.5 truncate" style={{ color: project.color }}>
                      {project.title}
                    </div>
                    <div className="font-mono text-xs leading-relaxed" style={{ color: "var(--gray-light)" }}>
                      {project.tagline}
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ color: "var(--gray-light)", flexShrink: 0 }}
                  >
                    <Github size={14} />
                  </a>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/suhail39ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber"
          >
            <Github size={16} />
            <span>github.com/suhail39ahmed</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
