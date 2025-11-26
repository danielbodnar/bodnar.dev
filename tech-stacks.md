---
title: Tech Stacks
description: My preferred technology stacks for infrastructure, development, and operations across different use cases.
layout: libdoc_page.liquid
permalink: tech-stacks/index.html
eleventyNavigation:
    key: Tech Stacks
    order: 5
---

# Tech Stacks

My preferred and battle-tested technology combinations for various infrastructure, development, and operational scenarios.

---

## Infrastructure Stack

My go-to stack for building reliable, scalable infrastructure.

### Container Orchestration

| Layer | Primary | Alternative |
|-------|---------|-------------|
| **Orchestration** | Kubernetes | Docker Swarm |
| **Runtime** | containerd | cri-o, Podman |
| **Networking** | Cilium, Calico | Flannel |
| **Service Mesh** | Linkerd | Istio |
| **Ingress** | Traefik | Nginx Ingress |
| **Load Balancing** | MetalLB | HAProxy |

### Cloud & IaC

| Layer | Primary | Alternative |
|-------|---------|-------------|
| **Cloud Provider** | AWS | Cloudflare, DigitalOcean |
| **IaC Tool** | Terraform | AWS CDK |
| **Config Management** | Ansible | Salt |
| **Secrets** | HashiCorp Vault | AWS Secrets Manager |
| **Provisioning** | iPXE + cloud-init | Packer |

### Storage

| Use Case | Primary | Alternative |
|----------|---------|-------------|
| **Filesystem** | ZFS | ext4, XFS |
| **Object Storage** | MinIO | S3 |
| **Block Storage** | NVMe direct | Ceph |
| **Backup** | restic | Borg |

---

## Observability Stack

Comprehensive monitoring, logging, and tracing setup.

### Metrics

```
Prometheus (collection) 
    -> VictoriaMetrics (long-term storage)
    -> Grafana (visualization)
    -> Alertmanager (alerting)
```

| Component | Tool | Purpose |
|-----------|------|---------|
| **Collection** | Prometheus | Metrics scraping |
| **Storage** | VictoriaMetrics | Long-term TSDB |
| **Visualization** | Grafana | Dashboards |
| **Alerting** | Alertmanager | Alert routing |
| **Real-time** | NetData | Live system monitoring |

### Logging

```
Application -> FluentBit (collection)
    -> Loki (aggregation)
    -> Grafana (querying)
```

| Component | Tool | Purpose |
|-----------|------|---------|
| **Collection** | FluentBit | Log shipping |
| **Aggregation** | Loki | Log storage & indexing |
| **Search** | Grafana | Log exploration |
| **Alternative** | ELK Stack | Full-text search |

### Tracing

| Component | Tool | Purpose |
|-----------|------|---------|
| **Instrumentation** | OpenTelemetry | Trace generation |
| **Backend** | Jaeger | Trace storage & UI |
| **Correlation** | Grafana | Unified view |

---

## CI/CD Stack

GitOps-focused continuous delivery pipeline.

### Primary: GitLab-based

```
Code -> GitLab CI 
    -> Build (Docker/Kaniko)
    -> Test (Unit/Integration)
    -> Security Scan (Trivy)
    -> Deploy (ArgoCD/Helm)
```

| Stage | Tool | Purpose |
|-------|------|---------|
| **Source Control** | GitLab | Repository & CI |
| **Build** | Kaniko | Container builds |
| **Registry** | Harbor | Image storage |
| **Security** | Trivy | Vulnerability scanning |
| **Deploy** | ArgoCD | GitOps deployment |
| **Packaging** | Helm | K8s manifests |

### Alternative: GitHub-based

| Stage | Tool | Purpose |
|-------|------|---------|
| **Source Control** | GitHub | Repository |
| **CI** | GitHub Actions | Workflows |
| **Registry** | GHCR | Container registry |
| **Deploy** | Flux | GitOps |

---

## Development Stack

Tools and technologies for application development.

### Languages (by preference)

1. **Rust** - Systems programming, CLI tools, high-performance
2. **TypeScript** - Application development, strict mode
3. **Go** - Infrastructure tooling, microservices
4. **Bash/Nushell** - Scripting, automation

### Backend

| Component | Primary | Alternative |
|-----------|---------|-------------|
| **Runtime** | Bun | Node.js |
| **Framework** | Hono | Elysia |
| **Validation** | Zod | - |
| **ORM** | Drizzle | Prisma |

### Frontend (when needed)

| Component | Primary | Alternative |
|-----------|---------|-------------|
| **Framework** | Astro | Vue 3, Svelte |
| **Styling** | Tailwind CSS | - |
| **Components** | SolidJS | Lit |

