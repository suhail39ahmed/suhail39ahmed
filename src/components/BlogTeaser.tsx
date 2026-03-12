"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogTeaser({ posts }: { posts: BlogPost[] }) {
  const recent = posts.slice(0, 3);

  return (
    <section id="blog-section" className="relative py-24">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--magenta), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="font-mono text-xs mb-3" style={{ color: "var(--magenta)" }}>
              <span style={{ color: "var(--magenta)" }}>06.</span> BLOG
            </p>
            <h2 className="section-title text-neon-magenta">ENGINEERING NOTES</h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 font-mono text-xs transition-all hover:gap-3"
            style={{ color: "var(--cyan)" }}
          >
            All posts <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {recent.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <div className="cyber-card h-full p-5 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(255,45,120,0.08)",
                          border: "1px solid rgba(255,45,120,0.2)",
                          color: "var(--magenta)",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="font-display text-base font-bold mb-3 flex-1 group-hover:text-neon-magenta transition-colors"
                    style={{ color: "var(--white)", lineHeight: 1.4 }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--gray-light)" }}>
                    {post.excerpt.slice(0, 120)}...
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs flex items-center gap-1" style={{ color: "var(--gray-light)" }}>
                        <Clock size={10} /> {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 font-mono text-xs group-hover:gap-2 transition-all" style={{ color: "var(--magenta)" }}>
                      Read <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
