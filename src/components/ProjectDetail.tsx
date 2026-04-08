"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-azure transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Hero image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-medium px-3 py-1 rounded-full bg-azure/8 text-azure dark:bg-azure/10 dark:text-azure-light"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              <Github size={16} /> View on GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-azure hover:text-azure transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-azure hover:text-azure transition-colors"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-azure text-white rounded-lg hover:bg-azure-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
