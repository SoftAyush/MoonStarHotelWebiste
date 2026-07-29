import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RoomCard } from '@/components/ui/RoomCard';
import { ROOMS_DATA } from '@/constants/hotelData';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Rooms & Suites | Hotel in Hetauda, Manaschowk',
  description: 'Book a Deluxe Comfort Room, Executive Lodge Suite, or Family Heritage Suite at Moon Star Restaurant & Lodge — comfortable, affordable rooms in Manaschowk, Hetauda.',
};

export default function RoomsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star Restaurant & Lodge room in Hetauda"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">
            Comfortable Stays
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Rooms & <span className="text-gold-gradient">Suites</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Clean, comfortable rooms with modern amenities and round-the-clock front desk support in Manaschowk, Hetauda.
          </p>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Select Your Residence"
            title="Our Accommodation Tiers"
            subtitle="Each room is designed for comfort, natural light, and a good night's rest after a day of travel."
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
            title="Included With Every Room"
            subtitle="Every guest at Moon Star Restaurant & Lodge gets these amenities as standard, no extra charge."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">Free High-Speed Wi-Fi</h4>
              <p className="text-gray-600 text-xs leading-relaxed">Complimentary wireless internet across every room, the restaurant, and the lobby.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">Hot & Cold Water Shower</h4>
              <p className="text-gray-600 text-xs leading-relaxed">En-suite bathrooms with reliable hot water, day or night.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">24/7 Room Service</h4>
              <p className="text-gray-600 text-xs leading-relaxed">Meals and refreshments from our restaurant kitchen, delivered any time.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">Daily Housekeeping</h4>
              <p className="text-gray-600 text-xs leading-relaxed">Fresh linens and a tidy room, every day of your stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
