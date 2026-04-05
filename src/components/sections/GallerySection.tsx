'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scissors } from 'lucide-react';
import { InView } from '@/components/ui/InView';

const images = [
  { id: 1, title: 'Low Fade with Line Up', src: '/images/gallery/unnamed.webp' },
  { id: 2, title: 'Mid Fade Pompadour',    src: '/images/gallery/unnamed.jpg' },
  { id: 3, title: 'Pattern Fade',          src: '/images/gallery/unnamed-7.webp' },
  {
    id: 4,
    title: 'Classic Side Part',
    src: '/images/gallery/AHVAweoWhKP8IhStGdyseLrdWA-l4RrusQqymQeAgiQkfo2ziGRm6jLzey_6VDU34YwYMO8_BYNDZI9nDEvHVONIGtjlAU8p3mnDYtw0nRW4FfW63JnuYT3CI9jW.webp',
  },
  {
    id: 5,
    title: 'Beard Sculpting',
    src: '/images/gallery/AHVAwerfVtHRDEH1MN695aqOeouKEH9ZEbFATAuEc5iqQW7HLa1C2scaxeUbJV42dN8c5kw1oCG5iGznlw9WBHgxAOU0DcasnA7skB73aXeNX74GnY49QumSXL-5.webp',
  },
  {
    id: 6,
    title: 'Hair Design Art',
    src: '/images/gallery/AHVAwepC103OLwkEea53hku9iEzzXb2Bk7cSpN6YoCrJfy5xjoT0PSjs8DGFIJlhZ7YhK53KjwZP6hJW99olr_oYL0N6kESCZ3v9Y5YOjG7taE7uG5WoZkfWLXek.webp',
  },
];

// Triple-duplicate so the loop never shows a gap at any viewport width
const row1 = [...images, ...images, ...images];
const row2 = [...[...images].reverse(), ...[...images].reverse(), ...[...images].reverse()];

function SlideCard({ title, src }: { title: string; src: string }) {
  return (
    <div className="relative flex-shrink-0 w-72 h-80 mx-3 rounded-2xl overflow-hidden group cursor-pointer">
      {/* image */}
      <Image
        src={src}
        alt={title}
        fill
        sizes="288px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* always-visible bottom gradient so the card looks rich even at rest */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* red top accent line — sweeps in on hover */}
      <div className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-gold transition-[width] duration-500 ease-out z-20" />

      {/* hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-semibold text-sm">{title}</p>
        <span className="label-tag text-gold mt-1 block">Issa Cuts</span>
      </div>
    </div>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] overflow-hidden relative">

      {/* subtle red ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(220,20,60,0.08) 0%, transparent 70%)' }}
      />

      {/* ── Header ── */}
      <InView className="text-center mb-16 px-6">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-gold" />
          <span className="label-tag text-gold tracking-[0.28em]">Our Work</span>
          <div className="w-8 h-px bg-gold" />
        </div>
        <h2 className="section-heading text-white mb-4">
          The Craft <span className="text-gradient">Speaks</span>
        </h2>
        <p className="text-gray-400 max-w-md mx-auto text-base leading-relaxed">
          Every cut, fade &amp; style — crafted with precision and passion.
        </p>
      </InView>

      {/* ── Row 1 — left to right scroll ── */}
      <div className="marquee-row relative mb-5">
        {/* edge masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-48 z-10"
          style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-48 z-10"
          style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

        <div
          className="flex"
          style={{
            width: 'max-content',
            willChange: 'transform',
            animation: 'marquee-left 38s linear infinite',
          }}
        >
          {row1.map((img, i) => (
            <SlideCard key={`r1-${i}`} title={img.title} src={img.src} />
          ))}
        </div>
      </div>

      {/* ── Row 2 — right to left scroll (opposite) ── */}
      <div className="marquee-row relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-48 z-10"
          style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-48 z-10"
          style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

        <div
          className="flex"
          style={{
            width: 'max-content',
            willChange: 'transform',
            animation: 'marquee-right 48s linear infinite',
          }}
        >
          {row2.map((img, i) => (
            <SlideCard key={`r2-${i}`} title={img.title} src={img.src} />
          ))}
        </div>
      </div>

      {/* ── Divider + CTA ── */}
      <InView delay={0.1} className="mt-16 flex flex-col items-center gap-6 px-6">
        <div className="flex items-center gap-4 opacity-30 w-40">
          <div className="flex-1 h-px bg-white" />
          <Scissors size={14} className="text-white flex-shrink-0" />
          <div className="flex-1 h-px bg-white" />
        </div>
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-3 text-sm font-semibold text-white/60 hover:text-gold transition-colors duration-200"
        >
          View Full Gallery
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </InView>
    </section>
  );
}
