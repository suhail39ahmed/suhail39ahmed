"use client";

import { motion } from "framer-motion";
import { Cloud, Shield, GitBranch, Server, Database, Eye } from "lucide-react";

const pillars = [
  { icon: Cloud,     label: "Cloud Architecture",  desc: "Azure & AWS enterprise-scale Hub-and-Spoke designs" },
  { icon: Shield,    label: "DevSecOps",            desc: "Shift-left security, guardrails, compliance automation" },
  { icon: GitBranch, label: "CI/CD Pipelines",      desc: "Azure DevOps, GitLab CI — automated delivery at scale" },
  { icon: Server,    label: "IaC & Automation",     desc: "Terraform, Bicep, CloudFormation, Ansible Tower" },
  { icon: Database,  label: "Data Platforms",       desc: "Snowflake, Databricks, ETL optimization & integration" },
  { icon: Eye,       label: "Observability",        desc: "Prometheus, Grafana — full-stack monitoring" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--cyan), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs mb-3" style={{ color: "var(--cyan)" }}>
            <span style={{ color: "var(--magenta)" }}>01.</span> ABOUT_ME
          </p>
          <h2 className="section-title text-neon-cyan mb-4">
            WHO I AM
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, var(--cyan), var(--green))" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Terminal-style profile */}
            <div
              className="rounded-lg overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(0,245,255,0.2)",
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid rgba(0,245,255,0.1)", background: "rgba(0,0,0,0.3)" }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                <span className="font-mono text-xs ml-2" style={{ color: "var(--gray-light)" }}>
                  whoami.sh
                </span>
              </div>

              {/* Profile content */}
              <div className="p-6">
                {/* Photo placeholder */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="flex-shrink-0 w-20 h-20 rounded-lg flex items-center justify-center font-display text-2xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,245,255,0.1), rgba(57,255,20,0.1))",
                      border: "2px solid rgba(0,245,255,0.4)",
                      color: "var(--cyan)",
                    }}
                  >
                    SA
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold" style={{ color: "var(--white)" }}>
                      Suhail Ahmed Inayathulla
                    </div>
                    <div className="font-mono text-sm mb-1" style={{ color: "var(--cyan)" }}>
                      Senior DevOps Engineer
                    </div>
                    <div className="font-mono text-xs" style={{ color: "var(--green)" }}>
                      📍 Singapore, Singapore
                    </div>
                  </div>
                </div>

                {/* Terminal output style */}
                <div className="space-y-2 font-mono text-sm">
                  {[
                    { key: "experience",   val: "9+ years global" },
                    { key: "speciality",   val: "DevSecOps + Cloud Architecture" },
                    { key: "platforms",    val: "Azure ★★★★★  AWS ★★★★☆" },
                    { key: "certs",        val: "14 active certifications" },
                    { key: "regions",      val: "Singapore + GCC Enterprise" },
                    { key: "email",        val: "suhail39ahmed@gmail.com" },
                  ].map((item) => (
                    <div key={item.key} className="flex items-start gap-2">
                      <span style={{ color: "var(--green)" }}>›</span>
                      <span style={{ color: "var(--gray-light)" }}>{item.key}:</span>
                      <span style={{ color: "var(--white)" }}>{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(0,245,255,0.1)" }}>
                  <div className="font-mono text-xs mb-2" style={{ color: "var(--cyan)" }}>LANGUAGES</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { lang: "English", level: "Full Professional" },
                      { lang: "Hindi",   level: "Native" },
                      { lang: "Kannada", level: "Professional" },
                    ].map((l) => (
                      <span
                        key={l.lang}
                        className="font-mono text-xs px-2 py-1 rounded"
                        style={{
                          background: "rgba(0,245,255,0.05)",
                          border: "1px solid rgba(0,245,255,0.2)",
                          color: "var(--white)",
                        }}
                      >
                        {l.lang} · <span style={{ color: "var(--cyan)" }}>{l.level}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Summary + pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#a0aec0" }}>
                Experienced <span style={{ color: "var(--cyan)" }}>DevSecOps Engineer</span> with{" "}
                <span style={{ color: "var(--green)" }}>9+ years of global experience</span> designing, securing,
                and operating enterprise-scale cloud platforms across{" "}
                <span style={{ color: "var(--magenta)" }}>Azure and AWS</span>, with strong exposure to Singapore
                and GCC enterprise environments.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#a0aec0" }}>
                Expert in <span style={{ color: "var(--cyan)" }}>Hub-and-Spoke network architecture</span>, cloud
                security, containerized platforms (Kubernetes, Docker), and observability using Prometheus. Proven
                track record in DevSecOps automation, CI/CD pipelines, and Infrastructure as Code (Terraform,
                Bicep, CloudFormation) to deliver scalable, compliant, and resilient cloud solutions.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#a0aec0" }}>
                Currently at <span style={{ color: "var(--green)" }}>Revantage Asia</span>, driving enterprise
                cloud-native transformations with integrations spanning{" "}
                <span style={{ color: "var(--magenta)" }}>Snowflake, Databricks</span>, and multi-cloud platforms.
              </p>
            </div>

            {/* Pillar grid */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="cyber-card p-3"
                >
                  <p.icon
                    size={18}
                    className="mb-2"
                    style={{ color: i % 3 === 0 ? "var(--cyan)" : i % 3 === 1 ? "var(--green)" : "var(--magenta)" }}
                  />
                  <div className="font-mono text-xs font-bold mb-1" style={{ color: "var(--white)" }}>
                    {p.label}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--gray-light)" }}>
                    {p.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
