import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ personalInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clean phone number (strictly digits and leading plus, no spaces) for valid RFC 3966 tel: protocol
  const cleanPhone = (personalInfo.phone || '').replace(/[^0-9+]/g, '');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate swift modern form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="relative my-0 py-8 md:py-10 bg-slate-100 dark:bg-[#0b152d] border-t border-slate-200/80 dark:border-blue-500/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-7">
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 dark:from-[#0d182e]/95 dark:via-[#102040]/95 dark:to-[#0d182e]/95 backdrop-blur-md border border-blue-400/40 dark:border-blue-500/40 text-blue-600 dark:text-[#00d2ff] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-[0_0_16px_rgba(0,210,255,0.12)] hover:border-sky-400 transition-all duration-300">
            Start a Conversation
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, seeking engineering consultancy, or want to discuss full-stack opportunities? Reach out anytime!
          </p>
        </div>

        {/* Main Content Grid: Equal Width Cards with Uniform Styling and Thin Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Column: Unified Single Contact Info Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0e1629]/90 border border-slate-200/90 dark:border-blue-500/25 hover:border-slate-300 dark:hover:border-blue-400/40 shadow-md dark:shadow-[0_4px_25px_rgba(2,12,27,0.7)] backdrop-blur-sm flex flex-col justify-between transition-all duration-200">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
                Feel free to reach out directly through any of these communication channels.
              </p>

              <div className="space-y-3">
                {/* Item 1: Direct Email */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-blue-500/15 hover:border-indigo-400/60 dark:hover:border-sky-400/40 flex items-center gap-3 group transition-all duration-200">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-blue-500/25 text-indigo-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                    <Mail className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Direct Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline break-all block mt-0.5"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Item 2: Phone */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-blue-500/15 hover:border-indigo-400/60 dark:hover:border-sky-400/40 flex items-center gap-3 group transition-all duration-200">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-blue-500/25 text-indigo-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                    <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Phone Number</h4>
                    <a
                      href={`tel:${cleanPhone}`}
                      className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline block mt-0.5"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Item 3: Current Location */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-blue-500/15 hover:border-indigo-400/60 dark:hover:border-sky-400/40 flex items-center gap-3 group transition-all duration-200">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-blue-500/25 text-indigo-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                    <MapPin className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Current Location</h4>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Availability Status */}
            <div className="mt-4 pt-3.5 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-medium text-slate-700 dark:text-slate-300">Available for projects & roles</span>
              </span>
              <span className="font-semibold text-indigo-600 dark:text-sky-400">Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Right Column: Send a Direct Message Form (Equal Width & Matching Uniform Styling) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0e1629]/90 border border-slate-200/90 dark:border-blue-500/25 hover:border-slate-300 dark:hover:border-blue-400/40 shadow-md dark:shadow-[0_4px_25px_rgba(2,12,27,0.7)] backdrop-blur-sm flex flex-col justify-between transition-all duration-200">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
                Fill out the details below and I will respond to your message promptly.
              </p>

              {submitted && (
                <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-2.5 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs mt-0.5">
                      Thank you for reaching out. Meseret Shumye will get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:border-indigo-500 dark:focus:border-sky-400 focus:ring-0 transition-colors duration-150"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:border-indigo-500 dark:focus:border-sky-400 focus:ring-0 transition-colors duration-150"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Subject / Project Scope
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="scope of your project or inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:border-indigo-500 dark:focus:border-sky-400 focus:ring-0 transition-colors duration-150"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, and requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:border-indigo-500 dark:focus:border-sky-400 focus:ring-0 transition-colors duration-150 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-xs sm:text-sm border border-indigo-500 hover:border-indigo-400 active:border-indigo-600 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-150 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
