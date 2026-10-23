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
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, personalInfo, experience, education, skills }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
        
        {/* Modal Action Bar (Hidden when printing) */}
        <div className="no-print p-4 sm:p-5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
              Executive Curriculum Vitae (CV) Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              aria-label="Close CV Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 print:text-black print:bg-white print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-indigo-600 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black">
                  {personalInfo.name}
                </h1>
                <p className="text-base font-bold text-indigo-600 dark:text-indigo-400 print:text-indigo-700 mt-1">
                  {personalInfo.title}
                </p>
              </div>

              {/* Contact Mini Block */}
              <div className="flex flex-col text-xs sm:text-sm text-slate-600 dark:text-slate-300 print:text-slate-700 space-y-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  {personalInfo.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  {personalInfo.location}
                </span>
                {personalInfo.socialLinks?.linkedin && (
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 print:text-indigo-800 transition-colors cursor-pointer"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>linkedin.com/in/meseret-shumye</span>
                  </a>
                )}
                {personalInfo.socialLinks?.facebook && (
                  <a
                    href={personalInfo.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 print:text-indigo-800 transition-colors cursor-pointer"
                  >
                    <Facebook className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>facebook.com/meseret.shumye.5</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-800 mb-2 flex items-center gap-1.5">
              <span>Executive Profile</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed">
              {personalInfo.bioSummary}
            </p>
          </div>

          {/* 2-Column Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Main (Experience) - 8 cols */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Experience Section */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-800 mb-4 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  <span>Professional Work History</span>
                </h2>

                <div className="space-y-5">
                  {experience.map((item) => (
                    <div key={item.id} className="relative pl-3 border-l-2 border-slate-300 dark:border-slate-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                            {item.role}
                          </h3>
                          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 print:text-slate-800">
                            {item.company} — <span className="text-slate-500">{item.location}</span>
                          </p>
                        </div>
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 print:text-indigo-700 shrink-0">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-2">
                        {item.description}
                      </p>

                      <ul className="space-y-1">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                            <span className="text-indigo-600 font-bold">•</span>
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
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-800 mb-4 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Qualifications</span>
                </h2>

                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={item.id} className="relative pl-3 border-l-2 border-slate-300 dark:border-slate-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                            {item.degree}
                          </h3>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            {item.institution} — {item.location}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 print:text-indigo-700 shrink-0">
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
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-800 mb-3 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" />
                  <span>Technical Skills</span>
                </h2>

                <div className="space-y-2.5">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Frontend &amp; Mobile</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      React.js, React Native, JavaScript (ES6+), TypeScript, Next.js, Expo, Redux Toolkit, Tailwind CSS, HTML5, CSS3, Bootstrap 5
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Backend &amp; APIs</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Node.js, Express.js, RESTful APIs, WebSockets, Socket.io, GraphQL, JWT &amp; Auth, Microservices
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Databases</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      PostgreSQL, MongoDB, MySQL, Redis, Firebase Firestore, Supabase, SQLite
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">DevOps &amp; Engineering Tools</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Docker, Git &amp; GitHub, CI/CD Actions, Vite, Postman, Linux / Bash, Figma, Quality Assurance
                    </p>
                  </div>
                </div>
              </div>

              {/* Engineering Competencies */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-800 mb-3 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
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
                    <span>Quality Assurance & Compliance</span>
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
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-800 mb-2 pb-1 border-b border-slate-200 dark:border-slate-800">
                  Languages
                </h2>
                <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <p><span className="font-bold">English:</span> Professional Working Proficiency</p>
                  <p><span className="font-bold">Amharic:</span> Native / Bilingual</p>
                </div>
              </div>

            </div>

          </div>

          {/* Printable Footer */}
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
            References and project credentials available upon request • Bahir Dar, Ethiopia
          </div>

        </div>

      </div>
    </div>
  );
}

