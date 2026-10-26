import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Code2,
  MapPin,
  Building2,
  Clock,
  Sparkles,
  Play,
  Pause,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const BACKGROUND_SLIDES = [
  {
    id: "battlestation",
    url: "/images/hero-developer-battlestation.jpg",
    title: "Multi-Screen Battlestation",
    tag: "Dual-Monitor IDE Rig",
  },
  {
    id: "portrait",
    url: "/images/hero-developer-portrait.jpg",
    title: "Lead Engineer Workstation",
    tag: "Disciplined Software Craft",
  },
  {
    id: "loft",
    url: "/images/hero-developer-loft.jpg",
    title: "Modern Studio Loft",
    tag: "High-Performance Setup",
  },
  {
    id: "workspace",
    url: "/images/hero-developer-workspace.jpg",
    title: "Ambient Coding Environment",
    tag: "Focused Architecture Rig",
  },
  {
    id: "ide",
    url: "/images/code-dark-ide.jpg",
    title: "High-Tech Code IDE",
    tag: "Full-Stack TypeScript & React",
  },
  {
    id: "screen-perspective",
    url: "/images/code-screen-perspective.jpg",
    title: "Enterprise Architecture",
    tag: "Scalable Systems in Motion",
  },
];

const ROLES = [
  "Full-Stack Web Developer",
  "React & Node.js Specialist",
  "Cloud Solutions Architect",
  "Mobile App Engineer (React Native)",
  "Civil Engineer & Project Lead",
  "UI/UX & Systems Craftsman",
];

const CORE_TECH_STACK = [
  { name: "React.js", symbol: "⚛", domain: "Frontend", color: "#06b6d4" },
  { name: "Node.js", symbol: "🟢", domain: "Backend", color: "#22c55e" },
  { name: "TypeScript", symbol: "TS", domain: "Architecture", color: "#3b82f6" },
  { name: "Next.js", symbol: "▲", domain: "Framework", color: "#6366f1" },
  { name: "Tailwind CSS", symbol: "🌊", domain: "Styling", color: "#38bdf8" },
  { name: "PostgreSQL", symbol: "🐘", domain: "Database", color: "#6366f1" },
  { name: "React Native", symbol: "📱", domain: "Mobile", color: "#0ea5e9" },
  { name: "NestJS", symbol: "🦁", domain: "API Engine", color: "#ef4444" },
  { name: "Docker", symbol: "🐳", domain: "DevOps", color: "#0284c7" },
  { name: "REST APIs", symbol: "⚡", domain: "Endpoints", color: "#f59e0b" },
  { name: "GraphQL", symbol: "◈", domain: "Data Query", color: "#ec4899" },
  { name: "Civil Eng.", symbol: "🏛", domain: "System Rigor", color: "#8b5cf6" },
];

const TICKER_ITEMS = [
  { name: "React.js", symbol: "⚛" },
  { name: "Node.js", symbol: "🟢" },
  { name: "TypeScript", symbol: "TS" },
  { name: "Next.js", symbol: "▲" },
  { name: "Tailwind CSS", symbol: "🌊" },
  { name: "PostgreSQL", symbol: "🐘" },
  { name: "React Native", symbol: "📱" },
  { name: "NestJS", symbol: "🦁" },
  { name: "REST APIs", symbol: "⚡" },
  { name: "Docker", symbol: "🐳" },
  { name: "GraphQL", symbol: "◈" },
  { name: "Civil Engineering Rigor", symbol: "🏛" },
  { name: "Clean Architecture", symbol: "📐" },
];

