import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Suhail Ahmed — Cloud & Data Architect | DevSecOps | AI Enablement",
  description:
    "10+ years architecting and implementing enterprise cloud & data platforms on Azure and AWS. DevSecOps, Agentic AI, Databricks, Snowflake. Based in Singapore.",
  keywords: [
    "Azure DevOps",
    "Agentic AI",
    "DevSecOps",
    "MCP Agents",
    "Claude",
    "Cursor",
    "Azure",
    "Databricks",
    "Snowflake",
    "Terraform",
    "Cloud Architecture",
  ],
  authors: [{ name: "Suhail Ahmed Inayathulla" }],
  creator: "Suhail Ahmed Inayathulla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suhail39ahmed.github.io",
    title: "Suhail Ahmed — Cloud & Data Architect | DevSecOps | AI Enablement",
    description:
      "10+ years architecting and implementing enterprise cloud & data platforms on Azure and AWS. DevSecOps, Agentic AI, Databricks, Snowflake.",
    siteName: "Suhail Ahmed",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhail Ahmed — Cloud & Data Architect | DevSecOps | AI Enablement",
    description:
      "10+ years architecting and implementing enterprise cloud & data platforms on Azure and AWS. DevSecOps, Agentic AI, Databricks, Snowflake.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
        <ThemeProvider>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
