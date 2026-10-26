import React, { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

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
    title: "Meseret Shumye • Lead Developer",
    tag: "Workstation Battlestation",
  },
  {
    id: "code-screen",
    url: "/images/hero-code-editor-screen.jpg",
    title: "Full-Stack Code Architecture",
    tag: "Production React & TypeScript",
  },
  {
    id: "loft",
    url: "/images/hero-developer-loft.jpg",
    title: "Full-Stack Software Craftsman",
    tag: "Disciplined Engineering Rigor",
  },
  {
    id: "coding-hands",
    url: "/images/about-coding-hands.jpg",
    title: "Active Software Engineering",
    tag: "High-Performance Development Rig",
  },
  {
    id: "workspace",
    url: "/images/hero-developer-workspace.jpg",
    title: "Ambient Coding Environment",
    tag: "Focused Architecture Rig",
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

  // Cinematic slow-motion developer carousel reel transition
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % BACKGROUND_SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-section relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-20 md:pt-36 md:pb-24 my-0 overflow-hidden bg-white dark:bg-[#0c1527] border-b border-slate-200/80 dark:border-blue-500/20 transition-colors duration-300"
    >
      {/* 1. Unobstructed Slow-Motion Developer Video/Slide Background Reel */}
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

      {/* 5. Main Hero Container (Spacious, Clean Typography & Open Sightlines) */}
      <div className="container hero-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Clean, High-Contrast Typography & Dynamic Sliding Text */}
          <div className="hero-content lg:col-span-8 flex flex-col items-start text-left w-full">
            {/* Status Badge */}
            <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold backdrop-blur-md shadow-xs mb-4">
              <span className="status-dot relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="status-text font-medium tracking-wide">
                Available for Remote & Hybrid Roles
              </span>
            </div>

            {/* Heading Group with Sliding Role Rotator */}
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
              <div className="role-slider-wrapper flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 h-10 sm:h-12 overflow-hidden">
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

            {/* Clean Hero Action Buttons (Explore My Work & View Resume) */}
            <div className="hero-actions flex flex-wrap items-center gap-4 w-full sm:w-auto mb-6">
              <a
                href="#projects"
                className="btn-primary-glow hero-btn-main flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm border border-indigo-500 hover:border-indigo-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-secondary-glass hero-btn-resume flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 hover:bg-slate-50 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300/90 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-sky-400/60 shadow-sm transition-all hover:scale-[1.02] backdrop-blur-md cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          {/* Right Hero Space - Fully Open & Unobstructed for the Slow-Motion Transition Flow */}
          <div className="hidden lg:block lg:col-span-4" />
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