### Databases

| Use Case | Primary | Alternative |
|----------|---------|-------------|
| **Relational** | PostgreSQL | SQLite |
| **Analytical** | DuckDB | ClickHouse |
| **Cache** | Redis | - |
| **Search** | Meilisearch | Elasticsearch |

---

## Security Stack

Defense-in-depth security tooling.

### Network Security

| Layer | Tool | Purpose |
|-------|------|---------|
| **VPN** | WireGuard | Site-to-site, remote access |
| **Access** | Teleport | Zero-trust access |
| **Firewall** | nftables | Host firewall |
| **WAF** | Cloudflare | Web application firewall |

### Vulnerability Management

| Layer | Tool | Purpose |
|-------|------|---------|
| **Container** | Trivy | Image scanning |
| **Host** | Wazuh | HIDS, compliance |
| **Network** | OpenVAS | Network scanning |
| **Dependencies** | Dependabot | Dependency updates |

### Secrets Management

| Layer | Tool | Purpose |
|-------|------|---------|
| **Primary** | HashiCorp Vault | Dynamic secrets |
| **K8s Native** | External Secrets | K8s integration |
| **Backup** | SOPS | Git-encrypted secrets |

---

## Database Stack

Production database configurations.

### PostgreSQL Setup

```
PostgreSQL (primary)
    -> Patroni (HA clustering)
    -> PgBouncer (connection pooling)
    -> WAL-G (backup/archiving)
    -> pg_stat_statements (monitoring)
```

| Component | Tool | Purpose |
|-----------|------|---------|
| **Database** | PostgreSQL 16+ | Primary database |
| **HA** | Patroni | Automatic failover |
| **Pooling** | PgBouncer | Connection management |
| **Backup** | WAL-G | Point-in-time recovery |
| **Monitoring** | pg_stat_statements | Query analysis |

### Data Pipeline

```
Sources -> DuckDB (transformation)
    -> PostgreSQL (storage)
    -> Grafana (visualization)
```

---

## Local Development

My local development environment setup.

### Operating System

| Component | Choice |
|-----------|--------|
| **OS** | Arch Linux |
| **Shell** | Nushell (primary), Zsh (fallback) |
| **Terminal** | Alacritty / Kitty |
| **Multiplexer** | tmux |

### Editor & Tools

| Component | Tool |
|-----------|------|
| **Editor** | Neovim (Lua config) |
| **IDE** | Zed, VS Code |
| **Git UI** | lazygit |
| **File Manager** | yazi |

### Modern CLI Replacements

| Classic | Modern |
|---------|--------|
| `grep` | `rg` (ripgrep) |
| `find` | `fd` |
| `cat` | `bat` |
| `ls` | `eza` |
| `sed` | `sd` |
| `diff` | `delta` |

### Version Management

| Tool | Purpose |
|------|---------|
| **mise** | Runtime version management |
| **direnv** | Environment per directory |

---

## Homelab Stack

My personal homelab infrastructure.

### Hardware

| Component | Specs |
|-----------|-------|
| **Primary** | HPE DL385 Gen10, Dual Epyc 7601, 512GB RAM, 30TB NVMe |
| **Development** | HPE DL380 Gen8, similar specs |
| **Networking** | 56G InfiniBand FC SAN |
| **Storage** | ZFS pools |

### Software

| Layer | Tool |
|-------|------|
| **Hypervisor** | Proxmox VE |
| **Containers** | Kubernetes (kubeadm) |
| **Storage** | ZFS + MinIO |
| **Networking** | WireGuard mesh |
| **Monitoring** | Prometheus + Grafana |

---

## Project Templates

Typical configurations for new projects.

### Microservice Template

```
project/
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── config/
│   ├── handlers/
│   └── services/
├── deploy/
│   ├── kubernetes/
│   └── docker/
├── .gitlab-ci.yml
├── Dockerfile
├── go.mod
└── README.md
```

### Infrastructure Template

```
infrastructure/
├── terraform/
│   ├── modules/
│   ├── environments/
│   │   ├── dev/
│   │   ├── staging/
│   │   └── prod/
│   └── main.tf
├── ansible/
│   ├── playbooks/
│   ├── roles/
│   └── inventory/
├── kubernetes/
│   ├── base/
│   └── overlays/
└── docs/
```

---

## Related Pages

- [Skills](/skills/) - Technical expertise levels
- [Experience](/experience/) - How these stacks are used
- [Bookmarks](/bookmarks/) - Resources and documentation
