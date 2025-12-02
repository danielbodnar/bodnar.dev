// Primary skill proficiency data (used across multiple pages)
const kubernetes = { name: "Kubernetes", proficiency: 95, experience: "6+ years", level: "Expert" };
const docker = { name: "Docker", proficiency: 95, experience: "8+ years", level: "Expert" };
const aws = { name: "AWS", proficiency: 90, experience: "7+ years", level: "Expert" };
const linux = { name: "Linux", proficiency: 98, experience: "22+ years", level: "Expert" };
const terraform = { name: "Terraform", proficiency: 85, experience: "5+ years", level: "Advanced" };
const ansible = { name: "Ansible", proficiency: 85, experience: "6+ years", level: "Advanced" };

const nodejs = { name: "Node.js", proficiency: 90, experience: "10+ years", level: "Expert" };
const go = { name: "Go", proficiency: 85, experience: "5+ years", level: "Advanced" };
const typescript = { name: "TypeScript", proficiency: 90, experience: "6+ years", level: "Expert" };
const python = { name: "Python", proficiency: 75, experience: "8+ years", level: "Proficient" };
const rust = { name: "Rust", proficiency: 70, experience: "2+ years", level: "Intermediate" };
const restapis = { name: "REST APIs", proficiency: 95, experience: "15+ years", level: "Expert" };

const postgresql = { name: "PostgreSQL", proficiency: 95, experience: "15+ years", level: "Expert" };
const mongodb = { name: "MongoDB", proficiency: 85, experience: "8+ years", level: "Advanced" };
const mysql = { name: "MySQL", proficiency: 85, experience: "18+ years", level: "Advanced" };
const redis = { name: "Redis", proficiency: 80, experience: "6+ years", level: "Advanced" };
const duckdb = { name: "DuckDB", proficiency: 75, experience: "2+ years", level: "Proficient" };
const zfs = { name: "ZFS", proficiency: 90, experience: "8+ years", level: "Expert" };

const gitlabci = { name: "GitLab CI/CD", proficiency: 90, experience: "6+ years", level: "Expert" };
const jenkins = { name: "Jenkins", proficiency: 85, experience: "8+ years", level: "Advanced" };
const prometheus = { name: "Prometheus", proficiency: 90, experience: "5+ years", level: "Expert" };
const grafana = { name: "Grafana", proficiency: 90, experience: "5+ years", level: "Expert" };
const jaeger = { name: "Jaeger", proficiency: 85, experience: "4+ years", level: "Advanced" };
const helm = { name: "Helm", proficiency: 85, experience: "5+ years", level: "Advanced" };

// Grouped by category for easy reference
const infrastructure = [kubernetes, docker, aws, linux, terraform, ansible];
const backend = [nodejs, go, typescript, python, rust, restapis];
const databases = [postgresql, mongodb, mysql, redis, duckdb, zfs];
const devops = [gitlabci, jenkins, prometheus, grafana, jaeger, helm];

// Top skills (for homepage/summary displays)
const topSkills = ["Kubernetes", "Docker", "AWS", "Linux", "PostgreSQL", "Terraform", "GitLab CI/CD", "Prometheus & Grafana"];

// Core competencies list (reusable across pages)
const coreCompetencies = [
  "Infrastructure-as-Code",
  "Site Reliability Engineering",
  "Microservices Architecture",
  "Container Orchestration",
  "GitOps Workflows",
  "High Availability Design",
  "Security Hardening",
  "Performance Tuning",
];

export default {
  // Individual skills
  kubernetes,
  docker,
  aws,
  linux,
  terraform,
  ansible,
  nodejs,
  go,
  typescript,
  python,
  rust,
  restapis,
  postgresql,
  mongodb,
  mysql,
  redis,
  duckdb,
  zfs,
  gitlabci,
  jenkins,
  prometheus,
  grafana,
  jaeger,
  helm,

  // Grouped
  infrastructure,
  backend,
  databases,
  devops,

  // Lists
  topSkills,
  coreCompetencies,
};
