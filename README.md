# Shiv Jani • Personal Brand Hub & Digital Command Center

A production-quality, high-performance personal Linktree-style digital hub and brand website built for **Shiv Jani** (DevOps Engineer • Cloud • Kubernetes • Linux • AI).

Designed specifically for **GitHub Pages** hosting with zero backend, zero Node.js production runtime, zero server-side code, and 100% relative paths.

---

## 🌟 Key Features

- **Personal Digital Hub**: One unified URL representing Shiv Jani's professional profile, projects, articles, content channels, and community activities.
- **Bento Box UI Design**: Premium modern Bento grid layout combining developer brand aesthetics, subtle Neo-Brutalism, and clean micro-interactions.
- **Centralized Configuration (`config.js`)**: Easily edit profile info, social links, action cards, projects, articles, and tech stack without touching HTML code.
- **Instant Dark / Light Mode**: Auto-detects system preference, allows manual toggle, persists in `localStorage`, and includes inline anti-FOUC script.
- **100% GitHub Pages Compatible**: Uses relative paths (`assets/`, `css/`, `js/`), working seamlessly at both `username.github.io/` and repository subpaths (`username.github.io/repo-name/`).
- **SEO & Social Share Ready**: Complete OpenGraph, Twitter Cards, SVG Favicon, canonical tags, and dynamic JSON-LD `Person` structured data.
- **Accessibility & Performance**: WCAG compliant focus indicators, ARIA labels, semantic HTML5, keyboard navigation, and reduced-motion support.
- **Analytics Abstraction**: Built-in `trackEvent()` layer ready for Google Analytics 4, Plausible, Umami, or Cloudflare Web Analytics.

---

## 📁 File Structure

```text
i:\Devops\Shiv-Jani\
├── index.html               # Main semantic HTML5 document
├── config.js                # Centralized content & links configuration
├── script.js                # Root script entry (mirrored)
├── README.md                # Exhaustive documentation & deployment guide
├── robots.txt               # Search engine directives
├── sitemap.xml              # Search engine sitemap
├── CNAME                    # Custom domain placeholder
├── .gitignore               # Git ignored patterns
│
├── .github/
│   └── workflows/
│       └── pages.yml        # GitHub Actions automated deployment workflow
│
├── css/
│   ├── style.css            # Primary design system, themes, & components
│   └── responsive.css       # Mobile-first adaptive layout rules
│
├── js/
│   ├── script.js            # Core application rendering & interaction engine
│   ├── config.js            # Configuration mirror
│   └── analytics.js         # Optional event tracking abstraction layer
│
└── assets/
    ├── profile.jpg          # Professional headshot avatar
    ├── favicon.svg          # Modern SVG vector favicon
    └── og-image.png         # OpenGraph 1200x630 social preview card
```

---

## ⚡ Quick Start / Local Development

1. **Option 1: Direct File Open**
   Simply open `index.html` directly in any web browser. No server or build process required!

2. **Option 2: Local Web Server**
   Use any local static server of your choice:
   ```bash
   # Python
   python -m http.server 8000

   # Node / npx
   npx serve .
   ```

---

## 🚀 GitHub Pages Deployment Guide

### Method 1: Automated Deployment via GitHub Actions (Recommended)

1. **Create GitHub Repository**: Create a new public or private repository on GitHub (e.g. `personal-links` or `shivjani.github.io`).
2. **Push Code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Shiv Jani Personal Hub"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
3. **Configure Pages Source**:
   - Navigate to your repository on GitHub.
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. **Automatic Deployment**:
   - The `.github/workflows/pages.yml` workflow will automatically run, build, and deploy your site to GitHub Pages!
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/` (or `https://YOUR_USERNAME.github.io` if named accordingly).

---

## 🛠️ How to Customize Your Website

### 1. Update Profile Information & Bio
Open `config.js` and edit the `personal` block:
```javascript
personal: {
  name: "Shiv Jani",
  title: "DevOps Engineer • Cloud • Kubernetes • Linux • AI",
  badge: "DEVOPS • CLOUD • KUBERNETES • AI",
  bio: "Building with Cloud, DevOps, Kubernetes and AI.",
  status: {
    active: true,
    text: "Open to opportunities"
  }
}
```

### 2. Update Social Links
In `config.js`, update your social URLs. To hide an icon, simply clear its URL `""`:
```javascript
socials: {
  github: { url: "https://github.com/shivjani", label: "GitHub" },
  linkedin: { url: "https://linkedin.com/in/shivjani", label: "LinkedIn" },
  x: { url: "https://x.com/shivjani", label: "X (Twitter)" },
  youtube: { url: "https://youtube.com/@shivjani", label: "YouTube" }
}
```

### 3. Add or Edit Action Link Cards
In `config.js`, modify the `primaryLinks` array:
```javascript
primaryLinks: [
  {
    id: "portfolio",
    number: "01",
    title: "My Portfolio",
    description: "Explore my DevOps and Cloud projects.",
    url: "https://github.com/shivjani",
    icon: "briefcase",
    featured: true
  }
]
```

### 4. Add New Projects to the Bento Grid
To add a new project, add an entry to the `projects` array in `config.js`:
```javascript
projects: [
  {
    id: "my-new-project",
    title: "Terraform Multi-Cloud Engine",
    description: "Automated provisioning framework for AWS and GCP.",
    url: "https://github.com/shivjani/terraform-engine",
    tags: ["Terraform", "AWS", "GCP"]
  }
]
```

### 5. Add New Articles / Content
Add a new object to the `content` array in `config.js`:
```javascript
content: [
  {
    id: "art-new",
    category: "KUBERNETES",
    title: "Mastering Helm Chart Architecture",
    description: "Best practices for writing modular, maintainable Helm charts.",
    url: "https://medium.com/@shivjani/mastering-helm",
    readTime: "5 min read"
  }
]
```

---

## 🌐 Custom Domain Setup

If you wish to use a custom domain (e.g., `shivjani.com`):

1. Edit the `CNAME` file in the root directory and replace `YOUR-DOMAIN.COM` with your domain:
   ```text
   shivjani.com
   ```
2. Configure your DNS provider with the following DNS records pointing to GitHub Pages:
   - **Apex domain (`shivjani.com`)**:
     - `A` records pointing to:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - **Subdomain (`www.shivjani.com`)**:
     - `CNAME` record pointing to `YOUR_USERNAME.github.io`.
3. In GitHub Repository **Settings** → **Pages**, verify your custom domain and check **Enforce HTTPS**.

*(If you are NOT using a custom domain, simply delete the `CNAME` file or leave it unconfigured.)*

---

## 📊 Analytics Integration

Analytics is completely optional and disabled by default. To enable event tracking:

1. Open `js/analytics.js` and set `const ENABLED = true;`.
2. Include your Google Analytics, Plausible, or Umami script tag in `index.html`.
3. Calls to `Analytics.trackEvent("event_name", { params })` will automatically route to your installed provider.

---

## 🎨 Modifying Colors & Aesthetics

To tweak theme colors or fonts, edit the CSS variables in `css/style.css`:
```css
:root {
  --accent-primary: #FF6B35;   /* Warm DevOps Coral/Orange */
  --bg-primary: #F7F8FA;       /* Light Mode Background */
}

[data-theme="dark"] {
  --bg-primary: #0B0F14;       /* Dark Mode Background */
  --card-bg: #111827;          /* Dark Card Background */
}
```

---

© 2026 Shiv Jani. Built for performance, elegance, and scale.
