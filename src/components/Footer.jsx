import React from 'react';
import Logo from './Logo';
import { 
  ChevronUp, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Github, 
  MessageCircle, 
  Mail,
  MapPin,
  Phone,
  Globe
} from 'lucide-react';

export default function Footer({ personalInfo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const whyChooseMe = [
    { name: 'Engineering Precision', href: '#about' },
    { name: 'Full-Stack Architecture', href: '#skills' },
    { name: 'Production Reliability', href: '#experience' },
    { name: 'Milestone Discipline', href: '#experience' },
    { name: 'Clean & Scalable Code', href: '#skills' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-[#070b16] text-white border-t border-slate-800 transition-colors">
      
      {/* Upper Footer 4-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <div className="flex items-center gap-3.5 mb-4">
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
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-1">
              Where Engineering Rigor Meets Modern Web Craftsmanship—Building Durable, High-Performance Digital Solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Why Choose Us */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Why Choose Us
            </h4>
            <ul className="space-y-2.5">
              {whyChooseMe.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <span className="text-slate-300 font-medium">Email: </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-sky-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <span className="text-slate-300 font-medium">Phone: </span>
                <a
                  href={`tel:${personalInfo.phone?.replace(/\s+/g, '')}`}
                  className="hover:text-sky-400 transition-colors"
                >
                  {personalInfo.phone || "09 21 25 04 64"}
                </a>
              </li>
              <li>
                <span className="text-slate-300 font-medium">website: </span>
                <a
                  href={personalInfo.socialLinks?.github || "https://github.com/meseretshumye"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  github.com/meseretshumye
                </a>
              </li>
              <li>
                <span className="text-slate-300 font-medium">Address: </span>
                <span>{personalInfo.location || "Bahir Dar, Ethiopia"}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright on Left | Privacy & Terms in Center | Circular Socials on Right */}
      <div className="border-t border-[#121c33] dark:border-slate-800/80 bg-[#050811] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* Left: Copyright */}
          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()} {personalInfo.name} | All rights reserved.
          </p>

          {/* Center: Privacy Policy, Terms of Use & Back to Top */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#about" className="hover:text-sky-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#about" className="hover:text-sky-400 transition-colors">
              Terms of Use
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Circular Social Media Icons */}
          <div className="flex items-center gap-2">
            {personalInfo.socialLinks?.facebook && (
              <a
                href={personalInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#11192e] border border-slate-700/60 hover:border-sky-400 hover:bg-sky-500/10 text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all shadow-xs"
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
                className="w-8 h-8 rounded-full bg-[#11192e] border border-slate-700/60 hover:border-sky-400 hover:bg-sky-500/10 text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all shadow-xs"
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
                className="w-8 h-8 rounded-full bg-[#11192e] border border-slate-700/60 hover:border-sky-400 hover:bg-sky-500/10 text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all shadow-xs"
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
                className="w-8 h-8 rounded-full bg-[#11192e] border border-slate-700/60 hover:border-sky-400 hover:bg-sky-500/10 text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all shadow-xs"
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
                className="w-8 h-8 rounded-full bg-[#11192e] border border-slate-700/60 hover:border-emerald-400 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all shadow-xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 rounded-full bg-[#11192e] border border-slate-700/60 hover:border-sky-400 hover:bg-sky-500/10 text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all shadow-xs"
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
