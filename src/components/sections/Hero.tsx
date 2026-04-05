'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const DELAY = {
  label: 0.05,
  line1: 0.2,
  line2: 0.35,
  line3: 0.5,
  rule: 0.6,
  sub: 0.7,
  cta: 0.8,
  right: 0.45,
};

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative bg-[#0f0f0f] text-white overflow-hidden min-h-[91vh] flex flex-col">

      {/* Full-bleed image — right half, desktop */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[46%] z-0">
        <Image
          src="/images/hero/best-barber-shop-subang-jaya.webp"
          alt="Premium barbershop — Issa Cuts & Coiffure, SS15 Subang Jaya"
          fill
          className="object-cover object-center"
          priority
          sizes="46vw"
        />
        {/* Left-side fade so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />

      </div>

      {/* Gold accent line — top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold/60 to-transparent z-10" />

      {/* Faint gold glow — top left */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle dot grid — left half only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Main layout */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            {/* ── LEFT ── */}
            <div className="lg:col-span-6 xl:col-span-6">

              {/* Label */}
              <FadeUp delay={DELAY.label} className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-gold flex-shrink-0" />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold/90">
                  Premium Barbershop · SS15, Subang Jaya
                </span>
              </FadeUp>

              {/* Headline — 3 lines, controlled size */}
              <div className="mb-8 space-y-0 leading-[0.92]">
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: '105%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.7, delay: DELAY.line1, ease: 'easeOut' }}
                    className="block text-[clamp(2.8rem,6.5vw,5.5rem)] font-extrabold tracking-[-0.03em] text-white"
                  >
                    WHERE STYLE
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: '105%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.7, delay: DELAY.line2, ease: 'easeOut' }}
                    className="block text-[clamp(2.8rem,6.5vw,5.5rem)] font-extrabold tracking-[-0.03em] text-gold"
                  >
                    MEETS
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: '105%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.7, delay: DELAY.line3, ease: 'easeOut' }}
                    className="block text-[clamp(2.8rem,6.5vw,5.5rem)] font-extrabold tracking-[-0.03em] text-white"
                  >
                    TRADITION<span className="text-gold">.</span>
                  </motion.span>
                </div>
              </div>

              {/* Thin rule */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: DELAY.rule, ease: 'easeOut' }}
                style={{ originX: 0 }}
                className="h-px bg-white/10 mb-8 max-w-sm"
              />

              {/* Subtitle */}
              <FadeUp delay={DELAY.sub} className="mb-10">
                <p className="text-gray-400 text-base md:text-[17px] leading-relaxed max-w-[380px]">
                  Expert cuts, sharp fades & precise beard work by master barbers.
                  Trusted by 5,000+ clients in Subang Jaya since 2014.
                </p>
              </FadeUp>

              {/* CTAs */}
              <FadeUp delay={DELAY.cta} className="flex flex-wrap gap-3">
                <Link
                  href="/booking"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold text-white text-sm font-semibold tracking-wide rounded-lg hover:bg-gold-dark hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(220,20,60,0.4)] transition-all duration-200 active:scale-[0.97]"
                >
                  Book Appointment
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-7 py-3.5 border border-white/20 text-white/80 text-sm font-medium tracking-wide rounded-lg hover:border-white/40 hover:text-white hover:bg-white/8 hover:-translate-y-px transition-all duration-200 active:scale-[0.97]"
                >
                  View Services
                </Link>
              </FadeUp>

              {/* Mobile stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="lg:hidden mt-10 pt-8 border-t border-white/8 grid grid-cols-4 gap-4 text-center"
              >
                {[
                  { v: '10+', l: 'Years' },
                  { v: '5K+', l: 'Clients' },
                  { v: '5.0', l: 'Rating' },
                  { v: '3', l: 'Barbers' },
                ].map(({ v, l }) => (
                  <div key={l}>
                    <div className="text-xl font-bold text-gold">{v}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right column — spacer so left content doesn't stretch full width on desktop */}
            <div className="lg:col-span-6 hidden lg:block" />

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="hidden lg:flex absolute bottom-7 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-gold rounded-full animate-[scrollDot_1.6s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </section>
  );
}
