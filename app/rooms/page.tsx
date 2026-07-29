import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RoomCard } from '@/components/ui/RoomCard';
import { ROOMS_DATA } from '@/constants/hotelData';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Rooms & Suites | Luxury Accommodations',
  description: 'Explore our range of 5-star accommodations: Deluxe Ocean View Rooms, Executive Garden Suites, Royal Family Sanctuaries, and Presidential Penthouses.',
};

export default function RoomsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star Luxury Suite View"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">
            Bespoke Living
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Rooms & <span className="text-gold-gradient">Luxury Suites</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Immerse yourself in hand-crafted furniture, oceanfront terraces, and round-the-clock personal butler attention.
          </p>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Select Your Residence"
            title="Our Accommodation Tiers"
            subtitle="Each room is an architectural masterpiece designed to maximize comfort, light, and ocean breezes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room, idx) => (
              <RoomCard key={room.id} room={room} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Room Features Matrix Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Standard Inclusions"
            title="Complimentary In-Room Privileges"
            subtitle="Every guest at Moon Star Hotel receives world-class amenities as standard."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">High-Speed Fiber Wi-Fi</h4>
              <p className="text-gray-600 text-xs leading-relaxed">Unlimited gigabit wireless access across all private suites and balconies.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">Gourmet Nespresso Bar</h4>
              <p className="text-gray-600 text-xs leading-relaxed">Daily refreshed espresso capsules and artisanal organic tea selections.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">Hermès Bath Products</h4>
              <p className="text-gray-600 text-xs leading-relaxed">Premium organic bath amenities, velvet bathrobes, and plush slippers.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">Twice-Daily Housekeeping</h4>
              <p className="text-gray-600 text-xs leading-relaxed">Includes evening turndown service with lavender mist and artisan chocolates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
