"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Download, ExternalLink } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "suhail39ahmed@gmail.com",
    href: "mailto:suhail39ahmed@gmail.com",
    color: "var(--cyan)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/suhail39ahmed",
    href: "https://linkedin.com/in/suhail39ahmed",
    color: "var(--green)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/suhail39ahmed",
    href: "https://github.com/suhail39ahmed",
    color: "var(--magenta)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Singapore, Singapore",
    href: "#",
    color: "var(--cyan)",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 circuit-bg">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--cyan), transparent)" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs mb-3" style={{ color: "var(--cyan)" }}>
            <span style={{ color: "var(--magenta)" }}>07.</span> CONTACT
          </p>
          <h2 className="section-title text-neon-cyan mb-4">GET IN TOUCH</h2>
          <div className="w-24 h-0.5 mx-auto mb-6" style={{ background: "linear-gradient(90deg, var(--cyan), var(--green))" }} />
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#a0aec0" }}>
            Open to senior DevOps/DevSecOps roles, cloud architecture consulting,
            and speaking opportunities. Based in Singapore, available globally.
          </p>
        </motion.div>

        {/* Terminal message box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div
            className="rounded-lg overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(0,245,255,0.2)",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: "1px solid rgba(0,245,255,0.1)", background: "rgba(0,0,0,0.3)" }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
              <span className="font-mono text-xs ml-2" style={{ color: "var(--gray-light)" }}>
                send-message.sh
              </span>
            </div>
            <div className="p-6 text-left">
              <div className="space-y-2 font-mono text-sm">
                <div style={{ color: "var(--green)" }}>
                  $ echo "Hello Suhail,"
                </div>
                <div style={{ color: "var(--gray-light)" }}>
                  &gt; I'm reaching out regarding a DevSecOps opportunity...
                </div>
                <div style={{ color: "var(--cyan)" }}>
                  $ mail -s "Opportunity" suhail39ahmed@gmail.com
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <a
                    href="mailto:suhail39ahmed@gmail.com"
                    className="btn-cyber text-xs py-2 px-4"
                  >
                    <Mail size={14} />
                    <span>Send Email</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="btn-cyber btn-cyber-magenta text-xs py-2 px-4"
                  >
                    <Download size={14} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="cyber-card p-4 flex flex-col items-center gap-2 text-center group"
            >
              <link.icon size={20} style={{ color: link.color }} className="group-hover:scale-110 transition-transform" />
              <div className="font-mono text-xs font-bold" style={{ color: link.color }}>
                {link.label}
              </div>
              <div className="font-mono text-xs break-all" style={{ color: "var(--gray-light)" }}>
                {link.value}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8"
          style={{ borderTop: "1px solid rgba(0,245,255,0.1)" }}
        >
          <div className="font-mono text-xs mb-4" style={{ color: "var(--gray-light)" }}>
            // beyond_the_terminal
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "📚 Self-help & Seminars",
              "✈️ Travel",
              "⚽ Sports",
              "🤝 Volunteer Work",
              "🍱 Food Banks",
              "🎓 Scholarship Fundraising",
              "🌱 Environmental Clean-ups",
            ].map((interest) => (
              <span
                key={interest}
                className="font-mono text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(0,245,255,0.04)",
                  border: "1px solid rgba(0,245,255,0.12)",
                  color: "var(--gray-light)",
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="font-mono text-xs" style={{ color: "var(--gray-light)" }}>
            <span style={{ color: "var(--cyan)" }}>~/</span>
            suhail39ahmed{" "}
            <span style={{ color: "var(--green)" }}>·</span>{" "}
            Engineered in Singapore{" "}
            <span style={{ color: "var(--green)" }}>·</span>{" "}
            Next.js 15 + Tailwind + Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
