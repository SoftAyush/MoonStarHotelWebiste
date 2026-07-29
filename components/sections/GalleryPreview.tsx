'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GalleryGrid } from '@/components/ui/GalleryGrid';
import { GALLERY_ITEMS } from '@/constants/hotelData';

export const GalleryPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Visual Journey"
          title="A Glimpse Into Our Sanctuary"
          subtitle="Take a look at our rooms, restaurant, and lobby before you arrive in Manaschowk, Hetauda."
        />

        <GalleryGrid items={GALLERY_ITEMS} showFilters={false} limit={6} />

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-obsidian-900 hover:bg-gold-500 text-white hover:text-obsidian-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl group"
          >
            <span>View Complete Photo Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
