import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { FadeInSection } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About — Suhail Ahmed Inayathulla",
  description:
    "Cloud & Data Architect with 10+ years experience across Revantage, Accenture & Cognizant. Architecting, implementing, and securing enterprise platforms with AI enablement.",
};

const career = [
  {
    company: "Revantage Asia",
    role: "Senior DevOps Engineer",
    period: "May 2024 – Present",
    location: "Singapore",
    highlights: [
      "Designed enterprise-grade Azure & AWS architectures (Hub-and-Spoke) with Snowflake/Databricks integrations",
      "Optimized ETL pipelines reducing processing time by 40%",
      "Cloud security controls, real-time alerts, compliance guardrails (Azure Policy, AWS Config)",
      "Prometheus/Grafana observability stack covering 200+ cloud resources with custom SLO dashboards",
      "Containerized workloads on Kubernetes, Docker, AWS ECS/Fargate — 99.9% uptime",
      "CI/CD with Azure DevOps & GitLab CI; IaC with Terraform/Bicep/CloudFormation",
    ],
    tech: ["Azure", "AWS", "Kubernetes", "Terraform", "Bicep", "Snowflake", "Databricks", "Prometheus", "GitLab CI"],
  },
  {
    company: "Accenture",
    role: "Cloud/DevOps Consultant",
    period: "May 2022 – May 2024",
    location: "Singapore",
    highlights: [
      "Led legacy-to-cloud migrations for enterprise clients (Azure/AWS, Terraform, GitLab CI/CD)",
      "Built secure cloud landing zones with automated governance",
      "Application discovery and dependency mapping for 50+ legacy systems",
      "Zero data loss migrations; ISO 27001 compliance",
    ],
    tech: ["Azure", "AWS", "Terraform", "GitLab CI", "CloudFormation", "Azure DevOps"],
  },
  {
    company: "Accenture",
    role: "Cloud/DevOps Engineer",
    period: "Aug 2020 – May 2022",
    location: "Bangalore, India",
    highlights: [
      "IaaS solutions on AWS/Azure using GitLab CI/CD and Terraform",
      "RBAC and privileged identity management using Ansible Tower",
      "90% performance improvement benchmark; 60% MTTR reduction",
      "Compliance/security remediation across 100+ cloud accounts",
    ],
    tech: ["AWS", "Azure", "GitLab CI", "Terraform", "Ansible Tower", "Python", "Shell"],
  },
  {
    company: "Cognizant",
    role: "Technical Lead",
    period: "Apr 2016 – Jul 2020",
    location: "Bangalore, India",
    highlights: [
      "Automated cloud management with vRealize Automation/Orchestrator (JavaScript)",
      "Managed VMware ESXi/vCenter infrastructure with 1000+ VMs (HA, DRS, live migrations)",
      "Integrated vRO with CouchDB for workflow persistence",
      "Mentored 10-member team achieving 90% skill improvement",
    ],
    tech: ["VMware ESXi", "vCenter", "vRealize Automation", "vRO", "JavaScript", "CouchDB"],
  },
];

const certifications = [
  { name: "Snowflake SnowPro Core", issuer: "Snowflake", validity: "Nov 2025 – Dec 2027" },
  { name: "Databricks Data Engineer Associate", issuer: "Databricks", validity: "Dec 2024 – Dec 2026" },
  { name: "Microsoft DevOps Engineer Expert", issuer: "Microsoft", validity: "Dec 2025 – Dec 2026" },
  { name: "AWS Solutions Architect Associate", issuer: "AWS", validity: "May 2023 – May 2026" },
  { name: "Azure Solutions Architect Expert", issuer: "Microsoft", validity: "May 2023 – May 2026" },
  { name: "HashiCorp Terraform Associate 003", issuer: "HashiCorp", validity: "Active" },
  { name: "AZ-305: Azure Infrastructure Design", issuer: "Microsoft", validity: "Active" },
  { name: "Azure Administrator Associate", issuer: "Microsoft", validity: "Active" },
  { name: "Security & Compliance Fundamentals", issuer: "Microsoft", validity: "Active" },
  { name: "Azure AI Fundamentals", issuer: "Microsoft", validity: "Active" },
  { name: "OCI 2023 Architect Associate", issuer: "Oracle", validity: "Active" },
  { name: "VMware VCP Cloud Mgmt & Automation 2019", issuer: "VMware", validity: "Double VCP" },
  { name: "SAFe 4 Practitioner", issuer: "Scaled Agile", validity: "Active" },
];

