import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/BlogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Suhail Ahmed",
  description:
    "Technical articles on Azure DevOps, Agentic AI, DevSecOps, and cloud architecture.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}
