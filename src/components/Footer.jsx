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
    <footer className="bg-[#0b0f19] text-white border-t border-slate-800/80 transition-colors">
      
      {/* Upper Footer Row: Brand Info on Left, Navigation Inline on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3.5">
              <Logo size="md" />
              <div>
                <h3 className="font-extrabold text-lg text-white leading-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-sky-400 font-medium">
                  Full-Stack Web Developer &amp; Civil Engineer
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-2.5 max-w-sm leading-relaxed">
              Bridging engineering precision and modern web craftsmanship. Based in Bahir Dar, Ethiopia.
            </p>
          </div>

          {/* Navigation Links - Single Continuous Inline Row */}
          <nav className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-4 sm:gap-6 lg:gap-8 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-slate-300 hover:text-sky-400 font-medium transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

        </div>
      </div>

      {/* Bottom Bar: Contrast Dark Band with Subtle Electric-Blue Top Border */}
      <div className="border-t border-sky-500/40 bg-[#050811] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* Left: Copyright */}
          <p className="text-center md:text-left text-slate-400">
            © {new Date().getFullYear()} <span className="font-semibold text-slate-200">{personalInfo.name}</span>. All rights reserved.
          </p>

          {/* Center: Back to Top placed between All Rights Reserved and Social Links */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0e1629] hover:bg-[#152038] border border-blue-500/30 hover:border-blue-400/60 text-slate-300 hover:text-sky-400 text-xs font-semibold transition-all shadow-sm hover:scale-105 cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-3.5 h-3.5 text-sky-400" />
          </button>

          {/* Right: Circular Social Media Icons matching reference */}
          <div className="flex items-center gap-2">
            {personalInfo.socialLinks?.facebook && (
              <a
                href={personalInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0e1629] border border-sky-500/70 text-white hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            )}
            {personalInfo.socialLinks?.twitter && (
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0e1629] border border-sky-500/70 text-white hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {personalInfo.socialLinks?.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0e1629] border border-sky-500/70 text-white hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {personalInfo.socialLinks?.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0e1629] border border-sky-500/70 text-white hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {personalInfo.socialLinks?.whatsapp && (
              <a
                href={personalInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0e1629] border border-sky-500/70 text-white hover:bg-emerald-500 hover:border-emerald-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(16,185,129,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 rounded-full bg-[#0e1629] border border-sky-500/70 text-white hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
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

