import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building, 
  Download 
} from 'lucide-react';

export default function ExperienceEducation({ experience = [], education = [], onOpenResume }) {
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'experience', 'education'

  return (
    <section id="experience" className="relative my-0 py-10 md:py-14 bg-white dark:bg-[#060a14] border-t border-slate-200/80 dark:border-blue-500/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 dark:from-[#0d182e]/95 dark:via-[#102040]/95 dark:to-[#0d182e]/95 backdrop-blur-md border border-blue-400/40 dark:border-blue-500/40 text-blue-600 dark:text-[#00d2ff] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_0_16px_rgba(0,210,255,0.12)] hover:border-sky-400 transition-all duration-300">
            Career Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A track record of engineering leadership, public sector contract governance, and production web development.
          </p>

          {/* Quick Action to open printable resume */}
          <div className="mt-6">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm border border-indigo-500 hover:border-indigo-400 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-150 cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>View &amp; Print Complete Resume (PDF)</span>
            </button>
          </div>
        </div>

        {/* View Toggle Tabs - Standardized with Thin 1px Borders */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800/80 w-full">
          <button
            onClick={() => setActiveTab('both')}
            className={`inline-flex items-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap border ${
              activeTab === 'both'
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25 border-indigo-400/80 scale-[1.02]'
                : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:bg-indigo-50/60 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-sky-300 hover:border-indigo-400/60 dark:hover:border-sky-400/40 border-slate-200 dark:border-slate-800'
            }`}
          >
            <span>All Milestones</span>
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap border ${
              activeTab === 'experience'
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25 border-indigo-400/80 scale-[1.02]'
                : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:bg-indigo-50/60 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-sky-300 hover:border-indigo-400/60 dark:hover:border-sky-400/40 border-slate-200 dark:border-slate-800'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap border ${
              activeTab === 'education'
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25 border-indigo-400/80 scale-[1.02]'
                : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:bg-indigo-50/60 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-sky-300 hover:border-indigo-400/60 dark:hover:border-sky-400/40 border-slate-200 dark:border-slate-800'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Education</span>
          </button>
        </div>

        {/* Timeline Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Work Experience Column */}
          {(activeTab === 'both' || activeTab === 'experience') && (
            <div className={`space-y-6 ${activeTab === 'experience' ? 'lg:col-span-2 max-w-4xl mx-auto' : ''}`}>
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-blue-500/25 text-indigo-600 dark:text-sky-400 flex items-center justify-center shrink-0 shadow-xs">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professional Experience</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Engineering management & software engineering</p>
                </div>
              </div>

              <div className="space-y-6 relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-3">
                {experience.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Glowing Node Marker */}
                    <div className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-indigo-600 dark:bg-sky-400 ring-4 ring-white dark:ring-[#060a14] group-hover:scale-125 transition-transform duration-200" />

                    {/* Card Content - Standardized with Thin 1px Hover Border */}
                    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0e1629]/90 border border-slate-200/90 dark:border-blue-500/25 hover:border-indigo-400/70 dark:hover:border-sky-400/60 shadow-md dark:shadow-[0_4px_25px_rgba(2,12,27,0.6)] backdrop-blur-sm transition-all duration-200 group-hover:-translate-y-0.5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-sky-300 border border-indigo-200/70 dark:border-blue-500/25 shadow-xs">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-sky-400" />
                          {item.period}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-sky-400 transition-colors">
                        {item.role}
                      </h4>

                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1 mb-3">
                        <Building className="w-4 h-4 text-indigo-500 dark:text-sky-400" />
                        <span>{item.company}</span>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Responsibilities list */}
                      <ul className="space-y-2">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Column */}
          {(activeTab === 'both' || activeTab === 'education') && (
            <div className={`space-y-6 ${activeTab === 'education' ? 'lg:col-span-2 max-w-4xl mx-auto' : ''}`}>
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-blue-500/25 text-indigo-600 dark:text-sky-400 flex items-center justify-center shrink-0 shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Academic Education</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Formal engineering and sciences degree</p>
                </div>
              </div>

              <div className="space-y-6 relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-3">
                {education.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Glowing Node Marker */}
                    <div className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-indigo-600 dark:bg-sky-400 ring-4 ring-white dark:ring-[#060a14] group-hover:scale-125 transition-transform duration-200" />

                    {/* Card Content - Standardized with Thin 1px Hover Border */}
                    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0e1629]/90 border border-slate-200/90 dark:border-blue-500/25 hover:border-indigo-400/70 dark:hover:border-sky-400/60 shadow-md dark:shadow-[0_4px_25px_rgba(2,12,27,0.6)] backdrop-blur-sm transition-all duration-200 group-hover:-translate-y-0.5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-sky-300 border border-indigo-200/70 dark:border-blue-500/25 shadow-xs">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-sky-400" />
                          {item.period}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-sky-400 transition-colors">
                        {item.degree}
                      </h4>

                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1 mb-3">
                        <Building className="w-4 h-4 text-indigo-500 dark:text-sky-400" />
                        <span>{item.institution}</span>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
