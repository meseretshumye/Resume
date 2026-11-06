import React from 'react';
import { 
  Code2, 
  Layout, 
  Building2, 
  Gauge, 
  Palette, 
  MessagesSquare 
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
    <section
      id="services"
      className="relative my-0 py-8 md:py-10 bg-slate-100 dark:bg-[#0a1529] border-t border-slate-200/80 dark:border-blue-500/20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-7">
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 dark:from-[#0d182e]/95 dark:via-[#102040]/95 dark:to-[#0d182e]/95 backdrop-blur-md border border-blue-400/40 dark:border-blue-500/40 text-blue-600 dark:text-[#00d2ff] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-[0_0_16px_rgba(0,210,255,0.12)] hover:border-sky-400 transition-all duration-300">
            Client Solutions & Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Services & Value Offerings
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            End-to-end full-stack development, covering every stage from
            planning and architecture to implementation, deployment, and ongoing
            maintenance.
          </p>
        </div>

        {/* Services Grid - Topic Title Next to Icon */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto justify-items-center">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white dark:bg-[#0e1629]/90 border border-slate-200/90 dark:border-blue-500/25 p-4.5 sm:p-5 shadow-md dark:shadow-[0_4px_25px_rgba(2,12,27,0.7)] hover:shadow-2xl hover:border-indigo-400 dark:hover:border-sky-400/60 transition-all duration-300 flex flex-col backdrop-blur-sm w-full max-w-[340px]"
              >
                <div>
                  {/* Card Header: Icon + Topic Title Next to It */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 dark:bg-[#131d36] border border-indigo-100 dark:border-[#1e2e5c] text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/60 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
