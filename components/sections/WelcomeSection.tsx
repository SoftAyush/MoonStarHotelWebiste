'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { HOTEL_STATS } from '@/constants/hotelData';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-6">
            <SectionTitle
              badge="Welcome to Moon Star"
              title="A Timeless Haven of Elegance & Serenity"
              subtitle="Founded on the principles of immaculate hospitality and architectural grandeur, Moon Star Hotel transforms luxury into an art form."
              centered={false}
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-600 text-base leading-relaxed mb-6"
            >
              Every corner of our sanctuary is tailored to evoke tranquility. Whether you are reclining by our temperature-regulated infinity pool, tasting multi-course masterworks from Michelin chefs, or resting in customized Egyptian cotton linens, your stay is elevated beyond measure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-400/10 text-gold-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-obsidian-900">24/7 Personal Butler Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-400/10 text-gold-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-obsidian-900">Private Rooftop Sky Deck</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-400/10 text-gold-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-obsidian-900">Award-Winning Culinary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-400/10 text-gold-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-obsidian-900">Hydrotherapy Spa Spa</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-obsidian-900 hover:bg-gold-500 text-white hover:text-obsidian-950 font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-md group"
              >
                <span>Discover Our Heritage</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Overlapping Images Frame */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop"
                alt="Moon Star Lobby Entrance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            {/* Overlapping Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 w-64 sm:w-72 h-44 sm:h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop"
                alt="Moon Star Pool View"
                fill
                sizes="300px"
                className="object-cover"
              />
            </motion.div>

            {/* Gold Floating Experience Badge */}
            <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 bg-obsidian-950 text-white p-5 sm:p-6 rounded-2xl border border-gold-400/30 shadow-2xl flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-gold-400 animate-pulse shrink-0" />
              <div>
                <span className="font-serif text-2xl font-bold text-gold-300 block">25+ Years</span>
                <span className="text-xs text-gray-300 tracking-wide uppercase">Of 5-Star Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Counter Strip */}
        <div className="mt-20 pt-12 border-t border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {HOTEL_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center sm:text-left"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-600 block mb-1">
                {stat.value}
              </span>
              <span className="font-semibold text-obsidian-900 text-base block mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-gray-500 leading-relaxed block max-w-xs">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
