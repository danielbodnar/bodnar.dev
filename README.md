# bodnar.dev

Personal website and portfolio for Daniel Bodnar - Platform Engineer, Systems Architect, SRE, and Linux Evangelist.

## Overview

This site is built with [Eleventy](https://www.11ty.dev/) (11ty), a simple and powerful static site generator. It's fast, minimal, and easy to maintain.

## Pages

- **Home** - Landing page with quick overview
- **About** - Full professional profile
- **Resume** - Complete CV with work history
- **Experience** - Detailed timeline of professional experience
- **Skills** - Technical expertise breakdown
- **Tech Stacks** - Preferred tool combinations
- **Bookmarks** - Curated resources
- **Awesome Lists** - Meta-collection of awesome lists

## Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Installation

```bash
# Clone the repository
git clone https://github.com/danielbodnar/bodnar.dev

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start development server
bun run dev
# or
npm run dev
```

### Build

```bash
# Build for production
bun run build
# or
npm run build
```

## Configuration

Edit `settings.json` to customize:

- Site title and description
- Author information
- Custom links (GitHub, LinkedIn, etc.)
- Blog settings

## Project Structure

```
bodnar.dev/
├── _data/              # Global data files
├── _includes/          # Layout templates
├── core/               # Core assets (CSS, JS, fonts)
├── *.md                # Content pages
├── settings.json       # Site configuration
├── package.json        # Project dependencies
└── README.md           # This file
```

## Content

All page content is sourced from:
- `./bodnar.sh/PROFILE.md` - Professional profile
- `./bodnar.sh/danielbodnar.resume.v2023.md` - Resume content
- `./bodnar.sh/src/components/*.tsx` - Skills and experience data

## Contact

- **Email:** [daniel@bodnar.sh](mailto:daniel@bodnar.sh)
- **GitHub:** [@danielbodnar](https://github.com/danielbodnar)
- **LinkedIn:** [danielbodnar](https://linkedin.com/in/danielbodnar)
- **Website:** [bodnar.sh](https://bodnar.sh)

## License

MIT
