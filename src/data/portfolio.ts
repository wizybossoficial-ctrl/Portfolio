export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'AI / Machine Learning' | 'DevOps / Cloud';
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  imageGradient: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Intermediate'; iconName?: string }[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    secondaryRole: string;
    bio: string;
    detailedBio: string[];
    location: string;
    availability: string;
    yearsOfExperience: string;
    projectsCompleted: string;
    satisfactionRate: string;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  testimonials: Testimonial[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Morgan",
    role: "Senior Full-Stack Engineer",
    secondaryRole: "UI/UX & Cloud Architect",
    bio: "Passionate about building scalable web applications, robust cloud microservices, and elegant user experiences that bridge design with rock-solid engineering.",
    detailedBio: [
      "I'm a software engineer with over 6 years of experience transforming complex ideas into intuitive, production-ready software. I specialize in the TypeScript ecosystem, modern React/Next.js architectures, and distributed backend systems.",
      "Throughout my career, I've designed platforms serving millions of monthly active users, led engineering migrations to cloud-native microservices, and mentored dozens of developers.",
      "When I'm not coding, you can find me contributing to open-source software, writing technical articles, exploring generative AI, or brewing the perfect cup of pour-over coffee."
    ],
    location: "San Francisco, CA (Open to Remote)",
    availability: "Available for Q4 contracts & full-time roles",
    yearsOfExperience: "6+",
    projectsCompleted: "45+",
    satisfactionRate: "99.8%",
    email: "alex.morgan.dev@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com"
  },
  skills: [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React 19 / Next.js", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Tailwind CSS & Radix", level: "Expert" },
        { name: "State Management (Zustand, Redux)", level: "Advanced" },
        { name: "Web Performance & Core Web Vitals", level: "Advanced" },
        { name: "Responsive Design & A11y", level: "Expert" }
      ]
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js / Express / NestJS", level: "Expert" },
        { name: "Python / FastAPI", level: "Advanced" },
        { name: "GraphQL & REST APIs", level: "Expert" },
        { name: "PostgreSQL & Prisma / Drizzle", level: "Expert" },
        { name: "Redis & Caching Strategies", level: "Advanced" },
        { name: "Microservices Architecture", level: "Advanced" }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker & Containerization", level: "Advanced" },
        { name: "AWS (S3, Lambda, ECS, RDS)", level: "Advanced" },
        { name: "CI/CD (GitHub Actions)", level: "Expert" },
        { name: "Vercel & Edge Deployment", level: "Expert" },
        { name: "Kubernetes & Terraform Basics", level: "Intermediate" },
        { name: "Monitoring & OpenTelemetry", level: "Advanced" }
      ]
    },
    {
      title: "Emerging Tech & AI",
      skills: [
        { name: "OpenAI & Anthropic APIs", level: "Advanced" },
        { name: "Vector Databases (Pinecone, pgvector)", level: "Advanced" },
        { name: "RAG Pipeline Architecture", level: "Advanced" },
        { name: "LangChain / AI SDK", level: "Advanced" },
        { name: "WebSockets & Real-Time Sync", level: "Expert" }
      ]
    }
  ],
  projects: [
    {
      id: "nexus-analytics",
      title: "Nexus Enterprise Analytics",
      tagline: "Real-time stream telemetry and predictive user intelligence dashboard.",
      description: "An enterprise analytics suite processing over 50M daily events with sub-100ms dashboard queries, custom cohort filtering, and anomaly detection.",
      longDescription: "Architected a high-throughput telemetry ingestion pipeline using Kafka, ClickHouse, and Next.js. Engineered an interactive charting canvas supporting 100k+ data points rendered at 60 FPS without UI jank. Integrated AI-driven pattern recognition for automated KPI alerts.",
      category: "Full Stack",
      tags: ["Next.js", "TypeScript", "ClickHouse", "Tailwind CSS", "WebSockets"],
      metrics: "50M+ daily events processed",
      liveUrl: "https://example.com/demo/nexus",
      githubUrl: "https://github.com/example/nexus-analytics",
      featured: true,
      imageGradient: "from-blue-600 via-indigo-600 to-violet-700"
    },
    {
      id: "hyperflow-ai",
      title: "HyperFlow AI Workspace",
      tagline: "Collaborative canvas for designing multi-agent AI automation workflows.",
      description: "Visual node-based canvas for orchestrating autonomous agents, tool integrations, and human-in-the-loop decision checkpoints with live simulation.",
      longDescription: "Built with React Flow and WebAssembly execution sandboxes. Allows developers and product teams to visually stitch together LLM prompts, database queries, and third-party APIs. Features live multiplayer collaboration via CRDTs.",
      category: "AI / Machine Learning",
      tags: ["React", "TypeScript", "LangChain", "FastAPI", "PostgreSQL"],
      metrics: "12,000+ active flow builders",
      liveUrl: "https://example.com/demo/hyperflow",
      githubUrl: "https://github.com/example/hyperflow-ai",
      featured: true,
      imageGradient: "from-purple-600 via-pink-600 to-rose-600"
    },
    {
      id: "vaultpay-gateway",
      title: "VaultPay Global Payments",
      tagline: "Zero-latency multi-currency settlement gateway with fraud detection.",
      description: "Secure fintech payment orchestrator supporting localized checkout flows across 40+ currencies with 99.999% SLA reliability.",
      longDescription: "Developed strict PCI-DSS compliant payment tokenization microservices. Engineered automated fallback routing between multiple banking acquirers, boosting checkout success rates by 14.3%.",
      category: "Full Stack",
      tags: ["Node.js", "PostgreSQL", "Redis", "Stripe API", "Docker"],
      metrics: "99.999% reliability SLA",
      liveUrl: "https://example.com/demo/vaultpay",
      githubUrl: "https://github.com/example/vaultpay",
      featured: true,
      imageGradient: "from-emerald-600 via-teal-600 to-cyan-700"
    },
    {
      id: "aurora-design-system",
      title: "Aurora Component Library",
      tagline: "Accessible, themeable design system adopted across 8 multi-tenant apps.",
      description: "Comprehensive React UI kit with 60+ headless components, automatic dark mode tokens, WCAG AAA compliance, and zero runtime CSS overhead.",
      longDescription: "Created to unify branding across disparate company micro-frontends. Engineered complete keyboard navigation, automated visual regression test suites via Playwright, and documented interactive stories in Storybook.",
      category: "Frontend",
      tags: ["React", "Tailwind CSS", "Storybook", "TypeScript", "A11y"],
      metrics: "60+ accessible components",
      liveUrl: "https://example.com/demo/aurora",
      githubUrl: "https://github.com/example/aurora-design",
      featured: false,
      imageGradient: "from-amber-500 via-orange-600 to-red-600"
    },
    {
      id: "cloudpulse-infra",
      title: "CloudPulse Infrastructure Mesh",
      tagline: "Automated Kubernetes cluster provisioning and cost-optimization operator.",
      description: "Cloud-native Kubernetes operator that dynamically provisions spot instances and scales workloads based on traffic patterns, slashing AWS bills by 38%.",
      longDescription: "Written in Go and integrated with Prometheus metrics. Predicts traffic surges using lightweight ARIMA time-series models and warms up serverless nodes in advance.",
      category: "DevOps / Cloud",
      tags: ["Go", "Kubernetes", "AWS", "Prometheus", "Terraform"],
      metrics: "38% cloud cost reduction",
      liveUrl: "https://example.com/demo/cloudpulse",
      githubUrl: "https://github.com/example/cloudpulse",
      featured: false,
      imageGradient: "from-cyan-600 via-blue-600 to-indigo-800"
    },
    {
      id: "synthetix-voice",
      title: "Synthetix Real-Time Voice Agent",
      tagline: "Sub-250ms latency bidirectional conversational audio agent.",
      description: "Next-generation voice assistant using WebRTC audio streaming, streaming speech-to-text, and low-latency voice synthesis for customer support automation.",
      longDescription: "Utilizes WebSocket audio streaming pipelines connected directly to Whisper and ElevenLabs. Includes interruptibility detection, background noise suppression, and tool-calling execution mid-conversation.",
      category: "AI / Machine Learning",
      tags: ["WebRTC", "Next.js", "Python", "ElevenLabs", "FastAPI"],
      metrics: "220ms median voice latency",
      liveUrl: "https://example.com/demo/synthetix",
      githubUrl: "https://github.com/example/synthetix-voice",
      featured: false,
      imageGradient: "from-fuchsia-600 via-purple-700 to-indigo-900"
    }
  ],
  experiences: [
    {
      period: "2023 — Present",
      role: "Lead Full-Stack Architect",
      company: "Stratosphere Technologies",
      location: "San Francisco, CA",
      description: "Leading the core platform team building cloud infrastructure and high-traffic customer-facing web applications.",
      highlights: [
        "Spearheaded the migration of legacy monolithic frontend to Next.js App Router, improving Lighthouse performance scores from 54 to 98.",
        "Architected real-time collaboration features using WebSockets and CRDTs, reducing server latency by 45%.",
        "Mentored a team of 9 engineers across frontend, backend, and QA disciplines."
      ],
      skills: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Turborepo"]
    },
    {
      period: "2021 — 2023",
      role: "Senior Frontend Engineer",
      company: "Prism Dynamics",
      location: "New York, NY (Remote)",
      description: "Responsible for designing and delivering modular web applications for Fortune 500 financial clients.",
      highlights: [
        "Built dynamic data visualization components capable of handling high-frequency live financial market feeds.",
        "Created an internal design system that reduced front-end feature delivery time by 30%.",
        "Implemented rigorous end-to-end testing with Playwright, catching over 120 regression issues pre-release."
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "GraphQL", "Jest"]
    },
    {
      period: "2019 — 2021",
      role: "Full-Stack Developer",
      company: "Vanguard Studio Labs",
      location: "Austin, TX",
      description: "Developed interactive web applications, client portals, and bespoke e-commerce experiences.",
      highlights: [
        "Delivered 18 custom client web projects on schedule with zero critical production downtime.",
        "Integrated multi-provider payment systems and automated shipping rate calculation APIs.",
        "Optimized database indexing and queries, cutting page load times by half."
      ],
      skills: ["JavaScript", "Node.js", "React", "MongoDB", "Docker"]
    }
  ],
  testimonials: [
    {
      name: "Elena Rostova",
      role: "VP of Product",
      company: "Stratosphere Technologies",
      content: "Alex is that rare engineer who deeply cares about user delight as much as database indices and latency. Working with him elevated our entire engineering standard.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "David Chen",
      role: "Engineering Director",
      company: "Prism Dynamics",
      content: "One of the sharpest engineers I have ever worked with. Alex took our fragmented frontend architecture and turned it into an ultra-fast, rock-solid product.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Sarah Lindqvist",
      role: "Principal Designer",
      company: "DesignCore Studio",
      content: "Alex has an incredible eye for detail. He translates complex Figma interactions into pixel-perfect, accessible code with buttery smooth 60fps animations.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    }
  ]
};
