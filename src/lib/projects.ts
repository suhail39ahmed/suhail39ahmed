export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  featured: boolean;
  imagePrompt?: string;
}

export const projects: Project[] = [
  {
    slug: "ai-automation-portfolio",
    title: "AI & Automations Portfolio Program",
    description:
      "Roadmap of reusable MCP tools, skills, and CLIs for a Solution Architect — AI & Automations: Knowledge Center, pipeline doctor, Foundry eval gate, Azure ops MCP, and more. Offline fixtures first; demos before LinkedIn posts.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["MCP", "Agents", "Azure AI", "Portfolio"],
    github: "https://github.com/suhail39ahmed/ai-automation-portfolio",
    featured: true,
  },
  {
    slug: "kc-mcp",
    title: "Knowledge Center MCP",
    description:
      "MCP-style tools that search and cite a teaching Knowledge Center corpus (sample reel notes included). Built for agents — not a ChatGPT clone UI.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    tags: ["MCP", "RAG", "Knowledge Center"],
    github: "https://github.com/suhail39ahmed/kc-mcp",
    featured: true,
  },

  {
    slug: "ai-103-study-quiz",
    title: "AI-103 Study Quiz — Microsoft AI Apps on Foundry",
    description:
      "A static study and practice-quiz site for Microsoft AI exam-style topics. Lessons, flash-style content, and practice questions — shipped as a real GitHub Pages app with an accurate README.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "Azure AI", "Study App", "GitHub Pages"],
    github: "https://github.com/suhail39ahmed/AI-103_Microsoft_AI_APPS_Foundry",
    featured: true,
  },
  {
    slug: "azure-keyvault-automation",
    title: "Azure Key Vault Automation Utilities",
    description:
      "Practical Python helpers for day-to-day Key Vault work: upload, export, compare, and copy secrets. Small scripts for real ops tasks — not a platform product.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Azure Key Vault", "Automation"],
    github: "https://github.com/suhail39ahmed/automation",
    featured: true,
  },
  {
    slug: "azure-hub-spoke-terraform",
    title: "Azure Hub-and-Spoke Terraform Modules",
    description:
      "Starter Terraform modules and an example for an Azure hub-and-spoke network layout. Learning / foundation IaC — not a full enterprise landing zone.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["Terraform", "Azure", "Networking", "IaC"],
    github: "https://github.com/suhail39ahmed/azure-hub-spoke-terraform",
    featured: true,
  },
  {
    slug: "databricks-genai-hackathon",
    title: "REV-Engers Databricks GenAI Hackathon 2024",
    description:
      "Jupyter notebooks from a team GenAI hackathon (RAG and related experiments). Lab artifact from a time-boxed event — not a production platform.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    tags: ["Databricks", "GenAI", "Jupyter", "Hackathon"],
    github: "https://github.com/suhail39ahmed/REV-Engers_Databricks_GenAI_Hackathon24",
    featured: false,
  },
  {
    slug: "multi-ci-playground",
    title: "Multi-CI Learning Playground",
    description:
      "Hands-on demos across GitHub Actions, Azure DevOps, and GitLab CI with Docker/Kubernetes samples. A personal CI playground, not a production service.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80",
    tags: ["GitHub Actions", "Azure DevOps", "GitLab CI", "Docker"],
    github: "https://github.com/suhail39ahmed/github_actions",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
