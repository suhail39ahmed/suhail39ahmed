import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { FadeInSection } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact — Suhail Ahmed",
  description: "Get in touch with Suhail Ahmed — Azure DevOps Engineer based in Singapore. Open to roles in Middle East, Singapore & Australia.",
};

const contactLinks = [
  { icon: Mail, label: "Email", value: "suhail39ahmed@gmail.com", href: "mailto:suhail39ahmed@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/suhail39ahmed", href: "https://linkedin.com/in/suhail39ahmed" },
  { icon: Github, label: "GitHub", value: "github.com/suhail39ahmed", href: "https://github.com/suhail39ahmed" },
  { icon: MapPin, label: "Location", value: "Singapore", href: "#" },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <FadeInSection>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-azure uppercase tracking-wider mb-2">Contact</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Let&rsquo;s Connect
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Open to Azure DevOps, DevSecOps, and Agentic AI roles in
              Singapore, Middle East &amp; Australia.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <a key={link.label} href={link.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-azure/30 hover:shadow-lg hover:shadow-azure/5 transition-all">
                  <div className="p-3 rounded-lg bg-azure/10 text-azure group-hover:bg-azure group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-500">{link.label}</div>
                    <div className="text-base font-medium text-slate-900 dark:text-white">{link.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Have a project in mind?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-lg mx-auto">
              Whether it&rsquo;s building autonomous AI pipelines on Azure, modernizing
              DevSecOps workflows, or cloud-native data platform integrations — I&rsquo;d love to hear about it.
            </p>
            <a href="mailto:suhail39ahmed@gmail.com?subject=Project%20Inquiry&body=Hi%20Suhail%2C%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A"
              className="inline-flex items-center gap-2 px-6 py-3 bg-azure text-white font-medium rounded-lg hover:bg-azure-dark transition-colors">
              <Mail size={16} /> Send Me an Email
            </a>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
