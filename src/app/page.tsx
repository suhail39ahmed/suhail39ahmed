import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import BlogTeaser from "@/components/BlogTeaser";
import Contact from "@/components/Contact";
import { getAllPosts } from "@/lib/blog";

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
