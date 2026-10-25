import React, { useState, useMemo } from "react";
import TechIcon from "./TechIcon";

export default function Skills({ skills = [], skillCategories = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSkill, setActiveSkill] = useState(null);

  // 4 Core Domain Architecture Definitions
  const DOMAINS = useMemo(
    () => [
      {
        id: "frontend",
        name: "Frontend & Mobile",
        filterLabel: "Frontend & Mobile",
        description:
          "Building fast, accessible, cross-platform mobile apps and responsive web interfaces with modern frameworks.",
        iconSvg: (
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-indigo-400 stroke-current fill-none stroke-[1.8]"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M 9 3 V 21" />
            <path d="M 9 12 H 21" />
          </svg>
        ),
        accentGlow: "from-sky-500/20 via-indigo-500/10 to-transparent",
      },
      {
        id: "backend",
        name: "Backend & APIs",
        filterLabel: "Backend & APIs",
        description:
          "Engineering secure, scalable server applications, enterprise microservices, and robust REST/GraphQL endpoints.",
        iconSvg: (
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-indigo-400 stroke-current fill-none stroke-[1.8]"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="4" width="16" height="6" rx="2" />
            <rect x="4" y="14" width="16" height="6" rx="2" />
            <line x1="8" y1="7" x2="8.01" y2="7" strokeWidth="2.5" />
            <line x1="8" y1="17" x2="8.01" y2="17" strokeWidth="2.5" />
          </svg>
        ),
        accentGlow: "from-emerald-500/20 via-teal-500/10 to-transparent",
      },
      {
        id: "database",
        name: "Databases & Cloud",
        filterLabel: "Databases & Cloud",
        description:
          "Designing efficient relational & NoSQL schemas, optimizing complex queries, and managing resilient cloud backends.",
        iconSvg: (
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-indigo-400 stroke-current fill-none stroke-[1.8]"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <ellipse cx="12" cy="5" rx="8" ry="3" />
            <path d="M 4 5 V 19 C 4 20.66 7.58 22 12 22 C 16.42 22 20 20.66 20 19 V 5" />
            <path d="M 4 12 C 4 13.66 7.58 15 12 15 C 16.42 15 20 13.66 20 12" />
          </svg>
        ),
        accentGlow: "from-amber-500/20 via-orange-500/10 to-transparent",
      },
      {
        id: "devops",
        name: "DevOps & Engineering Tools",
        filterLabel: "DevOps & Tools",
        description:
          "Mobile testing, modern build tools, version control, API testing, and agile workflows.",
        iconSvg: (
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-indigo-400 stroke-current fill-none stroke-[1.8]"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        ),
        accentGlow: "from-purple-500/20 via-pink-500/10 to-transparent",
      },
    ],
    [],
  );

  // Filter domains based on category selection
  const visibleDomains = useMemo(() => {
    if (selectedCategory === "all") return DOMAINS;
    return DOMAINS.filter((d) => d.id === selectedCategory);
  }, [selectedCategory, DOMAINS]);

  return (
    <section
      id="skills"
      className="relative my-0 py-10 md:py-14 bg-slate-100 dark:bg-[#080e1c] border-t border-slate-200/80 dark:border-blue-500/20 overflow-hidden transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 dark:from-[#0d182e]/95 dark:via-[#102040]/95 dark:to-[#0d182e]/95 backdrop-blur-md border border-blue-400/40 dark:border-blue-500/40 text-blue-600 dark:text-[#00d2ff] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_0_16px_rgba(0,210,255,0.12)] hover:border-sky-400 transition-all duration-300">
            Architecture &amp; Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Technical Stack &amp; Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Enterprise-ready full-stack Engineering proficiency spanning modern
            client interfaces, distributed backend APIs, scalable databases, and
            DevOps automation.
          </p>
        </div>

        {/* Domain Filter Tabs - Centered & In-Line */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800/80 w-full">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 scale-[1.03] ring-2 ring-indigo-400/50"
                : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-300 dark:hover:border-indigo-700/60 border border-slate-200 dark:border-slate-800"
            }`}
          >
            <span>All Domains</span>
            <span className="ml-1.5 text-xs opacity-75">
              ({DOMAINS.length})
            </span>
          </button>

          {DOMAINS.map((domain) => {
            const count = skills.filter(
              (s) => s.category === domain.id,
            ).length;
            const isSelected = selectedCategory === domain.id;
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedCategory(domain.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  isSelected
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 scale-[1.03] ring-2 ring-indigo-400/50"
                    : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-300 dark:hover:border-indigo-700/60 border border-slate-200 dark:border-slate-800"
                }`}
              >
                <span>{domain.filterLabel || domain.name}</span>
                <span className="ml-1.5 text-xs opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* 2x2 Grid Layout matching the design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {visibleDomains.map((domain) => {
            const domainSkills = skills.filter((s) => s.category === domain.id);

            return (
              <div
                key={domain.id}
                className="group relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-[#18233d] shadow-xl dark:shadow-2xl dark:shadow-indigo-950/20 backdrop-blur-md hover:border-indigo-300 dark:hover:border-[#2b3a62] transition-all duration-300 flex flex-col"
              >
                {/* Card Header (Icon + Title + Description) */}
                <div className="flex items-start gap-4 mb-7">
                  {/* Domain Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-[#131d36] border border-indigo-100 dark:border-[#1e2e5c] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {domain.iconSvg}
                  </div>

                  {/* Domain Title & Subtitle */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {domain.name}
                      </h3>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#151f38] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#233155]">
                        {domainSkills.length} Skills
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed max-w-lg">
                      {domain.description}
                    </p>
                  </div>
                </div>

                {/* Skills Pills Layout in Two Equal Sides */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {domainSkills.map((skill, idx) => {
                    const isHighlighted = activeSkill?.name === skill.name;

                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setActiveSkill(skill)}
                        onClick={() =>
                          setActiveSkill(
                            activeSkill?.name === skill.name ? null : skill,
                          )
                        }
                        className={`group flex items-center gap-3 px-4 py-2.5 sm:px-4.5 sm:py-3 rounded-full cursor-pointer select-none transition-all duration-200 border ${
                          isHighlighted
                            ? "bg-indigo-100 dark:bg-gradient-to-r dark:from-[#213264] dark:via-[#263c78] dark:to-[#1c2952] border-indigo-500 dark:border-indigo-400 text-indigo-950 dark:text-white shadow-lg shadow-indigo-500/25 ring-2 ring-indigo-500/50 -translate-y-0.5"
                            : "bg-white dark:bg-[#0e172a] hover:bg-indigo-50/90 dark:hover:bg-[#162345] border-slate-200/90 dark:border-[#1e2a4a] hover:border-indigo-400 dark:hover:border-indigo-400/90 hover:text-indigo-900 dark:hover:text-white hover:shadow-md hover:shadow-indigo-500/15 hover:-translate-y-0.5 shadow-xs"
                        }`}
                      >
                        {/* Authentic Tech Brand Icon */}
                        <TechIcon
                          name={skill.name}
                          className={`w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0 transition-transform duration-200 ${
                            isHighlighted
                              ? "scale-110 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                              : "group-hover:scale-110"
                          }`}
                        />

                        {/* Skill Name */}
                        <span
                          className={`text-xs sm:text-sm font-semibold tracking-tight truncate transition-colors duration-200 ${
                            isHighlighted
                              ? "text-indigo-950 dark:text-white font-bold"
                              : "text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
