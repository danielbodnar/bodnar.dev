export default {
  positions: [
    {
      id: "fidelity-investments",
      company: "Fidelity Investments",
      title: "Principal Software, DevOps, and Cloud Engineer",
      period: "2023 - 2025",
      location: "Remote",
      type: "Full-time",
      description: "Served as a technical leader and cloud architect, designing and implementing enterprise-scale cloud solutions while mentoring teams on AWS best practices and modern DevOps methodologies.",
      achievements: [
        "Architected comprehensive AWS solutions for enterprise applications, including designing secure networking topologies and multi-account strategies",
        "Developed and implemented robust IAM policies and CloudFormation templates adhering to strict financial industry security standards",
        "Designed and built a full AWS CDK platform enabling teams to rapidly deploy standardized, compliant infrastructure",
        "Engineered Kubernetes-based deployment solutions leveraging EKS, Helm charts, and custom operators for application management",
        "Rebuilt and optimized the Jenkins Core platform, increasing build efficiency and reducing pipeline execution times",
        "Created a cloud orchestration CLI tool that simplified cross-account resource management and deployment workflows",
        "Successfully deployed and managed Discourse forums on Alpine Linux containers in Kubernetes, ensuring high availability and performance",
        "Implemented infrastructure-as-code practices across multiple teams, significantly reducing configuration drift and deployment errors",
        "Designed and implemented automated security scanning and compliance checking within CI/CD pipelines",
        "Led knowledge-sharing sessions and developed documentation to elevate team capabilities in cloud-native technologies"
      ],
      technologies: ["AWS", "AWS CDK", "CloudFormation", "Kubernetes", "EKS", "Helm", "Jenkins", "Docker", "IAM", "Terraform", "Python", "Node.js", "Discourse", "Alpine Linux"]
    },
    {
      id: "bitbuilder-cloud",
      company: "BitBuilder Cloud, LLC",
      title: "Founder, Cloud Architect, CIO",
      period: "2021 - Present",
      location: "Remote",
      type: "Self-employed",
      description: "Launched a Cloud Hosting and Consulting private SaaS company with a focus on providing a vendor-agnostic, e2e encrypted, highly-available, and globally distributed hyper-converged platform for cost-efficient resiliency against hostile attackers.",
      infrastructure: {
        primary: "HPE DL385 Gen10 with dual AMD Epyc 7601, 512GB RAM, 30TB NVMe",
        development: "HPE DL380 Gen8 for testing and experimentation",
        totalResources: "2TB+ RAM, 320 cores, 64TB NVMe storage"
      },
      achievements: [
        "Single-handedly built core services on co-located custom bare metal servers with over 2TB RAM, 320 cores, 64TB NVMe storage",
        "Containerized and load-balanced several high-profile organizations with 1M+ global visitors/day",
        "Orchestrated global scaling via multi-cloud hybrid overlay layer based on custom k8s distribution and immutable Linux systems",
        "Implemented constant monitoring and observability using Grafana, Prometheus, VictoriaMetrics, NetData, and Jaeger"
      ],
      technologies: ["Kubernetes", "Docker", "Linux", "Bare Metal", "ZFS", "NVMe", "Grafana", "Prometheus", "VictoriaMetrics", "NetData", "Jaeger", "Multi-cloud", "Hybrid Infrastructure"]
    },
    {
      id: "rsvp-act",
      company: "RSVP & ACT, Inc",
      title: "SRE, SysAdmin, and Platforms Engineer",
      period: "April 2019 - 2021",
      location: "Remote",
      type: "Full-time",
      roles: [
        {
          title: "Site Reliability Engineer, Level II",
          description: "Directly responsible for identifying capacity and efficiency constraints, as well as engineering secure, highly-available, horizontally scalable platforms to run production environment apps, services, databases, and infrastructure.",
          achievements: [
            "Worked closely with dev teams and other departments to assess needs, constraints, and manual toil, then crafted automated and efficient solutions",
            "Architected, deployed, and managed dynamically scaling, secure, and fully version-controlled bare-metal Kubernetes clusters",
            "Responsible for all migrations from legacy systems to Kubernetes",
            "Deployed and managed self-hosted GitLab instance with DevOps build pipelines and automatic blue-green deployments",
            "Implemented monitoring, alerting, logging, tracing, and observability tools",
            "Implemented and enforced GitLab-based Infrastructure-as-Code procedures and pipelines",
            "Managed and performance-tuned +3.5TB PostgreSQL database cluster",
            "Deployed and managed multiple host, network, and container security tools and vulnerability scanners"
          ]
        },
        {
          title: "SysAdmin",
          description: "Directly responsible for and fully owned the management, maintenance, and support of all internal and external IT infrastructure.",
          achievements: [
            "Simplified and standardized various independent hypervisors with a centralized Proxmox cluster on ZFS and a 56G InfiniBand FC SAN",
            "Deployed W2019 AD server environment to centralize user accounts and management of 50+ workstations",
            "Mitigated two ransomware hacks within the first month of employment",
            "Implemented organization-wide VPN (using Wireguard), VLANs, and security measures",
            "Engineered isolated, zero-trust access for 3rd-party external developers",
            "Implemented customized Windows PE & Linux based iPXE/network boot servers"
          ]
        }
      ],
      technologies: ["Kubernetes", "PostgreSQL", "MySQL", "SQLite", "GitLab", "Docker", "Proxmox", "ZFS", "InfiniBand", "Ansible", "Terraform", "Wireguard", "VPN", "VLAN"]
    },
    {
      id: "perspectives",
      company: "Perspectives.org",
      title: "IT Director",
      period: "January 2018 - April 2019",
      location: "Remote",
      type: "Full-time",
      description: "Perspectives is an international NGO which provides a college level educational course with an average 250+ classes with 10k students per year.",
      achievements: [
        "Led IT team and India-based dev team while developing 5 year vision roadmap to rebuild legacy .NET 3.5 application into 18 modern portals",
        "Increased cloud hosting capacity by 10x while reducing budget by 50%",
        "Reduced minimum page load time from 5 seconds to 0.8 seconds",
        "Built DRM-secured offline-enabled streaming video player desktop app in Go"
      ],
      volunteerWork: {
        period: "2012-2014",
        achievements: [
          "Redesigned and developed modern replacement for perspectives.org home page",
          "Created online Learning Management System that reduced overhead by over 90%",
          "Architected automatic, horizontally scaling container orchestration platform"
        ]
      },
      technologies: ["Go", "Docker", "Rancher", "AWS", "Cloud Orchestration", "iPXE", "Container Orchestration", ".NET", "Performance Optimization", "DRM", "Video Streaming", "LMS"]
    },
    {
      id: "att",
      company: "AT&T Corp.",
      title: "Professional Application Developer",
      period: "March 2014 - June 2017",
      location: "Dallas, TX",
      type: "Full-time",
      description: "Full stack application engineer building custom web-based tools and services for various internal departments.",
      achievements: [
        "Solely responsible for managing entire project pipeline before implementing Scrum",
        "Led team-wide migration from Rails/MySQL stack to Node.js, Angular.js, and MongoDB",
        "Engineered Docker-based DevOps and deployment pipeline",
        "Built large-scale Order Status application with decoupled microservice pipeline",
        "Mastered functional programming in JavaScript for high-performance pipelines"
      ],
      technologies: ["Node.js", "Angular.js", "MongoDB", "Docker", "Rails", "MySQL", "JavaScript", "Functional Programming", "Microservices", "DevOps", "CI/CD", "REST APIs"]
    }
  ],
  priorExperience: [
    {
      id: "tacc-support",
      company: "TACC Support",
      period: "2007-2013",
      description: "Owned computer repair / IT consulting / MSP company for 5+ years, with as many as 5 employees at a time.",
      fullName: "Technicians Against Computer Cruelty"
    },
    {
      id: "ticketdashboard",
      company: "TicketDashboard",
      period: "2013-2014",
      description: "Launched business around redesigned ticket manager as multi-tenant SaaS solution.",
      technologies: ["MongoDB", "Node.js", "Python", "Angular", "Bootstrap"]
    },
    {
      id: "diab",
      company: "DIAB, INC",
      description: "Virtualized entire US-based operations multi-site server infrastructure (~30 bare-metal servers) on ESXi."
    },
    {
      id: "ipeople",
      company: "iPeople.com",
      description: "Provided technical support to help customers leverage proprietary ODBC drivers to access archaic hospital database systems (Meditech)."
    }
  ],
  earlyCareer: [
    "Built first website at 11, on a legal pad, four years after the birth of the Internet",
    "At 17 was writing HL7 (medical data exchange) protocols in MS DOS-based FoxPro 2.1",
    "At 19 accepted position as Windows Network Administration/SysAdmin",
    "Launched and ran TACC Support for five years, managing up to five employees"
  ]
};
