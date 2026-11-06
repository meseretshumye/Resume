import React from "react";
import {
  Briefcase,
  Code2,
  Compass,
  MapPin,
  FileText,
  ArrowRight,
  Layers,
  Server,
  CheckCircle2,
  Sparkles,
  Rocket,
} from "lucide-react";

export default function About({ personalInfo = {}, onOpenResume }) {
  const pillars = [
    {
      title: "Clean Architecture",
      description:
        "SOLID principles, modular patterns, and maintainable enterprise code.",
      icon: Compass,
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Modern React & Mobile",
      description:
        "High-performance responsive web and mobile interfaces with React & Next.js.",
      icon: Code2,
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Scalable Backend APIs",
      description:
        "High-throughput server architectures and reliable backend systems built with Node.js.",
      icon: Server,
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "DevOps & Engineering Tools",
      description:
        "Git version control, Postman API testing, and reliable software delivery.",
      icon: Rocket,
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  const stats = [
    {
      value: personalInfo.yearsOfExperience || "4+",
      label: "Years Experience",
    },
    { value: "25+", label: "Completed Projects" },
    { value: "15+", label: "Core Technologies" },
    { value: "100%", label: "Quality Focus" },
  ];

  return (
    <section
      id="about"
      className="relative my-0 py-8 md:py-10 overflow-hidden bg-white dark:bg-[#0c1527] border-t border-slate-200/80 dark:border-blue-500/20 transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-7">
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 dark:from-[#0d182e]/95 dark:via-[#102040]/95 dark:to-[#0d182e]/95 backdrop-blur-md border border-blue-400/40 dark:border-blue-500/40 text-blue-600 dark:text-[#00d2ff] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-[0_0_16px_rgba(0,210,255,0.12)] hover:border-sky-400 transition-all duration-300">
            About Me
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Passionate Web Developer &amp; Problem Solver
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bridging engineering rigor with modern digital craftsmanship to build fast, scalable, and intuitive web applications.
          </p>
        </div>

        {/* Structured 2-Column Arrangement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Column: Unified Showcase Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl p-4.5 sm:p-5 bg-white dark:bg-[#0a101f] border border-slate-200/90 dark:border-blue-500/30 shadow-xl dark:shadow-[0_0_50px_rgba(37,99,235,0.18)] backdrop-blur-xl flex flex-col justify-center h-full group hover:border-indigo-400 dark:hover:border-blue-400/50 transition-all duration-300">
              {/* Photo Container with Glass Overlays */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/4.5] sm:aspect-[4/4.2] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[340px] bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex-1">
                <img
                  src={
                    personalInfo.avatar || "/images/meseret-shumye-portrait.jpg"
                  }
                  alt={personalInfo.name || "Meseret Shumye"}
                  className="w-full h-full object-cover object-[center_12%] contrast-[1.03] brightness-[1.02] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-extrabold text-[11px] sm:text-xs tracking-wider shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                      {personalInfo.yearsOfExperience || "4+"}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      Full-Stack Web Excellence
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                    <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                    <span>Addis Ababa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Narrative & 4 Pillars */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#0a101f] border border-slate-200/90 dark:border-[#17223b] shadow-xl dark:shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full">
              <div>
                {/* Headline */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight mb-3">
                  Turning Complex Problems Into High-Performance Digital Realities
                </h3>

                {/* Executive Narrative */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  <p>
                    I'm a Full-Stack Software Developer passionate about designing, building, and delivering scalable,
                    high-performance web applications.
                  </p>
                </div>

                {/* 4 Statistics Metrics Banner */}
                <div className="rounded-xl p-3 sm:p-3.5 bg-slate-50 dark:bg-[#0d1424]/80 border border-slate-200/80 dark:border-[#1a253d] grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center my-4 shadow-inner divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800/80">
                  {stats.map((s, idx) => (
                    <div key={idx} className="pt-1.5 sm:pt-0">
                      <div className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-white tracking-tight">
                        {s.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 4 Core Pillars Grid (2x2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2">
                  {pillars.map((pillar, idx) => {
                    const IconComponent = pillar.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3 sm:p-3.5 rounded-xl bg-slate-50/70 dark:bg-[#0d1424]/70 border border-slate-200/80 dark:border-[#1a253d] hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:bg-slate-100/70 dark:hover:bg-[#11192e] transition-all duration-300 flex items-start gap-2.5 group shadow-xs"
                      >
                        <div
                          className={`w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-lg ${pillar.iconBg} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                        >
                          <IconComponent
                            className={`w-3.5 h-3.5 ${pillar.iconColor}`}
                          />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5 leading-snug">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
