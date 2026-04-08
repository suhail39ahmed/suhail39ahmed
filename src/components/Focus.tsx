"use client";

import { Cloud, Layout, Database, Shield, GitBranch, BarChart3 } from "lucide-react";

const focusAreas = [
  {
    title: "Cloud & Data",
    subtitle: "Enterprise cloud and data platform design",
    icon: Cloud,
    color: "var(--cyan)",
    points: [
      "Azure & AWS architecture—Hub-and-Spoke, landing zones",
      "Data platforms: Databricks, Snowflake, ETL pipelines",
      "Secure, compliant, and cost-optimised designs",
    ],
  },
  {
    title: "Cloud Solution Architect",
    subtitle: "End-to-end solution design and delivery",
    icon: Layout,
    color: "var(--green)",
    points: [
      "Solution design for migrations and greenfield",
      "Integration: Snowflake, Databricks, Power BI, Sigma",
      "IaC: Terraform, Bicep, CloudFormation",
    ],
  },
  {
    title: "Data & Analytics",
    subtitle: "Modern analytics and BI",
    icon: BarChart3,
    color: "var(--magenta)",
    points: [
      "Databricks (Unity Catalog, Delta Lake)",
      "Snowflake (data engineering, dbt)",
      "Power BI & Sigma for reporting and dashboards",
    ],
  },
];

const devsecopsRow = [
  { icon: Shield, label: "DevSecOps & security", color: "var(--green)" },
  { icon: GitBranch, label: "CI/CD pipelines", color: "var(--cyan)" },
  { icon: Database, label: "Observability", color: "var(--magenta)" },
];

export default function Focus() {
  return (
    <section id="focus" className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient wave divider */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, transparent, var(--cyan), var(--green), var(--magenta), transparent)",
          opacity: 0.6,
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header - clear value prop */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-mono text-sm uppercase tracking-widest mb-3" style={{ color: "var(--cyan)" }}>
            What I do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--white)", fontFamily: "var(--font-display)" }}>
            Cloud &amp; Data · Solution Architecture
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "var(--gray-light)", lineHeight: 1.7 }}>
            I help organisations design, secure, and operate cloud and data platforms—from strategy to implementation and observability.
          </p>
        </div>

        {/* Three focus cards - generous spacing */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-16">
          {focusAreas.map((area, i) => (
            <div
              key={area.title}
              className="rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-opacity-100"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: `${area.color}15`, border: `1px solid ${area.color}40` }}
              >
                <area.icon size={24} style={{ color: area.color }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--white)" }}>
                {area.title}
              </h3>
              <p className="text-sm mb-5" style={{ color: "var(--gray-light)" }}>
                {area.subtitle}
              </p>
              <ul className="space-y-3">
                {area.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm flex items-start gap-2"
                    style={{ color: "var(--gray-light)", lineHeight: 1.5 }}
                  >
                    <span style={{ color: area.color }}>—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DevSecOps strip */}
        <div
          className="rounded-xl p-6 md:p-8 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          style={{
            background: "linear-gradient(135deg, rgba(0,245,255,0.04), rgba(57,255,20,0.03))",
            border: "1px solid rgba(0,245,255,0.12)",
          }}
        >
          {devsecopsRow.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon size={20} style={{ color: item.color }} />
              <span className="font-mono text-sm font-medium" style={{ color: "var(--white)" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, transparent, var(--magenta), var(--cyan), transparent)",
          opacity: 0.4,
        }}
      />
    </section>
  );
}
