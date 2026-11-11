import React from 'react';
import { ArrowRight, GraduationCap, Zap, Trophy, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onLearnMore: () => void;
  onSkillClick: (skillId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMore,
  onSkillClick,
}) => {
  // 12 key skills as displayed in the reference screenshot's skill panel
  const featuredSkills = [
    {
      id: 'react',
      name: 'React',
      icon: (
        <svg className="w-5 h-5 text-cyan-400" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#38bdf8"/>
          <g stroke="#38bdf8" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
      color: 'hover:border-cyan-400/50 hover:bg-cyan-950/20',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: (
        <div className="w-5 h-5 rounded bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-[10px] font-bold text-emerald-400">
          JS
        </div>
      ),
      color: 'hover:border-emerald-400/50 hover:bg-emerald-950/20',
    },
    {
      id: 'express',
      name: 'Express',
      icon: (
        <span className="font-mono text-xs font-bold text-slate-200">ex</span>
      ),
      color: 'hover:border-slate-400/50 hover:bg-slate-800/30',
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: (
        <span className="text-sm">🍃</span>
      ),
      color: 'hover:border-emerald-500/50 hover:bg-emerald-950/20',
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: (
        <div className="w-5 h-5 rounded bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-black">
          JS
        </div>
      ),
      color: 'hover:border-amber-400/50 hover:bg-amber-950/20',
    },
    {
      id: 'html5',
      name: 'HTML5',
      icon: (
        <div className="w-5 h-5 rounded bg-orange-600 text-white flex items-center justify-center text-[10px] font-black">
          5
        </div>
      ),
      color: 'hover:border-orange-500/50 hover:bg-orange-950/20',
    },
    {
      id: 'css3',
      name: 'CSS3',
      icon: (
        <div className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center text-[10px] font-black">
          3
        </div>
      ),
      color: 'hover:border-blue-500/50 hover:bg-blue-950/20',
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      icon: (
        <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      color: 'hover:border-slate-300/50 hover:bg-slate-800/30',
    },
    {
      id: 'figma',
      name: 'Figma',
      icon: (
        <span className="font-bold text-xs text-fuchsia-400">Fig</span>
      ),
      color: 'hover:border-fuchsia-500/50 hover:bg-fuchsia-950/20',
    },
    {
      id: 'docker',
      name: 'Docker',
      icon: (
        <span className="text-sm">🐳</span>
      ),
      color: 'hover:border-sky-500/50 hover:bg-sky-950/20',
    },
    {
      id: 'postman',
      name: 'Postman',
      icon: (
        <span className="text-sm">🚀</span>
      ),
      color: 'hover:border-orange-500/50 hover:bg-orange-950/20',
    },
    {
      id: 'sql',
      name: 'SQL',
      icon: (
        <div className="w-5 h-5 rounded border border-blue-400 flex flex-col items-center justify-center text-[9px] font-bold text-blue-300">
          SQL
        </div>
      ),
      color: 'hover:border-blue-400/50 hover:bg-blue-950/20',
    },
  ];

  return (
    <section id="about" className="relative py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Glassmorphic Section from reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Card 1: About Me (4 cols on lg) */}
          <div className="lg:col-span-4 rounded-3xl glass-card p-6 sm:p-7 flex flex-col justify-between border border-purple-200 dark:border-purple-500/20 shadow-xl relative overflow-hidden group hover:border-purple-400 dark:hover:border-purple-500/40 transition-all duration-300">
            {/* Ambient accent light inside card */}
            <div className="absolute -top-16 -left-16 w-36 h-36 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Dot + Label */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]" />
                <span className="text-sm font-semibold text-purple-700 dark:text-purple-200 tracking-wide">
                  About Me
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4 font-display">
                Turning Ideas Into Powerful{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400">
                  Web Solutions
                </span>
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/85 leading-relaxed mb-6">
                {PERSONAL_INFO.about}
              </p>
            </div>

            {/* "More About Me →" Button */}
            <div>
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-800 dark:text-purple-200 bg-purple-100/70 dark:bg-transparent glass-pill border border-purple-300 dark:border-purple-500/30 hover:border-purple-400 hover:bg-purple-200/80 dark:hover:bg-purple-600/20 transition-all duration-200 cursor-pointer group/btn"
              >
                <span>More About Me</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-purple-600 dark:text-purple-400" />
              </button>
            </div>
          </div>

          {/* Card 2: 3 Feature Pills on left + 3D Workstation Illustration on right (matching reference image) */}
          <div className="lg:col-span-5 rounded-3xl glass-card p-5 sm:p-6 flex flex-col justify-center border border-purple-200 dark:border-purple-500/20 shadow-xl relative overflow-hidden group hover:border-purple-400 dark:hover:border-purple-500/40 transition-all duration-300">
            {/* Ambient inner glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center relative z-10 h-full">
              {/* Left inside card: 3 Feature Pills (sm:col-span-6) */}
              <div className="sm:col-span-6 flex flex-col gap-2.5">
                {/* Feature 1: BTS */}
                <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-purple-100/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/20 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-xl bg-purple-200 dark:bg-purple-800/40 flex items-center justify-center text-purple-700 dark:text-purple-300 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                      BTS in Informatique
                    </div>
                    <div className="text-[10px] text-purple-700/80 dark:text-purple-300/70">
                      de Gestion
                    </div>
                  </div>
                </div>

                {/* Feature 2: MERN Stack */}
                <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-purple-100/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/20 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-xl bg-fuchsia-200 dark:bg-fuchsia-800/40 flex items-center justify-center text-fuchsia-700 dark:text-fuchsia-300 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                      MERN Stack
                    </div>
                    <div className="text-[10px] text-fuchsia-700/80 dark:text-fuchsia-300/70">
                      Developer
                    </div>
                  </div>
                </div>

                {/* Feature 3: Hackathon Prize */}
                <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-purple-100/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/20 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-xl bg-amber-200 dark:bg-amber-800/40 flex items-center justify-center text-amber-700 dark:text-amber-300 shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                      1st Prize
                    </div>
                    <div className="text-[10px] text-amber-700/80 dark:text-amber-300/70">
                      Hackathon
                    </div>
                  </div>
                </div>
              </div>

              {/* Right inside card: 3D Workstation Illustration (sm:col-span-6) */}
              <div className="sm:col-span-6 flex items-center justify-center">
                <div className="relative w-full max-w-[210px] rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/assets/portfolio/workstation_3d.png"
                    alt="3D Coding Workstation Illustration with laptop and plant"
                    className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(168,85,247,0.3)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: My Skills Grid (3 cols on lg, 4 on xl) */}
          <div className="lg:col-span-3 rounded-3xl glass-card p-5 sm:p-6 flex flex-col justify-between border border-purple-200 dark:border-purple-500/20 shadow-xl relative overflow-hidden group hover:border-purple-400 dark:hover:border-purple-500/40 transition-all duration-300">
            {/* Ambient inner glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fuchsia-600/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Dot + Label */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]" />
                  <span className="text-sm font-semibold text-purple-700 dark:text-purple-200 tracking-wide">
                    My Skills
                  </span>
                </div>
                <span className="text-[11px] text-purple-700 dark:text-purple-400 font-mono font-medium">26 Skills & Tools</span>
              </div>

              {/* 12 Skill Cards Grid (4 cols x 3 rows) */}
              <div className="grid grid-cols-4 gap-2.5">
                {featuredSkills.map((skill) => (
                  <button
                    key={skill.id}
                    onClick={() => onSkillClick(skill.id)}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-2xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-500/15 transition-all duration-200 hover:scale-105 cursor-pointer ${skill.color}`}
                    title={`Explore ${skill.name}`}
                  >
                    <div className="w-7 h-7 flex items-center justify-center mb-1">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-medium text-slate-800 dark:text-slate-300 text-center truncate w-full">
                      {skill.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom link to full interactive skills matrix */}
            <div className="mt-4 pt-3 border-t border-purple-200 dark:border-purple-500/20 flex items-center justify-between text-xs text-purple-700 dark:text-purple-300/80">
              <span>Explore my skills</span>
              <button
                onClick={() => onSkillClick('all')}
                className="hover:text-purple-900 dark:hover:text-purple-200 underline decoration-purple-500/40 cursor-pointer flex items-center gap-1 font-semibold"
              >
                <span>View Matrix</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
