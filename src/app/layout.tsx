import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Suhail Ahmed Inayathulla | Senior DevOps Engineer",
  description: "Senior DevSecOps Engineer with 9+ years of global experience designing, securing, and operating enterprise-scale cloud platforms across Azure and AWS.",
  keywords: ["DevOps", "DevSecOps", "Azure", "AWS", "Kubernetes", "Terraform", "Cloud Architecture", "Singapore"],
  authors: [{ name: "Suhail Ahmed Inayathulla" }],
  creator: "Suhail Ahmed Inayathulla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suhail39ahmed.github.io",
    title: "Suhail Ahmed Inayathulla | Senior DevOps Engineer",
    description: "Engineering Resilient Cloud Futures | DevSecOps • IaC • Observability",
    siteName: "Suhail Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhail Ahmed Inayathulla | Senior DevOps Engineer",
    description: "Engineering Resilient Cloud Futures | DevSecOps • IaC • Observability",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
