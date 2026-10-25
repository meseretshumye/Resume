import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ personalInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
    <section id="contact" className="relative my-0 py-10 md:py-14 bg-slate-100 dark:bg-[#0b152d] border-t border-slate-200/80 dark:border-blue-500/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 dark:from-[#0d182e]/95 dark:via-[#102040]/95 dark:to-[#0d182e]/95 backdrop-blur-md border border-blue-400/40 dark:border-blue-500/40 text-blue-600 dark:text-[#00d2ff] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_0_16px_rgba(0,210,255,0.12)] hover:border-sky-400 transition-all duration-300">
            Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind, seeking engineering consultancy, or want to discuss full-stack opportunities? Reach out anytime!
          </p>
        </div>

        {/* Main Content Grid: Left side has the 3 Contact Cards, Right side has the Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Contact Info Cards matching design */}
          <div className="lg:col-span-5 flex flex-col sm:grid sm:grid-cols-3 lg:flex lg:flex-col gap-5">
            
            {/* Card 1: Direct Email */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0e1629]/90 border border-slate-200/90 dark:border-blue-500/25 shadow-md dark:shadow-[0_4px_25px_rgba(2,12,27,0.7)] backdrop-blur-sm text-center flex flex-col items-center justify-between group hover:border-indigo-400 dark:hover:border-sky-400/60 transition-all">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Direct Email</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">Fastest response time</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              
              <button
                type="button"
                onClick={handleCopyEmail}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Card 2: Phone & WhatsApp */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0e1629]/90 border border-slate-200/90 dark:border-blue-500/25 shadow-md dark:shadow-[0_4px_25px_rgba(2,12,27,0.7)] backdrop-blur-sm text-center flex flex-col items-center justify-between group hover:border-emerald-400 dark:hover:border-emerald-400/60 transition-all">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Phone & WhatsApp</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">Available for urgent inquiries</p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <a
                href={personalInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Card 3: Current Location */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0e1629]/90 border border-slate-200/90 dark:border-blue-500/25 shadow-md dark:shadow-[0_4px_25px_rgba(2,12,27,0.7)] backdrop-blur-sm text-center flex flex-col items-center justify-between group hover:border-indigo-400 dark:hover:border-sky-400/60 transition-all">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Current Location</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">Open to Remote Worldwide</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {personalInfo.location}
                </p>
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                UTC+3 Timezone
              </span>
            </div>

          </div>

          {/* Right Column: Send a Direct Message Form */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#0e1629]/90 border border-slate-200/90 dark:border-blue-500/25 shadow-md dark:shadow-[0_4px_25px_rgba(2,12,27,0.7)] backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill out the details below and I will respond to your message promptly.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                  <p className="text-xs mt-0.5">
                    Thank you for reaching out. Meseret Shumye will get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe / Organization"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Subject / Project Scope
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Web Development Inquiry / Contract Consultation"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, and requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
