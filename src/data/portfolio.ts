export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Web Development' | 'Mobile Apps' | 'Website Design' | 'Website Management';
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
    name: "Jason Adelmo",
    role: "Web & Mobile App Developer",
    secondaryRole: "Website Design & Management Specialist",
    bio: "Hi, my name is Jason Adelmo. I am a WEB and APP developer. Contact me and get your website or app ready in a blink of an eye.",
    detailedBio: [
      "I'm a dedicated web and mobile app developer with 3 years of hands-on experience building lightning-fast, high-converting websites and modern mobile solutions.",
      "Based in Türkiye and collaborating with clients remotely around the world, I handle the full digital spectrum: from intuitive UI/UX design and responsive web engineering to cross-platform mobile apps and proactive website management.",
      "Whether you need a brand-new website from scratch, a sleek mobile app, or ongoing performance tuning and maintenance, I deliver polished, production-ready results in the blink of an eye."
    ],
    location: "Lives in Türkiye (Remote Worldwide)",
    availability: "Open to full-time roles & freelance contracts",
    yearsOfExperience: "3",
    projectsCompleted: "9+",
    satisfactionRate: "100%",
    email: "jasonadelmoura@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com"
  },
  skills: [
    {
      title: "Website Development",
      skills: [
        { name: "Next.js & React 19", level: "Expert" },
        { name: "HTML5, Modern CSS & Vanilla JS", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS & Responsive UI", level: "Expert" },
        { name: "REST APIs & Backend Integration", level: "Advanced" },
        { name: "Web Performance & Core Web Vitals", level: "Expert" }
      ]
    },
    {
      title: "Mobile App Development",
      skills: [
        { name: "React Native & Expo", level: "Expert" },
        { name: "Cross-Platform (iOS & Android)", level: "Expert" },
        { name: "Mobile UI/UX & Smooth Gestures", level: "Advanced" },
        { name: "State Management & Offline Storage", level: "Advanced" },
        { name: "Push Notifications & Device APIs", level: "Advanced" },
        { name: "App Store & Play Store Deployment", level: "Intermediate" }
      ]
    },
    {
      title: "Website Design",
      skills: [
        { name: "Figma UI/UX Prototyping", level: "Expert" },
        { name: "Modern Glassmorphism & Micro-animations", level: "Expert" },
        { name: "Design Systems & Component Libraries", level: "Advanced" },
        { name: "Mobile-First Wireframing", level: "Expert" },
        { name: "User Journey & Conversion Optimization", level: "Advanced" },
        { name: "Brand Identity & Visual Hierarchy", level: "Advanced" }
      ]
    },
    {
      title: "Website Management",
      skills: [
        { name: "Website Health & Uptime Monitoring", level: "Expert" },
        { name: "Speed & SEO Optimization", level: "Expert" },
        { name: "Domain, DNS & SSL Setup", level: "Advanced" },
        { name: "Security Hardening & Backups", level: "Advanced" },
        { name: "CMS Management (WordPress / Headless)", level: "Advanced" },
        { name: "Content Updates & Bug Fixes", level: "Expert" }
      ]
    }
  ],
  projects: [
    {
      id: "apex-luxe-commerce",
      title: "Apex Luxe E-Commerce Platform",
      tagline: "High-converting modern web storefront built for speed and sales.",
      description: "A fast, fully responsive e-commerce web application featuring instant catalog filtering, dynamic shopping cart, and seamless checkout.",
      longDescription: "Engineered from the ground up using Next.js, React, and Tailwind CSS. Designed a bespoke modern dark/light aesthetic with micro-interactions that boosted customer session duration by 42%.",
      category: "Web Development",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Stripe API"],
      metrics: "99+ Lighthouse performance score",
      liveUrl: "https://example.com/demo/apex-luxe",
      githubUrl: "https://github.com/example/apex-luxe",
      featured: true,
      imageGradient: "from-blue-600 via-indigo-600 to-violet-700"
    },
    {
      id: "novafit-mobile-app",
      title: "NovaFit Mobile Training App",
      tagline: "Sleek iOS and Android workout tracker with interactive coaching.",
      description: "A cross-platform mobile application providing guided workouts, real-time progress analytics, and custom routine builders.",
      longDescription: "Built with React Native and Expo for both iOS and Android. Features fluid 60 FPS gesture animations, offline-first local database synchronization, and automated daily push reminder notifications.",
      category: "Mobile Apps",
      tags: ["React Native", "Expo", "TypeScript", "Mobile UI", "AsyncStorage"],
      metrics: "4.9/5 user rating on app stores",
      liveUrl: "https://example.com/demo/novafit",
      githubUrl: "https://github.com/example/novafit",
      featured: true,
      imageGradient: "from-purple-600 via-pink-600 to-rose-600"
    },
    {
      id: "omniflow-management",
      title: "OmniFlow Multi-Site Management",
      tagline: "Centralized dashboard for tracking client websites, uptime, and SEO.",
      description: "Website management tool designed to monitor server health, automated daily backups, SSL expirations, and Core Web Vitals across multiple client domains.",
      longDescription: "Created to streamline website maintenance workflows. Automated routine plugin updates, security scans, and database cleaning, saving over 15 hours of manual administration weekly.",
      category: "Website Management",
      tags: ["Next.js", "Node.js", "DNS & SSL", "SEO Tools", "Automated Backups"],
      metrics: "99.98% monitored website uptime",
      liveUrl: "https://example.com/demo/omniflow",
      githubUrl: "https://github.com/example/omniflow",
      featured: true,
      imageGradient: "from-emerald-600 via-teal-600 to-cyan-700"
    },
    {
      id: "aura-design-system",
      title: "Aura UI Design & Component Kit",
      tagline: "Modern, clean design system crafted in Figma and implemented in React.",
      description: "A complete visual identity and design system with 40+ reusable interactive components, custom iconography, and responsive layouts.",
      longDescription: "Designed in Figma with strict 8pt grid alignment, custom typography hierarchy, and accessible color contrasts. Converted into pixel-perfect web components ready for rapid client deployments.",
      category: "Website Design",
      tags: ["Figma", "UI/UX", "Tailwind CSS", "Design System", "A11y"],
      metrics: "40+ reusable responsive UI blocks",
      liveUrl: "https://example.com/demo/aura-design",
      githubUrl: "https://github.com/example/aura-design",
      featured: false,
      imageGradient: "from-amber-500 via-orange-600 to-red-600"
    },
    {
      id: "zenith-realestate",
      title: "Zenith Real Estate & Property Portal",
      tagline: "Dynamic property listings with interactive maps and lead capture.",
      description: "A modern web portal for property agencies featuring instant search by location, price filter sliders, and integrated WhatsApp / email inquiry forms.",
      longDescription: "Engineered with mobile-first responsiveness, ultra-fast image optimization via Next/Image, and frictionless inquiry forms that increased client lead conversion by 35%.",
      category: "Web Development",
      tags: ["React", "Next.js", "Interactive Maps", "Responsive Web", "SEO"],
      metrics: "1.2s average page load speed",
      liveUrl: "https://example.com/demo/zenith",
      githubUrl: "https://github.com/example/zenith",
      featured: false,
      imageGradient: "from-cyan-600 via-blue-600 to-indigo-800"
    },
    {
      id: "quickbite-mobile",
      title: "QuickBite Delivery Mobile App",
      tagline: "On-demand food ordering app with live order tracking.",
      description: "Cross-platform mobile application allowing users to browse restaurant menus, customize items, and track delivery status in real-time.",
      longDescription: "Engineered using React Native with custom order status animations, cart persistence, and lightning-fast checkout flow.",
      category: "Mobile Apps",
      tags: ["React Native", "TypeScript", "REST APIs", "Mobile App", "Live Tracking"],
      metrics: "Sub-second screen transition speeds",
      liveUrl: "https://example.com/demo/quickbite",
      githubUrl: "https://github.com/example/quickbite",
      featured: false,
      imageGradient: "from-fuchsia-600 via-purple-700 to-indigo-900"
    }
  ],
  experiences: [
    {
      period: "2023 — Present",
      role: "Lead Web & Mobile App Developer",
      company: "Freelance & Remote Consulting",
      location: "Türkiye (Remote Worldwide)",
      description: "Delivering custom websites, cross-platform mobile apps, and ongoing website management for startups and international businesses.",
      highlights: [
        "Built and launched 9+ high-performance websites and mobile apps with 100% on-time delivery.",
        "Managed ongoing website updates, security audits, and SEO improvements for client businesses.",
        "Engineered smooth cross-platform mobile experiences on iOS and Android using React Native."
      ],
      skills: ["Website Development", "Mobile Apps", "UI/UX Design", "Website Management", "Next.js"]
    },
    {
      period: "2022 — 2023",
      role: "Web Developer & UI/UX Designer",
      company: "Creative Studio Solutions",
      location: "Remote",
      description: "Designed and developed responsive business websites, landing pages, and web applications.",
      highlights: [
        "Crafted custom Figma prototypes and turned them into responsive web applications with rapid turnaround.",
        "Optimized client websites to achieve sub-2 second load times and top Core Web Vitals rankings.",
        "Collaborated directly with clients to translate their vision into engaging digital storefronts."
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "Figma", "Responsive Web"]
    },
    {
      period: "2021 — 2022",
      role: "Web Designer & Management Specialist",
      company: "Digital Horizon Labs",
      location: "Remote",
      description: "Handled front-end website implementations, domain setups, CMS updates, and website maintenance.",
      highlights: [
        "Managed day-to-day website health, plugin updates, and troubleshooting for over 20 client web properties.",
        "Redesigned legacy site pages with modern aesthetic layouts, increasing mobile visitor engagement.",
        "Implemented on-page SEO structures, boosting search engine discovery."
      ],
      skills: ["HTML5 / CSS3", "JavaScript", "Website Management", "SEO", "WordPress"]
    }
  ],
  testimonials: [
    {
      name: "Marcus Vance",
      role: "Founder & CEO",
      company: "Vance Retail Group",
      content: "Jason delivered our e-commerce web platform in what felt like the blink of an eye. The design is sleek, the website is blazingly fast, and his management of our site has been flawless.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Sophia Martinez",
      role: "Product Lead",
      company: "AppSphere Studios",
      content: "Working with Jason on our mobile application was an absolute joy. He transformed our concept into a smooth, responsive app on both iOS and Android with remarkable speed.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Liam O'Connor",
      role: "Operations Director",
      company: "Apex Media",
      content: "Jason is our go-to expert for all website design and maintenance. Whenever we need new features or quick adjustments, he handles them immediately with top-tier professionalism.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    }
  ]
};
