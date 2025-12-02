---
title: Experience
description: Professional work history spanning 30+ years across platform engineering, cloud architecture, SRE, and systems administration.
layout: libdoc_page.liquid
permalink: experience/index.html
eleventyNavigation:
    key: Experience
    order: 4
---

# Professional Experience

A timeline of my career journey and professional experience as a systems and platform architect, full stack sofware engineer, platform engineering, cloud architecture, site reliability engineering, and systems administration.

---

## Early Career Highlights

- Built my first website at **11**, on a legal pad...in my bathroom... four years after the birth of the Internet
- At **17** I was writing **HL7** (medical data exchange) protocols in MS DOS-based FoxPro 2.1
- At **19** I accepted a position as Windows Network Administration/SysAdmin of a small office, responsible for domain controllers, workstations, and firewalls
- Launched and ran **TACC Support** for five years, managing up to five employees

---

## BitBuilder Cloud, LLC

**Founder, Cloud Architect, CIO**
*2021 - Present | Remote | Self-employed*

Launched a Cloud Hosting and Consulting private SaaS company with a focus on providing a vendor-agnostic, e2e encrypted, highly-available, and globally distributed hyper-converged platform for cost-efficient resiliency against hostile attackers.

### Infrastructure

Built on co-located custom bare metal servers:
- **Primary:** HPE DL385 Gen10 with dual AMD Epyc 7601, 512GB RAM, 30TB NVMe
- **Development:** HPE DL380 Gen8 for testing and experimentation
- **Total Resources:** 2TB+ RAM, 320 cores, 64TB NVMe storage

### Key Achievements

- Single-handedly built core services on co-located custom bare metal servers with over 2TB RAM, 320 cores, 64TB NVMe storage
- Containerized and load-balanced several high-profile organizations with 1M+ global visitors/day
- Orchestrated global scaling via multi-cloud hybrid overlay layer based on custom k8s distribution and immutable Linux systems
- Implemented constant monitoring and observability using Grafana, Prometheus, VictoriaMetrics, NetData, and Jaeger

### Technologies Used

`Kubernetes` `Docker` `Linux` `Bare Metal` `ZFS` `NVMe` `Grafana` `Prometheus` `VictoriaMetrics` `NetData` `Jaeger` `Load Balancing` `Multi-cloud` `Hybrid Infrastructure` `E2E Encryption`

---

## Fidelity Investments

**Principal Software, DevOps, and Cloud Engineer**
*2023 - 2025 | Remote | Full-time*

Served as a technical leader and cloud architect, designing and implementing enterprise-scale cloud solutions while mentoring teams on AWS best practices and modern DevOps methodologies.

### Key Achievements

- Architected comprehensive AWS solutions for enterprise applications, including designing secure networking topologies and multi-account strategies
- Developed and implemented robust IAM policies and CloudFormation templates adhering to strict financial industry security standards
- Designed and built a full AWS CDK platform enabling teams to rapidly deploy standardized, compliant infrastructure
- Engineered Kubernetes-based deployment solutions leveraging EKS, Helm charts, and custom operators for application management
- Rebuilt and optimized the Jenkins Core platform, increasing build efficiency and reducing pipeline execution times
- Created a cloud orchestration CLI tool that simplified cross-account resource management and deployment workflows
- Successfully deployed and managed Discourse forums on Alpine Linux containers in Kubernetes, ensuring high availability and performance
- Implemented infrastructure-as-code practices across multiple teams, significantly reducing configuration drift and deployment errors
- Designed and implemented automated security scanning and compliance checking within CI/CD pipelines
- Led knowledge-sharing sessions and developed documentation to elevate team capabilities in cloud-native technologies

### Technologies Used

`AWS` `AWS CDK` `CloudFormation` `Kubernetes` `EKS` `Helm` `Jenkins` `Docker` `IAM` `Terraform` `Python` `Node.js` `Discourse` `Alpine Linux` `Infrastructure-as-Code` `CI/CD` `Security Scanning`

---

## RSVP & ACT, Inc

**SRE, SysAdmin, and Platforms Engineer**
*April 2019 - 2021 | Remote | Full-time*

### Site Reliability Engineer, Level II

Directly responsible for identifying capacity and efficiency constraints, as well as engineering secure, highly-available, horizontally scalable platforms to run production environment apps, services, databases, and infrastructure.

#### Key Achievements

- Worked closely with dev teams and other departments to assess needs, constraints, and manual toil, then crafted automated and efficient solutions specifically designed to address these needs
- Architected, deployed, and managed dynamically scaling, secure, and fully version-controlled bare-metal Kubernetes clusters
- Responsible for all migrations from legacy systems to Kubernetes
- Deployed and managed self-hosted GitLab instance with DevOps build pipelines and automatic blue-green deployments to Kubernetes
- Implemented monitoring, alerting, logging, tracing, and observability tools
- Implemented and enforced GitLab-based Infrastructure-as-Code procedures and pipelines
- Implemented and maintained ArchLinux and Debian package repos where appropriate
- Managed and performance-tuned +3.5TB PostgreSQL database cluster, as well as numerous MySQL and SQLite databases
- Deployed and managed multiple host, network, and container security tools and vulnerability scanners

#### Notable Tech Stack

**Container Tools:** cri-o, containerd, podman, lxc/lxd, kubeadm, ansible, terraform, cloudflare, metallb, cloud-config, ipxe, minio.io

**DevOps Tools:** linkerd, haproxy, nginx, traefik, trivy, helm, kubevela

**Observability:** Grafana + Loki + Prometheus, Jaeger, ELK, NetData, Zabbix

