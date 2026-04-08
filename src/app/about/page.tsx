import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInSection } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About — Suhail Ahmed",
  description:
    "Azure DevOps Engineer & Agentic AI Builder with 9+ years of experience designing production-grade cloud platforms.",
};

const skills = [
  { category: "Cloud & Platform", items: ["Azure", "AWS", "Azure DevOps", "GitHub Actions"] },
  { category: "Agentic AI & LLMs", items: ["MCP Agents", "Claude", "Cursor", "Azure OpenAI", "agents.md"] },
  { category: "Infrastructure as Code", items: ["Terraform", "Bicep", "CloudFormation", "Ansible"] },
  { category: "DevSecOps & Security", items: ["Trivy", "Snyk", "OPA", "Defender for Cloud", "Azure Policy"] },
  { category: "Containers & Orchestration", items: ["Kubernetes", "Docker", "Helm", "AKS", "EKS"] },
  { category: "Observability", items: ["Prometheus", "Grafana", "Azure Monitor", "Loki", "Tempo"] },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <FadeInSection>
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-azure/20 to-sky-500/20 rounded-full blur-2xl" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Suhail Ahmed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div>
              <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-3">
                About Me
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Suhail Ahmed
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I&rsquo;m a DevSecOps Engineer and Agentic AI Builder based in Sydney, Australia,
                with 9+ years of global experience designing, securing, and operating
                enterprise-scale cloud platforms across Azure and AWS.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                My passion is at the intersection of Azure DevOps and autonomous AI agents.
                I build systems where AI agents monitor, detect, and auto-remediate pipeline
                issues — reducing manual intervention and accelerating secure delivery.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Using Cursor, Claude, and MCP multi-agent orchestration, I create production-grade
                agentic AI frameworks that transform how teams ship software on Azure. From
                self-healing pipelines to AI co-pilots that write Infrastructure as Code, I&rsquo;m
                building the future of DevSecOps.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "9+", label: "Years Experience" },
                { value: "14+", label: "Cloud Certifications" },
                { value: "85%", label: "MTTR Reduction" },
                { value: "50+", label: "Azure Policy Rules" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-azure mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">
                Expertise
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Skills &amp; Technologies
              </h2>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <FadeInSection key={group.category}>
                <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 h-full">
                  <h3 className="text-sm font-semibold text-azure uppercase tracking-wider mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Interested in working together?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              I&rsquo;m open to Azure DevOps, DevSecOps, and Agentic AI opportunities.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-azure text-white font-medium rounded-lg hover:bg-azure-dark transition-colors"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-azure hover:text-azure transition-colors"
              >
                View Projects
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
