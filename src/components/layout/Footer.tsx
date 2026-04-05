import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { contactInfo } from '@/data/contact';

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Our Team', href: '/team' },
  { label: 'About Us', href: '/about' },
  { label: 'Book Now', href: '/booking' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  'Classic Haircut — RM 35',
  'Fade Haircut — RM 40',
  'Beard Trim — RM 25',
  'Royal Shave — RM 45',
  'Kids Haircut — RM 25',
  'Combo Package — RM 65',
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Top red accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-gold via-gold-light to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/images/Logo/logo-cropped.png"
              alt="Issa Cuts"
              width={193}
              height={91}
              className="h-12 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Premium barbershop in SS15, Subang Jaya. Where precision meets tradition.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaInstagram, href: contactInfo.social.instagram, label: 'Instagram' },
                { icon: FaFacebook, href: contactInfo.social.facebook, label: 'Facebook' },
                { icon: FaTiktok, href: contactInfo.social.tiktok, label: 'TikTok' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="label-tag text-gray-400 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span>{label}</span>
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="label-tag text-gray-400 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-gray-500">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="label-tag text-gray-400 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="label-tag text-gray-500 mb-2">Opening Hours</p>
              <p className="text-sm text-gray-400">Open Daily: {contactInfo.hours.weekdays}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Issa Cuts &amp; Coiffure. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">SS15, Subang Jaya · Open Daily 10 AM – 1 AM</p>
        </div>
      </div>
    </footer>
  );
}
