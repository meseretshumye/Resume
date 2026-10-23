import React from 'react';
import Logo from './Logo';
import { 
  ChevronUp, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Github, 
  MessageCircle, 
  Mail 
} from 'lucide-react';

export default function Footer({ personalInfo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row: Brand Info on Left, Navigation Inline on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-100 dark:border-slate-800">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3.5">
              <Logo size="md" />
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white leading-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Full-Stack Web Developer &amp; Civil Engineer
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2.5 max-w-sm leading-relaxed">
              Bridging engineering precision and modern web craftsmanship. Based in Bahir Dar, Ethiopia.
            </p>
          </div>

          {/* Navigation Links - Single continuous inline row, no pagination/scrolling */}
          <nav className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-4 sm:gap-6 lg:gap-7 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

        </div>

        {/* Back to Top - Block Straight Down */}
        <div className="flex justify-center sm:justify-end pt-5 pb-2">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all shadow-xs hover:scale-105 cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
          </button>
        </div>

        {/* Bottom Bar: Copyright on Left, Social Links on Right */}
        <div className="pt-5 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="font-semibold text-slate-700 dark:text-slate-300">{personalInfo.name}</span>. All rights reserved.
          </p>

          {/* Social Links Replacing "Engineered with React & Tailwind CSS" */}
          <div className="flex items-center gap-2">
            {personalInfo.socialLinks?.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800/80 dark:hover:bg-indigo-950/60 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors shadow-xs"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {personalInfo.socialLinks?.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800/80 dark:hover:bg-indigo-950/60 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {personalInfo.socialLinks?.twitter && (
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800/80 dark:hover:bg-indigo-950/60 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors shadow-xs"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {personalInfo.socialLinks?.facebook && (
              <a
                href={personalInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800/80 dark:hover:bg-indigo-950/60 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            )}
            {personalInfo.socialLinks?.whatsapp && (
              <a
                href={personalInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800/80 dark:hover:bg-emerald-950/60 text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors shadow-xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800/80 dark:hover:bg-indigo-950/60 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors shadow-xs"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
