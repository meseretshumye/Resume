import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Film,
  Play,
  Pause,
  ChevronRight,
  Monitor,
} from "lucide-react";

const BACKGROUND_SCENES = [
  {
    id: "battlestation",
    url: "/images/hero-developer-battlestation.jpg",
    title: "Multi-Screen Battlestation",
    subtitle: "Dual-Monitor IDE Rig & Terminal",
    tag: "Workspace 01",
    alt: "Dual-Monitor Developer Battlestation with Modern IDE",
  },
  {
    id: "portrait",
    url: "/images/hero-developer-portrait.jpg",
    title: "Lead Software Craftsman",
    subtitle: "Engineering Disciplined Systems",
    tag: "Workspace 02",
    alt: "Professional Software Developer at Workstation",
  },
  {
    id: "loft",
    url: "/images/hero-developer-loft.jpg",
    title: "Modern Studio Loft",
    subtitle: "Creative Engineering Environment",
    tag: "Workspace 03",
    alt: "Developer Studio Loft Setup with Ambient Glow",
  },
  {
    id: "workspace",
    url: "/images/hero-developer-workspace.jpg",
    title: "Ambient Coding Station",
    subtitle: "Clean Code & Architecture",
    tag: "Workspace 04",
    alt: "Cinematic Ambient Developer Workspace",
  },
  {
    id: "ide",
    url: "/images/code-dark-ide.jpg",
    title: "Core IDE & Codebase",
    subtitle: "Full-Stack TypeScript & React",
    tag: "Workspace 05",
    alt: "High-Tech Code IDE Interface",
  },
];

const ROLES = [
  "Full-Stack Web Developer",
  "React & Node.js Specialist",
  "Civil Engineer & Project Lead",
  "Mobile & Enterprise SaaS Architect",
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
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Dynamic sliding role text rotator
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

  // Slow-motion background scene cross-fade video reel
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % BACKGROUND_SCENES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentScene = BACKGROUND_SCENES[activeSceneIndex];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-20 md:pt-36 md:pb-24 my-0 overflow-hidden bg-white dark:bg-[#0c1527] border-b border-slate-200/80 dark:border-blue-500/20 transition-colors duration-300"
    >
      {/* 1. Slow-Motion Video Reel Background Stack */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden select-none">
        {BACKGROUND_SCENES.map((scene, idx) => {
          const isActive = idx === activeSceneIndex;
          return (
            <div
              key={scene.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-85 dark:opacity-80 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={scene.url}
                alt={scene.alt}
                className="w-full h-full object-cover object-[70%_center] lg:object-right-center animate-hero-slow-motion"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        {/* Harmonized Vignette Overlays matching About section background (#0c1527 / white) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-white/95 via-white/85 to-white/25 dark:from-[#0c1527]/95 dark:via-[#0c1527]/85 dark:to-[#0c1527]/25 transition-colors duration-300 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-white/80 via-transparent/20 to-white dark:from-[#0c1527]/80 dark:via-transparent/20 dark:to-[#0c1527] pointer-events-none" />
      </div>

      {/* 2. Subtle Canvas Grid Pattern */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-15 dark:opacity-20 bg-[radial-gradient(#80808020_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]" />

      {/* 3. Ambient Bias Glow matching About section */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-blue-600/10 dark:from-blue-600/20 dark:via-indigo-500/15 dark:to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Hero Content - Clean, High-Contrast Typography & Dynamic Sliding Text */}
          <div className="lg:col-span-8 flex flex-col items-start text-left w-full">
            {/* Greeting & Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 dark:from-sky-400 dark:via-indigo-300 dark:to-emerald-400 drop-shadow-xs">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Sliding Role Text */}
            <div className="flex items-center gap-2.5 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-6 h-10 sm:h-12 overflow-hidden">
              <span className="text-indigo-600 dark:text-sky-400 font-medium shrink-0">
                A
              </span>
              <div className="relative overflow-hidden h-full flex items-center">
                <span
                  className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:via-indigo-300 dark:to-emerald-400 transition-all duration-300 transform inline-block ${
                    isSliding
                      ? "-translate-y-full opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  {ROLES[roleIndex]}
                </span>
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-indigo-500 dark:bg-sky-400 ml-1.5 animate-pulse shrink-0" />
              </div>
            </div>

            {/* Elevator Pitch Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.tagline} Based in{" "}
              <span className="text-indigo-600 dark:text-sky-400 font-semibold">
                Addis Ababa, Ethiopia
              </span>
              , I bring 4+ years of Professional Engineering discipline,
              delivering modern, accessible, and fast digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8 lg:mb-10">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm border border-indigo-500 hover:border-indigo-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-white font-semibold text-sm border border-slate-300/90 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-sky-400/60 shadow-sm transition-all hover:scale-[1.02] backdrop-blur-md cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile-Friendly Video Reel Status Bar */}
            <div className="lg:hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span className="text-slate-600 dark:text-slate-300 font-medium truncate max-w-[200px]">
                {currentScene.title}
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-[10px] font-mono">
                {activeSceneIndex + 1}/{BACKGROUND_SCENES.length}
              </span>
            </div>
          </div>

          {/* Right Column - Live Developer Video Reel HUD Controller */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="w-full max-w-sm rounded-2xl bg-white/75 dark:bg-[#0f172a]/75 backdrop-blur-xl border border-slate-200/90 dark:border-blue-500/25 p-5 shadow-2xl transition-all duration-300 hover:border-indigo-500/40 dark:hover:border-sky-400/40 group">
              {/* Card Header: Live Video Indicator */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                  </span>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
                    Live Video Reel
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  <Film className="w-3 h-3 text-indigo-500 dark:text-sky-400" />
                  <span>SLOW-MO</span>
                </div>
              </div>

              {/* Active Scene Metadata */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-indigo-600 dark:text-sky-400 font-semibold mb-1">
                  <span>{currentScene.tag}</span>
                  <span className="text-slate-400 dark:text-slate-500">
                    0{activeSceneIndex + 1} / 0{BACKGROUND_SCENES.length}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white transition-all duration-300">
                  {currentScene.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {currentScene.subtitle}
                </p>
              </div>

              {/* Scene Switcher Dots & Play/Pause Control */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5">
                  {BACKGROUND_SCENES.map((scene, idx) => (
                    <button
                      key={scene.id}
                      onClick={() => setActiveSceneIndex(idx)}
                      title={`Switch to ${scene.title}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeSceneIndex
                          ? "w-7 bg-indigo-600 dark:bg-sky-400 shadow-sm"
                          : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? "Pause slow motion" : "Play slow motion"}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-sky-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80 transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-amber-500" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-emerald-500" />
                      <span>Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Sliding Tech Stack Ticker (Infinite Slow Motion Marquee) */}
      <div className="absolute bottom-0 left-0 right-0 py-3 bg-white/85 dark:bg-[#0c1527]/85 backdrop-blur-md border-t border-slate-200/80 dark:border-blue-500/20 overflow-hidden z-20 select-none">
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
