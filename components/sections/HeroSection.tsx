'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Star, Heart, MapPin, Phone } from 'lucide-react';
import { HOTEL_INFO } from '@/constants/hotelData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[680px] w-full flex items-center justify-center overflow-hidden bg-obsidian-950">
      {/* Hero Background Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/moonstar/bar-area.jpeg"
          alt="Moon Star Restaurant & Lodge interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/95 via-obsidian-950/70 to-obsidian-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-black/60" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <div className="max-w-3xl">
          {/* Top Tagline Badge from Business Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/40 bg-obsidian-900/80 backdrop-blur-md mb-6 shadow-xl"
          >
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-current" />
            <span className="text-xs uppercase tracking-widest text-gold-200 font-semibold">
              {HOTEL_INFO.tagline}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4"
          >
            {HOTEL_INFO.name} <br />
            <span className="text-gold-gradient text-3xl sm:text-5xl lg:text-6xl block font-normal mt-2">
              in Hetauda
            </span>
          </motion.h1>

          {/* Address Line from Business Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-2 text-gold-300 text-sm sm:text-base font-medium mb-6"
          >
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{HOTEL_INFO.address}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light"
          >
            A comfortable hotel and restaurant in Hetauda, offering clean rooms, warm hospitality, free Wi-Fi, secure parking, and family-friendly dining for travelers and locals.
          </motion.p>

          {/* Quick Feature Badges from Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
          >
            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200 text-center font-medium">
              🛏️ Comfortable Stay
            </div>
            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200 text-center font-medium">
              🍽️ Delicious Food
            </div>
            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200 text-center font-medium">
              📶 Free Wi-Fi
            </div>
            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200 text-center font-medium">
              🅿️ Parking Facility
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/rooms"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-gold-500/30 flex items-center justify-center gap-3 group"
            >
              <span>Explore Rooms & Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {HOTEL_INFO.phone}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gold-400/80 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Thank You For Visiting Us</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
