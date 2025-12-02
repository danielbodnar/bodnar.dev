// Only store bookmark links - the page handles organization and presentation
const kubernetes = [
  { title: "Kubernetes Documentation", url: "https://kubernetes.io/docs/" },
  { title: "Kubernetes the Hard Way", url: "https://github.com/kelseyhightower/kubernetes-the-hard-way" },
  { title: "CNCF Landscape", url: "https://landscape.cncf.io/" },
  { title: "Awesome Kubernetes", url: "https://github.com/ramitsurana/awesome-kubernetes" },
  { title: "k9s", url: "https://k9scli.io/" },
  { title: "Lens", url: "https://k8slens.dev/" },
];

const aws = [
  { title: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
  { title: "AWS Well-Architected", url: "https://aws.amazon.com/architecture/well-architected/" },
  { title: "CDK Patterns", url: "https://cdkpatterns.com/" },
  { title: "AWS Samples", url: "https://github.com/aws-samples" },
  { title: "Last Week in AWS", url: "https://www.lastweekinaws.com/" },
];

const terraform = [
  { title: "Terraform Registry", url: "https://registry.terraform.io/" },
  { title: "Terraform Best Practices", url: "https://www.terraform-best-practices.com/" },
  { title: "Terragrunt", url: "https://terragrunt.gruntwork.io/" },
  { title: "Atlantis", url: "https://www.runatlantis.io/" },
];

const gitops = [
  { title: "Argo CD", url: "https://argo-cd.readthedocs.io/" },
  { title: "Flux", url: "https://fluxcd.io/" },
  { title: "GitOps Principles", url: "https://opengitops.dev/" },
];

const monitoring = [
  { title: "Prometheus Documentation", url: "https://prometheus.io/docs/" },
  { title: "Grafana Documentation", url: "https://grafana.com/docs/" },
  { title: "VictoriaMetrics", url: "https://victoriametrics.com/" },
  { title: "Netdata", url: "https://www.netdata.cloud/" },
];

const logging = [
  { title: "Loki Documentation", url: "https://grafana.com/docs/loki/" },
  { title: "Elastic Stack", url: "https://www.elastic.co/guide/" },
  { title: "FluentBit", url: "https://docs.fluentbit.io/" },
];

const security = [
  { title: "Trivy", url: "https://aquasecurity.github.io/trivy/" },
  { title: "WireGuard", url: "https://www.wireguard.com/" },
  { title: "Teleport", url: "https://goteleport.com/docs/" },
  { title: "HashiCorp Vault", url: "https://www.vaultproject.io/docs" },
];

const golang = [
  { title: "Go Documentation", url: "https://go.dev/doc/" },
  { title: "Effective Go", url: "https://go.dev/doc/effective_go" },
  { title: "Go by Example", url: "https://gobyexample.com/" },
  { title: "Awesome Go", url: "https://awesome-go.com/" },
];

const typescript = [
  { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/" },
  { title: "Node.js Documentation", url: "https://nodejs.org/docs/" },
  { title: "Bun Documentation", url: "https://bun.sh/docs" },
];

const rust = [
  { title: "The Rust Book", url: "https://doc.rust-lang.org/book/" },
  { title: "Rust by Example", url: "https://doc.rust-lang.org/rust-by-example/" },
  { title: "Awesome Rust", url: "https://github.com/rust-unofficial/awesome-rust" },
];

const linux = [
  { title: "Arch Wiki", url: "https://wiki.archlinux.org/" },
  { title: "Linux Performance", url: "https://www.brendangregg.com/linuxperf.html" },
  { title: "Systemd Documentation", url: "https://systemd.io/" },
  { title: "ZFS Documentation", url: "https://openzfs.github.io/openzfs-docs/" },
];

const postgresql = [
  { title: "PostgreSQL Documentation", url: "https://www.postgresql.org/docs/" },
  { title: "PostgreSQL Wiki", url: "https://wiki.postgresql.org/" },
  { title: "pgTune", url: "https://pgtune.leopard.in.ua/" },
];

const sreBooks = [
  { title: "Site Reliability Engineering", url: "https://sre.google/sre-book/table-of-contents/" },
  { title: "The Site Reliability Workbook", url: "https://sre.google/workbook/table-of-contents/" },
  { title: "Building Secure & Reliable Systems", url: "https://sre.google/books/building-secure-reliable-systems/" },
  { title: "Software Engineering at Google", url: "https://abseil.io/resources/swe-book" },
];

const terminalTools = [
  { title: "Neovim", url: "https://neovim.io/" },
  { title: "tmux", url: "https://github.com/tmux/tmux" },
  { title: "ripgrep", url: "https://github.com/BurntSushi/ripgrep" },
  { title: "fd", url: "https://github.com/sharkdp/fd" },
  { title: "bat", url: "https://github.com/sharkdp/bat" },
  { title: "eza", url: "https://github.com/eza-community/eza" },
];

export default {
  kubernetes,
  aws,
  terraform,
  gitops,
  monitoring,
  logging,
  security,
  golang,
  typescript,
  rust,
  linux,
  postgresql,
  sreBooks,
  terminalTools,
};
