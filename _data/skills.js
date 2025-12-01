export default {
  categories: [
    {
      id: "infrastructure-cloud",
      name: "Infrastructure & Cloud",
      description: "Core competencies in container orchestration, cloud platforms, and Linux systems administration.",
      skills: [
        { name: "Kubernetes", proficiency: 95, experience: "6+ years", level: "Expert" },
        { name: "Docker", proficiency: 95, experience: "8+ years", level: "Expert" },
        { name: "AWS", proficiency: 90, experience: "7+ years", level: "Expert" },
        { name: "Linux", proficiency: 98, experience: "22+ years", level: "Expert" },
        { name: "Terraform", proficiency: 85, experience: "5+ years", level: "Advanced" },
        { name: "Ansible", proficiency: 85, experience: "6+ years", level: "Advanced" }
      ],
      subcategories: {
        containerTechnologies: {
          orchestration: ["Kubernetes", "EKS", "Rancher", "KubeVela"],
          runtimes: ["Docker", "Podman", "containerd", "cri-o", "LXC/LXD"],
          tools: ["Helm", "kubeadm", "kubectl", "k9s"]
        },
        cloudPlatforms: {
          awsServices: ["EC2", "EKS", "S3", "VPC", "IAM", "CloudFormation", "CDK", "Route53", "RDS", "Lambda"],
          multiCloud: ["Cloudflare", "DigitalOcean", "Linode"],
          hybrid: ["On-premise to cloud migrations", "hybrid overlay networks"]
        }
      }
    },
    {
      id: "backend-apis",
      name: "Backend & APIs",
      description: "Strong foundation in server-side development with multiple languages and frameworks.",
      skills: [
        { name: "Node.js", proficiency: 90, experience: "10+ years", level: "Expert" },
        { name: "Go", proficiency: 85, experience: "5+ years", level: "Advanced" },
        { name: "TypeScript", proficiency: 90, experience: "6+ years", level: "Expert" },
        { name: "Python", proficiency: 75, experience: "8+ years", level: "Proficient" },
        { name: "Rust", proficiency: 70, experience: "2+ years", level: "Intermediate" },
        { name: "REST APIs", proficiency: 95, experience: "15+ years", level: "Expert" }
      ],
      languages: {
        primary: ["TypeScript", "JavaScript (ES6+)", "Go", "Bash"],
        secondary: ["Python", "Rust"],
        legacy: ["Ruby (Rails)", "PHP", ".NET"]
      },
      apiDevelopment: [
        "RESTful API design and implementation",
        "GraphQL endpoints",
        "gRPC services",
        "Microservices architecture",
        "Event-driven architectures"
      ]
    },
    {
      id: "databases-storage",
      name: "Databases & Storage",
      description: "Extensive experience with relational, NoSQL, and distributed storage systems.",
      skills: [
        { name: "PostgreSQL", proficiency: 95, experience: "15+ years", level: "Expert" },
        { name: "MongoDB", proficiency: 85, experience: "8+ years", level: "Advanced" },
        { name: "MySQL", proficiency: 85, experience: "18+ years", level: "Advanced" },
        { name: "Redis", proficiency: 80, experience: "6+ years", level: "Advanced" },
        { name: "DuckDB", proficiency: 75, experience: "2+ years", level: "Proficient" },
        { name: "ZFS", proficiency: 90, experience: "8+ years", level: "Expert" }
      ],
      databaseAdmin: [
        "Performance tuning for 3.5TB+ PostgreSQL clusters",
        "Query optimization and indexing strategies",
        "Replication and high-availability configurations",
        "Backup and disaster recovery planning"
      ],
      storageSystems: {
        filesystems: ["ZFS", "ext4", "XFS", "Btrfs"],
        objectStorage: ["MinIO", "S3-compatible"],
        blockStorage: ["NVMe", "SAN", "InfiniBand FC"]
      }
    },
    {
      id: "devops-observability",
      name: "DevOps & Observability",
      description: "Building and maintaining CI/CD pipelines, monitoring, and alerting systems.",
      skills: [
        { name: "GitLab CI/CD", proficiency: 90, experience: "6+ years", level: "Expert" },
        { name: "Jenkins", proficiency: 85, experience: "8+ years", level: "Advanced" },
        { name: "Prometheus", proficiency: 90, experience: "5+ years", level: "Expert" },
        { name: "Grafana", proficiency: 90, experience: "5+ years", level: "Expert" },
        { name: "Jaeger", proficiency: 85, experience: "4+ years", level: "Advanced" },
        { name: "Helm", proficiency: 85, experience: "5+ years", level: "Advanced" }
      ],
      cicdPlatforms: {
        primary: ["GitLab CI", "Jenkins", "GitHub Actions"],
        practices: ["Blue-green deployments", "canary releases", "GitOps"]
      },
      observabilityStack: {
        metrics: ["Prometheus", "VictoriaMetrics", "NetData"],
        logging: ["Loki", "ELK Stack (Elasticsearch, Logstash, Kibana)"],
        tracing: ["Jaeger", "distributed tracing"],
        alerting: ["Alertmanager", "PagerDuty integration"]
      }
    },
    {
      id: "networking-security",
      name: "Networking & Security",
      description: "Deep understanding of network architecture and security best practices.",
      networking: [
        "VPN implementation (WireGuard, OpenVPN)",
        "VLAN configuration and management",
        "Load balancing (HAProxy, Nginx, Traefik, MetalLB)",
        "Service mesh (Linkerd)",
        "DNS management (Cloudflare, Route53)"
      ],
      security: {
        vulnerabilityScanning: ["Trivy", "Nessus", "OpenVAS", "vuls.io", "Wazuh"],
        penetrationTesting: ["nmap", "Metasploit"],
        accessControl: ["Teleport", "PKI", "certificate authorities"],
        compliance: ["Security scanning in CI/CD pipelines"]
      }
    },
    {
      id: "configuration-iac",
      name: "Configuration Management & IaC",
      description: "Infrastructure as Code and configuration management expertise.",
      tools: [
        { name: "Terraform", proficiency: 85, level: "Advanced" },
        { name: "Ansible", proficiency: 85, level: "Advanced" },
        { name: "Packer", proficiency: 80, level: "Proficient" },
        { name: "AWS CDK", proficiency: 85, level: "Advanced" },
        { name: "CloudFormation", proficiency: 85, level: "Advanced" },
        { name: "iPXE/Cloud-Init", proficiency: 90, level: "Expert" }
      ]
    },
    {
      id: "operating-systems",
      name: "Operating Systems",
      systems: [
        { name: "Arch Linux", proficiency: "Expert", experience: "10+ years" },
        { name: "Debian/Ubuntu", proficiency: "Expert", experience: "15+ years" },
        { name: "Alpine Linux", proficiency: "Advanced", experience: "5+ years" },
        { name: "RHEL/CentOS", proficiency: "Advanced", experience: "12+ years" },
        { name: "Windows Server", proficiency: "Advanced", experience: "15+ years" }
      ]
    }
  ],
  additionalCompetencies: [
    "Infrastructure-as-Code",
    "Site Reliability Engineering",
    "Microservices Architecture",
    "Service Mesh",
    "Load Balancing",
    "Bare Metal Infrastructure",
    "Hybrid Cloud",
    "Multi-Cloud Strategies",
    "Security Hardening",
    "Performance Tuning",
    "High Availability Design",
    "Disaster Recovery",
    "Monitoring & Alerting",
    "Distributed Logging",
    "Distributed Tracing",
    "GitOps Workflows",
    "Blue-Green Deployment",
    "Canary Deployment",
    "Container Orchestration",
    "Network Automation"
  ]
};
