"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Cloud Platforms",
    color: "var(--cyan)",
    skills: [
      { name: "Microsoft Azure", level: 95, icon: "☁️" },
      { name: "AWS",             level: 88, icon: "🔶" },
      { name: "VMware Cloud",    level: 80, icon: "🖥️" },
    ],
  },
  {
    label: "Containers & Orchestration",
    color: "var(--green)",
    skills: [
      { name: "Kubernetes",  level: 90, icon: "⎈" },
      { name: "Docker",      level: 92, icon: "🐳" },
      { name: "AWS ECS",     level: 82, icon: "📦" },
      { name: "AWS Fargate", level: 80, icon: "🚀" },
    ],
  },
  {
    label: "Infrastructure as Code",
    color: "var(--magenta)",
    skills: [
      { name: "Terraform",          level: 95, icon: "🔷" },
      { name: "AWS CloudFormation", level: 85, icon: "🗂️" },
      { name: "Bicep",              level: 88, icon: "💪" },
    ],
  },
  {
    label: "CI/CD & DevSecOps",
    color: "var(--cyan)",
    skills: [
      { name: "Azure DevOps",  level: 95, icon: "🔄" },
      { name: "GitLab CI/CD",  level: 92, icon: "🦊" },
      { name: "GitHub Actions",level: 80, icon: "🐙" },
      { name: "Trivy / Snyk",  level: 78, icon: "🔒" },
      { name: "OPA / Gatekeeper",level: 75, icon: "🛡️" },
    ],
  },
  {
    label: "Languages & Scripting",
    color: "var(--green)",
    skills: [
      { name: "Python",      level: 82, icon: "🐍" },
      { name: "PowerShell",  level: 88, icon: "💠" },
      { name: "Shell/Bash",  level: 85, icon: "💻" },
      { name: "Azure CLI",   level: 90, icon: "📟" },
      { name: "JavaScript",  level: 72, icon: "🟡" },
    ],
  },
  {
    label: "Data & Analytics",
    color: "var(--magenta)",
    skills: [
      { name: "Databricks",  level: 85, icon: "⚡" },
      { name: "Snowflake",   level: 85, icon: "❄️" },
      { name: "Power BI",    level: 80, icon: "📊" },
      { name: "Sigma",       level: 75, icon: "Σ" },
      { name: "dbt",         level: 78, icon: "🦦" },
    ],
  },
  {
    label: "Monitoring",
    color: "var(--cyan)",
    skills: [
      { name: "Prometheus",  level: 85, icon: "📈" },
      { name: "Grafana",     level: 83, icon: "📊" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-24 circuit-bg">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--magenta), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-mono text-sm uppercase tracking-widest mb-3" style={{ color: "var(--magenta)" }}>
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--white)", fontFamily: "var(--font-display)" }}>
            Tech stack
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--gray-light)", lineHeight: 1.6 }}>
            Cloud, data platforms, DevSecOps, and observability.
          </p>
          <div className="w-24 h-0.5 mx-auto mt-6" style={{ background: "linear-gradient(90deg, var(--magenta), var(--cyan))" }} />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              className="font-mono text-xs px-4 py-2 rounded transition-all duration-300"
              style={{
                background: activeCategory === i ? `${cat.color}15` : "transparent",
                border: `1px solid ${activeCategory === i ? cat.color : "rgba(255,255,255,0.1)"}`,
                color: activeCategory === i ? cat.color : "var(--gray-light)",
                boxShadow: activeCategory === i ? `0 0 12px ${cat.color}30` : "none",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              className="cyber-card p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-mono text-sm font-medium" style={{ color: "var(--white)" }}>
                    {skill.name}
                  </span>
                </div>
                <span
                  className="font-display text-sm font-bold"
                  style={{ color: categories[activeCategory].color }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Bar */}
              <div
                className="h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${categories[activeCategory].color}, ${categories[activeCategory].color}88)`,
                    boxShadow: `0 0 8px ${categories[activeCategory].color}60`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All skills as tags (bottom) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-10"
          style={{ borderTop: "1px solid rgba(0,245,255,0.1)" }}
        >
          <div className="font-mono text-xs mb-4 text-center" style={{ color: "var(--gray-light)" }}>
            // full_skill_tags
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.flatMap((c) => c.skills).map((s, i) => (
              <span
                key={s.name}
                className="font-mono text-xs px-3 py-1 rounded-full transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(0,245,255,0.04)",
                  border: "1px solid rgba(0,245,255,0.15)",
                  color: "var(--gray-light)",
                  cursor: "default",
                }}
              >
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
