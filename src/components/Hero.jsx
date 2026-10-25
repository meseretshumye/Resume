import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Clock, 
  CheckCircle2, 
  HeartHandshake, 
  Code2
} from 'lucide-react';

const ROLES = [
  "Full-Stack Web Developer",
  "React & Node.js Specialist",
  "Civil Engineer & Project Lead",
  "Mobile & Enterprise SaaS Architect",
  "UI/UX & Systems Craftsman"
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
  { name: "Clean Architecture", symbol: "📐" }
];

export default function Hero({ personalInfo, stats = [], onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

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

  const statIcons = {
    Clock: Clock,
    CheckCircle2: CheckCircle2,
    HeartHandshake: HeartHandshake,
    Code2: Code2
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-20 md:pt-36 md:pb-24 my-0 overflow-hidden bg-slate-950 dark:bg-[#070b14] transition-colors duration-300">
      {/* 1. Authentic Environmental Developer Background Image with Cinematic Slow Motion Animation */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/hero-developer-portrait.jpg"
          alt="Professional Software Developer at Workstation"
          className="w-full h-full object-cover object-[70%_center] lg:object-right-center opacity-85 dark:opacity-80 animate-hero-slow-motion transition-opacity duration-700"
        />
        {/* Soft Luxury Vignette Overlays for Flawless Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 dark:from-[#070b14]/95 dark:via-[#070b14]/75 dark:to-[#070b14]/30 transition-colors duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent/20 to-slate-950/95 dark:from-[#070b14]/85 dark:via-transparent/20 dark:to-[#070b14]"></div>
      </div>

      {/* 2. Subtle Canvas Grid Pattern */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none opacity-15 dark:opacity-20 bg-[radial-gradient(#80808020_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]"
      />

      {/* 3. Ambient Bias Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/15 via-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content - Clean, High-Contrast Typography & Dynamic Sliding Text */}
          <div className="lg:col-span-8 flex flex-col items-start text-left w-full z-10">

            {/* Greeting & Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 drop-shadow-sm">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Sliding Role Text */}
            <div className="flex items-center gap-2.5 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 mb-6 h-10 sm:h-12 overflow-hidden">
              <span className="text-sky-400 font-medium shrink-0">A</span>
              <div className="relative overflow-hidden h-full flex items-center">
                <span
                  className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 transition-all duration-300 transform inline-block ${
                    isSliding
                      ? '-translate-y-full opacity-0'
                      : 'translate-y-0 opacity-100'
                  }`}
                >
                  {ROLES[roleIndex]}
                </span>
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-sky-400 ml-1.5 animate-pulse shrink-0" />
              </div>
            </div>

            {/* Elevator Pitch Tagline */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.tagline} Based in <span className="text-sky-400 font-medium">Addis Ababa, Ethiopia</span>, I bring 4+ years of Professional Engineering discipline, delivering modern, accessible, and fast digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm border border-indigo-500 hover:border-indigo-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 active:bg-slate-900 text-white font-semibold text-sm border border-slate-700/80 hover:border-sky-400/60 shadow-sm transition-all hover:scale-[1.02] backdrop-blur-md cursor-pointer"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 w-full max-w-2xl">
                {stats.map((stat, idx) => {
                  const IconComponent = statIcons[stat.icon] || Code2;
                  return (
                    <div key={idx} className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-sky-400 mb-0.5">
                        <IconComponent className="w-4 h-4 text-sky-400" />
                        <span className="text-xl font-extrabold text-white">{stat.value}</span>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

          {/* Right Hero Space - Fully Unobstructed to Showcase the Developer Background */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </div>

      {/* 4. Sliding Tech Stack Ticker (Infinite Slow Motion Marquee) */}
      <div className="absolute bottom-0 left-0 right-0 py-3 bg-slate-950/75 dark:bg-[#070b14]/85 backdrop-blur-md border-t border-slate-800/80 dark:border-blue-500/20 overflow-hidden z-20 select-none">
        <div className="animate-hero-marquee flex items-center gap-8 whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors">
              <span className="text-sky-400 font-bold">{item.symbol}</span>
              <span>{item.name}</span>
              <span className="text-slate-600 dark:text-slate-500 ml-6">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
