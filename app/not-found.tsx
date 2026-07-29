'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Phone } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { HOTEL_INFO } from '@/constants/hotelData';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian-950 flex flex-col items-center justify-center px-4 text-center">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-lg mx-auto"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo className="h-16 w-auto" />
        </div>

        {/* 404 number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="block font-serif text-[9rem] leading-none font-bold text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #F7F2E6 0%, #D4AF37 50%, #C5A880 100%)' }}>
            404
          </span>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Room Not Found
          </h1>
          <p className="text-gray-400 text-base mb-10 leading-relaxed">
            The page you&apos;re looking for seems to have checked out.
            Let us guide you back to where the hospitality is.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gold-400 text-obsidian-950 font-semibold px-7 py-3 rounded-full hover:bg-gold-300 transition-colors duration-300"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-gold-400/40 text-gold-400 font-medium px-7 py-3 rounded-full hover:bg-gold-400/10 transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-600 text-sm">
            {HOTEL_INFO.address}
          </p>
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="text-gold-400/70 text-sm hover:text-gold-400 transition-colors mt-1 block"
          >
            {HOTEL_INFO.formattedPhone}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
