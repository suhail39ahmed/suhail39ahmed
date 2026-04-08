export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  featured: boolean;
  // Grok Imagine prompt for generating custom images (see comment on each project)
  imagePrompt?: string;
}

export const projects: Project[] = [
  {
    slug: "self-healing-azure-devops-pipelines",
    title: "Autonomous Agentic AI for Self-Healing Azure DevOps Pipelines",
    description:
      "Built a fully autonomous agentic AI system using Cursor, Claude, and MCP Agents that monitors, detects, and auto-remediates issues in Azure DevOps pipelines. Powered by custom agents.md and rules files for consistent behavior. Integrated with Azure Security Center and Azure Monitor. Reduced mean-time-to-recovery by 85% and eliminated manual security reviews.",
    // Grok Imagine: "Futuristic Azure cloud data center with self-healing AI pipelines, blue glowing neural networks connecting servers, dark background, cinematic lighting"
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    tags: ["Azure DevOps", "Agentic AI", "MCP Agents", "DevSecOps", "Self-Healing Pipelines"],
    github: "https://github.com/suhaildev/self-healing-azure-pipelines",
    demo: "#",
    featured: true,
  },
  {
    slug: "cursor-claude-mcp-azure",
    title: "Cursor + Claude + MCP Agents Mastery for Azure Development",
    description:
      "Complete framework and guide showing how to supercharge Azure DevOps workflows using Cursor AI editor, Claude 3.5/Opus, and MCP multi-agent orchestration. Includes ready-to-use agents.md rulesets that automate infrastructure provisioning, security scanning, and compliance checks on Azure.",
    // Grok Imagine: "AI code editor workspace with multiple agent windows, Claude AI assistant interface, dark theme, Azure blue accents, holographic displays"
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["Cursor", "Claude", "MCP Agents", "Azure DevOps", "Agentic AI"],
    github: "https://github.com/suhaildev/cursor-claude-mcp-azure",
    featured: true,
  },
  {
    slug: "agents-md-production-ai",
    title: "Rules & agents.md — The Secret Sauce for Production Agentic AI on Azure",
    description:
      "Deep dive into structuring AI agent behavior with simple .md rule files inside Azure DevOps repositories. Demonstrates how these rules enable reliable, auditable autonomous agents that handle complex DevSecOps tasks without constant human oversight.",
    // Grok Imagine: "Minimalist code governance dashboard showing agent rules and markdown files, structured data flow, dark UI with Azure blue highlights"
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    tags: ["Agent Rules", "agents.md", "Azure DevOps", "MCP Agents", "Governance"],
    github: "https://github.com/suhaildev/agents-md-production-ai",
    demo: "#",
    featured: true,
  },
  {
    slug: "self-orchestrating-devsecops",
    title: "Trending: Self-Orchestrating Agentic AI Platforms for Azure DevSecOps",
    description:
      "Next-generation autonomous agent platform that turns Azure DevOps into a self-orchestrating DevSecOps environment. Agents proactively scan code, enforce policies, optimize costs, and deploy securely using Azure OpenAI + Azure Functions + GitHub Actions + Azure Pipelines. One of the most advanced agentic AI implementations in production today.",
    // Grok Imagine: "Global Azure cloud orchestration platform with autonomous AI agents managing DevSecOps workflows, earth view with data streams, futuristic"
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["Agentic AI", "Autonomous Agents", "Azure DevSecOps", "Trending 2026"],
    github: "https://github.com/suhaildev/self-orchestrating-devsecops",
    featured: true,
  },
  {
    slug: "azure-devops-ai-copilot",
    title: "Azure DevOps AI Co-Pilot Suite powered by MCP Agents",
    description:
      "Suite of specialized MCP agents that act as an intelligent co-pilot inside Azure DevOps — auto-generating pipelines, writing IaC, running security reviews, and suggesting cost optimizations in real time.",
    // Grok Imagine: "AI co-pilot dashboard for Azure DevOps, intelligent suggestions panel with code, pipeline visualization, dark mode, Azure brand colors"
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
    tags: ["Azure DevOps", "MCP Agents", "AI Co-Pilot", "IaC"],
    github: "https://github.com/suhaildev/azure-devops-ai-copilot",
    demo: "#",
    featured: true,
  },
  {
    slug: "autonomous-release-pipeline",
    title: "End-to-End Autonomous Release Pipeline with Agentic AI on Azure",
    description:
      "Zero-touch release pipeline where agentic AI agents handle everything from PR review to production deployment, including dynamic security gates and rollback decisions. Built entirely on Azure-native services.",
    // Grok Imagine: "Zero-touch autonomous release pipeline visualization, flowing code through security gates to production, dark background, Azure blue and cyan glow"
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80",
    tags: ["Azure Pipelines", "Autonomous AI", "DevSecOps"],
    github: "https://github.com/suhaildev/autonomous-release-pipeline",
    featured: true,
  },
  {
    slug: "azure-infra-sentinel",
    title: "Azure Infrastructure Sentinel — AI-Powered Cloud Governance",
    description:
      "Intelligent infrastructure monitoring agent that continuously audits Azure resources for compliance, cost anomalies, and security drift. Uses Azure Policy, Defender for Cloud, and custom MCP agents to auto-remediate misconfigurations before they reach production.",
    // Grok Imagine: "Azure cloud infrastructure sentinel AI monitoring dashboard, real-time threat detection, blue security shield, dark futuristic interface"
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=800&q=80",
    tags: ["Azure Policy", "Cloud Governance", "MCP Agents", "Security"],
    github: "https://github.com/suhaildev/azure-infra-sentinel",
    featured: false,
  },
  {
    slug: "multi-agent-devops-swarm",
    title: "Multi-Agent DevOps Swarm — Collaborative AI for Azure Pipelines",
    description:
      "Experimental swarm intelligence framework where multiple specialized AI agents collaborate to solve complex DevOps challenges — from incident response to capacity planning. Each agent has a distinct role defined via agents.md, and they communicate through a shared Azure Service Bus.",
    // Grok Imagine: "Swarm of autonomous AI agents collaborating in Azure DevOps environment, interconnected neural pathways, dark background, blue and teal"
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    tags: ["Multi-Agent AI", "Azure Service Bus", "Swarm Intelligence", "DevOps"],
    github: "https://github.com/suhaildev/multi-agent-devops-swarm",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
