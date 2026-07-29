'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BedDouble, Wifi, UtensilsCrossed, Car, Heart, Clock } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

const FEATURES = [
  {
    icon: BedDouble,
    title: 'Comfortable Stay',
    description: 'Clean, spacious, and soundproof rooms equipped with comfortable bedding, LED TVs, air conditioning, and en-suite baths.',
    badge: 'Card Highlight'
  },
  {
    icon: UtensilsCrossed,
    title: 'Delicious Food',
    description: 'Freshly prepared authentic Nepali thali, delicious Momo, Indian gravies, and snacks served with hygienic culinary standards.',
    badge: 'Card Highlight'
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'Complimentary high-speed wireless network accessible in all guest rooms, restaurant dining areas, and reception lounge.',
    badge: 'Card Highlight'
  },
  {
    icon: Car,
    title: 'Parking Facility',
    description: 'Dedicated, secure, and hassle-free vehicle parking facility on premises for cars, SUVs, and motorcycles.',
    badge: 'Card Highlight'
  },
  {
    icon: Heart,
    title: 'Hospitality with a Heart',
    description: 'Our core tagline and commitment—delivering warm, intuitive, and genuine Nepali care to every guest visiting us.',
    badge: 'Our Promise'
  },
  {
    icon: Clock,
    title: '24/7 Check-in & Service',
    description: 'Round-the-clock reception and room service support to accommodate late arrivals and early morning departures.',
    badge: 'Always Available'
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-obsidian-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Thank You For Visiting Us!"
          title="Our Key Amenities & Services"
          subtitle="Discover the core services offered at Moon Star Restaurant & Lodge in Hetauda-2, Manaschowk."
          lightMode={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-400/50 hover:bg-white/10 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gold-400/10 text-gold-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full bg-gold-400/10 text-gold-300 border border-gold-400/20">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-300 transition-colors mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
