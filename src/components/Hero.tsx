import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onDownloadCV: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onDownloadCV,
  onOpenContact,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient neon glow circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Typography & CTAs (approx 5-6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
            
            {/* "Hello, I'm 👋" with curved hand-drawn accent arrow */}
            <div className="relative inline-flex items-center gap-2 mb-3">
              <span className="text-xl sm:text-2xl font-normal text-slate-700 dark:text-slate-200 flex items-center gap-2">
                Hello, I'm
                <span className="inline-block animate-bounce text-2xl origin-bottom-right">👋</span>
              </span>

              {/* Hand-drawn arrow accent SVG */}
              <svg
                className="w-12 h-8 text-purple-500 dark:text-purple-400 absolute -top-5 left-28 hidden sm:block pointer-events-none opacity-80"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 50 C 40 10, 70 10, 85 25"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M75 28 L 87 26 L 86 14"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Name: "Chaima Touj" */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.05] mb-3 font-display">
              <span className="text-slate-900 dark:text-white mr-3">Chaima</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                Touj
              </span>
            </h1>

            {/* Professional Title: "Full Stack Web Developer" */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 dark:from-fuchsia-400 dark:via-purple-300 dark:to-indigo-300">
                Junior Full Stack
              </span>{' '}
              <span className="text-slate-800 dark:text-slate-200">
                Web Developer
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300/90 max-w-xl leading-relaxed mb-8">
              {PERSONAL_INFO.description.split('MERN Stack')[0]}
              <span className="text-purple-700 dark:text-purple-300 font-semibold underline decoration-purple-500/50 underline-offset-4">
                MERN Stack
              </span>.
              
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onExploreWork}
                className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:base font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:from-purple-500 hover:via-fuchsia-500 hover:to-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onDownloadCV}
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 bg-purple-100/80 dark:bg-transparent glass-pill hover:bg-purple-200/80 dark:hover:bg-purple-900/30 border border-purple-300 dark:border-purple-500/30 hover:border-purple-400/60 shadow-lg shadow-purple-500/5 dark:shadow-black/30 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-purple-600 dark:text-purple-400" />
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center glass-card border border-purple-200 dark:border-purple-500/30 hover:border-purple-400 text-slate-700 dark:text-slate-300 hover:text-purple-900 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-purple-600/30 transition-all duration-200 hover:scale-110 shadow-md"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center glass-card border border-purple-200 dark:border-purple-500/30 hover:border-purple-400 text-slate-700 dark:text-slate-300 hover:text-purple-900 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-purple-600/30 transition-all duration-200 hover:scale-110 shadow-md"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                className="w-10 h-10 rounded-full flex items-center justify-center glass-card border border-purple-200 dark:border-purple-500/30 hover:border-purple-400 text-slate-700 dark:text-slate-300 hover:text-purple-900 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-purple-600/30 transition-all duration-200 hover:scale-110 shadow-md cursor-pointer"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </button>

              <div className="h-4 w-[1px] bg-purple-300 dark:bg-purple-500/30 mx-2" />

              <span className="text-xs text-purple-700 dark:text-purple-300/70 font-mono tracking-wider flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                Available for hire
              </span>
            </div>
          </div>

          {/* Right Column: Original Anime Girl Developer & 3D Laptop matching reference image */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            
            {/* Outer subtle purple neon ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-purple-600/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Central Anime Girl Developer artwork from reference image */}
            <div className="relative z-10 w-full max-w-[680px] group transition-transform duration-500 hover:scale-[1.015]">
              <img
                src="/assets/portfolio/anime_hero_full.png"
                alt="Chaima Touj - Anime Girl Developer with 3D Laptop, MERN stack badges and purple neon atmosphere"
                className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_94%,transparent_100%)]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
