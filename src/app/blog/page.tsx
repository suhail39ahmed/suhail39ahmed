import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/BlogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Suhail Ahmed — DevOps Engineering Insights",
  description: "Technical deep-dives on DevSecOps, Terraform, Kubernetes, Azure, and cloud architecture from 9+ years in the field.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}
