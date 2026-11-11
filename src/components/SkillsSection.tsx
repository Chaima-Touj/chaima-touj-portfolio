import React, { useState } from 'react';
import { Sparkles, Code, Database, Wrench, Layers } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: 'All Technologies', icon: Sparkles },
    { id: 'Frontend', label: 'Frontend', icon: Code },
    { id: 'Backend', label: 'Backend & APIs', icon: Layers },
    { id: 'Database', label: 'Databases', icon: Database },
    { id: 'Tools', label: 'Tools & Workflow', icon: Wrench },
    { id: 'Programming & Modeling', label: 'Programming & Modeling', icon: Code },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Backend') return skill.category === 'Backend';
    if (selectedCategory === 'Database') return skill.category === 'Database';
    return skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="relative py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full glass-card border border-purple-200 dark:border-purple-500/30 text-xs font-semibold text-purple-700 dark:text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse" />
            <span>Technical Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-display mb-4">
            Technical Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400">
              MERN Stack
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/80">
            Technologies and tools covered by my training and project experience, with a focus on web development and the MERN stack.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                      : 'glass-card text-slate-700 dark:text-slate-300 hover:text-purple-900 dark:hover:text-white border border-purple-200 dark:border-purple-500/20 hover:border-purple-400'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Technical skills and tools listed in Chaima's CV */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="rounded-2xl glass-card p-5 border border-purple-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-400/60 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: skill.accentBg,
                      borderColor: `${skill.color}55`,
                      color: skill.color,
                    }}
                  >
                    {skill.name.slice(0, 2)}
                  </div>
                  <span className="text-[10px] font-mono text-purple-700 dark:text-purple-300/80">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors font-display mb-1">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300/75 line-clamp-2 mb-4 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="pt-2 border-t border-purple-200 dark:border-purple-500/15 text-[10px] text-purple-700/80 dark:text-purple-300/70 uppercase tracking-wider font-mono">
                {skill.category}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
