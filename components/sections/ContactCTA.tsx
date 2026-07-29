'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '@/constants/hotelData';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-obsidian-900 relative overflow-hidden text-white border-y border-gold-400/20">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-300 text-xs font-semibold tracking-widest uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Bespoke Reservations
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          Ready to Experience <span className="text-gold-gradient">Unrivaled Luxury</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Contact our dedicated concierge team today to tailor your stay, arrange limousine transfers, or reserve your private suite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-2xl hover:scale-105 flex items-center justify-center gap-3 group"
          >
            <span>Inquire Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-gold-400" />
            <span>{HOTEL_INFO.phone}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
