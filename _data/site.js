const name = "Daniel Bodnar";
const title = "Platform Engineer | Systems Architect | SRE | Linux Evangelist";
const description = "30+ years of full-stack software engineering and infrastructure expertise";
const url = "https://bodnar.dev";

const author = {
  name: "Daniel Bodnar",
  email: "daniel@bodnar.sh",
  phone: "(940) 247-0019",
  location: "Denton, Texas",
  github: "danielbodnar",
  website: "https://bodnar.sh",
};

const stats = {
  experience: "30+",
  projects: "200+",
  technologies: "100+",
  uptime: "99.9%",
};

const social = {
  github: "https://github.com/danielbodnar",
  linkedin: "https://linkedin.com/in/danielbodnar",
  email: "mailto:daniel@bodnar.sh",
};

export default {
  name,
  title,
  description,
  url,
  author,
  stats,
  social,
  currentYear: new Date().getFullYear(),
};
