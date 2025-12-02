// Languages (ordered by preference)
const languages = [
  { rank: 1, name: "Rust", uses: "Systems programming, CLI tools, high-performance" },
  { rank: 2, name: "TypeScript", uses: "Application development, strict mode" },
  { rank: 3, name: "Go", uses: "Infrastructure tooling, microservices" },
  { rank: 4, name: "Bash/Nushell", uses: "Scripting, automation" },
];

// Modern CLI replacements (for local dev reference)
const modernCli = [
  { classic: "grep", modern: "rg (ripgrep)" },
  { classic: "find", modern: "fd" },
  { classic: "cat", modern: "bat" },
  { classic: "ls", modern: "eza" },
  { classic: "sed", modern: "sd" },
  { classic: "diff", modern: "delta" },
];

// Homelab hardware specs
const homelabHardware = [
  { component: "Primary", specs: "HPE DL385 Gen10, Dual Epyc 7601, 512GB RAM, 30TB NVMe" },
  { component: "Development", specs: "HPE DL380 Gen8, similar specs" },
  { component: "Networking", specs: "56G InfiniBand FC SAN" },
  { component: "Storage", specs: "ZFS pools" },
];

const homelabSoftware = [
  { layer: "Hypervisor", tool: "Proxmox VE" },
  { layer: "Containers", tool: "Kubernetes (kubeadm)" },
  { layer: "Storage", tool: "ZFS + MinIO" },
  { layer: "Networking", tool: "WireGuard mesh" },
  { layer: "Monitoring", tool: "Prometheus + Grafana" },
];

// Primary tech preferences (used for quick reference)
const primaryChoices = {
  runtime: "Bun",
  backendFramework: "Hono",
  frontendFramework: "Astro",
  database: "PostgreSQL",
  cache: "Redis",
  search: "Meilisearch",
  iac: "Terraform",
  cicd: "GitLab CI",
  monitoring: "Prometheus + Grafana",
  logging: "Loki",
  tracing: "Jaeger",
};

export default {
  languages,
  modernCli,
  homelabHardware,
  homelabSoftware,
  primaryChoices,
};
