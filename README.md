# Hi, I'm Suhail 👋

I **design and build AI agents, LLM routers and RAG systems** on cloud and data platforms. Architecture first, then code, then measurement.

10+ years building cloud infrastructure (Azure, AWS, Terraform, Kubernetes) — now I apply that foundation to AI engineering. Solutions Architect · Singapore.

**[Portfolio](https://savvysuhail.com/)** · **[Terminal](https://savvysuhail.com/#terminal)** · [LinkedIn](https://www.linkedin.com/in/suhail-ahmed-sg/)

---

## 🎯 What I'm building

**Software Engineering & Automation** — from VMs to AI engineering. Equal focus on AI, cloud platforms, and data platforms. Agents and RAG are tools in the AI toolkit, not my entire identity.

- 🤖 **AI Engineering**: Agents, LLM routing, RAG systems, evals & operational readiness
- ☁️ **Cloud Platforms**: Azure & AWS architectures, IaC (Terraform/Bicep), Kubernetes, CI/CD
- 📊 **Data Platforms**: Databricks, Snowflake, Sigma — lakehouse to AI

---

## 📊 GitHub Activity

<!-- STATS_START -->

📦 **Loading...** public repositories

*Stats update daily at 00:00 UTC*

<!-- STATS_END -->

---

## 🏗️ Architecture: How it all fits together

Here's how a request flows through an Azure AI gateway, the AI workflow, and a Databricks lakehouse:

![Architecture Diagram](./assets/architecture.svg)

**Key components:**
- 🔐 **Gateway**: Azure AI Foundry secures and routes every call (Key Vault, auth, rate limits)
- ⚡ **Cache + Trim**: Semantic cache for repeat queries; token minimizer cuts context and cost
- 🤖 **AI Flow**: Agentic workflow → Skills/MCP → RAG retriever → Guardrails/Evals
- 🏢 **Data**: Databricks lakehouse (Bronze → Silver → Gold → Embeddings → Vector Search)

The Foundry gateway and Databricks/Snowflake agents run in production at my day job. The router, cache, and RAG pieces are my open-source labs.

---

## 🚀 Flagship Projects

Each card shows the **key design decision** that makes it work.

### 🤖 AI Engineering

| Project | What it is | Design Decision |
|---------|------------|----------------|
| **[llm-auto-router](https://github.com/suhail39ahmed/llm-auto-router)** | Routes prompts to the cheapest capable model. 98% routing accuracy vs 62% for keyword rules; ~27-29% cheaper than all-gpt-5.4. | LLM classifier picks one of 4 tiers; JSON validated against policy rules; invalid output falls back to strongest model. |
| **[production_grade_rag](https://github.com/suhail39ahmed/production_grade_rag)** | RAG built through 7 phases with architecture diagram and demo. | Hybrid BM25 + vector search, cross-encoder rerank to top 5, CI eval gate on every PR. |
| **[ember-fire-commander](https://github.com/suhail39ahmed/ember-fire-commander)** | EMBER: weather-aware wildfire triage for village brigades (Gemini Live, ADK, Cloud Run). AI Builder Cup 2026. | Agents fuse many phones into one incident; human supervisor approves high-stakes calls; WITHDRAW safety rule is deterministic code. |
| **[foundry-eval-gate](https://github.com/suhail39ahmed/foundry-eval-gate)** | CI eval gate on agent traces: faithfulness, tool success, PII leak. | Deterministic checks exit non-zero, blocking GitHub Actions / Azure DevOps merges. |
| **[fraud-policy-copilot](https://github.com/suhail39ahmed/fraud-policy-copilot)** | Snowflake CoCo CLI fraud case copilot: transaction → policy match → risk score with citations. | Streamlit in Snowflake: tx id → customer context → rule matches → risk score with policy citations. |
| **[ado-pipeline-doctor](https://github.com/suhail39ahmed/ado-pipeline-doctor)** | Failed pipeline logs → RCA JSON, human approval required. | Structured RCA JSON with explicit `human_approval_required` flag for safe agent wiring. |

### ☁️ Cloud Platforms

| Project | What it is | Design Decision |
|---------|------------|----------------|
| **[azure-hub-spoke-terraform](https://github.com/suhail39ahmed/azure-hub-spoke-terraform)** | Hub-and-spoke Terraform modules for Azure networking. | Separate hub and spoke modules + wiring example; a foundation to extend, not a full landing zone. |
| **[iac-guard-mcp](https://github.com/suhail39ahmed/iac-guard-mcp)** | Terraform/Bicep diff → policy findings. | Checkov when available, regex fallback; structured findings JSON for agent citations. |
| **[azure-ops-mcp](https://github.com/suhail39ahmed/azure-ops-mcp)** | Key Vault / ADO ops tools with dry-run + audit. | Every write operation requires explicit approval; audit trail for compliance. |

### 📊 Data Platforms

| Project | What it is | Design Decision |
|---------|------------|----------------|
| **[lakeshift](https://github.com/suhail39ahmed/lakeshift)** | PL/SQL → Snowflake, proven row-by-row. Nebius x NVIDIA hackathon. | Planner → parallel Nemotron Nano translators → verifier diffs Oracle vs Snowflake; failures escalate Nano → Super → Ultra until verifier passes. |
| **[lakehouse-insights-skill](https://github.com/suhail39ahmed/lakehouse-insights-skill)** | Governed metrics catalog → proposed SQL. | Unity Catalog metadata drives agent suggestions; policy-checked queries. |

**[More on GitHub](https://github.com/suhail39ahmed)** · **[Full portfolio with demos](https://savvysuhail.com/)**

---

## 🎮 Try it: Interactive Terminal

Want to explore my work? Try the **[interactive terminal](https://savvysuhail.com/#terminal)** on my portfolio site.

```bash
$ help
# Commands: whoami, projects, stack, contact, clear
# Real functional UI, keyboard & touch accessible
# No command execution — just a safe exploration interface
```

---

## 🏆 Hackathons & Competition

Building under deadlines forces design clarity.

- **Google Cloud AI Builder Cup 2026** (Hack2skill): [EMBER](https://github.com/suhail39ahmed/ember-fire-commander) submitted, awaiting results
- **Nebius x NVIDIA Global AI Hackathon** (Devpost): [LakeShift](https://github.com/suhail39ahmed/lakeshift) submitted
- **Databricks GenAI Hackathon 2024** (team REV-Engers): RAG experiments, [notebooks on GitHub](https://github.com/suhail39ahmed/REV-Engers_Databricks_GenAI_Hackathon24)

[Full hackathon list](https://savvysuhail.com/#hackathons)

---

## 🔧 Tech Stack

```
AI:        Azure AI Foundry · Databricks · Snowflake Cortex · Google Cloud / Gemini
Cloud:     Azure · AWS · Terraform · Bicep · Kubernetes · Docker
Data:      Databricks · Snowflake · Sigma · Unity Catalog
CI/CD:     GitHub Actions · Azure DevOps · GitLab CI
Tools:     Python · TypeScript · MCP · Streamlit · Evals
```

---

## 💼 Running in Production

**Scope only; details and numbers stay at work.**

- **Azure AI Foundry gateway** that manages, monitors and governs AI solutions
- **AI agents on Databricks, Snowflake & Sigma** that cut manual analysis for ops and business teams
- **Evals, testing & operational readiness** for AI apps

[Career timeline on portfolio](https://savvysuhail.com/#about)

---

## 📜 Certifications

Azure Solutions Architect Expert · DevOps Engineer Expert · AWS Solutions Architect · Terraform Associate (004) · Databricks Data Engineer · SnowPro Core · AI-103 Azure AI Apps and Agents

---

## 📝 Writing & Notes

Building in public, sharing what I learn:

- **[What you can build with Snowflake CoCo CLI](https://savvysuhail.com/fraud-policy-copilot/)** — fraud policy copilot walkthrough
- More on [LinkedIn](https://www.linkedin.com/in/suhail-ahmed-sg/)

---

## 🤝 Let's connect

**Designing or building something similar? Let's swap notes.**

- 📧 [suhail39ahmed@gmail.com](mailto:suhail39ahmed@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/suhail-ahmed-sg/)
- 🌐 [savvysuhail.com](https://savvysuhail.com/)
- 🖥️ [Terminal](https://savvysuhail.com/#terminal)

---

<sub>This README updates daily with fresh GitHub stats · [View update workflow](.github/workflows/update-profile.yml)</sub>
