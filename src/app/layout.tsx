import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Suhail Ahmed — Azure DevOps Engineer & Agentic AI Builder",
  description:
    "Turning Autonomous Agents into Production-Grade DevSecOps on Azure. Portfolio and tech blog by Suhail Ahmed, Sydney.",
  keywords: [
    "Azure DevOps",
    "Agentic AI",
    "DevSecOps",
    "MCP Agents",
    "Claude",
    "Cursor",
    "Azure",
    "Cloud Architecture",
  ],
  authors: [{ name: "Suhail Ahmed" }],
  creator: "Suhail Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suhail39ahmed.github.io",
    title: "Suhail Ahmed — Azure DevOps Engineer & Agentic AI Builder",
    description:
      "Turning Autonomous Agents into Production-Grade DevSecOps on Azure.",
    siteName: "Suhail Ahmed",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhail Ahmed — Azure DevOps Engineer & Agentic AI Builder",
    description:
      "Turning Autonomous Agents into Production-Grade DevSecOps on Azure.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
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
