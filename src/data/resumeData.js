export const resumeData = {
  personalInfo: {
    name: "Meseret Shumye",
    title: "Full-Stack Web Developer & Civil Engineer",
    subtitle: "Turning complex concepts into pixel-perfect, scalable web experiences",
    tagline: "Bridging engineering rigor with modern digital web craftsmanship to build fast, beautiful, and accessible web applications.",
    email: "Meseretshumye6@gmail.com",
    phone: "+251 921 250 464",
    location: "Addis Ababa, Ethiopia",
    availability: "Available for Full-time, Remote & Freelance Projects",
    statusBadge: "Available for Hire",
    yearsOfExperience: "4+",
    avatar: "/images/meseret-shumye-portrait.jpg",
    headshot: "/images/meseret-shumye-headshot.jpg",
    deskPhoto: "/images/hero-developer-portrait.jpg",
    banner: "/images/developer-workspace-bg.jpg",
    logo: "/images/ms-luxury-logo.svg",
    logoSvg: "/images/ms-luxury-logo.svg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/meseret-shumye-767362395",
      twitter: "https://x.com/shumye19303/photo",
      facebook: "https://www.facebook.com/meseret.shumye.5",
      github: "https://github.com",
      whatsapp: "https://wa.me/251921250464",
      email: "mailto:Meseretshumye6@gmail.com"
    },
    bioSummary: "Meseret Shumye is a passionate Full-Stack Web Developer and Civil Engineer based in Addis Ababa, Ethiopia. With extensive expertise in modern frontend engineering (React, JavaScript ES6+, Tailwind CSS, Bootstrap) and backend systems, he blends structural problem-solving with digital artistry to deliver high-performance web applications.",
    detailedBio: [
      "I am Meseret Shumye, a Full-Stack Web Developer with a strong academic and practical background in Civil Engineering. This unique duality equips me with systematic analytical thinking, keen attention to detail, and a disciplined approach to building robust software architectures.",
      "My web development journey is rooted in turning design mockups into pixel-perfect, responsive web applications. I love building intuitive user interfaces that deliver smooth performance and delightful user experiences across all devices and screen sizes.",
      "In addition to software development, I serve as a Project Engineer with the Ethiopian Roads Authority, administrating major civil works contracts, leading stakeholder collaboration, and ensuring meticulous quality compliance.",
      "Whether developing a healthcare management portal, an e-commerce catalog, or an interactive web dashboard, I focus on clean code, maintainability, and client satisfaction. Let's collaborate to bring your digital vision to life!"
    ],
    highlights: [
      { label: "Location", value: "Addis Ababa, Ethiopia" },
      { label: "Degree", value: "B.Sc. in Civil Engineering" },
      { label: "Focus Areas", value: "React, Node.js, Modern UI/UX" },
      { label: "Languages", value: "English (Fluent), Amharic (Native)" }
    ]
  },

  stats: [
    { label: "Years Experience", value: "4+", icon: "Clock" },
    { label: "Projects Completed", value: "25+", icon: "CheckCircle2" },
    { label: "Client Satisfaction", value: "100%", icon: "HeartHandshake" },
    { label: "Core Technologies", value: "15+", icon: "Code2" }
  ],

  skillCategories: [
    {
      id: "all",
      name: "All Domains",
      description: "Complete full-stack technology landscape across all 4 core software engineering domains."
    },
    {
      id: "frontend",
      name: "Frontend & Mobile",
      description: "Building fast, accessible, cross-platform mobile apps and responsive web interfaces with modern frameworks.",
      icon: "Layout"
    },
    {
      id: "backend",
      name: "Backend & APIs",
      description: "Engineering secure, scalable server applications, enterprise microservices, and robust REST/GraphQL endpoints.",
      icon: "Server"
    },
    {
      id: "database",
      name: "Databases & Cloud",
      description: "Designing efficient relational & NoSQL schemas, optimizing complex queries, and managing resilient cloud backends.",
      icon: "Database"
    },
    {
      id: "devops",
      name: "DevOps & Engineering Tools",
      description: "Mobile testing, modern build tools, version control, API testing, and agile workflows.",
      icon: "Wrench"
    }
  ],

  skills: [
    // --- 1. Frontend & Mobile (Exact match to design) ---
    { name: "React.js", category: "frontend", level: 95, levelText: "Advanced", icon: "Atom", symbol: "⚛", popular: true },
    { name: "React Native", category: "frontend", level: 92, levelText: "Advanced", icon: "Smartphone", symbol: "📱", popular: true },
    { name: "Expo Go", category: "frontend", level: 90, levelText: "Advanced", icon: "Smartphone", symbol: "⇡", popular: true },
    { name: "Next.js", category: "frontend", level: 88, levelText: "Proficient", icon: "Globe", symbol: "▲", popular: true },
    { name: "TypeScript", category: "frontend", level: 90, levelText: "Advanced", icon: "FileCode", symbol: "TS", popular: true },
    { name: "JavaScript (ES6+)", category: "frontend", level: 96, levelText: "Advanced", icon: "FileCode2", symbol: "JS", popular: true },
    { name: "Tailwind CSS", category: "frontend", level: 95, levelText: "Advanced", icon: "Sparkles", symbol: "🌊", popular: true },
    { name: "Redux & Context API", category: "frontend", level: 90, levelText: "Advanced", icon: "Layers", symbol: "🔄", popular: true },
    { name: "HTML5 / Semantic Web", category: "frontend", level: 98, levelText: "Advanced", icon: "Layout", symbol: "HTML", popular: true },
    { name: "CSS3 / Sass", category: "frontend", level: 94, levelText: "Advanced", icon: "Palette", symbol: "CSS", popular: true },

    // --- 2. Backend & APIs (Exact match to design) ---
    { name: "NestJS", category: "backend", level: 90, levelText: "Advanced", icon: "Server", symbol: "Nest", popular: true },
    { name: "Node.js", category: "backend", level: 92, levelText: "Advanced", icon: "Server", symbol: "Node", popular: true },
    { name: "Express.js", category: "backend", level: 92, levelText: "Advanced", icon: "Network", symbol: "ex", popular: true },
    { name: "RESTful API Design", category: "backend", level: 95, levelText: "Advanced", icon: "Cpu", symbol: "REST", popular: true },
    { name: "JWT & OAuth 2.0", category: "backend", level: 90, levelText: "Advanced", icon: "KeyRound", symbol: "🔑", popular: true },
    { name: "WebSockets / Socket.io", category: "backend", level: 88, levelText: "Advanced", icon: "Radio", symbol: "⚡", popular: true },
    { name: "GraphQL", category: "backend", level: 82, levelText: "Intermediate", icon: "Share2", symbol: "◈", popular: false },
    { name: "Microservices Basics", category: "backend", level: 80, levelText: "Intermediate", icon: "Boxes", symbol: "⬡", popular: false },

    // --- 3. Databases & Cloud (Exact match to design) ---
    { name: "PostgreSQL", category: "database", level: 92, levelText: "Advanced", icon: "Database", symbol: "🐘", popular: true },
    { name: "MySQL", category: "database", level: 90, levelText: "Advanced", icon: "HardDrive", symbol: "🐬", popular: true },
    { name: "MongoDB", category: "database", level: 85, levelText: "Intermediate", icon: "Database", symbol: "🍃", popular: false },
    { name: "Firebase / Firestore", category: "database", level: 88, levelText: "Advanced", icon: "Flame", symbol: "🔥", popular: true },
    { name: "AWS (EC2, SSM, S3)", category: "database", level: 80, levelText: "Intermediate", icon: "Cloud", symbol: "☁", popular: false },
    { name: "Database Modeling", category: "database", level: 90, levelText: "Advanced", icon: "Database", symbol: "ERD", popular: true },

    // --- 4. DevOps & Engineering Tools (Exact match to design) ---
    { name: "Git & GitHub", category: "devops", level: 95, levelText: "Advanced", icon: "GitBranch", symbol: "⌥", popular: true },
    { name: "Postman & Swagger", category: "devops", level: 92, levelText: "Advanced", icon: "Send", symbol: "🚀", popular: true },
    { name: "Vite & Webpack", category: "devops", level: 90, levelText: "Advanced", icon: "Rocket", symbol: "⚡", popular: true },
    { name: "Docker Basics", category: "devops", level: 82, levelText: "Intermediate", icon: "Box", symbol: "🐳", popular: false },
    { name: "CI/CD & GitHub Actions", category: "devops", level: 88, levelText: "Advanced", icon: "GitBranch", symbol: "⚙", popular: true },
    { name: "Agile / Scrum", category: "devops", level: 94, levelText: "Advanced", icon: "Workflow", symbol: "🔄", popular: true }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Project Engineer & Contract Administrator",
      company: "Ethiopian Roads Authority",
      location: "Ethiopia",
      period: "2019 – Present",
      type: "Full-Time",
      description: "Managing engineering works and consultancy service contracts for high-stakes road construction infrastructure projects across the country.",
      responsibilities: [
        "Oversee and administer works and consulting service contracts in accordance with national and international standard specifications.",
        "Author official engineering correspondence, contractual assessments, and dispute evaluations for diverse stakeholders.",
        "Coordinate high-level meetings between regional contractors, supervising consultant engineers, and government authorities.",
        "Implement rigorous quality control protocols and monitor milestone compliance to ensure on-time, within-budget completion."
      ],
      technologies: ["Contract Management", "FIDIC Standards", "Technical Correspondence", "Quality Assurance", "Project Lifecycle"]
    },
    {
      id: "exp-2",
      role: "Lead Full-Stack Web & Mobile Developer",
      company: "Freelance & SaaS Solutions",
      location: "Remote / Hybrid",
      period: "2025 – Present",
      type: "Contract / Freelance",
      description: "Architecting and deploying modern web applications, scalable SaaS platforms, and high-performance cross-platform mobile apps for diverse digital businesses.",
      responsibilities: [
        "Architected and deployed production-ready SaaS platforms, responsive web applications, and multi-tenant client portals.",
        "Engineered intuitive cross-platform mobile apps and web user interfaces utilizing React, React Native, TypeScript, and modern Tailwind CSS.",
        "Developed robust full-stack architectures, high-performance RESTful and GraphQL APIs, and scalable PostgreSQL and MongoDB data layers.",
        "Delivered mobile-first, highly responsive applications with sub-second load times, Core Web Vitals optimization, and seamless user experiences."
      ],
      technologies: ["React.js", "React Native", "Next.js", "TypeScript", "Node.js", "SaaS Architecture", "Tailwind CSS", "REST & GraphQL APIs"]
    },
    {
      id: "exp-3",
      role: "Frontend Web Developer & Technical Associate",
      company: "Client Web Services",
      location: "Addis Ababa, Ethiopia",
      period: "2015 – 2019",
      type: "Contract",
      description: "Crafted interactive websites and digital assets for regional businesses, restaurants, and retail clients from scratch.",
      responsibilities: [
        "Transformed graphic design mockups and client requirements into pixel-perfect, cross-browser compatible websites.",
        "Implemented interactive UI components using HTML5, CSS3, JavaScript, and Bootstrap.",
        "Maintained existing codebases, performed bug fixes, and improved website accessibility and SEO structure."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Layouts", "UI/UX"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "B.Sc. in Civil Engineering",
      institution: "Wollo University",
      location: "Ethiopia",
      period: "2011 – 2014",
      grade: "Honors Graduate",
      description: "Comprehensive 4-year engineering degree encompassing structural mechanics, project scheduling, structural design, materials engineering, and advanced analytical problem solving.",
      skillsAcquired: ["Structural Analysis", "Project Scheduling", "Engineering Mathematics", "Technical Drafting", "Systematic Problem Solving"]
    },
    {
      id: "edu-2",
      degree: "Higher Secondary & Preparatory School",
      institution: "Ebinat Higher Secondary School",
      location: "Ebinat, Amhara, Ethiopia",
      period: "2008 – 2010",
      grade: "University Qualification Standing",
      description: "Concentrated on Natural Sciences (Advanced Physics, Mathematics, Chemistry, and English), successfully earning qualification for national university engineering enrollment.",
      skillsAcquired: ["Natural Sciences", "Advanced Mathematics", "Analytical Thinking", "Scientific Methodology"]
    },
    {
      id: "edu-3",
      degree: "Secondary School Certificate",
      institution: "Ebinat Secondary School",
      location: "Ebinat, Ethiopia",
      period: "2006 – 2008",
      grade: "Exemplary Academic Record",
      description: "Foundational general secondary education emphasizing academic excellence and extracurricular leadership.",
      skillsAcquired: ["Foundational Mathematics", "Information Technology", "Communication Skills"]
    }
  ],

  services: [
    {
      id: "web-dev",
      title: "Full-Stack Web Development",
      icon: "Code2",
      description: "Crafting modern, scalable, and fast web applications from scratch using React, Node.js, and modern architectural principles.",
      deliverables: ["Custom React SPAs", "REST API Integration", "State Management", "Performance Optimization"]
    },
    {
      id: "ui-ux",
      title: "Responsive UI/UX Design",
      icon: "Layout",
      description: "Designing intuitive, accessible, and mobile-first user interfaces that deliver delightful digital experiences on phones, tablets, and desktops.",
      deliverables: ["Mobile-First Layouts", "Dark/Light Mode Systems", "Micro-Interactions", "Accessibility (WCAG)"]
    },
    {
      id: "healthcare-retail",
      title: "Custom Business Portals",
      icon: "Building2",
      description: "Tailored web platforms for healthcare clinics, pharmacies, restaurants, colleges, and service businesses with scheduling and dynamic catalogs.",
      deliverables: ["Appointment Booking", "Dynamic Catalogs", "Customer Portals", "WhatsApp / Call Integration"]
    },
    {
      id: "performance-seo",
      title: "Performance & SEO Optimization",
      icon: "Gauge",
      description: "Boosting website speed, Core Web Vitals, and search engine ranking to increase organic traffic, engagement, and conversion.",
      deliverables: ["Sub-2s Page Loads", "Technical SEO", "Image & Code Bundling", "Google Lighthouse 95+"]
    },
    {
      id: "graphics-visual",
      title: "Graphic & Digital Design",
      icon: "Palette",
      description: "Creating engaging visual elements, digital branding assets, illustrations, and banner media that strengthen company identity.",
      deliverables: ["Brand Identity", "Digital Banners", "Vector Art & Icons", "Visual Assets"]
    },
    {
      id: "consultancy",
      title: "Technical Consultancy & Review",
      icon: "MessagesSquare",
      description: "Providing empathetic guidance, codebase audits, technology stack advice, and project management oversight for digital projects.",
      deliverables: ["Code Review", "Architecture Advisory", "Contract Compliance", "Mentorship"]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "PharmaLink",
      subtitle: "Enterprise Digital Pharmacy & Telemetry SaaS",
      category: "Enterprise SAAS",
      featured: true,
      image: "/images/pharmalink-digital-saas.png",
      description: "A next-generation Enterprise Cloud SaaS platform engineered to digitalize pharmaceutical networks and clinical supply chains. Replaces manual paper workflows with automated e-prescription routing, real-time dispensing telemetry, multi-hospital cloud sync, and predictive batch expiry algorithms.",
      highlights: [
        "Real-time e-prescription dispatching & verified cryptographic audit logs",
        "Multi-hospital node synchronization with sub-second API telemetry",
        "Automated digital batch tracking, stock reserve alerts & PO generation",
        "Enterprise RBAC with HIPAA-aligned patient encryption and audit trails"
      ],
      technologies: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "WebSockets", "Docker"],
      liveUrl: "https://meseretshumye.com/pharmalink",
      githubUrl: "https://github.com/meseretshumye/pharmalink-saas"
    },
    {
      id: "proj-2",
      title: "Enat Health Care Solution",
      subtitle: "Comprehensive Digital Health & Clinic Enterprise SaaS",
      category: "Enterprise SAAS",
      featured: true,
      image: "/images/Enat-Heath-care-solutions -f.jpg",
      description: "A production-grade, patient-centered Enterprise SaaS healthcare platform engineered for Enat Healthcare Solutions. Provides automated patient onboarding, electronic health records (EHR), specialist doctor scheduling, and telehealth consultations.",
      highlights: [
        "Interactive doctor appointment scheduling flow with automated confirmations",
        "Electronic Health Record (EHR) management with patient consultation archives",
        "Mobile-first responsive architecture tested across 15+ screen sizes",
        "Role-based clinical views with encrypted medical histories and lab report delivery"
      ],
      technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Node.js", "MongoDB", "WebSockets"],
      liveUrl: "https://meseretshumye.com/enat-health",
      githubUrl: "https://github.com/meseretshumye/enat-healthcare-solution"
    },
    {
      id: "proj-3",
      title: "Zekien Ride-App",
      subtitle: "On-Demand Urban Mobility & Ride-Hailing Mobile Application",
      category: "Mobile App",
      featured: true,
      image: "/images/zekien-ride-preview.svg",
      description: "A modern, high-performance on-demand ride-hailing and urban mobility mobile application connecting riders with nearby drivers in real time. Features live GPS map tracking, dynamic route fare estimation, instant trip dispatching, and secure in-app payments.",
      highlights: [
        "Live GPS vehicle tracking and turnkey route navigation using Mapbox & Google Maps SDK",
        "Real-time driver dispatch algorithm matching passengers with nearby drivers in seconds",
        "Integrated multi-currency digital wallet supporting Telebirr, CBE Birr, cards, and cash",
        "In-app driver-rider messaging, emergency SOS safety trigger, and two-way rating system"
      ],
      technologies: ["React Native", "Expo", "Node.js", "Socket.io", "Mapbox SDK", "Tailwind CSS", "Redux Toolkit"],
      liveUrl: "https://meseretshumye.com/zekien-ride",
      githubUrl: "https://github.com/meseretshumye/zekien-ride-app"
    },
    {
      id: "proj-4",
      title: "Apple E-Commerce",
      subtitle: "Premium Device Showcase & Online Storefront",
      category: "E-Commerce",
      featured: true,
      image: "/images/apple-ecommerce-preview.svg",
      description: "An ultra-modern, Apple-inspired e-commerce web platform engineered for browsing and purchasing flagship consumer tech products. Features dynamic device customizers, interactive 360° product previews, seamless cart state management, and streamlined checkout.",
      highlights: [
        "Interactive hardware spec configurator with real-time price updates for chip, RAM & storage",
        "Smooth fluid micro-interactions, dark aesthetic styling, and responsive product showcase",
        "Persistent cart and wishlist state management with simulated Stripe payment gateway",
        "Optimized image delivery pipeline achieving 99+ Google Lighthouse performance score"
      ],
      technologies: ["React.js", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "Stripe API", "Vite"],
      liveUrl: "https://meseretshumye.com/apple-store",
      githubUrl: "https://github.com/meseretshumye/apple-ecommerce-platform"
    }
  ],

  testimonials: [
    {
      name: "Alemayehu Tadesse",
      role: "Senior Resident Engineer, Infrastructure Projects",
      company: "ERA Road Supervision",
      content: "Meseret demonstrates an exceptional ability to analyze complex engineering requirements and organize technical documentation with precision. His disciplined approach and communication clarity make him an invaluable asset on any technical team."
    },
    {
      name: "Dr. B. Haile",
      role: "Clinical Director",
      company: "Enat Healthcare Solutions",
      content: "Meseret developed our website with immense care, patience, and professional craftsmanship. Our patients love the clean design and easy appointment booking. He delivered well ahead of schedule and provided top-tier support!"
    },
    {
      name: "Selamawit Kebede",
      role: "Founder & Creative Lead",
      company: "Artisan Wall Decor",
      content: "Working with Meseret was an absolute pleasure. He transformed our physical gallery into a stunning digital showcase that accurately portrays the elegance of our art pieces. Our customer inquiries grew by over 60% within weeks!"
    }
  ]
};

