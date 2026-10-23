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
    <section id="home" className="relative pt-28 pb-10 md:pt-36 md:pb-14 my-0 overflow-hidden">
      {/* 1. Realistic Developer Workspace Background Image Layer */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/hero-developer-workspace.jpg"
          alt="Realistic Modern Developer Workspace"
          className="w-full h-full object-cover object-center lg:object-right-top opacity-30 dark:opacity-45 scale-[1.02] transition-opacity duration-700"
        />
        {/* Soft Vignette Gradients for Flawless Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/65 to-slate-50 dark:from-[#0b0f19]/90 dark:via-[#0b0f19]/60 dark:to-[#0b0f19] transition-colors duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/75 to-transparent dark:from-[#0b0f19]/95 dark:via-[#0b0f19]/70 dark:to-transparent"></div>
      </div>

      {/* 2. Subtle IDE Canvas Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none opacity-20 dark:opacity-25 bg-[radial-gradient(#80808020_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]"
      />

      {/* 3. Ambient Bias Glow for Radiant Depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-cyan-500/15 to-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          
          {/* Left Hero Content */}
          <div className="flex flex-col items-start text-left w-full">
            
            {/* Availability Pill styled to match ABOUT ME card style */}
            <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-transparent border border-blue-500/40 text-blue-600 dark:text-[#38bdf8] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for Full-Time &amp; Freelance Projects</span>
            </div>

            {/* Greeting & Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle / Role */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-6">
              <span>{personalInfo.title}</span>
            </div>

            {/* Elevator Pitch Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.tagline} Based in <span className="text-indigo-600 dark:text-indigo-400 font-medium">Bahir Dar, Ethiopia</span>, I bring 4+ years of Professional Engineering discipline, delivering modern, accessible, and fast digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 shadow-sm transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Resume / CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                <span>Contact Directly</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300 font-bold mr-1">
                CONNECT:
              </span>
              <div className="flex items-center gap-2">
                {personalInfo.socialLinks?.facebook && (
                  <a
                    href={personalInfo.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#0e1629] border border-sky-500/70 text-slate-700 dark:text-white hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
                {personalInfo.socialLinks?.twitter && (
                  <a
                    href={personalInfo.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#0e1629] border border-sky-500/70 text-slate-700 dark:text-white hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {personalInfo.socialLinks?.linkedin && (
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#0e1629] border border-sky-500/70 text-slate-700 dark:text-white hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {personalInfo.socialLinks?.github && (
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#0e1629] border border-sky-500/70 text-slate-700 dark:text-white hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {personalInfo.socialLinks?.whatsapp && (
                  <a
                    href={personalInfo.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#0e1629] border border-sky-500/70 text-slate-700 dark:text-white hover:bg-emerald-500 hover:border-emerald-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(16,185,129,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                )}
                {personalInfo.email && (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#0e1629] border border-sky-500/70 text-slate-700 dark:text-white hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Hero Visual Showcase - Equal Margins & Proportionate Framing */}
          <div className="flex justify-center items-center w-full">
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-3xl blur-xl opacity-40 dark:opacity-30"></div>

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-3.5 shadow-2xl">
                {/* Image Container with Natural Aspect Ratio */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                  
                  {/* Overlay text at bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase font-bold tracking-widest text-emerald-400">Full-Stack Engineer</p>
                    <h3 className="text-xl font-bold">{personalInfo.name}</h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Bahir Dar, Ethiopia</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-3.5 -left-2 sm:-left-5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5 z-10">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  ⚛️
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-none">Core Stack</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">React &amp; Node.js</p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-3.5 -right-2 sm:-right-5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5 z-10">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  🏗️
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-none">Discipline</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">Civil Engineering</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

