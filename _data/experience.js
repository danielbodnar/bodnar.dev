// Current positions
const fidelity = {
  id: "fidelity",
  company: "Fidelity Investments",
  title: "Principal Software, DevOps, and Cloud Engineer",
  period: "2023 - 2025",
  location: "Remote",
  type: "Full-time",
  technologies: [
    "AWS",
    "AWS CDK",
    "CloudFormation",
    "Kubernetes",
    "EKS",
    "Helm",
    "Jenkins",
    "Docker",
    "IAM",
    "Terraform",
    "Python",
    "Node.js",
    "Discourse",
    "Alpine Linux",
  ],
};

const bitbuilder = {
  id: "bitbuilder",
  company: "BitBuilder Cloud, LLC",
  title: "Founder, Cloud Architect, CIO",
  period: "2021 - Present",
  location: "Remote",
  type: "Self-employed",
  hardware: {
    primary: "HPE DL385 Gen10 with dual AMD Epyc 7601, 512GB RAM, 30TB NVMe",
    development: "HPE DL380 Gen8",
    totalResources: "2TB+ RAM, 320 cores, 64TB NVMe storage",
  },
  technologies: ["Kubernetes", "Docker", "Linux", "Bare Metal", "ZFS", "NVMe", "Grafana", "Prometheus", "VictoriaMetrics", "NetData", "Jaeger"],
};

const rsvp = {
  id: "rsvp",
  company: "RSVP & ACT, Inc",
  title: "SRE, SysAdmin, and Platforms Engineer",
  period: "April 2019 - 2021",
  location: "Remote",
  type: "Full-time",
  technologies: ["Kubernetes", "PostgreSQL", "MySQL", "SQLite", "GitLab", "Docker", "Proxmox", "ZFS", "InfiniBand", "Ansible", "Terraform", "Wireguard"],
};

const perspectives = {
  id: "perspectives",
  company: "Perspectives.org",
  title: "IT Director",
  period: "January 2018 - April 2019",
  location: "Remote",
  type: "Full-time",
  volunteerPeriod: "2012-2014",
  technologies: ["Go", "Docker", "Rancher", "AWS", "iPXE", ".NET", "LMS"],
};

const att = {
  id: "att",
  company: "AT&T Corp.",
  title: "Professional Application Developer",
  period: "March 2014 - June 2017",
  location: "Dallas, TX",
  type: "Full-time",
  technologies: ["Node.js", "Angular.js", "MongoDB", "Docker", "Rails", "MySQL", "JavaScript"],
};

// Prior experience (< 8 years ago)
const priorExperience = [
  {
    id: "tacc",
    company: "TACC Support",
    fullName: "Technicians Against Computer Cruelty",
    period: "2007-2013",
    description: "Computer repair / IT consulting / MSP company with up to 5 employees",
  },
  {
    id: "ticketdashboard",
    company: "TicketDashboard",
    period: "2013-2014",
    description: "Multi-tenant SaaS ticket management solution",
    technologies: ["MongoDB", "Node.js", "Python", "Angular", "Bootstrap"],
  },
  {
    id: "diab",
    company: "DIAB, INC",
    description: "Virtualized ~30 bare-metal servers on ESXi",
  },
  {
    id: "ipeople",
    company: "iPeople.com",
    description: "Technical support for hospital database systems (Meditech)",
  },
];

const currentPositions = [fidelity, bitbuilder];
const pastPositions = [rsvp, perspectives, att];
const allPositions = [...currentPositions, ...pastPositions];

export default {
  fidelity,
  bitbuilder,
  rsvp,
  perspectives,
  att,
  priorExperience,
  currentPositions,
  pastPositions,
  allPositions,
};
