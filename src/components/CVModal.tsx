import React, { useEffect } from 'react';
import { X, Download, Printer, Check, GraduationCap, Briefcase, Award, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, CERTIFICATIONS_DATA, EDUCATION_DATA, LANGUAGES_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-3xl glass-card border border-purple-200 dark:border-purple-500/30 bg-white dark:bg-[#0c051a] shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-cv-title"
      >
        {/* Top bar with actions */}
        <div className="p-4 sm:px-6 bg-purple-50 dark:bg-[#130728] border-b border-purple-200 dark:border-purple-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 dark:bg-purple-400" />
            <h2 id="modal-cv-title" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display">
              Curriculum Vitae — Chaima Touj
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/cv/Chaima_Touj_CV.pdf"
              download="Chaima_Touj_CV.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-sm"
              title="Download original CV PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-800 dark:text-purple-200 bg-purple-100 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-500/25 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors cursor-pointer"
              title="Print this portfolio summary"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Summary</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/40 text-slate-700 dark:text-slate-300 hover:text-purple-950 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-50 dark:bg-[#0a0316] text-slate-800 dark:text-slate-200">
          
          {/* Header */}
          <div className="border-b border-purple-200 dark:border-purple-500/30 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display">
                Chaima Touj
              </h1>
              <p className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400">
                Junior Full Stack Web Developer · MERN Stack
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-lg">
                Junior Full Stack Web Developer with a BTS in Informatique de Gestion and practical experience developing a MERN platform at BeeCoders.
              </p>
            </div>

            <div className="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>github.com/Chaima-Touj</span>
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 flex items-center gap-2 mb-3 font-mono">
              <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/20 shadow-xs">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Frontend</span>
                <span className="text-slate-600 dark:text-slate-300">React.js, Vite, JavaScript, HTML5, CSS3, Responsive Web Design, UI/UX</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/20 shadow-xs">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Backend & APIs</span>
                <span className="text-slate-600 dark:text-slate-300">Node.js, Express.js, REST APIs, JSON</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/20 shadow-xs">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Database & DevOps</span>
                <span className="text-slate-600 dark:text-slate-300">MongoDB, Mongoose, SQL, Git, GitHub, Postman, npm, Docker (Basics)</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/20 shadow-xs">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Programming & Tools</span>
                <span className="text-slate-600 dark:text-slate-300">Java, C, C++, UML, Figma, Prompt Engineering, AI Tools</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 flex items-center gap-2 mb-4 font-mono">
              <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Professional Experience
            </h3>
            <div className="space-y-5">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-white dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/20 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {exp.role} <span className="text-purple-600 dark:text-purple-400">@ {exp.company}</span>
                    </h4>
                    <span className="text-xs font-mono text-purple-700 dark:text-purple-300/80 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-2.5">{exp.description}</p>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 flex items-center gap-2 mb-3 font-mono">
              <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Education
            </h3>
            <div className="p-4 rounded-2xl bg-white dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/20 shadow-xs">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {EDUCATION_DATA.degree}
              </h4>
              <p className="text-xs text-purple-700 dark:text-purple-300 font-mono mt-0.5 font-medium">{EDUCATION_DATA.institution} • {EDUCATION_DATA.period}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5">{EDUCATION_DATA.summary}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">{EDUCATION_DATA.additional}</p>
            </div>
          </div>

          {/* Honors & Certifications */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 flex items-center gap-2 mb-3 font-mono">
              <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Certifications & Honors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="p-3 rounded-xl bg-white dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/20 shadow-xs">
                  <div className="font-bold text-slate-900 dark:text-white mb-0.5">{cert.title}</div>
                  <div className="text-[11px] text-purple-700 dark:text-purple-400 font-mono">{cert.issuer} • {cert.date}</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 flex items-center gap-2 mb-3 font-mono">
              <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES_DATA.map((language) => (
                <span key={language.name} className="px-3 py-2 rounded-xl bg-white dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/20 text-xs text-slate-700 dark:text-slate-200">
                  <strong>{language.name}</strong> · {language.level}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
