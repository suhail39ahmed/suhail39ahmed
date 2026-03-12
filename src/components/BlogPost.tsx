"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import type { BlogPost as BlogPostType } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <div className="min-h-screen pt-20" style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <div
        className="border-b"
        style={{ background: "var(--bg-card)", borderColor: "rgba(0,245,255,0.15)" }}
      >
        <div className="max-w-3xl mx-auto px-6 py-10">
          <Link
            href="/blog"
            className="flex items-center gap-2 font-mono text-xs mb-6"
            style={{ color: "var(--gray-light)" }}
          >
            <ArrowLeft size={14} /> cd ../blog
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{
                  background: "rgba(0,245,255,0.06)",
                  border: "1px solid rgba(0,245,255,0.2)",
                  color: "var(--cyan)",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl md:text-3xl font-black mb-4"
            style={{ color: "var(--white)", lineHeight: 1.3 }}
          >
            {post.title}
          </motion.h1>

          <div className="flex items-center gap-4">
            <span
              className="flex items-center gap-1 font-mono text-xs"
              style={{ color: "var(--gray-light)" }}
            >
              <Calendar size={11} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span
              className="flex items-center gap-1 font-mono text-xs"
              style={{ color: "var(--gray-light)" }}
            >
              <Clock size={11} />
              {post.readTime} read
            </span>
            <span className="font-mono text-xs" style={{ color: "var(--green)" }}>
              Suhail Ahmed Inayathulla
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose-cyber"
        >
          <MDXRemote source={post.content} />
        </motion.article>

        {/* Footer */}
        <div
          className="mt-12 pt-8 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(0,245,255,0.1)" }}
        >
          <Link href="/blog" className="btn-cyber text-xs py-2 px-4">
            <ArrowLeft size={12} />
            <span>All Posts</span>
          </Link>
          <Link href="/#contact" className="btn-cyber btn-cyber-magenta text-xs py-2 px-4">
            <span>Get in Touch</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
