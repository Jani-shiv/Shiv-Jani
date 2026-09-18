/**
 * Shiv Jani - Personal Brand & Digital Hub Configuration
 * Updated with requested removals and full official resume summary.
 */

window.SITE_CONFIG = {
  // Personal Information
  personal: {
    name: "Shiv Jani",
    title: "Chapter Leader @ Elastic User Group Gujarat | DevOps Engineer | CI/CD | AWS | Cloud & DevOps",
    badge: "CHAPTER LEADER @ ELASTIC USER GROUP GUJARAT",
    headline: "DevOps Engineer • Cloud • Kubernetes • Linux • AI",
    bio: "Currently pursuing a BSc in IT with a specialization in Cloud & Data Management from Gujarat University (expected July 2028). Volunteering with Elastic to demonstrate real-time data analysis using Elasticsearch and Kibana, and supporting open-source initiatives at Open Source Weekend.",
    summary: "DevOps & Cloud Engineer specializing in AWS, Kubernetes, Linux, Docker, Infrastructure as Code, and Observability. As Chapter Leader of Elastic User Group Gujarat, I lead technical sessions on Elasticsearch & AI infrastructure while publishing practical DevOps guides on Medium. Associated with Rittly (AI-powered platform for creators) and pursuing BSc IT in Cloud & Data Management at Gujarat University. Focused on building, automating, and scaling reliable cloud systems.",
    status: {
      active: true,
      text: "Open to opportunities",
      dotColor: "#10B981"
    },
    location: "Ahmedabad, Gujarat, India",
    phone: "+91 8160308850",
    email: "shivjani2005@gmail.com",
    avatar: "assets/Profile.png",
    avatarFallbackText: "SJ"
  },

  // Social & Contact Links
  socials: {
    linkedin: {
      url: "https://www.linkedin.com/in/shiv-jani",
      label: "LinkedIn",
      username: "shiv-jani"
    },
    github: {
      url: "https://github.com/Jani-shiv",
      label: "GitHub",
      username: "@Jani-shiv"
    },
    email: {
      url: "mailto:shivjani2005@gmail.com",
      label: "Email",
      username: "shivjani2005@gmail.com"
    },
    phone: {
      url: "tel:+918160308850",
      label: "Call",
      username: "+91 8160308850"
    },
    medium: {
      url: "https://medium.com/@shiv-jani",
      label: "Medium",
      username: "@shiv-jani"
    }
  },

  // Primary Action Cards (Main Portfolio Card Removed as requested)
  primaryLinks: [
    {
      id: "linkedin",
      number: "01",
      title: "LinkedIn Profile",
      description: "Connect with me professionally, view career updates and network.",
      url: "https://www.linkedin.com/in/shiv-jani",
      icon: "linkedin",
      featured: true,
      badge: "Connect"
    },
    {
      id: "github",
      number: "02",
      title: "GitHub Repositories",
      description: "Explore my DevOps projects, Kubernetes manifests, and IaC scripts.",
      url: "https://github.com/Jani-shiv",
      icon: "github"
    },
    {
      id: "email",
      number: "03",
      title: "Send an Email",
      description: "Direct email contact for collaborations and opportunities.",
      url: "mailto:shivjani2005@gmail.com",
      icon: "email"
    },
    {
      id: "call",
      number: "04",
      title: "Direct Phone Call",
      description: "+91 8160308850 (Work)",
      url: "tel:+918160308850",
      icon: "activity"
    }
  ],

  // Professional Work Experience
  experience: [
    {
      id: "exp-1",
      company: "Elastic",
      role: "Organizing Team Member - Elastic User Group Gujarat",
      period: "March 2026 - Present",
      location: "Ahmedabad, Gujarat, India",
      description: "Worked with the Elastic Stack (Elasticsearch, Kibana) to demonstrate real-time data analysis and search capabilities.",
      highlights: [
        "Explained core concepts of Elasticsearch indexing, querying, and data visualization using Kibana.",
        "Assisted in live demos showcasing log monitoring and analytics use cases.",
        "Handled visitor queries related to search performance and dashboard creation.",
        "Collaborated with team members to simplify complex technical concepts for non-technical audiences."
      ],
      technologies: ["Elasticsearch", "Kibana", "ELK Stack", "Log Monitoring"]
    },
    {
      id: "exp-2",
      company: "StellarMind.ai",
      role: "DevOps Engineer Intern",
      period: "March 2026 - June 2026",
      location: "Ahmedabad, Gujarat, India",
      description: "Engaged in an internship as a DevOps Engineer, focusing on enhancing core technical skills and automating infrastructure deployment.",
      highlights: [
        "Revised key concepts in Linux, Cloud Computing, Docker, Kubernetes, CI/CD, and Monitoring.",
        "Explored AWS, Azure, GCP, Ansible, Terraform, and GitOps to connect DevOps methodologies."
      ],
      technologies: ["Linux", "AWS", "Kubernetes", "Docker", "Terraform", "Ansible", "GitOps"]
    },
    {
      id: "exp-3",
      company: "Electromech Cloudtech Pvt. Ltd.",
      role: "Linux Administrator",
      period: "September 2025 - March 2026",
      location: "Ahmedabad, Gujarat, India",
      description: "Managed Linux server administration, user permissions, storage management, LVM volumes, and system security.",
      highlights: [
        "Configured and maintained Red Hat Enterprise Linux servers.",
        "Automated system administration tasks using Bash shell scripting."
      ],
      technologies: ["RHEL", "Linux Administration", "Shell Scripting", "LVM", "System Security"]
    },
    {
      id: "exp-4",
      company: "Open Source Weekend",
      role: "Volunteer",
      period: "December 2025 - July 2026",
      location: "Ahmedabad, Gujarat, India",
      description: "Contributed to Open Source Weekend by supporting community engagement and documentation efforts.",
      highlights: [
        "Focused on documentation and open source contribution awareness.",
        "Supported community building and event coordination."
      ],
      technologies: ["Open Source", "Community Building", "Documentation"]
    },
    {
      id: "exp-5",
      company: "Sairam Consultancy",
      role: "Social Media Manager",
      period: "May 2026 - August 2026",
      location: "Ahmedabad, Gujarat, India",
      description: "Managed and strengthened the digital presence of Sairam Consultancy through strategic social media initiatives.",
      highlights: [
        "Planned, created, and published content across social media platforms.",
        "Developed campaigns to increase reach, engagement, and brand awareness.",
        "Supported recruitment marketing and employer branding activities."
      ],
      technologies: ["Digital Marketing", "Content Strategy", "Brand Awareness"]
    },
    {
      id: "exp-6",
      company: "Freelance",
      role: "Frontend Developer & Web Developer",
      period: "January 2024 - June 2026",
      location: "Ahmedabad, Gujarat, India",
      description: "Designed and developed professional, responsive websites tailored to meet diverse client needs.",
      highlights: [
        "Delivered user-friendly interfaces utilizing HTML, CSS, and JavaScript.",
        "Managed projects efficiently, ensuring timely completion and client satisfaction."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
  ],

  // Education Background
  education: [
    {
      id: "edu-1",
      institution: "Gujarat University",
      degree: "MSc.IT - Cloud & Data Management and Application",
      period: "June 2026 - June 2028",
      location: "Ahmedabad, Gujarat, India"
    },
    {
      id: "edu-2",
      institution: "Gujarat University",
      degree: "BSc.IT - Cloud & Data Management and Application",
      period: "July 2023 - May 2026",
      location: "Ahmedabad, Gujarat, India"
    },
    {
      id: "edu-3",
      institution: "Acmegrade",
      degree: "Web Development & Information Technology Certification",
      period: "January 2024 - December 2024",
      location: "Online / Certification"
    },
    {
      id: "edu-4",
      institution: "Snvv High School",
      degree: "High School Diploma - Biology / Biological Sciences",
      period: "2022 - June 2023",
      location: "Ahmedabad, Gujarat, India"
    }
  ],

  // Professional Certifications
  certifications: [
    {
      name: "DevOps Engineer Micro Degree",
      issuer: "Professional Certification",
      badge: "DevOps"
    },
    {
      name: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3",
      issuer: "Red Hat",
      badge: "Red Hat / Linux"
    },
    {
      name: "From Relational Model (SQL) to MongoDB's Document Model",
      issuer: "MongoDB University",
      badge: "Database"
    },
    {
      name: "MongoDB Schema Design Patterns and Antipatterns Skill Badge",
      issuer: "MongoDB University",
      badge: "MongoDB"
    },
    {
      name: "Python Developer Certification",
      issuer: "Python Institute",
      badge: "Python"
    }
  ],

  // Technical Skills & Languages
  skills: [
    { name: "Linux Administration", category: "OS & Systems", icon: "terminal" },
    { name: "AWS Cloud", category: "Cloud Platform", icon: "cloud" },
    { name: "Kubernetes", category: "Orchestration", icon: "layers" },
    { name: "Docker", category: "Containerization", icon: "container" },
    { name: "Terraform", category: "IaC", icon: "code" },
    { name: "Ansible", category: "Automation", icon: "settings" },
    { name: "Elasticsearch & Kibana", category: "ELK Stack", icon: "activity" },
    { name: "Git & GitHub", category: "Version Control", icon: "git" },
    { name: "CI/CD Pipelines", category: "Automation", icon: "play" },
    { name: "Shell Scripting (Bash)", category: "Scripting", icon: "terminal" },
    { name: "GitOps & ArgoCD", category: "Continuous Delivery", icon: "refresh" },
    { name: "Cloud Security & IAM", category: "Security", icon: "shield" }
  ],

  languages: [
    { name: "English", level: "Limited Working Proficiency" },
    { name: "Hindi", level: "Native / Bilingual" },
    { name: "Gujarati", level: "Native / Bilingual" }
  ],

  // "My All Tech Life" Photo & Media Gallery
  gallery: {
    title: "My All Tech Life",
    subtitle: "Captured moments from workshops, Elastic User Group meetups, Elasticon, and community events.",
    items: [
      {
        src: "assets/PXL_20260315_053943073.jpg",
        title: "Elasticon Conference & Community Meetup",
        category: "Conferences",
        date: "2026"
      },
      {
        src: "assets/PXL_20260315_090714018.PORTRAIT~2.jpg",
        title: "Elastic User Group Gujarat Presentation",
        category: "Speaking",
        date: "2026"
      },
      {
        src: "assets/PXL_20260508_080751860.jpg",
        title: "DevOps & Cloud Hands-on Workshop",
        category: "Workshops",
        date: "2026"
      },
      {
        src: "assets/PXL_20260508_111913153.jpg",
        title: "Elasticsearch & Log Monitoring Demo",
        category: "Elastic",
        date: "2026"
      },
      {
        src: "assets/PXL_20260110_041926459.jpg",
        title: "Cloud & Open Source Community Event",
        category: "Events",
        date: "2026"
      },
      {
        src: "assets/PXL_20260404_090329257.PORTRAIT~2.jpg",
        title: "Kubernetes & Docker Tech Talk",
        category: "Speaking",
        date: "2026"
      },
      {
        src: "assets/PXL_20260519_043718846.PORTRAIT.ORIGINAL.jpg",
        title: "Open Source Weekend Community",
        category: "Community",
        date: "2026"
      },
      {
        src: "assets/PXL_20260823_081114078.jpg",
        title: "Search AI & Elasticsearch Live Demo",
        category: "Workshops",
        date: "2026"
      },
      {
        src: "assets/PXL_20260823_081115726.jpg",
        title: "DevOps Tech Networking",
        category: "Meetups",
        date: "2026"
      }
    ]
  },

  // Featured Project
  featuredProject: {
    tag: "FEATURED WORK",
    title: "Elasticsearch Log Monitoring & Real-Time Analytics",
    subtitle: "Elastic User Group Gujarat Interactive Demos",
    description: "Built and demonstrated real-time log analysis, indexing strategies, and custom Kibana dashboards for cloud observability use cases.",
    url: "https://github.com/Jani-shiv",
    demoUrl: "https://github.com/Jani-shiv",
    technologies: ["Elasticsearch", "Kibana", "ELK Stack", "Docker", "Linux"],
    stats: [
      { label: "Stack", value: "Elasticsearch" },
      { label: "Use Case", value: "Observability" },
      { label: "Community", value: "Elastic Gujarat" }
    ]
  },

  // Personal Brand CTA
  callToAction: {
    headline: "Let's Build & Collaborate.",
    description: "Interested in Cloud Infrastructure, DevOps automation, Elastic Stack, or technical community events? Reach out directly.",
    primaryBtn: {
      text: "Send Email",
      url: "mailto:shivjani2005@gmail.com"
    },
    secondaryBtn: {
      text: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/shiv-jani"
    }
  },

  // SEO Metadata
  seo: {
    title: "Shiv Jani • Elastic Chapter Leader & DevOps Engineer",
    description: "Shiv Jani's personal digital hub. Chapter Leader @ Elastic User Group Gujarat | DevOps Engineer | AWS, Kubernetes, Linux & AI.",
    siteUrl: "https://shivjani.github.io",
    ogImage: "assets/og-image.png",
    twitterHandle: "@shivjani"
  }
};