export default function Hero({ personalInfo, stats = [], onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Dynamic sliding role rotator
  useEffect(() => {
    const timer = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setIsSliding(false);
      }, 350);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  // Cinematic slow-motion developer carousel reel
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % BACKGROUND_SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentSlide = BACKGROUND_SLIDES[activeSlideIndex];

  return (
    <section
      id="home"
      className="hero-section relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-20 md:pt-36 md:pb-24 my-0 overflow-hidden bg-white dark:bg-[#0c1527] border-b border-slate-200/80 dark:border-blue-500/20 transition-colors duration-300"
    >
      {/* 1. Background Carousel / Video Reel Stack */}
      <div className="hero-carousel-background">
        {BACKGROUND_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide-item ${idx === activeSlideIndex ? "active" : ""}`}
            style={{ backgroundImage: `url("${slide.url}")` }}
            aria-label={slide.title}
          />
        ))}
      </div>

      {/* 2. Harmonized Vignette Overlay Sheets (Matching About Section) */}
      <div className="hero-overlay-sheet">
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 dark:from-[#0c1527]/95 dark:via-[#0c1527]/85 dark:to-[#0c1527]/30 transition-colors duration-300 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent/20 to-white dark:from-[#0c1527]/80 dark:via-transparent/20 dark:to-[#0c1527] pointer-events-none" />
      </div>

      {/* 3. Subtle Matrix Grid Pattern */}
      <div className="hero-grid-pattern" />

      {/* 4. Ambient Radial Bias Glows */}
      <div className="hero-glow hero-glow-1 animate-pulse-slow" />
      <div className="hero-glow hero-glow-2" />

      {/* 5. Main Hero Container (Two-Column Dual-Card Architecture) */}
      <div className="container hero-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ========================================================= */}
        {/* Left Column: Hero Content, Headings, Bio, CTAs & Socials */}
        {/* ========================================================= */}
        <div className="hero-content lg:col-span-7 flex flex-col items-start text-left w-full">
          {/* A. Status Badge */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold backdrop-blur-md shadow-xs mb-4">
            <span className="status-dot relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="status-text font-medium tracking-wide">
              Available for Remote & Hybrid Roles
            </span>
          </div>

          {/* B. Heading Group with Sliding Role Rotator */}
          <div className="hero-heading-group w-full">
            <p className="hero-greeting text-sm sm:text-base font-semibold tracking-wider uppercase text-indigo-600 dark:text-sky-400 mb-1">
              Hello, I'm
            </p>
            <h1 className="hero-name text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-3">
              Meseret{" "}
              <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 dark:from-sky-400 dark:via-indigo-300 dark:to-emerald-400 drop-shadow-xs">
                Shumye
              </span>
            </h1>

            {/* Sliding Role Title Rotator */}
            <div className="role-slider-wrapper flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 h-10 sm:h-12 overflow-hidden">
              <span className="role-prefix text-indigo-600 dark:text-sky-400 font-medium shrink-0">
                I am a{" "}
              </span>
              <div className="relative overflow-hidden h-full flex items-center">
                <span
                  className={`role-title inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:via-indigo-300 dark:to-emerald-400 transition-all duration-300 transform ${
                    isSliding
                      ? "fade-out -translate-y-full opacity-0"
                      : "fade-in translate-y-0 opacity-100"
                  }`}
                >
                  {ROLES[roleIndex]}
                </span>
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-indigo-500 dark:bg-sky-400 ml-1.5 animate-pulse shrink-0" />
              </div>
            </div>
          </div>

          {/* C. Enhanced Hero Bio Card */}
          <div className="hero-bio-card p-5 sm:p-6 rounded-2xl bg-white/75 dark:bg-[#0f172a]/75 backdrop-blur-xl border border-slate-200/90 dark:border-blue-500/25 shadow-lg shadow-slate-900/5 dark:shadow-black/20 hover:border-indigo-500/40 dark:hover:border-sky-400/40 transition-all duration-300 mb-7 max-w-2xl">
            <p className="hero-description text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-3">
              <Code2 className="meta-icon w-5 h-5 text-indigo-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <span>
                " I architect and engineer scalable full-stack web applications,
                cross-platform mobile apps (React Native & Expo Go), and resilient
                backend APIs (NestJS, Node.js, PostgreSQL & MySQL). Blending 4+
                years of civil engineering rigor with digital web craftsmanship,
                I transform complex requirements into seamless, user-centric software. "
              </span>
            </p>

            {/* Location & Rigor Meta Bar */}
            <div className="hero-location-meta flex flex-wrap items-center gap-3 sm:gap-4 pt-3.5 mt-3.5 border-t border-slate-200/80 dark:border-slate-800/80 text-xs font-medium text-slate-600 dark:text-slate-400">
              <span className="location-item flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
                <span>Addis Ababa, Ethiopia</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
              <span className="location-item flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
                <span>Civil Engineering Rigor</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
              <span className="location-item flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
                <span>4+ Years Experience</span>
              </span>
            </div>
          </div>

          {/* D. Hero Action Buttons (3 Unified Buttons) */}
          <div className="hero-actions flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-7">
            <a
              href="#projects"
              className="btn-primary-glow hero-btn-main flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm border border-indigo-500 hover:border-indigo-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="btn-secondary-glass hero-btn-resume flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/80 hover:bg-slate-50 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300/90 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-sky-400/60 shadow-sm transition-all hover:scale-[1.02] backdrop-blur-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
              <span>View Resume</span>
            </button>

            <a
              href="#contact"
              className="btn-secondary-glass hero-btn-contact flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/80 hover:bg-slate-50 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300/90 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-sky-400/60 shadow-sm transition-all hover:scale-[1.02] backdrop-blur-md cursor-pointer"
            >
              <Mail className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* E. Hero Social Strip */}
          <div className="hero-social-strip flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="social-label font-medium text-xs tracking-wider uppercase text-slate-500 dark:text-slate-400">
              Connect with me:
            </span>
            <div className="social-icons flex items-center gap-2.5">
              <a
                href={personalInfo.socialLinks?.github || "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700/80 transition-all hover:scale-110 shadow-xs cursor-pointer"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks?.linkedin || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700/80 transition-all hover:scale-110 shadow-xs cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks?.email || "mailto:Meseretshumye6@gmail.com"}
                className="social-link p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700/80 transition-all hover:scale-110 shadow-xs cursor-pointer"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
              {personalInfo.socialLinks?.whatsapp && (
                <a
                  href={personalInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700/80 transition-all hover:scale-110 shadow-xs cursor-pointer"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Right Column: Hero Tech Card & Interactive Grid           */}
        {/* ========================================================= */}
        <div className="hero-tech-card lg:col-span-5 w-full rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-2xl border border-slate-200/90 dark:border-blue-500/25 p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:border-indigo-500/40 dark:hover:border-sky-400/40">
          {/* Card Header */}
          <div className="tech-card-header flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
              <span className="tech-label text-xs font-mono font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
                CORE TECH STACK
              </span>
              <span className="tech-divider hidden sm:inline-block w-8 h-[1px] bg-slate-300 dark:bg-slate-700 ml-2" />
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-sky-500/10 text-indigo-600 dark:text-sky-400 border border-indigo-200 dark:border-sky-500/20">
              12+ CORE
            </span>
          </div>

          {/* Interactive Tech Badge Grid */}
          <div className="tech-badge-grid grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
            {CORE_TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="tech-badge-item group flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-sky-400/60 hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200 hover:-translate-y-0.5 cursor-default select-none"
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-transform group-hover:scale-110 shadow-xs"
                  style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
                >
                  {tech.symbol}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-indigo-600 dark:group-hover:text-sky-400 transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {tech.domain}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Background Video Reel Controller & Indicator */}
          <div className="pt-3.5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span className="text-[11px] font-mono font-medium text-slate-600 dark:text-slate-300 truncate">
                {currentSlide.title}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1">
                {BACKGROUND_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlideIndex(idx)}
                    title={`Slide 0${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeSlideIndex
                        ? "w-5 bg-indigo-600 dark:bg-sky-400 shadow-xs"
                        : "w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? "Pause slow motion" : "Play slow motion"}
                className="p-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 text-amber-500" />
                ) : (
                  <Play className="w-3.5 h-3.5 text-emerald-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Sliding Tech Stack Ticker (Infinite Slow Motion Marquee) */}
      <div className="absolute bottom-0 left-0 right-0 py-2.5 bg-white/85 dark:bg-[#0c1527]/85 backdrop-blur-md border-t border-slate-200/80 dark:border-blue-500/20 overflow-hidden z-20 select-none">
        <div className="animate-hero-marquee flex items-center gap-8 whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span className="text-indigo-600 dark:text-sky-400 font-bold">
                {item.symbol}
              </span>
              <span>{item.name}</span>
              <span className="text-slate-400 dark:text-slate-600 ml-6">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
