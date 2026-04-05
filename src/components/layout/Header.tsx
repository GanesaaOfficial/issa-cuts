'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { contactInfo } from '@/data/contact';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Team', href: '/team' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

function NavLink({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="relative group text-sm font-medium text-gray-600 hover:text-charcoal transition-colors duration-200 py-1"
    >
      {name}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-[width] duration-300 ease-out" />
    </Link>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Direct DOM manipulation — no React state update on scroll, zero re-renders
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-charcoal text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 text-[11px] tracking-widest text-gray-400 hover:text-gold transition-colors uppercase"
          >
            <Phone size={11} />
            <span className="hidden sm:inline">{contactInfo.phone}</span>
          </a>
          <p className="text-[11px] tracking-widest text-gray-400 uppercase">
            Open Daily · 10 AM – 1 AM · SS15, Subang Jaya
          </p>
        </div>
      </div>

      {/* Main nav — plain <header>, scroll state toggled via CSS class */}
      <header ref={headerRef} className="site-header sticky top-0 z-50 bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[80px]">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/Logo/logo-cropped.png"
                alt="Issa Cuts"
                width={193}
                height={91}
                className="h-[52px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <NavLink key={item.name} {...item} />
              ))}
            </div>

            {/* Book Now CTA */}
            <div className="hidden lg:block">
              <Link
                href="/booking"
                className="inline-flex items-center px-6 py-2.5 bg-gold text-white text-sm font-semibold tracking-wide rounded hover:bg-gold-dark transition-[background-color,box-shadow] duration-250"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 -mr-2 text-charcoal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-700 hover:text-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full py-3 bg-gold text-white font-semibold rounded text-sm tracking-wide hover:bg-gold-dark transition-colors">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
