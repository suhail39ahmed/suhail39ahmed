"use client";

import { Download, ChevronDown, MapPin, Mail } from "lucide-react";
import dynamic from "next/dynamic";

const PipelineSVG = dynamic(() => import("./PipelineSVG"), { ssr: true });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden circuit-bg"
      style={{ paddingTop: "80px" }}
    >
      {/* Light CSS-only gradient (no canvas) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,245,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              background: "rgba(57,255,20,0.08)",
              border: "1px solid rgba(57,255,20,0.3)",
              borderRadius: "4px",
              padding: "4px 12px",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--green)" }} />
            <span className="font-mono text-xs" style={{ color: "var(--green)" }}>
              AVAILABLE_FOR_WORK :: Singapore, SG
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-2 leading-tight" style={{ letterSpacing: "0.02em" }}>
            <span style={{ color: "var(--white)" }}>SUHAIL </span>
            <span className="text-neon-cyan">AHMED</span>
          </h1>
          <h2 className="font-display text-lg md:text-xl font-bold mb-4" style={{ color: "var(--gray-light)", letterSpacing: "0.15em" }}>
            INAYATHULLA
          </h2>

          <p className="font-mono text-lg md:text-xl mb-4" style={{ color: "var(--cyan)" }}>
            <span style={{ color: "var(--magenta)" }}>$ </span>
            Senior DevOps Engineer
            <span className="cursor-blink" style={{ color: "var(--green)" }}>|</span>
          </p>

          <p className="font-display text-sm md:text-base font-semibold mb-2 tracking-widest uppercase" style={{ color: "var(--gray-light)" }}>
            Engineering Resilient Cloud Futures
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 flex-wrap">
            {["DevSecOps", "IaC", "Observability", "Kubernetes", "Azure", "AWS"].map((tag, i) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-0.5"
                style={{
                  color: i % 3 === 0 ? "var(--cyan)" : i % 3 === 1 ? "var(--green)" : "var(--magenta)",
                  border: `1px solid ${i % 3 === 0 ? "rgba(0,245,255,0.3)" : i % 3 === 1 ? "rgba(57,255,20,0.3)" : "rgba(255,45,120,0.3)"}`,
                  borderRadius: "3px",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 mt-4">
            <span className="flex items-center gap-1 font-mono text-xs" style={{ color: "var(--gray-light)" }}>
              <MapPin size={12} style={{ color: "var(--cyan)" }} /> Singapore, SG
            </span>
            <span className="flex items-center gap-1 font-mono text-xs" style={{ color: "var(--gray-light)" }}>
              <Mail size={12} style={{ color: "var(--cyan)" }} /> suhail39ahmed@gmail.com
            </span>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
            <a href="/#projects" className="btn-cyber">
              <span>View Projects</span>
            </a>
            <a href="/resume.pdf" download className="btn-cyber btn-cyber-magenta">
              <Download size={14} />
              <span>resume.pdf</span>
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 mt-10">
            {[
              { value: "9+", label: "Years XP" },
              { value: "14+", label: "Certs" },
              { value: "1000+", label: "VMs Managed" },
              { value: "2", label: "Continents" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-bold text-neon-cyan">{s.value}</div>
                <div className="font-mono text-xs" style={{ color: "var(--gray-light)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <div
            className="relative p-4 rounded-lg"
            style={{
              background: "rgba(10,10,18,0.8)",
              border: "1px solid rgba(0,245,255,0.15)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: "1px solid rgba(0,245,255,0.1)" }}>
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
              <span className="font-mono text-xs ml-2" style={{ color: "var(--gray-light)" }}>
                cicd-pipeline — DevSecOps Flow
              </span>
            </div>
            <PipelineSVG />
            <div className="mt-3 font-mono text-xs" style={{ color: "var(--green)" }}>
              ✓ Pipeline healthy · 99.7% success
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="/#about">
          <ChevronDown size={24} style={{ color: "var(--cyan)", opacity: 0.6 }} />
        </a>
      </div>
    </section>
  );
}
