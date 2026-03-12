export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics: string[];
  color: string;
  icon: string;
  github: string;
  featured: boolean;
  category: string;
  architecture: string; // mermaid diagram
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "azure-hub-spoke-terraform",
    title: "Azure Hub-and-Spoke Terraform",
    tagline: "Enterprise-grade network architecture with security guardrails",
    description:
      "Production-ready Terraform modules for deploying Azure Hub-and-Spoke network topology with centralized security controls, firewall policies, private endpoints, and automated compliance guardrails using Azure Policy and Defender for Cloud.",
    tech: ["Terraform", "Azure", "Azure Firewall", "Private DNS", "Azure Policy", "Defender for Cloud", "GitLab CI"],
    metrics: ["Hub-and-Spoke across 3 regions", "50+ policy assignments", "Zero trust enforcement", "99.99% network uptime"],
    color: "#00f5ff",
    icon: "🔷",
    github: "https://github.com/suhail39ahmed/azure-hub-spoke-terraform",
    featured: true,
    category: "IaC / Cloud Architecture",
    architecture: `graph TB
  subgraph HUB["HUB VNet (10.0.0.0/16)"]
    FW[Azure Firewall]
    VPN[VPN Gateway]
    DNS[Private DNS Resolver]
    BASTION[Azure Bastion]
  end
  subgraph SPOKE1["Spoke 1 - Production (10.1.0.0/16)"]
    APP1[App Tier]
    DB1[Data Tier]
  end
  subgraph SPOKE2["Spoke 2 - Dev/Test (10.2.0.0/16)"]
    APP2[App Tier]
    DB2[Data Tier]
  end
  subgraph SPOKE3["Spoke 3 - Shared Services (10.3.0.0/16)"]
    ACR[Container Registry]
    KV[Key Vault]
  end
  INTERNET([Internet]) --> FW
  FW --> APP1 & APP2 & ACR
  VPN --> HUB
  HUB <--> SPOKE1
  HUB <--> SPOKE2
  HUB <--> SPOKE3`,
    highlights: [
      "Centralized egress through Azure Firewall with FQDN-based policy",
      "Private endpoints for all PaaS services — no public internet exposure",
      "Automated Azure Policy assignments for CIS benchmark compliance",
      "GitLab CI pipeline with Terraform plan/apply and OPA policy gates",
      "Cost tagging enforcement and budget alerts at subscription level",
    ],
  },
  {
    slug: "databricks-snowflake-devops",
    title: "Databricks + Snowflake DevOps",
    tagline: "Azure DevOps YAML pipelines for data platform CI/CD",
    description:
      "End-to-end DevOps automation for Databricks Unity Catalog migration and Snowflake dbt deployments using Azure DevOps multi-stage YAML pipelines, automated testing, and blue/green deployment strategies for zero-downtime data platform releases.",
    tech: ["Azure DevOps", "Databricks", "Snowflake", "dbt", "Python", "Unity Catalog", "Delta Lake"],
    metrics: ["100+ dbt models automated", "Unity Catalog migration for 5TB+ data", "Zero downtime deployments", "60% faster release cycles"],
    color: "#ff2d78",
    icon: "⚡",
    github: "https://github.com/suhail39ahmed/databricks-snowflake-devops",
    featured: true,
    category: "Data Platform / CI/CD",
    architecture: `graph LR
  subgraph DEV["Development"]
    GIT[Git Repository]
    PR[Pull Request]
  end
  subgraph CICD["Azure DevOps Pipeline"]
    LINT[dbt lint & test]
    UNIT[Unit Tests]
    PLAN[Databricks Plan]
    DEPLOY_STG[Deploy Staging]
    DEPLOY_PRD[Deploy Production]
  end
  subgraph DATA["Data Platforms"]
    SNOW[Snowflake]
    DBX[Databricks UC]
    DELTA[Delta Lake]
  end
  GIT --> PR --> LINT --> UNIT --> PLAN --> DEPLOY_STG --> DEPLOY_PRD
  DEPLOY_STG --> SNOW & DBX
  DEPLOY_PRD --> DELTA`,
    highlights: [
      "Multi-stage Azure DevOps pipeline: lint → test → plan → staging → prod",
      "Unity Catalog migration scripts preserving ACLs and lineage",
      "dbt model orchestration with Databricks Workflows",
      "Automated rollback on test failure with Slack notifications",
      "Secret management via Azure Key Vault referenced in pipelines",
    ],
  },
  {
    slug: "terraform-multi-cloud-modules",
    title: "Terraform Multi-Cloud Modules",
    tagline: "Reusable IaC modules for Azure and AWS landing zones",
    description:
      "Enterprise-grade Terraform module library covering Azure and AWS landing zones, IAM, serverless functions, event-driven architectures, and Azure NetApp Files — designed for reuse across projects with strict versioning and testing.",
    tech: ["Terraform", "Azure", "AWS", "Terratest", "GitHub Actions", "CloudFormation", "Bicep"],
    metrics: ["30+ reusable modules", "Multi-cloud coverage", "100% Checkov security scans pass", "Used across 5+ enterprise projects"],
    color: "#39ff14",
    icon: "🔷",
    github: "https://github.com/suhail39ahmed/terraform-multi-cloud-modules",
    featured: true,
    category: "IaC / Platform Engineering",
    architecture: `graph TB
  subgraph MODULES["Module Registry"]
    LZ[Landing Zone]
    IAM[IAM / RBAC]
    NET[Networking]
    COMP[Compute]
    DATA[Data Services]
    SEC[Security]
  end
  subgraph AZURE["Azure"]
    AZ_LZ[Azure Landing Zone]
    AZ_VNET[Virtual Network]
    AZ_AKS[AKS Cluster]
    AZ_KV[Key Vault]
  end
  subgraph AWS["AWS"]
    AWS_LZ[AWS Landing Zone]
    AWS_VPC[VPC]
    AWS_EKS[EKS Cluster]
    AWS_SM[Secrets Manager]
  end
  LZ --> AZ_LZ & AWS_LZ
  NET --> AZ_VNET & AWS_VPC
  COMP --> AZ_AKS & AWS_EKS
  SEC --> AZ_KV & AWS_SM`,
    highlights: [
      "Semantic versioned modules published to Terraform registry",
      "Terratest automated integration tests for all modules",
      "Checkov and tfsec security scanning in CI pipeline",
      "Azure Landing Zone module covering management groups, policies, RBAC",
      "AWS Control Tower integration patterns with SCPs",
    ],
  },
  {
    slug: "kubernetes-observability-stack",
    title: "Kubernetes Observability Stack",
    tagline: "Prometheus + Grafana + Alertmanager full-stack monitoring",
    description:
      "Production-grade Kubernetes observability platform using Prometheus Operator, Grafana dashboards, Alertmanager routing, and custom SLO/SLA tracking — deployed via Helm with GitOps-driven configuration.",
    tech: ["Kubernetes", "Prometheus", "Grafana", "Alertmanager", "Helm", "Loki", "Tempo", "GitLab CI"],
    metrics: ["200+ custom metrics scraped", "15 Grafana dashboards", "P99 latency alerts < 200ms SLO", "Zero alert fatigue policy"],
    color: "#00f5ff",
    icon: "📊",
    github: "https://github.com/suhail39ahmed/kubernetes-observability-stack",
    featured: true,
    category: "Observability / Kubernetes",
    architecture: `graph TB
  subgraph K8S["Kubernetes Cluster"]
    APPS[Application Pods]
    PROM[Prometheus Operator]
    GM[Grafana]
    AM[Alertmanager]
    LOKI[Loki]
    TEMPO[Tempo]
  end
  subgraph NOTIFY["Notifications"]
    SLACK[Slack]
    PAGERDUTY[PagerDuty]
    EMAIL[Email]
  end
  APPS -->|metrics| PROM
  APPS -->|logs| LOKI
  APPS -->|traces| TEMPO
  PROM --> GM & AM
  LOKI --> GM
  TEMPO --> GM
  AM --> SLACK & PAGERDUTY & EMAIL`,
    highlights: [
      "Prometheus Operator CRDs for declarative ServiceMonitor/PodMonitor",
      "Golden signals dashboards: latency, traffic, errors, saturation",
      "Multi-window SLO alerting with burn rate policies",
      "Loki log aggregation with structured JSON parsing",
      "Distributed tracing via Tempo with Grafana Explore integration",
    ],
  },
  {
    slug: "devsecops-pipeline-blueprint",
    title: "DevSecOps Pipeline Blueprint",
    tagline: "Trivy + Snyk + OPA security gates in CI/CD",
    description:
      "Reference implementation for shift-left security in Azure DevOps and GitLab CI — integrating container scanning (Trivy), dependency auditing (Snyk), IaC security (Checkov), and policy enforcement (OPA/Conftest) at every pipeline stage.",
    tech: ["Azure DevOps", "GitLab CI", "Trivy", "Snyk", "OPA", "Checkov", "tfsec", "Docker", "SARIF"],
    metrics: ["100% container images scanned pre-deploy", "CVE blocking on HIGH/CRITICAL", "IaC policy as code for 50+ rules", "SARIF reports in Azure DevOps"],
    color: "#ff2d78",
    icon: "🛡️",
    github: "https://github.com/suhail39ahmed/devsecops-pipeline-blueprint",
    featured: true,
    category: "DevSecOps / Security",
    architecture: `graph LR
  CODE[Code Commit] --> SAST[SAST Scan]
  SAST --> SCA[Dependency Scan - Snyk]
  SCA --> BUILD[Docker Build]
  BUILD --> TRIVY[Trivy Container Scan]
  TRIVY --> IAC[IaC Scan - Checkov/tfsec]
  IAC --> OPA[OPA Policy Gate]
  OPA --> STAGING[Deploy Staging]
  STAGING --> DAST[DAST - OWASP ZAP]
  DAST --> PROD[Deploy Production]`,
    highlights: [
      "Fail-fast on HIGH/CRITICAL CVEs with Trivy in pre-build stage",
      "Snyk SCA with license compliance enforcement",
      "OPA Conftest policies for Kubernetes admission control",
      "SARIF report publishing to Azure DevOps Security tab",
      "Automated JIRA ticket creation for unresolved vulnerabilities",
    ],
  },
  {
    slug: "sap-azure-netapp-ha",
    title: "SAP on Azure NetApp HA",
    tagline: "Terraform + Python replication for SAP HANA HA across zones",
    description:
      "High-availability SAP HANA infrastructure on Azure using NetApp Files for shared storage, cross-zone replication via Python automation, Pacemaker clustering, and Terraform-managed infrastructure. Delivered zero-downtime SAP migration.",
    tech: ["Terraform", "Azure NetApp Files", "Python", "SAP HANA", "Pacemaker", "Azure", "Ansible"],
    metrics: ["Zero data loss RPO", "< 2min RTO failover", "SAP HANA replication lag < 1s", "Key Contributor Award"],
    color: "#39ff14",
    icon: "🏗️",
    github: "https://github.com/suhail39ahmed/sap-azure-netapp-ha",
    featured: false,
    category: "Cloud Migration / HA",
    architecture: `graph TB
  subgraph PRIMARY["Primary Zone (AZ1)"]
    HANA1[SAP HANA Primary]
    ANF1[NetApp Files Primary]
  end
  subgraph SECONDARY["Secondary Zone (AZ2)"]
    HANA2[SAP HANA Secondary]
    ANF2[NetApp Files Replica]
  end
  subgraph MGMT["Management"]
    TF[Terraform]
    PY[Python Replication Agent]
    PCMK[Pacemaker Cluster]
  end
  HANA1 <-->|HSR Replication| HANA2
  ANF1 <-->|Cross-Zone Replication| ANF2
  PY -->|Monitor & Trigger| PCMK
  TF -->|Provision| PRIMARY & SECONDARY`,
    highlights: [
      "Azure NetApp Files cross-zone replication with < 1s lag",
      "Python agent for automated failover detection and PCMK control",
      "Terraform modules for ANF volumes, capacity pools, VNets",
      "Ansible playbooks for SAP HANA system replication setup",
      "Zero-downtime cutover with pre-validation test scripts",
    ],
  },
  {
    slug: "aws-ecs-fargate-gitlab-ci",
    title: "AWS ECS Fargate GitLab CI",
    tagline: "Fully automated container workloads on serverless AWS",
    description:
      "End-to-end automation for deploying containerized workloads to AWS ECS Fargate using GitLab CI/CD with blue/green deployments via AWS CodeDeploy, ECR image scanning, and Terraform-managed infrastructure.",
    tech: ["AWS ECS", "Fargate", "GitLab CI", "ECR", "CodeDeploy", "Terraform", "CloudWatch", "ALB"],
    metrics: ["Blue/green deployments < 3min", "Auto-scaling 2-50 tasks", "ECR image scanning enabled", "99.95% service availability"],
    color: "#ff2d78",
    icon: "🐳",
    github: "https://github.com/suhail39ahmed/aws-ecs-fargate-gitlab-ci",
    featured: false,
    category: "Containers / AWS",
    architecture: `graph LR
  GIT[GitLab] --> CI[CI Pipeline]
  CI --> ECR[ECR Build & Scan]
  ECR --> TF[Terraform Apply]
  TF --> ECS[ECS Service Update]
  ECS --> CD[CodeDeploy B/G]
  CD --> ALB[ALB Traffic Shift]
  ALB --> FARGATE[Fargate Tasks]`,
    highlights: [
      "GitLab CI multi-stage: build → scan → plan → deploy",
      "Blue/green deployment with automatic rollback on health check failure",
      "ECR vulnerability scanning with blocking policy on CRITICAL CVEs",
      "CloudWatch Container Insights for task-level metrics",
      "Auto Scaling based on CPU, memory, and custom CloudWatch metrics",
    ],
  },
  {
    slug: "iac-best-practices-monorepo",
    title: "IaC Best Practices Monorepo",
    tagline: "Bicep + Terraform + CloudFormation with security-first patterns",
    description:
      "Multi-tool IaC reference monorepo showing Bicep, Terraform, and CloudFormation equivalents for common Azure and AWS patterns — with security-first defaults, automated testing, linting, and documentation.",
    tech: ["Terraform", "Bicep", "CloudFormation", "GitHub Actions", "Checkov", "ARM", "Azure", "AWS"],
    metrics: ["Bicep + TF + CFn coverage", "Security scan 0 failures", "100+ code examples", "Public reference library"],
    color: "#ff2d78",
    icon: "📚",
    github: "https://github.com/suhail39ahmed/iac-best-practices-monorepo",
    featured: false,
    category: "IaC / Best Practices",
    architecture: `graph TB
  MONO[Monorepo Root]
  MONO --> TF[/terraform]
  MONO --> BICEP[/bicep]
  MONO --> CFN[/cloudformation]
  TF --> TF_AZ[azure/]
  TF --> TF_AWS[aws/]
  BICEP --> BIC_AZ[azure/]
  CFN --> CFN_AWS[aws/]`,
    highlights: [
      "Side-by-side Bicep vs Terraform vs CloudFormation for same resources",
      "Security-first defaults: encryption, private endpoints, no public IPs",
      "GitHub Actions CI: lint, security scan, test on every PR",
      "Automated documentation generation from HCL and Bicep",
      "Tagged releases with CHANGELOG for version tracking",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
