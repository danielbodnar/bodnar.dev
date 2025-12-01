export default {
  infrastructure: {
    containerOrchestration: [
      { layer: "Orchestration", primary: "Kubernetes", alternative: "Docker Swarm" },
      { layer: "Runtime", primary: "containerd", alternative: "cri-o, Podman" },
      { layer: "Networking", primary: "Cilium, Calico", alternative: "Flannel" },
      { layer: "Service Mesh", primary: "Linkerd", alternative: "Istio" },
      { layer: "Ingress", primary: "Traefik", alternative: "Nginx Ingress" },
      { layer: "Load Balancing", primary: "MetalLB", alternative: "HAProxy" }
    ],
    cloudIaC: [
      { layer: "Cloud Provider", primary: "AWS", alternative: "Cloudflare, DigitalOcean" },
      { layer: "IaC Tool", primary: "Terraform", alternative: "AWS CDK" },
      { layer: "Config Management", primary: "Ansible", alternative: "Salt" },
      { layer: "Secrets", primary: "HashiCorp Vault", alternative: "AWS Secrets Manager" },
      { layer: "Provisioning", primary: "iPXE + cloud-init", alternative: "Packer" }
    ],
    storage: [
      { useCase: "Filesystem", primary: "ZFS", alternative: "ext4, XFS" },
      { useCase: "Object Storage", primary: "MinIO", alternative: "S3" },
      { useCase: "Block Storage", primary: "NVMe direct", alternative: "Ceph" },
      { useCase: "Backup", primary: "restic", alternative: "Borg" }
    ]
  },
  observability: {
    metrics: {
      pipeline: "Prometheus (collection) -> VictoriaMetrics (long-term storage) -> Grafana (visualization) -> Alertmanager (alerting)",
      components: [
        { component: "Collection", tool: "Prometheus", purpose: "Metrics scraping" },
        { component: "Storage", tool: "VictoriaMetrics", purpose: "Long-term TSDB" },
        { component: "Visualization", tool: "Grafana", purpose: "Dashboards" },
        { component: "Alerting", tool: "Alertmanager", purpose: "Alert routing" },
        { component: "Real-time", tool: "NetData", purpose: "Live system monitoring" }
      ]
    },
    logging: {
      pipeline: "Application -> FluentBit (collection) -> Loki (aggregation) -> Grafana (querying)",
      components: [
        { component: "Collection", tool: "FluentBit", purpose: "Log shipping" },
        { component: "Aggregation", tool: "Loki", purpose: "Log storage & indexing" },
        { component: "Search", tool: "Grafana", purpose: "Log exploration" },
        { component: "Alternative", tool: "ELK Stack", purpose: "Full-text search" }
      ]
    },
    tracing: {
      components: [
        { component: "Instrumentation", tool: "OpenTelemetry", purpose: "Trace generation" },
        { component: "Backend", tool: "Jaeger", purpose: "Trace storage & UI" },
        { component: "Correlation", tool: "Grafana", purpose: "Unified view" }
      ]
    }
  },
  cicd: {
    gitlabBased: {
      pipeline: "Code -> GitLab CI -> Build (Docker/Kaniko) -> Test (Unit/Integration) -> Security Scan (Trivy) -> Deploy (ArgoCD/Helm)",
      stages: [
        { stage: "Source Control", tool: "GitLab", purpose: "Repository & CI" },
        { stage: "Build", tool: "Kaniko", purpose: "Container builds" },
        { stage: "Registry", tool: "Harbor", purpose: "Image storage" },
        { stage: "Security", tool: "Trivy", purpose: "Vulnerability scanning" },
        { stage: "Deploy", tool: "ArgoCD", purpose: "GitOps deployment" },
        { stage: "Packaging", tool: "Helm", purpose: "K8s manifests" }
      ]
    },
    githubBased: {
      stages: [
        { stage: "Source Control", tool: "GitHub", purpose: "Repository" },
        { stage: "CI", tool: "GitHub Actions", purpose: "Workflows" },
        { stage: "Registry", tool: "GHCR", purpose: "Container registry" },
        { stage: "Deploy", tool: "Flux", purpose: "GitOps" }
      ]
    }
  },
  development: {
    languages: [
      { rank: 1, name: "Rust", uses: "Systems programming, CLI tools, high-performance" },
      { rank: 2, name: "TypeScript", uses: "Application development, strict mode" },
      { rank: 3, name: "Go", uses: "Infrastructure tooling, microservices" },
      { rank: 4, name: "Bash/Nushell", uses: "Scripting, automation" }
    ],
    backend: [
      { component: "Runtime", primary: "Bun", alternative: "Node.js" },
      { component: "Framework", primary: "Hono", alternative: "Elysia" },
      { component: "Validation", primary: "Zod", alternative: "-" },
      { component: "ORM", primary: "Drizzle", alternative: "Prisma" }
    ],
    frontend: [
      { component: "Framework", primary: "Astro", alternative: "Vue 3, Svelte" },
      { component: "Styling", primary: "Tailwind CSS", alternative: "-" },
      { component: "Components", primary: "SolidJS", alternative: "Lit" }
    ],
    databases: [
      { useCase: "Relational", primary: "PostgreSQL", alternative: "SQLite" },
      { useCase: "Analytical", primary: "DuckDB", alternative: "ClickHouse" },
      { useCase: "Cache", primary: "Redis", alternative: "-" },
      { useCase: "Search", primary: "Meilisearch", alternative: "Elasticsearch" }
    ]
  },
  security: {
    network: [
      { layer: "VPN", tool: "WireGuard", purpose: "Site-to-site, remote access" },
      { layer: "Access", tool: "Teleport", purpose: "Zero-trust access" },
      { layer: "Firewall", tool: "nftables", purpose: "Host firewall" },
      { layer: "WAF", tool: "Cloudflare", purpose: "Web application firewall" }
    ],
    vulnerabilityManagement: [
      { layer: "Container", tool: "Trivy", purpose: "Image scanning" },
      { layer: "Host", tool: "Wazuh", purpose: "HIDS, compliance" },
      { layer: "Network", tool: "OpenVAS", purpose: "Network scanning" },
      { layer: "Dependencies", tool: "Dependabot", purpose: "Dependency updates" }
    ],
    secretsManagement: [
      { layer: "Primary", tool: "HashiCorp Vault", purpose: "Dynamic secrets" },
      { layer: "K8s Native", tool: "External Secrets", purpose: "K8s integration" },
      { layer: "Backup", tool: "SOPS", purpose: "Git-encrypted secrets" }
    ]
  },
  database: {
    postgresql: {
      pipeline: "PostgreSQL (primary) -> Patroni (HA clustering) -> PgBouncer (connection pooling) -> WAL-G (backup/archiving) -> pg_stat_statements (monitoring)",
      components: [
        { component: "Database", tool: "PostgreSQL 16+", purpose: "Primary database" },
        { component: "HA", tool: "Patroni", purpose: "Automatic failover" },
        { component: "Pooling", tool: "PgBouncer", purpose: "Connection management" },
        { component: "Backup", tool: "WAL-G", purpose: "Point-in-time recovery" },
        { component: "Monitoring", tool: "pg_stat_statements", purpose: "Query analysis" }
      ]
    },
    dataPipeline: {
      flow: "Sources -> DuckDB (transformation) -> PostgreSQL (storage) -> Grafana (visualization)"
    }
  },
  localDevelopment: {
    os: [
      { component: "OS", choice: "Arch Linux" },
      { component: "Shell", choice: "Nushell (primary), Zsh (fallback)" },
      { component: "Terminal", choice: "Alacritty / Kitty" },
      { component: "Multiplexer", choice: "tmux" }
    ],
    editorTools: [
      { component: "Editor", tool: "Neovim (Lua config)" },
      { component: "IDE", tool: "Zed, VS Code" },
      { component: "Git UI", tool: "lazygit" },
      { component: "File Manager", tool: "yazi" }
    ],
    modernCli: [
      { classic: "grep", modern: "rg (ripgrep)" },
      { classic: "find", modern: "fd" },
      { classic: "cat", modern: "bat" },
      { classic: "ls", modern: "eza" },
      { classic: "sed", modern: "sd" },
      { classic: "diff", modern: "delta" }
    ],
    versionManagement: [
      { tool: "mise", purpose: "Runtime version management" },
      { tool: "direnv", purpose: "Environment per directory" }
    ]
  },
  homelab: {
    hardware: [
      { component: "Primary", specs: "HPE DL385 Gen10, Dual Epyc 7601, 512GB RAM, 30TB NVMe" },
      { component: "Development", specs: "HPE DL380 Gen8, similar specs" },
      { component: "Networking", specs: "56G InfiniBand FC SAN" },
      { component: "Storage", specs: "ZFS pools" }
    ],
    software: [
      { layer: "Hypervisor", tool: "Proxmox VE" },
      { layer: "Containers", tool: "Kubernetes (kubeadm)" },
      { layer: "Storage", tool: "ZFS + MinIO" },
      { layer: "Networking", tool: "WireGuard mesh" },
      { layer: "Monitoring", tool: "Prometheus + Grafana" }
    ]
  }
};
