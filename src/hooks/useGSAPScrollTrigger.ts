import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPScrollTrigger = () => {
  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Use gsap.context for clean scoping and tear-down in React
    const ctx = gsap.context(() => {
      // 1. About Section — Stagger the 3 glassmorphic dashboard cards
      const aboutCards = document.querySelectorAll('#about .glass-card');
      if (aboutCards.length > 0) {
        gsap.from(aboutCards, {
          scrollTrigger: {
            trigger: '#about',
            start: 'top 82%',
            once: true,
          },
          y: 45,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      // 2. Projects Section — Header & Staggered project cards
      const projectsHeader = document.querySelector('#projects > div > div:first-child');
      if (projectsHeader) {
        gsap.from(projectsHeader, {
          scrollTrigger: {
            trigger: '#projects',
            start: 'top 85%',
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      const projectCards = document.querySelectorAll('#projects .grid > article');
      if (projectCards.length > 0) {
        gsap.from(projectCards, {
          scrollTrigger: {
            trigger: '#projects .grid',
            start: 'top 85%',
            once: true,
          },
          y: 45,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      // 3. Skills Section — Header and staggered tech cards
      const skillsHeader = document.querySelector('#skills > div > div:first-child');
      if (skillsHeader) {
        gsap.from(skillsHeader, {
          scrollTrigger: {
            trigger: '#skills',
            start: 'top 85%',
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      const skillCards = document.querySelectorAll('#skills .grid > div');
      if (skillCards.length > 0) {
        gsap.from(skillCards, {
          scrollTrigger: {
            trigger: '#skills .grid',
            start: 'top 85%',
            once: true,
          },
          y: 35,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        });
      }

      // 4. Experience Section — Timeline items cascading entrance
      const experienceHeader = document.querySelector('#experience > div > div:first-child');
      if (experienceHeader) {
        gsap.from(experienceHeader, {
          scrollTrigger: {
            trigger: '#experience',
            start: 'top 85%',
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      const experienceItems = document.querySelectorAll('#experience .relative.group');
      if (experienceItems.length > 0) {
        gsap.from(experienceItems, {
          scrollTrigger: {
            trigger: '#experience .border-l-2',
            start: 'top 82%',
            once: true,
          },
          x: -30,
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      // 5. Certifications Section — credentials cards & education block
      const certCards = document.querySelectorAll('#certifications .grid > div');
      if (certCards.length > 0) {
        gsap.from(certCards, {
          scrollTrigger: {
            trigger: '#certifications',
            start: 'top 82%',
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      // 6. Contact Section — Channels column & interactive form
      const contactHeader = document.querySelector('#contact .text-center');
      if (contactHeader) {
        gsap.from(contactHeader, {
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 85%',
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      const contactColumns = document.querySelectorAll('#contact .grid > div');
      if (contactColumns.length > 0) {
        gsap.from(contactColumns, {
          scrollTrigger: {
            trigger: '#contact .grid',
            start: 'top 82%',
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }
    });

    // Refresh ScrollTrigger calculations after image loads and layout settles
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert(); // Automatically kills all ScrollTriggers and animations in ctx
    };
  }, []);
};
