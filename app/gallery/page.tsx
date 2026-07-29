import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GalleryGrid } from '@/components/ui/GalleryGrid';
import { GALLERY_ITEMS } from '@/constants/hotelData';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Media Gallery | High Resolution Showcase',
  description: 'Browse the official photo gallery of Moon Star Hotel featuring our suites, Michelin dining venues, rooftop infinity pool, and luxury architecture.',
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star Gallery Banner"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">
            Visual Storytelling
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Photo & Media <span className="text-gold-gradient">Gallery</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Immerse yourself in high-resolution moments captured across our luxury suites, dining venues, and coastal grounds.
          </p>
        </div>
      </section>

      {/* Main Filterable Gallery */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Interactive Portfolio"
            title="Explore By Category"
            subtitle="Click any photograph to launch the full-screen interactive lightbox viewer."
          />

          <GalleryGrid items={GALLERY_ITEMS} showFilters={true} />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
