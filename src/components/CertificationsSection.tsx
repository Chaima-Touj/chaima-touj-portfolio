import React from 'react';
import { Award, Trophy, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CERTIFICATIONS_DATA, EDUCATION_DATA } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#a855f7', '#ec4899', '#38bdf8', '#fbbf24'],
    });
  };

  return (
    <section id="certifications" className="relative py-14 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full glass-card border border-purple-200 dark:border-purple-500/30 text-xs font-semibold text-purple-700 dark:text-purple-300">
            <Trophy className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>Honors & Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-display mb-3">
            Certifications &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-amber-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-amber-300">
              Achievements
            </span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300/80">
            Technical certifications and a first-prize result in a 24-hour hackathon.
          </p>
        </div>

        {/* Certifications and achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {CERTIFICATIONS_DATA.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl glass-card p-6 border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between ${
                item.id === 'hackathon'
                  ? 'border-amber-400 dark:border-amber-500/40 shadow-lg shadow-amber-500/10'
                  : 'border-purple-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-400/50'
              }`}
            >
              {item.id === 'hackathon' && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-amber-500 to-orange-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider rounded-bl-xl shadow-sm">
                  1st Place
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      item.id === 'hackathon'
                        ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30'
                        : 'bg-purple-100 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30'
                    }`}
                  >
                    {item.id === 'hackathon' ? (
                      <Trophy className="w-6 h-6 text-amber-500 dark:text-amber-400" />
                    ) : (
                      <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-700 dark:text-purple-300/70">{item.issuer} • {item.date}</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300/85 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-purple-200 dark:border-purple-500/20 flex items-center justify-between">
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                  {item.badge}
                </span>

                {item.id === 'hackathon' && (
                  <button
                    onClick={triggerConfetti}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-amber-100 hover:bg-amber-200 text-amber-800 border border-amber-300 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 dark:text-amber-300 dark:border-amber-500/40 transition-colors cursor-pointer font-medium"
                    title="Celebrate Hackathon Victory!"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Celebrate 🎉</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education Callout Card */}
        <div className="rounded-3xl glass-card p-6 sm:p-8 border border-purple-200 dark:border-purple-500/25 bg-gradient-to-r from-purple-50/90 via-purple-100/40 to-fuchsia-50/80 dark:from-purple-950/40 dark:via-purple-900/20 dark:to-fuchsia-950/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 mb-1 font-semibold">
              Academic Degree
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
              {EDUCATION_DATA.degree}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/90 mt-1 max-w-2xl">
              {EDUCATION_DATA.summary}
            </p>
          </div>

          <div className="shrink-0 px-4 py-2 rounded-2xl bg-purple-200/80 dark:bg-purple-900/50 border border-purple-300 dark:border-purple-400/30 text-xs font-semibold text-purple-900 dark:text-purple-200 shadow-xs">
            {EDUCATION_DATA.period}
          </div>
        </div>

      </div>
    </section>
  );
};
