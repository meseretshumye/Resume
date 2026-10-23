import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Facebook,
  Github,
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award, 
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Globe
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, personalInfo, experience, education, skills }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0b1120] rounded-3xl shadow-2xl border border-slate-200 dark:border-blue-500/30 overflow-hidden my-4 sm:my-8 transition-colors">
        
        {/* Modal Action Bar (Hidden when printing) */}
        <div className="no-print px-5 py-4 bg-slate-50 dark:bg-[#080d1a] border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Executive Curriculum Vitae (CV)
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-sky-500 font-medium">
                • Verified &amp; Production-Ready
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-xs sm:text-sm font-semibold shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close CV Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 text-slate-800 dark:text-slate-100 bg-white dark:bg-[#0b1120] print:text-black print:bg-white print:p-0">
          
          {/* Header Block */}
          <div className="pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black">
                  {personalInfo.name}
                </h1>
                <p className="text-base sm:text-lg font-bold text-sky-600 dark:text-sky-400 print:text-sky-800 mt-1">
                  {personalInfo.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 print:text-slate-600 mt-1">
                  Full-Stack Architecture • Civil Engineering Project Governance • Modern Web Systems
                </p>
              </div>

              {/* Contact Mini Block */}
              <div className="flex flex-col text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 print:text-slate-700 space-y-1.5 shrink-0 bg-slate-50 dark:bg-[#0e1629] print:bg-transparent p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 print:border-none">
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-sky-500 transition-colors">{personalInfo.email}</a>
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>{personalInfo.location}</span>
                </span>
                {personalInfo.socialLinks?.github && (
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-sky-500 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>github.com/meseretshumye</span>
                  </a>
                )}
                {personalInfo.socialLinks?.linkedin && (
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-sky-500 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>linkedin.com/in/meseret-shumye</span>
                  </a>
                )}
              </div>
            </div>

            {/* Signature Electric Blue Accent Line */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 rounded-full mt-5 print:bg-sky-700"></div>
          </div>

          {/* Executive Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 print:text-sky-800 mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Profile</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed">
              {personalInfo.bioSummary}
            </p>
          </div>

          {/* 2-Column Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Main (Experience & Education) - 8 cols */}
            <div className="md:col-span-8 space-y-7">
              
              {/* Experience Section */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 print:text-sky-800 mb-4 pb-1.5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Professional Work History</span>
                </h2>

                <div className="space-y-6">
                  {experience.map((item) => (
                    <div key={item.id} className="relative pl-3.5 border-l-2 border-sky-500/40 dark:border-sky-500/30">
                      <div className="flex flex-wrap items-start justify-between gap-1">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                            {item.role}
                          </h3>
                          <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 print:text-slate-800">
                            {item.company} — <span className="text-slate-500 dark:text-slate-400">{item.location}</span>
                          </p>
                        </div>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800/60 shrink-0">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 mb-2 leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="space-y-1">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                            <span className="text-sky-500 font-bold shrink-0">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 print:text-sky-800 mb-4 pb-1.5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Qualifications</span>
                </h2>

                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={item.id} className="relative pl-3.5 border-l-2 border-sky-500/40 dark:border-sky-500/30">
                      <div className="flex flex-wrap items-start justify-between gap-1">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                            {item.degree}
                          </h3>
                          <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                            {item.institution} — {item.location}
                          </p>
                        </div>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar (Skills, Competencies, Languages) - 4 cols */}
            <div className="md:col-span-4 space-y-6">
              
              {/* Technical Skills */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0e1629] border border-slate-200/80 dark:border-slate-800 print:border-none print:p-0">
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 print:text-sky-800 mb-3 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Technical Skills</span>
                </h2>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Frontend &amp; Mobile</h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      React.js, React Native, JavaScript (ES6+), TypeScript, Next.js, Redux Toolkit, Tailwind CSS, Bootstrap 5, HTML5, CSS3
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Backend &amp; APIs</h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Node.js, Express.js, RESTful APIs, WebSockets, Socket.io, GraphQL, JWT, Auth0, Microservices
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Databases</h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      PostgreSQL, MongoDB, MySQL, Redis, Firebase Firestore, Supabase, SQLite
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">DevOps &amp; Engineering</h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Docker, Git &amp; GitHub, CI/CD Actions, Vite, Postman, Linux / Bash, Figma, Quality Assurance
                    </p>
                  </div>
                </div>
              </div>

              {/* Engineering Competencies */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0e1629] border border-slate-200/80 dark:border-slate-800 print:border-none print:p-0">
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 print:text-sky-800 mb-3 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Core Strengths</span>
                </h2>

                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Contract Administration (FIDIC)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Cross-Functional Leadership</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Quality Assurance &amp; Compliance</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Technical Correspondence</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Empathetic Client Communication</span>
                  </li>
                </ul>
              </div>

              {/* Languages */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0e1629] border border-slate-200/80 dark:border-slate-800 print:border-none print:p-0">
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 print:text-sky-800 mb-2 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Languages</span>
                </h2>
                <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <p><span className="font-bold">English:</span> Professional Working</p>
                  <p><span className="font-bold">Amharic:</span> Native / Bilingual</p>
                </div>
              </div>

            </div>

          </div>

          {/* Printable Footer */}
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
            References and verified engineering project credentials available upon request • Bahir Dar, Ethiopia
          </div>

        </div>

      </div>
    </div>
  );
}
