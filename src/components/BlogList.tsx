"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen pt-20" style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <div
        className="border-b"
        style={{ background: "var(--bg-card)", borderColor: "rgba(0,245,255,0.15)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-10">
          <Link
            href="/#blog-section"
            className="flex items-center gap-2 font-mono text-xs mb-6"
            style={{ color: "var(--gray-light)" }}
          >
            <ArrowLeft size={14} /> cd ~/
          </Link>
          <p className="font-mono text-xs mb-2" style={{ color: "var(--cyan)" }}>
            <span style={{ color: "var(--magenta)" }}>06.</span> BLOG
          </p>
          <h1 className="section-title text-neon-cyan mb-3">ENGINEERING NOTES</h1>
          <p className="font-mono text-sm" style={{ color: "var(--gray-light)" }}>
            Deep-dives on DevSecOps, cloud architecture, Kubernetes, and IaC
            — distilled from 9+ years in production environments.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div
                  className="cyber-card p-6 transition-all duration-300"
                  style={{ borderColor: "rgba(0,245,255,0.1)" }}
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
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

                  <h2
                    className="font-display text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors"
                    style={{ color: "var(--white)" }}
                  >
                    {post.title}
                  </h2>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--gray-light)" }}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className="flex items-center gap-1 font-mono text-xs"
                        style={{ color: "var(--gray-light)" }}
                      >
                        <Calendar size={11} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span
                        className="flex items-center gap-1 font-mono text-xs"
                        style={{ color: "var(--gray-light)" }}
                      >
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>

                    <span
                      className="flex items-center gap-1 font-mono text-xs group-hover:gap-2 transition-all"
                      style={{ color: "var(--cyan)" }}
                    >
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