const awards = [
  { title: "Metaverse Event (Looking Glass)", date: "Jun 2023" },
  { title: "AWS Hackathon / SEA Ignite Program", date: "2023" },
  { title: "Exceptional Performer — Accenture", date: "Mar 2021 – Apr 2022" },
  { title: "Key Contributor — SAP Migration", date: "Aug 2020 – Feb 2021" },
];

const skills = [
  { category: "Cloud Platforms", items: ["Azure", "AWS", "VMware Cloud"] },
  { category: "Agentic AI & LLMs", items: ["MCP Agents", "Claude", "Cursor", "Azure OpenAI", "agents.md"] },
  { category: "Infrastructure as Code", items: ["Terraform", "Bicep", "CloudFormation", "Ansible Tower"] },
  { category: "DevSecOps", items: ["Trivy", "Snyk", "OPA", "Defender for Cloud", "Azure Policy"] },
  { category: "Containers", items: ["Kubernetes", "Docker", "Helm", "AKS", "EKS", "ECS Fargate"] },
  { category: "CI/CD", items: ["Azure DevOps", "GitLab CI", "GitHub Actions"] },
  { category: "Data Platforms", items: ["Databricks", "Snowflake", "Power BI", "Sigma", "Delta Lake"] },
  { category: "Observability", items: ["Prometheus", "Grafana", "Azure Monitor", "Loki", "Tempo"] },
  { category: "Languages", items: ["Python", "PowerShell", "Bash/Shell", "Azure CLI", "JavaScript"] },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <FadeInSection>
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-azure/20 to-sky-500/20 rounded-full blur-2xl" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                <Image src="/images/profile.jpg" alt="Suhail Ahmed" fill className="object-cover" priority />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div>
              <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-3">About Me</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Suhail Ahmed Inayathulla
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Cloud &amp; Data Architect at <strong className="text-slate-800 dark:text-slate-200">Revantage Asia</strong> in Singapore,
                with 10+ years of global experience architecting, implementing, and securing
                enterprise cloud &amp; data platforms across Azure and AWS — spanning Singapore, India, and GCC enterprise environments.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I drive end-to-end cloud-native transformations — from architecture and IaC to
                data platform integrations with Snowflake, Databricks, and Delta Lake. My current
                passion is AI enablement: using Cursor, Claude, and MCP Agents to automate
                DevSecOps, self-heal pipelines, and build intelligent data workflows that
                make engineering teams 10x more productive.
              </p>
              <div className="flex flex-wrap gap-3 mt-4 text-sm text-slate-500 dark:text-slate-500">
                <span>English · Full Professional</span>
                <span>&middot;</span>
                <span>Hindi · Native</span>
                <span>&middot;</span>
                <span>Kannada · Professional</span>
              </div>
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
                { value: "10+", label: "Years Experience" },
                { value: "13+", label: "Cloud Certifications" },
                { value: "100+", label: "Workflows & Pipelines Automated" },
                { value: "85%", label: "Ops Overhead Reduced" },
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

      {/* Career Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">Career</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Experience</h2>
            </div>
          </FadeInSection>

          <div className="space-y-8">
            {career.map((job, i) => (
              <FadeInSection key={i}>
                <div className="p-6 md:p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-azure/10 text-azure flex-shrink-0 mt-0.5">
                      <Briefcase size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
                      <p className="text-azure font-medium">{job.company}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">{job.period} &middot; {job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4 ml-12">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex gap-2">
                        <span className="text-azure mt-1 flex-shrink-0">&bull;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 ml-12">
                    {job.tech.map((t) => (
                      <span key={t} className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}

            {/* Education */}
            <FadeInSection>
              <div className="p-6 md:p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-azure/10 text-azure flex-shrink-0 mt-0.5">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">B.E. — Computer Science</h3>
                    <p className="text-azure font-medium">HKBK College of Engineering, Bangalore</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">2011 – 2015 &middot; GPA 7.1</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">Certifications</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">13+ Cloud Certifications</h2>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <Award size={18} className="text-azure flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{cert.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">{cert.issuer} &middot; {cert.validity}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">Recognition</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Awards &amp; Honors</h2>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="grid sm:grid-cols-2 gap-4">
              {awards.map((a) => (
                <div key={a.title} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <Trophy size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{a.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">{a.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Skills &amp; Technologies</h2>
            </div>
          </FadeInSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group) => (
              <FadeInSection key={group.category}>
                <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 h-full">
                  <h3 className="text-sm font-semibold text-azure uppercase tracking-wider mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
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
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Interested in working together?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Open to Cloud Architecture, Data Engineering, DevSecOps, and AI Enablement roles in Singapore, Middle East &amp; Australia.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-azure text-white font-medium rounded-lg hover:bg-azure-dark transition-colors">
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-azure hover:text-azure transition-colors">
                View Projects
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
