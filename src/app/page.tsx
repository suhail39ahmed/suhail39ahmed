import Hero from "@/components/Hero";
import BlogTeaser from "@/components/BlogTeaser";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { FadeInSection } from "@/components/FadeIn";

const certifications = [
  { name: "Microsoft DevOps Engineer Expert", issuer: "Microsoft" },
  { name: "Azure Solutions Architect Expert", issuer: "Microsoft" },
  { name: "AWS Solutions Architect Associate", issuer: "AWS" },
  { name: "HashiCorp Terraform Associate 003", issuer: "HashiCorp" },
  { name: "Databricks Data Engineer Associate", issuer: "Databricks" },
  { name: "Snowflake SnowPro Core", issuer: "Snowflake" },
  { name: "AZ-305 Infrastructure Design", issuer: "Microsoft" },
  { name: "Azure Administrator Associate", issuer: "Microsoft" },
  { name: "Azure AI Fundamentals", issuer: "Microsoft" },
  { name: "Security & Compliance Fundamentals", issuer: "Microsoft" },
  { name: "OCI 2023 Architect Associate", issuer: "Oracle" },
  { name: "VMware VCP Cloud Mgmt & Automation", issuer: "VMware" },
  { name: "SAFe 4 Practitioner", issuer: "Scaled Agile" },
];

export default function Home() {
  const featured = getFeaturedProjects().slice(0, 3);
  const posts = getAllPosts();

  return (
    <>
      <Hero />

      {/* About Teaser */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Engineering the Future of{" "}
                <span className="text-azure">Cloud &amp; Data</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Senior DevOps Engineer at <strong className="text-slate-800 dark:text-slate-200">Revantage Asia</strong> in Singapore,
                with 10+ years across <strong className="text-slate-800 dark:text-slate-200">Accenture</strong> and{" "}
                <strong className="text-slate-800 dark:text-slate-200">Cognizant</strong> — architecting, implementing,
                and securing enterprise cloud &amp; data platforms on Azure and AWS.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                I bridge cloud architecture, data engineering, and DevSecOps — with a focus
                on AI enablement using Cursor, Claude, and MCP Agents to automate everything
                from infrastructure provisioning to self-healing pipelines and intelligent data workflows.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-azure font-medium hover:gap-3 transition-all"
              >
                Full career &amp; certifications <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">
                Certifications
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                13+ Industry Certifications
              </h2>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-azure/30 transition-colors"
                >
                  <Award size={16} className="text-azure flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {cert.name}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-500 mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">
                  Projects
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  Featured Work
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-azure hover:gap-3 transition-all"
              >
                View all projects <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-azure"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <BlogTeaser posts={posts} />

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-azure to-azure-dark p-10 md:p-16 text-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let&rsquo;s Build Something Amazing
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                  Open to roles in Singapore, Middle East &amp; Australia.
                  Looking for a Cloud &amp; Data Architect who builds with AI-first thinking?
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-azure font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Get in Touch <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://github.com/suhail39ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