**Security:** nmap, metasploit, wazuh, openvas/nessus, trivy, vuls.io, wireguard, teleport, PKI tools

### Linux SysAdmin 

Directly responsible for and fully owned the management, maintenance, and support of all internal and external IT infrastructure, including all servers, networking, VPNs, and workstations.

#### Key Achievements

- Simplified and standardized various independent hypervisors with a centralized Proxmox cluster on ZFS and a 56G InfiniBand FC SAN
- Deployed W2019 AD server environment to centralize user accounts and management of 50+ workstations, 10+ Windows-based servers, and 3 separate shared remote desktop servers
- Managed all internal tech support responsibilities for the first year to maintain a short feedback loop while re-architecting the entire IT infrastructure
- Implemented organization-wide VPN (using Wireguard), VLANs, and several other measures to secure and lock down a multitude of risks and vulnerabilities
- Provided training to existing staff to address knowledge-gaps that caused vulnerabilities
- **Mitigated two ransomware hacks within the first month of employment**
- Engineered a convenient and easily-managed solution to provide isolated, zero-trust access to 3rd-party external developers
- Implemented customized Windows PE & Linux based iPXE/network boot servers to streamline provisioning VMs and workstations
- Engineered secure, resilient reverse-tunnels & storage services to allow efficient imaging and virtualization of external client devices

#### Technologies Used

`Kubernetes` `PostgreSQL` `MySQL` `SQLite` `GitLab` `Docker` `Proxmox` `ZFS` `InfiniBand` `Ansible` `Terraform` `Wireguard` `VPN` `VLAN` `Monitoring` `Observability` `DevOps` `Infrastructure-as-Code`

---

## Perspectives.org

**IT Director**
*January 2018 - April 2019 | Remote | Full-time*

**About:** Perspectives is an international NGO which provides a college level educational course with an average 250+ classes with 10k students per year.

### Key Achievements

- Led the IT team and support department as well as India-based dev team to support existing infrastructure while developing a **5 year vision roadmap** to rebuild legacy monolithic .NET 3.5 application into **18 modern department and role-based portals**
- Provided oversight, direction, and leadership to the volunteer-based IT team and support department, as well as India-based dev teams
- Resolved performance and efficiency issues:
  - Increased cloud hosting capacity and resources by **10x** while reducing budget by **50%**
  - Reduced minimum page load time from **5 seconds** to an average of **0.8 seconds**
- Developed a foundation "seed" template for each portal, including a promo landing site, authenticated webapp, and backend API
- Built a **DRM-secured offline-enabled streaming video player** desktop app in Go for classes with unreliable internet

### Volunteer Contributions (2012-2014)

- Redesigned and developed a modern-replacement for perspectives.org home page and info site
- Created a simple, beautiful, highly streamlined and intuitive online Learning Management System from scratch to modernize existing pen-and-paper-based process, which reduced overhead by over **90%**
- Deployed LMS tool to all Texas-based classes and architected an automatic, horizontally scaling container orchestration platform (Docker, Rancher, and iPXE-based RancherOS and AWS Spot Instances) to handle traffic and load spikes

### Technologies Used

`Go` `Docker` `Rancher` `AWS` `Cloud Orchestration` `iPXE` `Container Orchestration` `.NET` `Performance Optimization` `DRM` `Video Streaming` `LMS` `Horizontal Scaling`

---

## AT&T Corp.

**Professional Application Developer**
*March 2014 - June 2017 | Dallas, TX | Full-time*

Full stack application engineer building custom web-based tools and services for various internal departments.

### Key Achievements

- Solely responsible for managing the entire project pipeline (prior to implementing Scrum), including meeting with department heads to assess needs, scope requirements, develop rapid prototypes, and deploy to production
- Led team-wide migration from Rails/MySQL stack to Node.js, Angular.js, and MongoDB - which allowed for significantly faster prototyping and lower barrier-to-entry for new developers
  - *(Note: this was the early days of node v0.10.38 and angular was still in beta)*
- Engineered a Docker-based DevOps and deployment pipeline that improved efficiencies and reliability both in hosting environment and developer productivity
- Exclusively responsible for architecting and building a large-scale external "Order Status" application and a decoupled microservice pipeline that aggregated orders from over a dozen different legacy sources, including some that had to be screen-scraped
- Learned and mastered functional programming in JavaScript to address the challenges and complexity of building high-performance, parallel-worker pipelines in an asynchronous language

### Technologies Used

`Node.js` `Angular.js` `MongoDB` `Docker` `Rails` `MySQL` `JavaScript` `Functional Programming` `Microservices` `DevOps` `CI/CD` `REST APIs`

---

## Prior Experience (> 8 years ago)

### TACC Support (2007-2013)

Owned my own computer repair / IT consulting / MSP company for **5+ years**, with as many as **5 employees** at a time.

**Full company name:** Technicians Against Computer Cruelty

### TicketDashboard (2013-2014)

Launched a business around a redesigned and re-engineered version of the homegrown ticket manager I wrote for TACC Support into a multi-tenant SaaS solution.

**Tech stack:** MongoDB, Node.js, Python, Angular, Bootstrap

### DIAB, INC

International plastics manufacturing plant - Virtualized the entire US-based operations multi-site server infrastructure (of ~30 bare-metal servers) on ESXi.

### iPeople.com

Provided technical advice and support to help customers leverage proprietary ODBC drivers to access an archaic database system used by hospitals (Meditech).

---

## Related Pages

- [Skills](/skills/) - Technical expertise breakdown
- [Resume](/resume/) - Downloadable CV
- [Tech Stacks](/tech-stacks/) - Preferred tool combinations
