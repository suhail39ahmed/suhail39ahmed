import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { getAllPosts } from "@/lib/blog";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Certifications = dynamic(() => import("@/components/Certifications"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const BlogTeaser = dynamic(() => import("@/components/BlogTeaser"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Certifications />
      <Projects />
      <BlogTeaser posts={posts} />
      <Contact />
    </>
  );
}
