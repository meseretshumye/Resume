import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceEducation from './components/ExperienceEducation';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { resumeData } from './data/resumeData';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        personalInfo={resumeData.personalInfo}
      />

      {/* Main Sections */}
      <main>
        <Hero
          personalInfo={resumeData.personalInfo}
          stats={resumeData.stats}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <About
          personalInfo={resumeData.personalInfo}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <Skills
          skills={resumeData.skills}
          skillCategories={resumeData.skillCategories}
        />

        <ExperienceEducation
          experience={resumeData.experience}
          education={resumeData.education}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <Services
          services={resumeData.services}
        />

        <Projects
          projects={resumeData.projects}
        />

        <Contact
          personalInfo={resumeData.personalInfo}
        />
      </main>

      {/* Footer */}
      <Footer
        personalInfo={resumeData.personalInfo}
      />

      {/* Printable Executive CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        personalInfo={resumeData.personalInfo}
        experience={resumeData.experience}
        education={resumeData.education}
        skills={resumeData.skills}
      />
    </div>
  );
}

