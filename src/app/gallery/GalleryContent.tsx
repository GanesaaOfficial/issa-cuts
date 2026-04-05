'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const images = [
  { id: 1, title: 'Low Fade with Line Up',  src: '/images/gallery/unnamed.webp' },
  { id: 2, title: 'Mid Fade Pompadour',     src: '/images/gallery/unnamed.jpg' },
  { id: 3, title: 'Pattern Fade',           src: '/images/gallery/unnamed-7.webp' },
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

// Three rows — tripled so the loop never shows a gap
const rows: { items: typeof images; animation: string }[] = [
  { items: [...images, ...images, ...images],                                   animation: 'marquee-left  35s linear infinite' },
  { items: [...[...images].reverse(), ...[...images].reverse(), ...[...images].reverse()], animation: 'marquee-right 45s linear infinite' },
  { items: [[...images.slice(2), ...images.slice(0,2)], [...images.slice(2), ...images.slice(0,2)], [...images.slice(2), ...images.slice(0,2)]].flat(), animation: 'marquee-left  40s linear infinite' },
];

function GalleryCard({
  img,
  onClick,
}: {
  img: (typeof images)[0];
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex-shrink-0 w-72 h-80 rounded-2xl overflow-hidden group cursor-pointer mx-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      aria-label={`View ${img.title}`}
    >
      <Image
        src={img.src}
        alt={img.title}
        fill
        sizes="288px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      {/* title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
        <p className="text-white font-semibold text-sm tracking-wide">{img.title}</p>
        <span className="inline-block mt-1 text-xs text-gold uppercase tracking-widest">Issa Cuts</span>
      </div>
    </button>
  );
}

export default function GalleryContent() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setLightbox(i => (i === null ? null : (i + 1) % images.length));

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        {/* subtle red glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="label-tag text-gold tracking-[0.25em] mb-4 block">Our Work</span>
            <h1 className="section-heading text-white mb-5">
              The <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
              Every cut tells a story. Browse our work and find your next signature look.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Infinite Marquee Gallery ── */}
      <section className="py-6 space-y-5 overflow-hidden">
        {rows.map((row, ri) => (
          <div key={ri} className="marquee-row relative">
            {/* edge fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
              style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
              style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

            {/* track with inline animation — guaranteed to run */}
            <div
              className="flex"
              style={{ width: 'max-content', willChange: 'transform', animation: row.animation }}
            >
              {row.items.map((img, idx) => (
                <GalleryCard
                  key={`${ri}-${idx}`}
                  img={img}
                  onClick={() => setLightbox(images.findIndex(i => i.id === img.id))}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── Divider ── */}
      <div className="flex items-center gap-4 max-w-xs mx-auto py-12 opacity-30">
        <div className="flex-1 h-px bg-white/30" />
        <Scissors size={16} className="text-gold flex-shrink-0" />
        <div className="flex-1 h-px bg-white/30" />
      </div>

      {/* ── CTA ── */}
      <section className="pb-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Cut?
          </h2>
          <p className="text-gray-400 mb-8 max-w-sm mx-auto">
            Book your appointment and let our barbers craft your signature style.
          </p>
          <Link href="/booking">
            <Button size="lg">Book Your Appointment</Button>
          </Link>
        </motion.div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
              className="relative w-full max-w-3xl"
              onClick={e => e.stopPropagation()}
            >
              {/* close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={28} />
              </button>

              {/* image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images[lightbox].src}
                  alt={images[lightbox].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* caption */}
              <div className="text-center mt-4">
                <p className="text-white font-semibold">{images[lightbox].title}</p>
                <p className="text-gold text-xs uppercase tracking-widest mt-1">
                  {lightbox + 1} / {images.length}
                </p>
              </div>

              {/* arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gold text-white p-3 rounded-full backdrop-blur transition-colors shadow-xl"
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gold text-white p-3 rounded-full backdrop-blur transition-colors shadow-xl"
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
