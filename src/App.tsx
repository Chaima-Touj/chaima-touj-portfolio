/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { CVModal } from './components/CVModal';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { useGSAPScrollTrigger } from './hooks/useGSAPScrollTrigger';
import { Project } from './utils/filterProjects';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  // Initialize GSAP ScrollTrigger staggered entrance animations
  useGSAPScrollTrigger();

  // Default theme is ALWAYS dark mode to match the cyberpunk/neon anime visual identity
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isLightExplicitlySaved = savedTheme === 'light';
    const isDark = !isLightExplicitlySaved;

    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  // Scroll to section helper
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop - offset;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#faf7fd] text-slate-900 dark:bg-[#070210] dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
      
      {/* Slim Neon-Violet Scroll Progress Bar at very top */}
      <ScrollProgressBar />

      {/* Interactive particle nebula background */}
      <ParticleBackground />

      {/* Global Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onOpenContactModal={() => handleNavigate('contact')}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section matching reference image */}
        <Hero
          onExploreWork={() => handleNavigate('projects')}
          onDownloadCV={() => setIsCVModalOpen(true)}
          onOpenContact={() => handleNavigate('contact')}
        />

        {/* 2. Glassmorphism 3-Card Row (About Me, Feature Pills + 3D Workstation, My Skills Grid) */}
        <AboutSection
          onLearnMore={() => handleNavigate('skills')}
          onSkillClick={(_skillId) => handleNavigate('skills')}
        />

        {/* 3. My Projects Showcase (16 original website projects) */}
        <ProjectsSection onSelectProject={setSelectedProject} />

        {/* 4. Full Technical Skills Matrix (skills from Chaima’s CV) */}
        <SkillsSection />

        {/* 5. Professional Experience Timeline (BeeCoders, SNCFT, STB) */}
        <ExperienceSection />

        {/* 6. Certifications & Achievements (Hackathon 1st prize + Certifications) */}
        <CertificationsSection />

        {/* 7. Contact Section (Let's Work Together + Interactive Form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Floating Animated Scroll-To-Top Button with GSAP */}
      <ScrollToTop />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

    </div>
  );
}
