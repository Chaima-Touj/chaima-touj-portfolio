import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../utils/filterProjects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl glass-card border border-purple-200 dark:border-purple-500/30 bg-white dark:bg-[#0e0720]/95 text-slate-900 dark:text-slate-100 shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/85 dark:bg-black/60 hover:bg-purple-600 hover:text-white text-slate-700 dark:text-slate-300 border border-purple-200 dark:border-purple-500/30 transition-all cursor-pointer shadow-md"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full aspect-[16/8] overflow-hidden bg-purple-950/60">
          <img src={project.image} alt={`${project.title} website preview`} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-4 left-6 right-16">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/90 text-white backdrop-blur-md border border-purple-400/40 shadow-sm">
              {project.category}
            </span>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-black text-white mt-2 font-display">
              {project.title}
            </h2>
            <p className="text-sm text-purple-100/90">{project.subtitle}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-800 dark:text-purple-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Designed & developed by Chaima Touj
            </span>
            {project.featured && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-fuchsia-800 dark:text-fuchsia-200 bg-fuchsia-100 dark:bg-fuchsia-950/40 border border-fuchsia-200 dark:border-fuchsia-500/25">
                Featured project
              </span>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-800 dark:text-purple-300 mb-2 font-mono">Overview</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{project.description}</p>
            {project.note && (
              <p className="mt-3 rounded-xl border border-amber-300/70 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-950/20 p-3 text-xs text-amber-900 dark:text-amber-200">
                {project.note}
              </p>
            )}
          </div>

          {project.highlights.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Project highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-purple-50/90 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/20 text-xs text-slate-800 dark:text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 dark:bg-fuchsia-400 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2 font-mono">
              <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Technologies used in the supplied source
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-purple-200 dark:border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 shadow-md shadow-purple-500/30 transition-all">
                  <span>Open website preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-purple-100/70 dark:bg-transparent glass-pill border border-purple-300 dark:border-purple-500/30 hover:border-purple-400 hover:text-purple-950 dark:hover:text-white transition-all">
                  <Github className="w-4 h-4" />
                  <span>GitHub Source</span>
                </a>
              )}
            </div>
            <button onClick={onClose} className="text-xs text-purple-700 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white cursor-pointer font-medium">
              Close details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
