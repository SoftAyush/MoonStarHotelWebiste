import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Moon Star Restaurant & Lodge | Hotel & Restaurant in Hetauda',
  description: 'Moon Star Restaurant & Lodge in Manas Chowk, Hetauda offers comfortable accommodation, family-friendly rooms, secure parking, free Wi-Fi, and on-site dining.',
};

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

      {/* 4. Local service pages */}
      <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Local search pages"
            title="Hotel, lodge, restaurant, and family stay in Hetauda"
            subtitle="These pages help visitors and search engines understand Moon Star Restaurant & Lodge as a local accommodation and dining destination in Hetauda."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Hotel in Hetauda', href: '/hotel-in-hetauda', description: 'Comfortable hotel accommodation with parking, Wi-Fi, and rooms in Manaschowk.' },
              { title: 'Lodge in Hetauda', href: '/lodge-in-hetauda', description: 'A practical stay option for travelers seeking simple, welcoming accommodation.' },
              { title: 'Restaurant in Hetauda', href: '/restaurant-in-hetauda', description: 'Nepali, Indian, and Continental dining for guests and nearby diners.' },
              { title: 'Family Hotel in Hetauda', href: '/family-hotel-hetauda', description: 'Family-oriented accommodation for guests visiting Hetauda and Makwanpur.' },
              { title: 'Facilities', href: '/facilities', description: 'Useful information about the amenities available to guests.' },
              { title: 'Menu', href: '/menu', description: 'Dining overview and menu information for search engines and users.' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group block rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold mb-3">Local page</div>
                <h3 className="font-serif text-2xl font-bold text-obsidian-900 mb-3 group-hover:text-gold-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-obsidian-900">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Gallery Preview */}
      <GalleryPreview />

      {/* 7. Contact CTA */}
      <ContactCTA />
    </>
  );
}
