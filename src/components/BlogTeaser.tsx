"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blog";

export default function BlogTeaser({ posts }: { posts: BlogPost[] }) {
  const recent = posts.slice(0, 3);

  if (recent.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">
              Blog
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Latest Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-azure hover:gap-3 transition-all"
          >
            All posts <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {recent.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="h-full p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-azure/30 hover:shadow-lg hover:shadow-azure/5 transition-all">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-0.5 rounded-full bg-azure/8 text-azure dark:bg-azure/10 dark:text-azure-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-azure transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
                      <Clock size={12} /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-azure group-hover:gap-2 transition-all">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-azure"
          >
            All posts <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
