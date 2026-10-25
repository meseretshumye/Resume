import React from 'react';
import { 
  ArrowRight, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  HeartHandshake, 
  Code2, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Github, 
  MessageCircle, 
  Mail,
  Sparkles,
  MapPin
} from 'lucide-react';

export default function Hero({ personalInfo, stats, onOpenResume }) {
  const statIcons = {
    Clock: Clock,
    CheckCircle2: CheckCircle2,
    HeartHandshake: HeartHandshake,
    Code2: Code2
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-14 md:pt-36 md:pb-20 my-0 overflow-hidden bg-slate-950 dark:bg-[#070b14] transition-colors duration-300">
      {/* 1. Authentic Environmental Developer Background Image with Slow Motion Animation */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/hero-developer-portrait.jpg"
          alt="Professional Software Developer at Workstation"
          className="w-full h-full object-cover object-[75%_center] lg:object-right-center opacity-75 dark:opacity-65 animate-hero-slow-motion transition-opacity duration-700"
        />
        {/* Soft Vignette Gradients for Flawless Typography Contrast matching reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 dark:from-[#070b14]/95 dark:via-[#070b14]/80 dark:to-[#070b14]/25 transition-colors duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-transparent/40 to-slate-950/90 dark:from-[#070b14]/90 dark:via-transparent/30 dark:to-[#070b14]"></div>
      </div>

      {/* 2. Subtle IDE Canvas Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none opacity-20 dark:opacity-25 bg-[radial-gradient(#80808020_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]"
      />

      {/* 3. Ambient Bias Glow for Radiant Depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-cyan-500/15 to-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content - High-Contrast Clean Typography matching reference */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full z-10">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-[#0d182e]/90 backdrop-blur-md border border-sky-500/40 text-sky-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-[0_0_16px_rgba(56,189,248,0.15)] hover:border-sky-300 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for Full-Time &amp; Freelance Projects</span>
            </div>

            {/* Greeting & Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 drop-shadow-sm">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle / Role */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-200 mb-6">
              <span className="text-sky-300 font-medium">A</span>
              <span>{personalInfo.title}</span>
            </div>

            {/* Elevator Pitch Tagline */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.tagline} Based in <span className="text-sky-400 font-medium">Bahir Dar, Ethiopia</span>, I bring 4+ years of Professional Engineering discipline, delivering modern, accessible, and fast digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45 transition-all hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold border border-slate-700/80 hover:border-slate-600 shadow-sm transition-all hover:scale-[1.02] backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Resume / CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-slate-300 hover:text-white font-medium transition-colors"
              >
                <span>Contact Directly</span>
              </a>
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

          {/* Right Hero Space - Elegantly Highlights the Developer in the Background */}
          <div className="lg:col-span-5 flex flex-col justify-between items-end gap-6 w-full lg:min-h-[380px] pointer-events-none select-none">
            
            {/* Top Floating Glass Badge */}
            <div className="pointer-events-auto backdrop-blur-xl bg-slate-900/75 dark:bg-[#0c1527]/85 border border-sky-500/30 rounded-2xl p-4 shadow-2xl flex items-center gap-3.5 hover:border-sky-400 transition-all duration-300 max-w-xs self-end">
              <div className="w-11 h-11 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-xl shrink-0">
                ⚛️
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-sky-400 font-bold">Specialization</p>
                <p className="text-sm font-bold text-white leading-tight">React &amp; Node.js Full-Stack</p>
              </div>
            </div>

            {/* Bottom Floating Glass Badge */}
            <div className="pointer-events-auto backdrop-blur-xl bg-slate-900/75 dark:bg-[#0c1527]/85 border border-emerald-500/30 rounded-2xl p-4 shadow-2xl flex items-center gap-3.5 hover:border-emerald-400 transition-all duration-300 max-w-xs self-end">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xl shrink-0">
                🏗️
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold">Engineering Discipline</p>
                <p className="text-sm font-bold text-white leading-tight">Civil Engineering Precision</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

