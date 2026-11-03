import React, { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

const BACKGROUND_SLIDES = [
  {
    id: "portrait",
    url: "/images/hero-developer-portrait.jpg?v=2",
    title: "Meseret Shumye • Dual-Display Workstation",
    tag: "Professional Engineering Rig",
    position: "center center",
  },
  {
    id: "loft",
    url: "/images/hero-developer-loft.jpg?v=2",
    title: "Meseret Shumye • Loft Studio Battlestation",
    tag: "Ultrawide Architecture Setup",
    position: "center center",
  },
  {
    id: "battlestation",
    url: "/images/hero-developer-battlestation.jpg?v=2",
    title: "Multi-Screen Battlestation",
    tag: "Dual-Monitor IDE Rig",
    position: "center center",
  },
  {
    id: "code-screen",
    url: "/images/hero-code-editor-screen.jpg?v=2",
    title: "Full-Stack Code Architecture",
    tag: "Production React & TypeScript",
    position: "center center",
  },
  {
    id: "workspace",
    url: "/images/hero-developer-workspace.jpg?v=2",
    title: "Ambient Coding Environment",
    tag: "Focused Architecture Rig",
    position: "center center",
  },
  {
    id: "coding-hands",
    url: "/images/about-coding-hands.jpg?v=2",
    title: "Active Software Engineering",
    tag: "High-Performance Development Rig",
    position: "center center",
  },
];

const ROLES = [
  "I'm Meseret Shumye",
  "I'm a Full-Stack Web Developer",
  "I'm a React & Node.js Specialist",
  "I'm a Cloud Solutions Architect",
  "I'm a Mobile App Engineer",
  "I'm a UI/UX & Systems Craftsman",
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
  { name: "Clean Architecture", symbol: "📐" },
];

export default function Hero({ personalInfo, stats = [], onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Preload all background images so transitions are instant without blank flashes
  useEffect(() => {
    BACKGROUND_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.url;
    });
  }, []);

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
      className="hero-section relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 md:pt-36 md:pb-24 my-0 overflow-hidden bg-slate-950 dark:bg-[#0c1527] border-b border-slate-800/80 dark:border-blue-500/20 transition-colors duration-300"
    >
      {/* 1. Unobstructed Slow-Motion Developer Video/Slide Background Reel */}
      <div className="hero-carousel-background">
        {BACKGROUND_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide-item ${idx === activeSlideIndex ? "active" : ""}`}
            style={{ 
              backgroundImage: `url("${slide.url}")`,
              backgroundPosition: slide.position || "center center"
            }}
            aria-label={slide.title}
          />
        ))}
      </div>

      {/* 2. Dark Cinematic Vignette Overlay Sheets */}
      <div className="hero-overlay-sheet">
        <div className="absolute inset-0 bg-slate-950/65 dark:bg-[#0c1527]/75 backdrop-blur-[0.5px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent/20 to-slate-950/90 pointer-events-none" />
      </div>

      {/* 3. Subtle Matrix Grid Pattern */}
      <div className="hero-grid-pattern" />

      {/* 4. Ambient Radial Bias Glows */}
      <div className="hero-glow hero-glow-1 animate-pulse-slow" />
      <div className="hero-glow hero-glow-2" />

      {/* 5. Main Hero Container (Spacious, Clean Typography & Centered to the Page) */}
      <div className="container hero-container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center justify-center text-center">
        <div className="hero-content flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto">
          {/* Centered Transition Headline - Same Weight, Style, Font & Enhanced Heroic Display */}
          <div className="hero-heading-group w-full text-center mb-6">
            <h1 className="hero-name flex items-center justify-center text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white h-16 sm:h-24 md:h-28 overflow-hidden w-full mx-auto drop-shadow-lg">
              <div className="relative overflow-hidden h-full flex items-center justify-center">
                <span
                  className={`inline-block font-extrabold tracking-tight text-white transition-all duration-350 ease-out transform ${
                    isSliding
                      ? "opacity-0 -translate-y-full"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {ROLES[roleIndex]}
                </span>
                <span className="inline-block w-1 sm:w-1.5 h-7 sm:h-11 md:h-14 bg-white ml-2 sm:ml-3 animate-pulse shrink-0 rounded-xs" />
              </div>
            </h1>
          </div>

          {/* Clean Hero Action Buttons (Explore My Work & View Resume) */}
          <div className="hero-actions flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-6">
            <a
              href="#projects"
              className="btn-primary-glow hero-btn-main flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm border border-indigo-500 hover:border-indigo-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="btn-secondary-glass hero-btn-resume flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/25 hover:border-white/50 shadow-sm transition-all hover:scale-[1.02] backdrop-blur-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>View Resume</span>
            </button>
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
