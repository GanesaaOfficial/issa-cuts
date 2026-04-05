'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, Calendar, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-light flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated 404 */}
          <motion.div
            className="relative mb-8"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h1 className="text-9xl md:text-[200px] font-bold text-charcoal/10">404</h1>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              <Scissors className="text-gold" size={120} />
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Looks like this page got a trim too! The page you're looking for doesn't exist.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button size="lg" className="gap-2 shadow-xl">
                <Home size={20} />
                Go Home
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="gap-2 shadow-xl">
                <Search size={20} />
                View Services
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="secondary" className="gap-2 shadow-xl">
                <Calendar size={20} />
                Book Appointment
              </Button>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-300"
          >
            <p className="text-gray-600 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="text-gold hover:text-gold-dark font-medium">
                About Us
              </Link>
              <Link href="/gallery" className="text-gold hover:text-gold-dark font-medium">
                Gallery
              </Link>
              <Link href="/team" className="text-gold hover:text-gold-dark font-medium">
                Our Team
              </Link>
              <Link href="/contact" className="text-gold hover:text-gold-dark font-medium">
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
