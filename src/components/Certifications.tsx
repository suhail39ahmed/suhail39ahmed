"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    name: "Snowflake SnowPro Core",
    issuer: "Snowflake",
    period: "11/2025 – 12/2027",
    badge: "❄️",
    color: "var(--cyan)",
    active: true,
  },
  {
    name: "Databricks Data Engineer Associate",
    issuer: "Databricks",
    period: "12/2024 – 12/2026",
    badge: "⚡",
    color: "var(--magenta)",
    active: true,
  },
  {
    name: "Microsoft DevOps Engineer Expert",
    issuer: "Microsoft",
    period: "12/2025 – 12/2026",
    badge: "🔷",
    color: "var(--cyan)",
    active: true,
  },
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    period: "05/2023 – 05/2026",
    badge: "🔶",
    color: "var(--yellow)",
    active: true,
  },
  {
    name: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    period: "05/2023 – 05/2026",
    badge: "☁️",
    color: "var(--cyan)",
    active: true,
  },
  {
    name: "HashiCorp Terraform Associate 003",
    issuer: "HashiCorp",
    period: "Active",
    badge: "🔷",
    color: "var(--magenta)",
    active: true,
  },
  {
    name: "AZ-305: Azure Infrastructure Design",
    issuer: "Microsoft",
    period: "Active",
    badge: "🏗️",
    color: "var(--green)",
    active: true,
  },
  {
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    period: "Active",
    badge: "⚙️",
    color: "var(--cyan)",
    active: true,
  },
  {
    name: "Microsoft Security & Compliance Fundamentals",
    issuer: "Microsoft",
    period: "Active",
    badge: "🛡️",
    color: "var(--green)",
    active: true,
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    period: "Active",
    badge: "🤖",
    color: "var(--cyan)",
    active: true,
  },
  {
    name: "OCI 2023 Architect Associate",
    issuer: "Oracle",
    period: "Active",
    badge: "🔴",
    color: "var(--magenta)",
    active: true,
  },
  {
    name: "VMware VCP Cloud Mgmt & Automation 2019",
    issuer: "VMware",
    period: "Double VCP",
    badge: "🖥️",
    color: "var(--green)",
    active: true,
  },
  {
    name: "SAFe 4 Practitioner",
    issuer: "Scaled Agile",
    period: "Active",
    badge: "🔁",
    color: "var(--gray-light)",
    active: true,
  },
];

const awards = [
  { title: "Metaverse Event (Looking Glass)",      year: "06/2023", icon: "🏆" },
  { title: "AWS Hackathon / SEA Ignite Program",   year: "2023",    icon: "🚀" },
  { title: "Exceptional Performer — Accenture",    year: "03/2021 – 04/2022", icon: "⭐" },
  { title: "Key Contributor — SAP Migration",      year: "08/2020 – 02/2021", icon: "🎖️" },
];

export default function Certifications() {
  return (
    <section id="certs" className="relative py-24">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--cyan), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-mono text-sm uppercase tracking-widest mb-3" style={{ color: "var(--cyan)" }}>
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--white)", fontFamily: "var(--font-display)" }}>
            Certifications
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--gray-light)", lineHeight: 1.6 }}>
            {certs.length} active certifications across cloud, data, and security.
          </p>
          <div className="w-24 h-0.5 mx-auto mt-6" style={{ background: "linear-gradient(90deg, var(--cyan), var(--magenta))" }} />
        </div>

        {/* Certs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="holo-badge p-4 flex flex-col"
            >
              <div className="text-3xl mb-3">{cert.badge}</div>
              <div
                className="font-mono text-xs font-bold mb-1 leading-tight"
                style={{ color: cert.color }}
              >
                {cert.name}
              </div>
              <div className="font-mono text-xs mb-2" style={{ color: "var(--gray-light)" }}>
                {cert.issuer}
              </div>
              <div className="mt-auto">
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{
                    background: `${cert.color}10`,
                    border: `1px solid ${cert.color}30`,
                    color: cert.color,
                  }}
                >
                  {cert.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <h3
            className="font-display text-lg font-bold text-center mb-8 tracking-wider"
            style={{ color: "var(--yellow)" }}
          >
            AWARDS &amp; HONORS
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="cyber-card p-4 text-center"
                style={{ borderColor: "rgba(255,215,0,0.2)" }}
              >
                <div className="text-2xl mb-2">{a.icon}</div>
                <div className="font-mono text-xs font-bold mb-1" style={{ color: "var(--yellow)" }}>
                  {a.title}
                </div>
                <div className="font-mono text-xs" style={{ color: "var(--gray-light)" }}>
                  {a.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
