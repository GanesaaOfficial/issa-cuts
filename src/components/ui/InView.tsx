'use client';

import { useEffect, useRef } from 'react';

type Variant = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';

interface InViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}

/**
 * CSS-only scroll reveal — IntersectionObserver toggles a class,
 * actual animation runs via @keyframes on the compositor thread (no JS jank).
 */
export function InView({ children, className = '', delay = 0, variant = 'fade-up' }: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) el.style.animationDelay = `${delay}s`;
          el.classList.add('iv-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '-24px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`iv-${variant} ${className}`}>
      {children}
    </div>
  );
}
