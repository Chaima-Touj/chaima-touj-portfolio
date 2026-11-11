import React, { useState } from 'react';
import { Download, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer shadow-xs"
        title="Install portfolio as desktop / mobile app"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Install App</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer shadow-xs"
          title="Install on iOS Home Screen"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Install</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
            <div className="w-full max-w-sm rounded-3xl glass-card p-6 border border-purple-200 dark:border-purple-500/30 bg-white dark:bg-[#0c051a] shadow-2xl relative">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800/40 text-slate-500 dark:text-slate-400 cursor-pointer"
                aria-label="Close installation guide"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display mb-2 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-purple-500" />
                <span>Install on iOS</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                1. Tap the <strong>Share</strong> button in Safari's bottom toolbar.<br />
                2. Scroll down and select <strong>Add to Home Screen</strong>.
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500 cursor-pointer transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
