import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RoomCard } from '@/components/ui/RoomCard';
import { ROOMS_DATA } from '@/constants/hotelData';

export default function HomePage() {
  const featuredRooms = ROOMS_DATA.filter((room) => room.featured);

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Welcome Section */}
      <WelcomeSection />

      {/* 3. Featured Rooms */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Accommodations"
            title="Featured Rooms & Suites"
            subtitle="Handcrafted living spaces designed for utter tranquility, panoramic views, and unmatched comfort."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredRooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-obsidian-900 hover:bg-gold-500 text-white hover:text-obsidian-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl group"
            >
              <span>Explore All Rooms & Suites</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Gallery Preview */}
      <GalleryPreview />

      {/* 6. Contact CTA */}
      <ContactCTA />
    </>
  );
}
