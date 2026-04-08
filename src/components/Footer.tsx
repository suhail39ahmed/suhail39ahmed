import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/" className="text-lg font-bold text-slate-900 dark:text-white">
              Suhail<span className="text-azure">.</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
              Azure DevOps Engineer &amp; Agentic AI Builder
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/suhail39ahmed", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/suhail39ahmed", label: "LinkedIn" },
              { icon: Mail, href: "mailto:suhail39ahmed@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-azure hover:bg-azure/5 transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            &copy; {new Date().getFullYear()} Suhail Ahmed. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
