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
import ColorSwitcher from './components/ColorSwitcher';
import { resumeData } from './data/resumeData';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [resumeTab, setResumeTab] = useState('print');

  const handleOpenResume = (tab = 'print') => {
    setResumeTab(tab);
    setIsResumeOpen(true);
  };

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
        onOpenResume={handleOpenResume}
        personalInfo={resumeData.personalInfo}
      />

      {/* Floating Theme Color Switcher */}
      <ColorSwitcher />

      {/* Main Sections */}
      <main>
        <Hero
          personalInfo={resumeData.personalInfo}
          stats={resumeData.stats}
          onOpenResume={handleOpenResume}
        />

        <About
          personalInfo={resumeData.personalInfo}
          onOpenResume={handleOpenResume}
        />

        <Skills
          skills={resumeData.skills}
          skillCategories={resumeData.skillCategories}
        />

        <ExperienceEducation
          experience={resumeData.experience}
          education={resumeData.education}
          onOpenResume={handleOpenResume}
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
        initialTab={resumeTab}
      />
    </div>
  );
}
