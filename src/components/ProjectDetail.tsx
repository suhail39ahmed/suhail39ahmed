"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="min-h-screen pt-20" style={{ background: "var(--bg-primary)" }}>
      {/* Hero bar */}
      <div
        className="border-b"
        style={{
          background: "var(--bg-card)",
          borderColor: `${project.color}25`,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link
            href="/#projects"
            className="flex items-center gap-2 font-mono text-xs mb-6 transition-colors hover:opacity-80"
            style={{ color: "var(--gray-light)" }}
          >
            <ArrowLeft size={14} /> cd ../projects
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded mb-3 inline-block"
                  style={{
                    background: `${project.color}10`,
                    border: `1px solid ${project.color}30`,
                    color: project.color,
                  }}
                >
                  {project.category}
                </span>
                <h1
                  className="font-display text-3xl md:text-4xl font-black mb-2"
                  style={{ color: project.color }}
                >
                  <span className="text-4xl mr-3">{project.icon}</span>
                  {project.title}
                </h1>
                <p className="text-base" style={{ color: "var(--gray-light)" }}>
                  {project.tagline}
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber text-xs py-2 px-4"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{
                    background: `${project.color}08`,
                    border: `1px solid ${project.color}25`,
                    color: project.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="cyber-card p-6"
          >
            <h2
              className="font-display text-lg font-bold mb-4 tracking-wider"
              style={{ color: project.color }}
            >
              OVERVIEW
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#a0aec0" }}>
              {project.description}
            </p>
          </motion.section>

          {/* Architecture diagram */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="cyber-card p-6"
          >
            <h2
              className="font-display text-lg font-bold mb-4 tracking-wider"
              style={{ color: project.color }}
            >
              ARCHITECTURE
            </h2>
            <div
              className="rounded p-4 overflow-x-auto"
              style={{
                background: "rgba(0,0,0,0.4)",
                border: `1px solid ${project.color}20`,
              }}
            >
              <div className="font-mono text-xs mb-2" style={{ color: "var(--gray-light)" }}>
                // mermaid architecture diagram
              </div>
              <pre
                className="font-mono text-xs leading-relaxed whitespace-pre-wrap"
                style={{ color: project.color }}
              >
                {project.architecture}
              </pre>
            </div>
            <p className="font-mono text-xs mt-3" style={{ color: "var(--gray-light)" }}>
              💡 Render with{" "}
              <a
                href="https://mermaid.live"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: project.color }}
              >
                mermaid.live
              </a>{" "}
              for interactive diagram
            </p>
          </motion.section>

          {/* Key highlights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="cyber-card p-6"
          >
            <h2
              className="font-display text-lg font-bold mb-4 tracking-wider"
              style={{ color: project.color }}
            >
              KEY HIGHLIGHTS
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "#a0aec0" }}
                >
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: project.color }}
                  />
                  {h}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="cyber-card p-5"
          >
            <h3
              className="font-display text-sm font-bold mb-4 tracking-wider"
              style={{ color: project.color }}
            >
              METRICS
            </h3>
            <div className="space-y-2">
              {project.metrics.map((m) => (
                <div
                  key={m}
                  className="font-mono text-xs p-2 rounded"
                  style={{
                    background: `${project.color}08`,
                    border: `1px solid ${project.color}20`,
                    color: project.color,
                  }}
                >
                  ▸ {m}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="cyber-card p-5"
          >
            <h3
              className="font-display text-sm font-bold mb-4 tracking-wider"
              style={{ color: project.color }}
            >
              TECH STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-1 rounded"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--gray-light)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="cyber-card p-5"
          >
            <h3
              className="font-display text-sm font-bold mb-3 tracking-wider"
              style={{ color: project.color }}
            >
              SOURCE CODE
            </h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs transition-opacity hover:opacity-80"
              style={{ color: project.color }}
            >
              <Github size={14} />
              {project.github.replace("https://github.com/", "")}
            </a>
          </motion.div>

          {/* Back */}
          <Link href="/#projects">
            <div
              className="flex items-center gap-2 font-mono text-xs p-3 rounded transition-all hover:opacity-80"
              style={{ color: "var(--gray-light)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <ArrowLeft size={12} /> Back to all projects
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
