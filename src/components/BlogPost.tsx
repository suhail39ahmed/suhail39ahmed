"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import type { BlogPost as BlogPostType } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-azure transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-azure/8 text-azure dark:bg-azure/10 dark:text-azure-light"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
            <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-500">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-500">
              <Clock size={14} />
              {post.readTime} read
            </span>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose-blog"
        >
          <MDXRemote source={post.content} />
        </motion.article>

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-azure hover:text-azure transition-colors"
          >
            <ArrowLeft size={14} />
            All Posts
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
