export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise SAAS' | 'Mobile App' | 'E-Commerce' | string;
  featured: boolean;
  image: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectCategories = [
  'All Projects',
  'Enterprise SAAS',
  'Mobile App',
  'E-Commerce'
] as const;

export type ProjectCategory = typeof projectCategories[number];

export const projects: Project[] = [
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
];

