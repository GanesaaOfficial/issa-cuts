'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const prev = () => {
    setAutoPlay(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setAutoPlay(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <Section id="testimonials" background="dark">
      <div className="grid lg:grid-cols-12 gap-12 items-start">

        {/* Left: header + nav */}
        <div className="lg:col-span-4">
          <SectionHeader
            label="Reviews"
            title="What Clients Say"
            centered={false}
            light
          />

          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xs">
            Honest reviews from our growing community of 5,000+ satisfied clients.
          </p>

          {/* Nav buttons */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
            <span className="text-xs text-gray-600 ml-2 tracking-widest">
              {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAutoPlay(false); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: testimonial card */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-8 md:p-12"
            >
              {/* Large decorative quote mark */}
              <div
                className="absolute top-6 right-8 text-[8rem] font-bold leading-none text-white/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-10 max-w-2xl">
                "{t.comment}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-lg leading-none">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-base leading-tight">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5 label-tag">{t.service}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
