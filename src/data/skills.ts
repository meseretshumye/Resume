export interface SkillCategory {
  id: string;
  name: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | string;
  level: number;
  icon: string;
  symbol: string;
  popular?: boolean;
}

export const skillCategories: SkillCategory[] = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend & Mobile" },
  { id: "backend", name: "Backend & APIs" },
  { id: "database", name: "Databases" },
  { id: "devops", name: "DevOps & Engineering Tools" }
];

export const skills: Skill[] = [
  // --- Frontend & Mobile ---
  { name: "React.js", category: "frontend", level: 94, icon: "Atom", symbol: "⚛", popular: true },
  { name: "React Native", category: "frontend", level: 90, icon: "Smartphone", symbol: "📱", popular: true },
  { name: "JavaScript (ES6+)", category: "frontend", level: 95, icon: "FileCode2", symbol: "JS", popular: true },
  { name: "TypeScript", category: "frontend", level: 88, icon: "FileCode", symbol: "TS", popular: true },
  { name: "Next.js (App Router)", category: "frontend", level: 86, icon: "Globe", symbol: "▲", popular: true },
  { name: "Expo (Mobile SDK)", category: "frontend", level: 88, icon: "Smartphone", symbol: "⇡", popular: false },
  { name: "Redux Toolkit & State Management", category: "frontend", level: 88, icon: "Layers", symbol: "🔄", popular: false },
  { name: "Tailwind CSS", category: "frontend", level: 96, icon: "Sparkles", symbol: "🌊", popular: true },
  { name: "HTML5 & Semantic Markup", category: "frontend", level: 98, icon: "Layout", symbol: "HTML", popular: true },
  { name: "CSS3 & Modern Animations", category: "frontend", level: 95, icon: "Palette", symbol: "CSS", popular: true },
  { name: "Bootstrap 5", category: "frontend", level: 92, icon: "Grid", symbol: "B", popular: false },
  { name: "Responsive & Mobile-First UI", category: "frontend", level: 96, icon: "MonitorSmartphone", symbol: "📱", popular: true },

  // --- Backend & APIs ---
  { name: "Node.js Runtime", category: "backend", level: 88, icon: "Server", symbol: "Node", popular: true },
  { name: "Express.js Framework", category: "backend", level: 88, icon: "Network", symbol: "ex", popular: true },
  { name: "RESTful API Architecture", category: "backend", level: 92, icon: "Cpu", symbol: "REST", popular: true },
  { name: "WebSockets & Socket.io", category: "backend", level: 85, icon: "Radio", symbol: "⚡", popular: true },
  { name: "GraphQL APIs", category: "backend", level: 82, icon: "Share2", symbol: "◈", popular: false },
  { name: "JWT & API Security", category: "backend", level: 88, icon: "KeyRound", symbol: "🔑", popular: true },
  { name: "Microservices Architecture", category: "backend", level: 84, icon: "Boxes", symbol: "⬡", popular: false },

  // --- Databases ---
  { name: "PostgreSQL", category: "database", level: 88, icon: "Database", symbol: "🐘", popular: true },
  { name: "MongoDB & Mongoose (NoSQL)", category: "database", level: 86, icon: "Database", symbol: "🍃", popular: true },
  { name: "MySQL / Relational DBs", category: "database", level: 85, icon: "HardDrive", symbol: "🐬", popular: false },
  { name: "Redis (In-Memory Caching)", category: "database", level: 82, icon: "Zap", symbol: "⚡", popular: false },
  { name: "Firebase & Cloud Firestore", category: "database", level: 84, icon: "Flame", symbol: "🔥", popular: false },
  { name: "Supabase & SQLite", category: "database", level: 84, icon: "HardDrive", symbol: "⚡", popular: false },

  // --- DevOps & Engineering Tools ---
  { name: "Docker & Containerization", category: "devops", level: 84, icon: "Box", symbol: "🐳", popular: true },
  { name: "Git & GitHub Version Control", category: "devops", level: 94, icon: "GitBranch", symbol: "⌥", popular: true },
  { name: "CI/CD & GitHub Actions", category: "devops", level: 82, icon: "Workflow", symbol: "⚙", popular: false },
  { name: "Vite & Modern Build Tooling", category: "devops", level: 90, icon: "Rocket", symbol: "⚡", popular: true },
  { name: "Postman & Automated API Testing", category: "devops", level: 88, icon: "Send", symbol: "🚀", popular: false },
  { name: "Linux & Bash Shell Scripting", category: "devops", level: 84, icon: "Terminal", symbol: "sh", popular: false },
  { name: "Figma & UI Prototyping", category: "devops", level: 85, icon: "Figma", symbol: "❖", popular: false },
  { name: "Contract & Project Administration", category: "devops", level: 92, icon: "FileText", symbol: "§", popular: true },
  { name: "Quality Assurance & Compliance", category: "devops", level: 95, icon: "ShieldCheck", symbol: "✓", popular: false }
];

