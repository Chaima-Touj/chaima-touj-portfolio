import React, { useMemo, useState } from 'react';
import { ArrowRight, ExternalLink, Search, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { filterProjects, Project } from '../utils/filterProjects';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(PROJECTS_DATA.map((project) => project.category)))],
    []
  );
  const filtered = filterProjects(PROJECTS_DATA, selectedCategory, searchQuery);

  return (
    <section id="projects" className="relative py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-200 tracking-wide">
                My Work · {PROJECTS_DATA.length} Projects
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-display">
              Websites &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400">
                Digital Experiences
              </span>
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80 max-w-2xl">
              A selection of websites I designed and developed. Open a project to explore its details or view the supplied website preview.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search projects"
                className="w-44 sm:w-56 pl-9 pr-3 py-2 rounded-full text-xs glass-card border border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400"
              />
              <Search className="w-4 h-4 text-purple-500 dark:text-purple-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3 mb-5 scrollbar-hide" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-500/25'
                  : 'glass-card text-slate-600 dark:text-slate-300 border-purple-200 dark:border-purple-500/25 hover:border-purple-400 hover:text-purple-800 dark:hover:text-white'
              }`}
            >
              {cat === 'All' ? `All (${PROJECTS_DATA.length})` : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onSelectProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
              className="group rounded-3xl glass-card overflow-hidden border border-purple-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-400/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-purple-950/40">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-70 group-hover:opacity-45 transition-opacity" />
                <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-purple-100 bg-purple-950/85 backdrop-blur-md border border-purple-400/40">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-white bg-fuchsia-600/90 backdrop-blur-md border border-fuchsia-300/40">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300/80 line-clamp-2 mt-1 mb-3">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/40 text-purple-900 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md text-purple-700 dark:text-purple-400/80 font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-purple-200 dark:border-purple-500/15 flex items-center justify-between text-xs font-semibold text-purple-700 dark:text-purple-300 group-hover:text-purple-900 dark:group-hover:text-purple-200">
                  <span>Explore project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 rounded-3xl glass-card border border-purple-500/20">
            <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-sm text-slate-700 dark:text-slate-300">No projects found matching your search.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 px-4 py-1.5 rounded-full text-xs bg-purple-600 text-white"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
