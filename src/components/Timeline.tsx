"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Building2, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Revantage Asia",
    role: "Senior DevOps Engineer",
    period: "05/2024 – Present",
    location: "Singapore",
    color: "var(--cyan)",
    current: true,
    highlights: [
      "Designed and implemented enterprise-grade Azure & AWS architectures including Hub-and-Spoke network topology with Snowflake and Databricks integrations",
      "Optimized ETL pipelines and data flows reducing processing time by 40% across multi-cloud environments",
      "Established cloud security controls, real-time alerts, and compliance guardrails using Azure Policy and AWS Config",
      "Built Prometheus/Grafana observability stack covering 200+ cloud resources with custom SLO dashboards",
      "Containerized mission-critical workloads on Kubernetes, Docker, AWS ECS/Fargate — achieving 99.9% uptime",
      "Automated CI/CD with Azure DevOps & GitLab CI; IaC with Terraform/Bicep/CloudFormation (shift-left DevSecOps)",
      "Led cross-functional leadership collaboration on cloud-native and data platform initiatives",
    ],
    tech: ["Azure", "AWS", "Kubernetes", "Terraform", "Bicep", "Snowflake", "Databricks", "Prometheus", "GitLab CI"],
  },
  {
    id: 2,
    company: "Accenture Singapore",
    role: "Cloud/DevOps Consultant",
    period: "05/2022 – 05/2024",
    location: "Singapore",
    color: "var(--green)",
    current: false,
    highlights: [
      "Led complex legacy-to-cloud migrations for enterprise clients to Azure/AWS using Terraform and GitLab CI/CD",
      "Built sustainable and secure cloud landing zones with automated governance and compliance enforcement",
      "Conducted application discovery and dependency mapping for 50+ legacy systems targeted for cloud migration",
      "Designed resilient, cost-effective architectures using Well-Architected Framework principles",
      "Automated cloud service provisioning and golden AMI/image pipelines for standardized deployments",
      "Delivered end-to-end migrations with zero data loss; implemented security guardrails meeting ISO 27001 compliance",
    ],
    tech: ["Azure", "AWS", "Terraform", "GitLab CI", "CloudFormation", "Azure DevOps"],
  },
  {
    id: 3,
    company: "Accenture India",
    role: "Cloud/DevOps Engineer",
    period: "08/2020 – 05/2022",
    location: "Bangalore, India",
    color: "var(--magenta)",
    current: false,
    highlights: [
      "Delivered IaaS solutions on AWS and Azure using GitLab CI/CD and Terraform automation",
      "Implemented role-based access control (RBAC) and privileged identity management using Ansible Tower",
      "Executed end-to-end migrations achieving 90% performance improvement benchmark",
      "Led incident root-cause analysis reducing mean time to recovery (MTTR) by 60%",
      "Performed compliance and security remediation across 100+ cloud accounts",
    ],
    tech: ["AWS", "Azure", "GitLab CI", "Terraform", "Ansible Tower", "Python", "Shell"],
  },
  {
    id: 4,
    company: "Cognizant",
    role: "Technical Lead",
    period: "04/2016 – 07/2020",
    location: "Bangalore, India",
    color: "var(--yellow)",
    current: false,
    highlights: [
      "Automated cloud management workflows using vRealize Automation and vRealize Orchestrator with custom JavaScript",
      "Integrated vRO with CouchDB for stateful workflow persistence and audit logging",
      "Managed VMware ESXi/vCenter infrastructure with 1000+ VMs: HA, DRS, live migrations, OVF templates, nested labs",
      "Led agile delivery sprints using Bitbucket; mentored 10-member team achieving 90% skill improvement",
      "Designed and executed complex VM deployment, cloning, and networking automation runbooks",
    ],
    tech: ["VMware ESXi", "vCenter", "vRealize Automation", "vRO", "JavaScript", "CouchDB", "Bitbucket"],
  },
];

export default function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section id="timeline" className="relative py-24">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--green), transparent)" }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs mb-3" style={{ color: "var(--green)" }}>
            <span style={{ color: "var(--magenta)" }}>02.</span> CAREER_TIMELINE
          </p>
          <h2 className="section-title text-neon-green mb-4">EXPERIENCE</h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, var(--green), var(--cyan))" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--cyan), var(--green), var(--magenta), rgba(255,215,0,0.5))" }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="md:pl-16 relative"
              >
                {/* Dot */}
                <div
                  className="absolute left-3 top-5 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{
                    borderColor: exp.color,
                    background: "var(--bg-primary)",
                    boxShadow: `0 0 12px ${exp.color}`,
                    zIndex: 2,
                    transform: "translateX(-50%)",
                    left: "20px",
                  }}
                />

                {/* Card */}
                <div
                  className="rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    background: "var(--bg-card)",
                    border: `1px solid ${expanded === exp.id ? exp.color : "rgba(255,255,255,0.07)"}`,
                    boxShadow: expanded === exp.id ? `0 0 20px ${exp.color}20` : "none",
                  }}
                >
                  {/* Header (always visible) */}
                  <button
                    className="w-full text-left p-5 flex items-start justify-between gap-4"
                    onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span
                          className="font-display text-base font-bold"
                          style={{ color: exp.color }}
                        >
                          {exp.role}
                        </span>
                        {exp.current && (
                          <span
                            className="font-mono text-xs px-2 py-0.5 rounded-full"
                            style={{ background: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.4)", color: "var(--green)" }}
                          >
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="flex items-center gap-1 font-mono text-sm" style={{ color: "var(--white)" }}>
                          <Building2 size={12} style={{ color: exp.color }} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-xs" style={{ color: "var(--gray-light)" }}>
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                        <span className="font-mono text-xs" style={{ color: "var(--gray-light)" }}>
                          📍 {exp.location}
                        </span>
                      </div>
                    </div>
                    <div style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>
                      {expanded === exp.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expanded === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-5 pb-5"
                          style={{ borderTop: `1px solid ${exp.color}20` }}
                        >
                          <ul className="mt-4 space-y-2">
                            {exp.highlights.map((h, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.05 }}
                                className="flex items-start gap-2 text-sm"
                                style={{ color: "#a0aec0" }}
                              >
                                <span className="mt-1 flex-shrink-0" style={{ color: exp.color }}>▸</span>
                                {h}
                              </motion.li>
                            ))}
                          </ul>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-2 mt-4 pt-4" style={{ borderTop: `1px solid ${exp.color}15` }}>
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="font-mono text-xs px-2 py-0.5 rounded"
                                style={{
                                  background: `${exp.color}10`,
                                  border: `1px solid ${exp.color}30`,
                                  color: exp.color,
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 cyber-card p-5"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs" style={{ color: "var(--cyan)" }}>🎓 EDUCATION</span>
          </div>
          <div className="font-display text-base font-bold mb-1" style={{ color: "var(--white)" }}>
            Bachelor of Engineering — Computer Science
          </div>
          <div className="font-mono text-sm" style={{ color: "var(--cyan)" }}>
            HKBK College of Engineering, Bangalore
          </div>
          <div className="font-mono text-xs mt-1" style={{ color: "var(--gray-light)" }}>
            2011 – 2015 · GPA: 7.1
          </div>
        </motion.div>
      </div>
    </section>
  );
}
