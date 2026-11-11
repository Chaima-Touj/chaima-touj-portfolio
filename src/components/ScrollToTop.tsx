import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';

export const ScrollToTop: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initial setup: hidden, shifted down, scaled down
    if (buttonRef.current) {
      gsap.set(buttonRef.current, {
        opacity: 0,
        scale: 0.7,
        y: 20,
        pointerEvents: 'none',
      });
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
      setScrollProgress(progress);

      const shouldShow = scrollY > 500;
      if (shouldShow !== isVisible) {
        setIsVisible(shouldShow);

        if (buttonRef.current) {
          if (shouldShow) {
            gsap.to(buttonRef.current, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.4,
              ease: 'back.out(1.7)',
              pointerEvents: 'auto',
            });
          } else {
            gsap.to(buttonRef.current, {
              opacity: 0,
              scale: 0.7,
              y: 20,
              duration: 0.3,
              ease: 'power2.in',
              pointerEvents: 'none',
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const scrollToTop = () => {
    if (!buttonRef.current) return;

    // Button pulse bounce animation on click
    gsap.timeline()
      .to(buttonRef.current, { scale: 0.85, duration: 0.15, ease: 'power2.in' })
      .to(buttonRef.current, { scale: 1.15, duration: 0.2, ease: 'back.out(2)' })
      .to(buttonRef.current, { scale: 1, duration: 0.2 });

    // Smooth return to top with native / GSAP window scroll
    const startY = window.scrollY;
    const duration = Math.min(1.2, Math.max(0.6, startY / 2500));
    
    const scrollObj = { y: startY };
    gsap.to(scrollObj, {
      y: 0,
      duration,
      ease: 'power3.inOut',
      onUpdate: () => {
        window.scrollTo(0, scrollObj.y);
      },
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full border border-purple-300 dark:border-purple-400/50 text-purple-700 hover:text-purple-950 dark:text-purple-200 dark:hover:text-white bg-white/95 dark:bg-gradient-to-tr dark:from-purple-950/90 dark:via-purple-900/80 dark:to-fuchsia-950/90 shadow-lg shadow-purple-500/20 dark:shadow-[0_0_20px_rgba(168,85,247,0.45)] hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.75)] hover:border-purple-400 transition-colors duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md"
      style={{ opacity: 0 }}
    >
      {/* Circular SVG Scroll Progress Indicator */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
        viewBox="0 0 44 44"
      >
        <circle
          cx="22"
          cy="22"
          r="19"
          className="text-purple-200 dark:text-purple-950/40"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx="22"
          cy="22"
          r="19"
          className="text-fuchsia-400"
          strokeWidth="2.5"
          strokeDasharray={119.38}
          strokeDashoffset={119.38 - (119.38 * scrollProgress) / 100}
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
      </svg>

      {/* Arrow Icon */}
      <div className="relative z-10 w-5 h-5 flex items-center justify-center">
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
      </div>
    </button>
  );
};
