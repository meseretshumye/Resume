import React, { useState, useEffect } from 'react';
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
  Globe,
  FileText,
  FileDown,
  Check,
  Eye
} from 'lucide-react';

export default function ResumeModal({ 
  isOpen, 
  onClose, 
  personalInfo = {}, 
  experience = [], 
  education = [], 
  skills = {},
  initialTab = 'print'
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab || 'print');
      setDownloadSuccess(false);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const handlePrint = () => {
    // If user prints while on download tab, switch to print view first then trigger print
    if (activeTab !== 'print') {
      setActiveTab('print');
      setTimeout(() => {
        window.print();
      }, 150);
    } else {
      window.print();
    }
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/Meseret_Shumye_Resume.pdf';
    link.download = 'Meseret_Shumye_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  const handleOpenPdfNewTab = () => {
    window.open('/Meseret_Shumye_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="resume-modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div className="resume-modal-card relative w-full max-w-4xl bg-white dark:bg-[#0b1120] rounded-3xl shadow-2xl border border-slate-200 dark:border-blue-500/30 overflow-hidden my-4 sm:my-8 transition-colors">
        
        {/* =========================================================
            Modal Navigation Bar & Tabs Switcher (Hidden when printing)
            ========================================================= */}
        <div className="no-print px-4 sm:px-6 py-3.5 bg-slate-50 dark:bg-[#080d1a] border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Branding & Status */}
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Executive Resume (CV)
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-sky-500 font-medium">
                • Verified &amp; Production-Ready
              </span>
            </div>
          </div>

          {/* Center: Tabs Switcher (Print vs Download PDF) */}
          <div className="flex items-center p-1 bg-slate-200/90 dark:bg-slate-900 rounded-2xl border border-slate-300/70 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('print')}
              className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'print'
                  ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('download')}
              className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'download'
                  ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Version</span>
            </button>
          </div>

          {/* Right: Quick Action Button & Close */}
          <div className="flex items-center gap-2.5">
            {activeTab === 'print' ? (
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-xs sm:text-sm font-semibold shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02] cursor-pointer"
                title="Print or Save as PDF via browser"
              >
                <Printer className="w-4 h-4" />
                <span>Print CV</span>
              </button>
            ) : (
              <button
                onClick={handleDownloadPdf}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] cursor-pointer"
                title="Download Meseret_Shumye_Resume.pdf"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-slate-950" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close CV Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =========================================================
            TAB 1: PRINT VIEW (Printable Full Resume Layout)
            ========================================================= */}
        {activeTab === 'print' && (
          <div className="p-6 sm:p-10 text-slate-800 dark:text-slate-100 bg-white dark:bg-[#0b1120] print:text-black print:bg-white print:p-0">
            
            {/* Screen Helper Banner (Hidden when printing) */}
            <div className="no-print mb-6 px-4 py-3 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/50 flex flex-wrap items-center justify-between gap-3 text-xs text-indigo-900 dark:text-indigo-200">
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>
                  <strong>Print Mode:</strong> Formatted for clean A4/Letter margins. Click <strong>Print CV</strong> or press <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 font-mono text-[10px] border border-indigo-200 dark:border-slate-700">Ctrl + P</kbd> to print or save as PDF.
                </span>
              </div>
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shrink-0 cursor-pointer"
              >
                Print Now
              </button>
            </div>

            {/* Printable Container with isolated id */}
            <div id="printable-cv">
              
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
                      Full-Stack Architecture • Scalable Web Systems • Contract Administration
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

                          {item.description && (
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 mb-2 leading-relaxed">
                              {item.description}
                            </p>
                          )}

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
                          React.js, React Native, Next.js, Tailwind CSS
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Backend &amp; APIs</h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                          Node.js, Express.js, NestJS, JWT, OAuth 2.0, API Security
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Databases</h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                          PostgreSQL, MySQL, Relational Database Management, SQL Query Optimization
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">DevOps &amp; Tools</h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                          Git &amp; GitHub, Postman, Swagger, Version Control Workflows, Quality Assurance
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
                References and verified engineering project credentials available upon request • Addis Ababa, Ethiopia
              </div>

            </div>

          </div>
        )}

        {/* =========================================================
            TAB 2: DOWNLOAD PDF VERSION (Official PDF Hub & Direct Actions)
            ========================================================= */}
        {activeTab === 'download' && (
          <div className="p-6 sm:p-10 text-slate-800 dark:text-slate-100 bg-white dark:bg-[#0b1120] animate-in fade-in duration-150">
            
            {/* Top Download Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/40 via-slate-900/60 to-blue-950/40 border border-indigo-500/30 p-6 sm:p-8 mb-8 shadow-xl">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Official Verified PDF Document</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Download Executive Resume PDF
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                    Download the official, ATS-compliant Curriculum Vitae of Meseret Shumye formatted for international recruitment, applicant tracking systems, and executive review.
                  </p>
                </div>

                {/* Primary Download CTA Button */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                  <button
                    onClick={handleDownloadPdf}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    {downloadSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-slate-950" />
                        <span>Downloaded Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 text-slate-950" />
                        <span>Download PDF Version</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleOpenPdfNewTab}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in New Tab</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Document Specifications & ATS Compatibility */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0e1629] border border-slate-200/80 dark:border-slate-800 text-center">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Format</span>
                <span className="block text-sm font-bold text-slate-900 dark:text-white mt-1">PDF 1.4 Vector</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0e1629] border border-slate-200/80 dark:border-slate-800 text-center">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">ATS Compliance</span>
                <span className="block text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1">100% Machine-Read</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0e1629] border border-slate-200/80 dark:border-slate-800 text-center">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pages</span>
                <span className="block text-sm font-bold text-slate-900 dark:text-white mt-1">2-Page Standard</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0e1629] border border-slate-200/80 dark:border-slate-800 text-center">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Updated</span>
                <span className="block text-sm font-bold text-sky-600 dark:text-sky-400 mt-1">November 2026</span>
              </div>
            </div>

            {/* Embedded PDF Document Preview Container */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-500" />
                  <span>PDF Live Document Preview</span>
                </h3>
                <div className="flex items-center gap-3 text-xs">
                  <button
                    onClick={handleDownloadPdf}
                    className="text-sky-600 dark:text-sky-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download file</span>
                  </button>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <button
                    onClick={handlePrint}
                    className="text-sky-600 dark:text-sky-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print preview</span>
                  </button>
                </div>
              </div>

              {/* PDF Viewer Iframe */}
              <div className="relative w-full h-[520px] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-100 dark:bg-slate-950 shadow-inner">
                <iframe
                  src="/Meseret_Shumye_Resume.pdf#toolbar=1&navpanes=0"
                  title="Meseret Shumye Resume PDF"
                  className="w-full h-full border-0"
                />
              </div>

              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                Notice: If your browser does not render embedded PDF previews inline, click <strong>"Download PDF Version"</strong> above to save and view the document directly.
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
