"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">
            Blog
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Articles &amp; Insights
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Deep dives on Azure DevOps, Agentic AI, DevSecOps, and cloud architecture.
          </p>
        </motion.div>

        <div className="space-y-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-azure/30 hover:shadow-lg hover:shadow-azure/5 transition-all">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-azure/8 text-azure dark:bg-azure/10 dark:text-azure-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-azure transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-medium text-azure group-hover:gap-2 transition-all">
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
