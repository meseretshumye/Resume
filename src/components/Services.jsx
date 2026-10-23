import React from 'react';
import { 
  Code2, 
  Layout, 
  Building2, 
  Gauge, 
  Palette, 
  MessagesSquare, 
  Check, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export default function Services({ services }) {
  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Building2: Building2,
    Gauge: Gauge,
    Palette: Palette,
    MessagesSquare: MessagesSquare
  };

  return (
    <section id="services" className="relative my-0 py-10 md:py-14 bg-slate-100 dark:bg-[#0a1529] border-t border-slate-200/80 dark:border-blue-500/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 dark:from-[#0d182e]/95 dark:via-[#102040]/95 dark:to-[#0d182e]/95 backdrop-blur-md border border-blue-400/40 dark:border-blue-500/40 text-blue-600 dark:text-[#00d2ff] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_0_16px_rgba(0,210,255,0.12)] hover:border-sky-400 transition-all duration-300">
            Client Solutions & Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Services & Value Offerings
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            End-to-end digital development tailored for clinics, pharmacies, restaurants, small businesses, and enterprise infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white dark:bg-[#0e1629]/90 border border-slate-200/90 dark:border-blue-500/25 p-7 shadow-md dark:shadow-[0_4px_25px_rgba(2,12,27,0.7)] hover:shadow-2xl hover:border-indigo-400 dark:hover:border-sky-400/60 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Deliverables
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

