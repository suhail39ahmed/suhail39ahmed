"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#about",    label: "about" },
  { href: "/#timeline", label: "experience" },
  { href: "/#skills",   label: "skills" },
  { href: "/#certs",    label: "certs" },
  { href: "/#projects", label: "projects" },
  { href: "/blog",      label: "blog" },
  { href: "/#contact",  label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5, 5, 8, 0.95)"
          : "rgba(5, 5, 8, 0.6)",
        borderBottom: scrolled ? "1px solid rgba(0,245,255,0.15)" : "1px solid transparent",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal size={16} style={{ color: "var(--cyan)" }} />
          <span
            className="font-mono text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--cyan)" }}
          >
            <span style={{ color: "var(--gray-light)" }}>~/</span>suhail
            <span className="cursor-blink" style={{ color: "var(--green)" }}>_</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              <span style={{ color: "var(--cyan)", opacity: 0.5 }}>./</span>
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="btn-cyber text-xs py-2 px-4"
            style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}
          >
            <span>resume.pdf</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          style={{ color: "var(--cyan)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(5,5,8,0.98)",
              borderBottom: "1px solid rgba(0,245,255,0.15)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm"
                  onClick={() => setOpen(false)}
                >
                  <span style={{ color: "var(--cyan)", opacity: 0.5 }}>./</span>
                  {link.label}
                </Link>
              ))}
              <a href="/resume.pdf" download className="btn-cyber text-xs py-2 px-4 w-fit">
                <span>resume.pdf</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
