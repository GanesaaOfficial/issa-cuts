'use client';

import { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const btnRef = useRef<HTMLButtonElement>(null);

  // Direct DOM visibility — no React state, no re-renders on scroll
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const onScroll = () => {
      btn.style.opacity = window.scrollY > 400 ? '1' : '0';
      btn.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      ref={btnRef}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ opacity: 0, pointerEvents: 'none', transition: 'opacity 0.25s ease, transform 0.2s ease, background-color 0.2s ease' }}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-gold text-white rounded-full shadow-red flex items-center justify-center hover:bg-gold-dark hover:scale-110 active:scale-95"
      aria-label="Back to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}
