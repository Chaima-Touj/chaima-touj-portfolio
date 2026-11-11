import React, { useState, useEffect } from 'react';
import { Moon, Sun, ArrowUpRight, Menu, X, Code2 } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isDarkMode,
  onToggleTheme,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 backdrop-blur-xl bg-white/85 dark:bg-[#070210]/85 border-b border-purple-200 dark:border-purple-900/30 shadow-lg shadow-purple-500/5 dark:shadow-purple-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo matching reference image: </> Chaima Touj */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          aria-label="Chaima Touj Portfolio Home"
        >
          <div className="flex items-center text-lg sm:text-xl font-bold tracking-tight font-display">
            <span className="text-purple-600 dark:text-purple-400 mr-2 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]">&lt;/&gt;</span>
            <span className="text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">Chaima</span>
            <span className="ml-1.5 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
              Touj
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-purple-200/90 dark:border-purple-500/20 bg-white/80 dark:bg-purple-950/30 backdrop-blur-md shadow-xs"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-purple-950 dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-slate-100 hover:bg-purple-100/60 dark:hover:bg-purple-500/10'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <PWAInstallButton />

          <button
            onClick={onOpenContactModal}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide border border-purple-300 dark:border-purple-500/40 bg-purple-100/80 dark:bg-gradient-to-r dark:from-purple-950/60 dark:to-fuchsia-950/40 hover:bg-purple-600 hover:text-white dark:hover:from-purple-600 dark:hover:to-fuchsia-600 text-purple-900 dark:text-purple-200 shadow-sm hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onToggleTheme}
            className="p-2 sm:p-2.5 rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-100/80 dark:bg-purple-950/40 hover:bg-purple-200/90 dark:hover:bg-purple-800/40 text-purple-700 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white transition-all cursor-pointer shadow-xs"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Moon className="w-4 h-4 text-purple-300" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-purple-200 dark:border-purple-500/30 bg-purple-100/70 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white focus:outline-none"
            aria-label="Toggle mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl glass-card border border-purple-200 dark:border-purple-500/30 bg-white/95 dark:bg-[#0c051a]/95 backdrop-blur-2xl shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-600/15 dark:bg-purple-600/30 text-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-500/40 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-purple-100/60 dark:hover:bg-purple-500/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
