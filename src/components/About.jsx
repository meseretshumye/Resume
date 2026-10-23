import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Compass, 
  MapPin, 
  FileText, 
  ArrowRight,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function About({ personalInfo = {}, onOpenResume }) {
  const pillars = [
    {
      title: "Engineering Precision",
      description: "My Civil Engineering background instills analytical rigor, systematic problem-solving, and strict adherence to specifications in every codebase.",
      icon: Compass,
      iconColor: "text-sky-400",
      iconBg: "bg-sky-500/10 border-sky-500/20"
    },
    {
      title: "Modern React & Mobile",
      description: "Crafting pixel-perfect, interactive web applications and cross-platform mobile experiences with React, JavaScript (ES6+), and modern CSS frameworks.",
      icon: Code2,
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: "Robust Full-Stack APIs",
      description: "Designing clean backend architectures, reliable RESTful endpoints, and efficient database modeling using Node.js, Express, and modern data layers.",
      icon: ShieldCheck,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Project Governance",
      description: "Years of public sector contract administration at the Ethiopian Roads Authority ensure clear communication, milestone delivery, and quality compliance.",
      icon: Briefcase,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10 border-amber-500/20"
    }
  ];

  const stats = [
    { value: personalInfo.yearsOfExperience || "4+", label: "Years Experience" },
    { value: "25+", label: "Completed Projects" },
    { value: "15+", label: "Core Technologies" },
    { value: "100%", label: "Quality Focus" }
  ];

  return (
    <section id="about" className="relative my-0 py-10 md:py-14 overflow-hidden bg-white dark:bg-[#0c1527] border-t border-slate-200/80 dark:border-blue-500/20 transition-colors duration-300">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 dark:from-[#0d182e]/95 dark:via-[#102040]/95 dark:to-[#0d182e]/95 backdrop-blur-md border border-blue-400/40 dark:border-blue-500/40 text-blue-600 dark:text-[#00d2ff] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_0_16px_rgba(0,210,255,0.12)] hover:border-sky-400 transition-all duration-300">
            About Me
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Passionate Engineer,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#f472b6]">
              Developer
            </span>{" "}
            &amp; Problem Solver
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Bridging civil Engineering and Software Development through systems
            thinking, technical precision, and Modern Digital Craftsmanship to
            deliver practical, scalable solutions for real-world challenges.
          </p>
        </div>

        {/* Structured 2-Column Arrangement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Unified Showcase Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0a101f] border border-slate-200/90 dark:border-blue-500/30 shadow-xl dark:shadow-[0_0_50px_rgba(37,99,235,0.18)] backdrop-blur-xl flex flex-col justify-between h-full group hover:border-indigo-400 dark:hover:border-blue-400/50 transition-all duration-300">
              
              {/* Photo Container with Glass Overlays */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] sm:aspect-[4/4.2] bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                <img
                  src="/images/about-coding-hands.jpg"
                  alt="Meseret Shumye Developer Workspace"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                {/* Top Status Badge */}
                <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b0f19]/80 backdrop-blur-md border border-blue-500/35 text-[11px] font-bold uppercase tracking-wider text-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>Available for Hire</span>
                </div>

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-extrabold text-xs tracking-wider shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                      {personalInfo.yearsOfExperience || "4+"}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      Dual-Discipline Excellence
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Bahir Dar</span>
                  </div>
                </div>
              </div>

              {/* Credential Bars */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between px-4.5 py-3.5 rounded-2xl bg-slate-50 dark:bg-[#0d1424] border border-slate-200/80 dark:border-[#1a253d] text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-indigo-500 dark:text-sky-400 shrink-0" />
                    <span>B.Sc. Civil Eng. • Wollo University</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 dark:text-sky-400 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-[#131d33] border border-indigo-200 dark:border-[#213052]">
                    Degree
                  </span>
                </div>

                <div className="flex items-center justify-between px-4.5 py-3.5 rounded-2xl bg-slate-50 dark:bg-[#0d1424] border border-slate-200/80 dark:border-[#1a253d] text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span>Full-Stack Web &amp; Mobile Architecture</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-[#131d33] border border-emerald-200 dark:border-[#213052]">
                    Core
                  </span>
                </div>
              </div>

              {/* Philosophy Quote Chip */}
              <div className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-emerald-50/50 dark:from-slate-800/80 dark:to-slate-850/60 border border-indigo-100/80 dark:border-slate-700/60 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "Great software requires the same foundation as bridges: structural precision, elegant architecture, and seamless accessibility for all users."
              </div>

            </div>
          </div>

          {/* Right Column: Executive Narrative & 4 Pillars */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl p-7 sm:p-9 bg-white dark:bg-[#0a101f] border border-slate-200/90 dark:border-[#17223b] shadow-xl dark:shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full">
              
              <div>
                {/* Headline */}
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 dark:text-white leading-snug tracking-tight mb-4">
                  Turning Complex Problems Into High-Performance Digital Realities
                </h3>

                {/* Narrative Paragraphs */}
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  <p>
                    I am a Full-Stack Software Developer with proven expertise in crafting robust web applications and interactive mobile platforms. Proficient across the modern JavaScript/TypeScript ecosystem including <strong className="text-slate-900 dark:text-white font-semibold">React</strong>, <strong className="text-slate-900 dark:text-white font-semibold">Node.js</strong>, <strong className="text-slate-900 dark:text-white font-semibold">Express</strong>, <strong className="text-slate-900 dark:text-white font-semibold">Tailwind CSS</strong>, and scalable database systems.
                  </p>
                  <p>
                    In addition to software engineering, my background as a Project Engineer with the Ethiopian Roads Authority administrating complex public sector contracts instills deep analytical thinking, structural discipline, and milestone accountability into every software architecture I build.
                  </p>
                </div>

                {/* 4 Statistics Metrics Banner */}
                <div className="rounded-2xl p-4.5 bg-slate-50 dark:bg-[#0d1424]/80 border border-slate-200/80 dark:border-[#1a253d] grid grid-cols-2 sm:grid-cols-4 gap-3 text-center my-6 shadow-inner divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800/80">
                  {stats.map((s, idx) => (
                    <div key={idx} className="pt-2 sm:pt-0">
                      <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-white tracking-tight">
                        {s.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 4 Core Pillars Grid (2x2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {pillars.map((pillar, idx) => {
                    const IconComponent = pillar.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50/70 dark:bg-[#0d1424]/70 border border-slate-200/80 dark:border-[#1a253d] hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:bg-slate-100/70 dark:hover:bg-[#11192e] transition-all duration-300 flex items-start gap-3.5 group shadow-xs"
                      >
                        <div className={`w-9 h-9 rounded-xl ${pillar.iconBg} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                          <IconComponent className={`w-4 h-4 ${pillar.iconColor}`} />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                            {pillar.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-slate-200 dark:border-[#17223b]">
                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Complete Resume</span>
                  </button>
                )}

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#131c33] border border-slate-200 dark:border-[#1e2c52] hover:bg-slate-200 dark:hover:bg-[#192544] text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
