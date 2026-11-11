import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-200 dark:border-purple-500/20 bg-[#f4effc] dark:bg-[#06020f] py-12 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-200 dark:border-purple-500/10">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-500/40 flex items-center justify-center text-purple-700 dark:text-purple-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-slate-900 dark:text-white">
                <span className="text-purple-600 dark:text-purple-400">&lt;/&gt;</span> Chaima <span className="text-purple-600 dark:text-purple-400">Touj</span>
              </div>
              <div className="text-xs text-purple-700 dark:text-purple-300/70 font-script text-base">
                Dream • Code • Create 💜 ✨
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <button
              onClick={() => onNavigate('home')}
              className="text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={onOpenCV}
              className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 underline underline-offset-4 cursor-pointer font-semibold"
            >
              Curriculum Vitae
            </button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-card border border-purple-200 dark:border-purple-500/30 hover:border-purple-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-card border border-purple-200 dark:border-purple-500/30 hover:border-purple-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-700 dark:bg-purple-600/30 dark:hover:bg-purple-600 dark:text-purple-300 border border-purple-300 dark:border-purple-500/40 transition-all cursor-pointer shadow-xs"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400/80 gap-3">
          <p>
            © {new Date().getFullYear()} Chaima Touj. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-purple-700 dark:text-purple-300/80 font-medium">
            <span>Designed & developed by Chaima Touj</span>
            <Heart className="w-3.5 h-3.5 text-fuchsia-500 dark:text-fuchsia-400 fill-fuchsia-500 dark:fill-fuchsia-400" />
          </p>
        </div>

      </div>
    </footer>
  );
};
