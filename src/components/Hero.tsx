"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const certs = [
  "Microsoft DevOps Engineer Expert",
  "Azure Solutions Architect Expert",
  "AWS Solutions Architect",
  "HashiCorp Terraform Associate",
  "Databricks Data Engineer",
  "Snowflake SnowPro Core",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-azure/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-azure/10 text-azure text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Singapore &middot; Open to Middle East, SG &amp; Australia
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.1]">
              Hi, I&rsquo;m{" "}
              <span className="text-azure">Suhail</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 max-w-xl leading-relaxed">
              Cloud &amp; Data Architect — Designing, building, and securing enterprise platforms on Azure &amp; AWS with AI-first DevSecOps.
            </p>

            <p className="text-base text-slate-500 dark:text-slate-500 mb-6 max-w-lg leading-relaxed">
              10+ years architecting and implementing enterprise cloud &amp; data platforms at Revantage, Accenture &amp; Cognizant across Singapore, India &amp; GCC. Certified across Azure, AWS, Terraform, Databricks &amp; Snowflake.
            </p>

            {/* Cert badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {certs.map((cert) => (
                <span
                  key={cert}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-azure/8 text-azure/90 dark:bg-azure/10 dark:text-azure-light border border-azure/15"
                >
                  {cert}
                </span>
              ))}
              <span className="text-xs text-slate-400 dark:text-slate-500">+7 more</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10 flex-wrap">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-azure text-white font-medium rounded-lg hover:bg-azure-dark transition-colors"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-azure hover:text-azure transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              {[
                { icon: Github, href: "https://github.com/suhail39ahmed", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/suhail39ahmed", label: "LinkedIn" },
                { icon: Mail, href: "mailto:suhail39ahmed@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-azure hover:bg-azure/5 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-azure/20 to-sky-500/20 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Suhail Ahmed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "13+", label: "Certifications" },
            { value: "4", label: "Companies" },
            { value: "3", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-azure mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
