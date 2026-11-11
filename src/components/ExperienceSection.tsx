import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full glass-card border border-purple-200 dark:border-purple-500/30 text-xs font-semibold text-purple-700 dark:text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400" />
            <span>Career Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-display mb-3">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400">
              Experience
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/80">
            Internships and seasonal roles that helped me build technical, communication and customer-service experience.
          </p>
        </div>

        {/* Animated Timeline */}
        <div className="relative border-l-2 border-purple-300 dark:border-purple-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-white dark:bg-[#0d061f] border-2 border-purple-400 dark:border-purple-500 group-hover:border-fuchsia-500 flex items-center justify-center shadow-md dark:shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400" />
              </div>

              {/* Card Container */}
              <div className="rounded-3xl glass-card p-6 sm:p-7 border border-purple-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-400/50 shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold bg-purple-100 dark:bg-purple-600/30 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-purple-700 dark:text-purple-300/80 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet highlights from CV */}
                <div className="space-y-2 mb-5">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300/90">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Skills and tools badges */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-purple-200 dark:border-purple-500/20">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
