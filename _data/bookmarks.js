export default {
  categories: [
    {
      id: "infrastructure-cloud",
      name: "Infrastructure & Cloud",
      subcategories: [
        {
          name: "Kubernetes",
          links: [
            { title: "Kubernetes Documentation", url: "https://kubernetes.io/docs/", description: "Official K8s docs" },
            { title: "Kubernetes the Hard Way", url: "https://github.com/kelseyhightower/kubernetes-the-hard-way", description: "Kelsey Hightower's guide" },
            { title: "CNCF Landscape", url: "https://landscape.cncf.io/", description: "Cloud native ecosystem overview" },
            { title: "Awesome Kubernetes", url: "https://github.com/ramitsurana/awesome-kubernetes", description: "Curated K8s resources" },
            { title: "k9s", url: "https://k9scli.io/", description: "Terminal UI for Kubernetes" },
            { title: "Lens", url: "https://k8slens.dev/", description: "Kubernetes IDE" }
          ]
        },
        {
          name: "AWS",
          links: [
            { title: "AWS Documentation", url: "https://docs.aws.amazon.com/", description: "Official AWS docs" },
            { title: "AWS Well-Architected", url: "https://aws.amazon.com/architecture/well-architected/", description: "Best practices framework" },
            { title: "CDK Patterns", url: "https://cdkpatterns.com/", description: "AWS CDK design patterns" },
            { title: "AWS Samples", url: "https://github.com/aws-samples", description: "Official code samples" },
            { title: "Last Week in AWS", url: "https://www.lastweekinaws.com/", description: "Newsletter by Corey Quinn" }
          ]
        },
        {
          name: "Terraform",
          links: [
            { title: "Terraform Registry", url: "https://registry.terraform.io/", description: "Modules and providers" },
            { title: "Terraform Best Practices", url: "https://www.terraform-best-practices.com/", description: "Community guide" },
            { title: "Terragrunt", url: "https://terragrunt.gruntwork.io/", description: "Terraform wrapper" },
            { title: "Atlantis", url: "https://www.runatlantis.io/", description: "Terraform Pull Request automation" }
          ]
        }
      ]
    },
    {
      id: "devops-cicd",
      name: "DevOps & CI/CD",
      subcategories: [
        {
          name: "GitOps",
          links: [
            { title: "Argo CD", url: "https://argo-cd.readthedocs.io/", description: "Declarative GitOps for K8s" },
            { title: "Flux", url: "https://fluxcd.io/", description: "GitOps toolkit" },
            { title: "GitOps Principles", url: "https://opengitops.dev/", description: "OpenGitOps standards" }
          ]
        },
        {
          name: "CI/CD Platforms",
          links: [
            { title: "GitLab CI Documentation", url: "https://docs.gitlab.com/ee/ci/", description: "GitLab CI/CD" },
            { title: "Jenkins Documentation", url: "https://www.jenkins.io/doc/", description: "Jenkins pipeline docs" },
            { title: "GitHub Actions", url: "https://docs.github.com/en/actions", description: "GitHub's CI/CD" }
          ]
        },
        {
          name: "Containers",
          links: [
            { title: "Docker Documentation", url: "https://docs.docker.com/", description: "Official Docker docs" },
            { title: "Podman", url: "https://podman.io/", description: "Daemonless container engine" },
            { title: "Containerd", url: "https://containerd.io/", description: "Container runtime" },
            { title: "BuildKit", url: "https://github.com/moby/buildkit", description: "Next-gen build toolkit" }
          ]
        }
      ]
    },
    {
      id: "observability",
      name: "Observability",
      subcategories: [
        {
          name: "Monitoring",
          links: [
            { title: "Prometheus Documentation", url: "https://prometheus.io/docs/", description: "Metrics and alerting" },
            { title: "Grafana Documentation", url: "https://grafana.com/docs/", description: "Visualization" },
            { title: "VictoriaMetrics", url: "https://victoriametrics.com/", description: "High-performance TSDB" },
            { title: "Netdata", url: "https://www.netdata.cloud/", description: "Real-time monitoring" }
          ]
        },
        {
          name: "Logging",
          links: [
            { title: "Loki Documentation", url: "https://grafana.com/docs/loki/", description: "Log aggregation" },
            { title: "Elastic Stack", url: "https://www.elastic.co/guide/", description: "ELK documentation" },
            { title: "FluentBit", url: "https://docs.fluentbit.io/", description: "Log processor" }
          ]
        },
        {
          name: "Tracing",
          links: [
            { title: "Jaeger Documentation", url: "https://www.jaegertracing.io/docs/", description: "Distributed tracing" },
            { title: "OpenTelemetry", url: "https://opentelemetry.io/docs/", description: "Observability framework" },
            { title: "Zipkin", url: "https://zipkin.io/", description: "Distributed tracing system" }
          ]
        }
      ]
    },
    {
      id: "security",
      name: "Security",
      subcategories: [
        {
          name: "Vulnerability Scanning",
          links: [
            { title: "Trivy", url: "https://aquasecurity.github.io/trivy/", description: "Container vulnerability scanner" },
            { title: "Grype", url: "https://github.com/anchore/grype", description: "Vulnerability scanner" },
            { title: "OWASP", url: "https://owasp.org/", description: "Web application security" }
          ]
        },
        {
          name: "Network Security",
          links: [
            { title: "WireGuard", url: "https://www.wireguard.com/", description: "Modern VPN protocol" },
            { title: "Teleport", url: "https://goteleport.com/docs/", description: "Secure infrastructure access" },
            { title: "HashiCorp Vault", url: "https://www.vaultproject.io/docs", description: "Secrets management" }
          ]
        },
        {
          name: "Compliance",
          links: [
            { title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks/", description: "Security benchmarks" },
            { title: "NIST Cybersecurity", url: "https://www.nist.gov/cyberframework", description: "Framework" }
          ]
        }
      ]
    },
    {
      id: "programming",
      name: "Programming",
      subcategories: [
        {
          name: "Go",
          links: [
            { title: "Go Documentation", url: "https://go.dev/doc/", description: "Official docs" },
            { title: "Effective Go", url: "https://go.dev/doc/effective_go", description: "Writing idiomatic Go" },
            { title: "Go by Example", url: "https://gobyexample.com/", description: "Hands-on introduction" },
            { title: "Awesome Go", url: "https://awesome-go.com/", description: "Curated Go packages" }
          ]
        },
        {
          name: "TypeScript/JavaScript",
          links: [
            { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/", description: "Official guide" },
            { title: "Node.js Documentation", url: "https://nodejs.org/docs/", description: "Node.js docs" },
            { title: "Bun Documentation", url: "https://bun.sh/docs", description: "Bun runtime" }
          ]
        },
        {
          name: "Rust",
          links: [
            { title: "The Rust Book", url: "https://doc.rust-lang.org/book/", description: "Official Rust book" },
            { title: "Rust by Example", url: "https://doc.rust-lang.org/rust-by-example/", description: "Learn by doing" },
            { title: "Awesome Rust", url: "https://github.com/rust-unofficial/awesome-rust", description: "Curated resources" }
          ]
        }
      ]
    },
    {
      id: "linux-systems",
      name: "Linux & Systems",
      subcategories: [
        {
          name: "Distributions",
          links: [
            { title: "Arch Wiki", url: "https://wiki.archlinux.org/", description: "Comprehensive Linux docs" },
            { title: "Debian Documentation", url: "https://www.debian.org/doc/", description: "Debian resources" },
            { title: "Alpine Linux", url: "https://wiki.alpinelinux.org/", description: "Minimal Linux" }
          ]
        },
        {
          name: "System Administration",
          links: [
            { title: "Linux Performance", url: "https://www.brendangregg.com/linuxperf.html", description: "Brendan Gregg's guide" },
            { title: "Systemd Documentation", url: "https://systemd.io/", description: "Init system docs" },
            { title: "ZFS Documentation", url: "https://openzfs.github.io/openzfs-docs/", description: "OpenZFS docs" }
          ]
        },
        {
          name: "Shell & Scripting",
          links: [
            { title: "Bash Guide", url: "https://mywiki.wooledge.org/BashGuide", description: "Bash scripting" },
            { title: "ShellCheck", url: "https://www.shellcheck.net/", description: "Shell script linter" },
            { title: "Nushell Documentation", url: "https://www.nushell.sh/book/", description: "Modern shell" }
          ]
        }
      ]
    },
    {
      id: "databases",
      name: "Databases",
      subcategories: [
        {
          name: "PostgreSQL",
          links: [
            { title: "PostgreSQL Documentation", url: "https://www.postgresql.org/docs/", description: "Official docs" },
            { title: "PostgreSQL Wiki", url: "https://wiki.postgresql.org/", description: "Community knowledge" },
            { title: "pgTune", url: "https://pgtune.leopard.in.ua/", description: "Configuration calculator" }
          ]
        },
        {
          name: "Other Databases",
          links: [
            { title: "MySQL Documentation", url: "https://dev.mysql.com/doc/", description: "MySQL docs" },
            { title: "MongoDB Documentation", url: "https://www.mongodb.com/docs/", description: "MongoDB docs" },
            { title: "Redis Documentation", url: "https://redis.io/docs/", description: "Redis docs" },
            { title: "DuckDB Documentation", url: "https://duckdb.org/docs/", description: "Analytical database" }
          ]
        }
      ]
    },
    {
      id: "learning-resources",
      name: "Learning Resources",
      subcategories: [
        {
          name: "Books (Free)",
          links: [
            { title: "Site Reliability Engineering", url: "https://sre.google/sre-book/table-of-contents/", description: "Google SRE Book" },
            { title: "The Site Reliability Workbook", url: "https://sre.google/workbook/table-of-contents/", description: "Practical SRE" },
            { title: "Building Secure & Reliable Systems", url: "https://sre.google/books/building-secure-reliable-systems/", description: "Security + SRE" },
            { title: "Software Engineering at Google", url: "https://abseil.io/resources/swe-book", description: "Engineering practices" }
          ]
        },
        {
          name: "Newsletters",
          links: [
            { title: "DevOps Weekly", url: "https://www.devopsweekly.com/", description: "Weekly DevOps news" },
            { title: "SRE Weekly", url: "https://sreweekly.com/", description: "Site reliability news" },
            { title: "Kubernetes Weekly", url: "https://kubeweekly.io/", description: "K8s news" }
          ]
        },
        {
          name: "Podcasts",
          links: [
            { title: "Changelog", url: "https://changelog.com/podcast", description: "Software development" },
            { title: "Ship It", url: "https://changelog.com/shipit", description: "DevOps and infrastructure" },
            { title: "Kubernetes Podcast", url: "https://kubernetespodcast.com/", description: "K8s from Google" }
          ]
        }
      ]
    },
    {
      id: "daily-tools",
      name: "Tools I Use Daily",
      subcategories: [
        {
          name: "Terminal",
          links: [
            { title: "Neovim", url: "https://neovim.io/", description: "Text editor" },
            { title: "tmux", url: "https://github.com/tmux/tmux", description: "Terminal multiplexer" },
            { title: "ripgrep", url: "https://github.com/BurntSushi/ripgrep", description: "Fast search" },
            { title: "fd", url: "https://github.com/sharkdp/fd", description: "Fast find alternative" },
            { title: "bat", url: "https://github.com/sharkdp/bat", description: "Better cat" },
            { title: "exa/eza", url: "https://github.com/eza-community/eza", description: "Better ls" }
          ]
        },
        {
          name: "Git",
          links: [
            { title: "lazygit", url: "https://github.com/jesseduffield/lazygit", description: "Terminal Git UI" },
            { title: "delta", url: "https://github.com/dandavison/delta", description: "Better diff viewer" },
            { title: "gh", url: "https://cli.github.com/", description: "GitHub CLI" }
          ]
        }
      ]
    }
  ]
};
