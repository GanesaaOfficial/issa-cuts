'use client';

import Link from 'next/link';
import { Calendar, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { InView } from '@/components/ui/InView';
import { contactInfo } from '@/data/contact';

export function CTABanner() {
  return (
    <section className="relative bg-charcoal py-20 overflow-hidden noise-overlay">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left */}
          <div className="lg:col-span-6">
            <InView variant="fade-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-gold" />
                <span className="label-tag text-gold">Ready?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                Your Next Great Cut{' '}
                <span className="text-gold">Starts Here</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Walk-ins welcome · Open Daily 10 AM – 1 AM
              </p>
            </InView>
          </div>

          {/* Right: CTAs */}
          <InView variant="fade-right" delay={0.1} className="lg:col-span-6 flex flex-col sm:flex-row gap-3">
            <Link href="/booking" className="group flex-1">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gold text-white text-sm font-semibold tracking-wide rounded-lg hover:bg-gold-dark hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(220,20,60,0.4)] transition-all duration-200 active:scale-[0.97]">
                <Calendar size={16} />
                Book Online
                <ArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a href={`tel:${contactInfo.phone}`} className="flex-1">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-white/20 text-white text-sm font-medium tracking-wide rounded-lg hover:border-white/40 hover:bg-white/8 hover:-translate-y-px transition-all duration-200 active:scale-[0.97]">
                <Phone size={16} />
                {contactInfo.phone}
              </button>
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-white/20 text-white text-sm font-medium tracking-wide rounded-lg hover:border-white/40 hover:bg-white/8 hover:-translate-y-px transition-all duration-200 active:scale-[0.97]">
                <MessageCircle size={16} />
                WhatsApp
              </button>
            </a>
          </InView>
        </div>
      </div>
    </section>
  );
}
