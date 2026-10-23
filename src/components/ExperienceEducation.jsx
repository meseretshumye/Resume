import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building, 
  Award, 
  Sparkles, 
  Download, 
  ArrowUpRight 
} from 'lucide-react';

export default function ExperienceEducation({ experience, education, onOpenResume }) {
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'experience', 'education'

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-slate-50 dark:bg-[#0b0f19] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent border border-blue-500/40 text-blue-600 dark:text-[#00d2ff] text-xs font-bold uppercase tracking-wider mb-3 transition-colors">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm shadow-md transition-all hover:scale-105"
            >
              <Download className="w-4 h-4 text-indigo-400 dark:text-indigo-600" />
              <span>View & Print Complete Resume (PDF)</span>
            </button>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'both'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Work Experience Column */}
          {(activeTab === 'both' || activeTab === 'experience') && (
            <div className={`space-y-6 ${activeTab === 'experience' ? 'lg:col-span-2 max-w-4xl mx-auto' : ''}`}>
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
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
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 dark:border-indigo-500 group-hover:scale-125 transition-transform" />

                    {/* Card Content */}
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {item.type}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.role}
                      </h4>

                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1 mb-3">
                        <Building className="w-4 h-4 text-indigo-500" />
                        <span>{item.company}</span>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-5">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                        {item.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Academic Education</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Formal engineering and sciences degree</p>
                </div>
              </div>

              <div className="space-y-6 relative pl-6 border-l-2 border-emerald-200 dark:border-emerald-900/60 ml-3">
                {education.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Glowing Node Marker */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-600 dark:border-emerald-500 group-hover:scale-125 transition-transform" />

                    {/* Card Content */}
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-600 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                          {item.grade}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.degree}
                      </h4>

                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1 mb-3">
                        <Building className="w-4 h-4 text-emerald-500" />
                        <span>{item.institution}</span>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Acquired Skills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                        {item.skillsAcquired.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/40"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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

