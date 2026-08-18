import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RoomCard } from '@/components/ui/RoomCard';
import { ROOMS_DATA, HOTEL_INFO } from '@/constants/hotelData';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Moon Star Lodge Hetauda | Rooms & Accommodation',
  description: 'Book family rooms, couple rooms, group accommodation, and non-A/C rooms at Moon Star Lodge in Hetauda. Professional accommodation with flexible hourly Event & Program Hall pricing.',
  keywords: [
    'rooms in Hetauda',
    'hotel accommodation Hetauda',
    'family room Hetauda',
    'couple room Hetauda',
    'group room Hetauda',
    'event hall Hetauda',
    'program hall Hetauda',
    'Moon Star Lodge rooms'
  ]
};

export default function RoomsPage() {
  const featuredRooms = ROOMS_DATA.filter(room => room.featured);
  const standardRooms = ROOMS_DATA.filter(room => !room.featured);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Moon Star Lodge Hetauda | Rooms & Accommodation',
    description: 'Browse professional room and accommodation options at Moon Star Lodge in Hetauda, including family rooms, couple rooms, group rooms, and event/program hall.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/rooms`,
    publisher: {
      '@type': 'Organization',
      name: HOTEL_INFO.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: HOTEL_INFO.streetAddress,
        addressLocality: HOTEL_INFO.locality,
        addressRegion: HOTEL_INFO.region,
        postalCode: HOTEL_INFO.postalCode,
        addressCountry: HOTEL_INFO.country
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Banner */}
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star Lodge professional accommodation in Hetauda"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">
            Rooms & Accommodation
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Professional Accommodation <span className="text-gold-gradient">in Hetauda</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Comfortable accommodation options for families, couples, groups, and travelers visiting Hetauda. Professional rooms with competitive pricing and 24/7 support.
          </p>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold mb-3 block">
              Choose Your Room
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-obsidian-900 mb-4">
              Rooms & Accommodation Options
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Select from our professional room options. All prices shown are per room. Contact us for group discounts or special rates.
            </p>
          </div>

          {/* Featured Rooms */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRooms.map((room, idx) => (
                <RoomCard key={room.id} room={room} index={idx} />
              ))}
            </div>
          </div>

          {/* Standard Rooms */}
          {standardRooms.length > 0 && (
            <>
              <div className="my-12 border-t border-gray-200" />
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-obsidian-900 mb-2">
                  Affordable Standard Rooms
                </h3>
                <p className="text-gray-600">
                  Budget-friendly non-air-conditioned options for guests seeking cost-effective accommodation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {standardRooms.map((room, idx) => (
                  <RoomCard key={room.id} room={room} index={idx + featuredRooms.length} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Standard Amenities */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-obsidian-900 mb-4">
              Included With Every Room
            </h2>
            <p className="text-gray-600">
              All rooms include these standard amenities at no extra charge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">✓ Free High-Speed Wi-Fi</h4>
              <p className="text-gray-600 text-sm">Complimentary wireless internet in all rooms and common areas.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">✓ Hot Water Shower</h4>
              <p className="text-gray-600 text-sm">24/7 hot and cold water available in all en-suite bathrooms.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">✓ 24/7 Front Desk</h4>
              <p className="text-gray-600 text-sm">Round-the-clock support and assistance for all guests.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">✓ Daily Housekeeping</h4>
              <p className="text-gray-600 text-sm">Professional room cleaning and maintenance every day.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">✓ En-suite Bathroom</h4>
              <p className="text-gray-600 text-sm">Private bathroom facilities with essential toiletries.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">✓ Quick Check-in</h4>
              <p className="text-gray-600 text-sm">Fast and friendly check-in process at any time of day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event & Program Hall Section */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative h-96 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/moonstar/event-hall.jpg"
                alt="Moon Star Lodge Event & Program Hall in Hetauda"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Side */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold mb-3 block">
                Event Venue
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-obsidian-900 mb-6">
                Event & Program Hall
              </h2>
              
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Moon Star Lodge offers a professional Event & Program Hall in Hetauda, suitable for conferences, training programs, meetings, celebrations, gatherings, and other events.
              </p>

              <div className="mb-8 p-6 bg-gold-50 rounded-2xl border border-gold-200">
                <h3 className="font-serif text-xl font-bold text-obsidian-900 mb-3">Flexible Hourly Pricing</h3>
                <p className="text-gray-700 mb-4">
                  Pricing is flexible and based on hourly usage, duration, and program requirements. Contact us for current rates and availability.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Dynamic hourly rates based on duration</li>
                  <li>✓ Customizable for your program needs</li>
                  <li>✓ Professional support and setup</li>
                  <li>✓ On-site accommodation options available</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?inquiry=event-hall"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-obsidian-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-gold-500/30"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-obsidian-900 hover:bg-obsidian-50 text-obsidian-900 font-bold text-sm tracking-wider uppercase transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-obsidian-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about rooms, accommodation, and bookings at Moon Star Lodge.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What room options are available at Moon Star Lodge?',
                a: 'Moon Star Lodge offers Family Rooms, Deluxe Couple Rooms, 10-Bed Group Rooms, Standard Non-A/C Couple Rooms, and Standard Non-A/C Twin Rooms. All rooms include free Wi-Fi, hot water shower, and 24/7 front desk support.'
              },
              {
                q: 'What is the price of a Family Room?',
                a: 'The Family Room is NPR 2,200 per room. This accommodation is designed for families visiting Hetauda.'
              },
              {
                q: 'What is the price of a Deluxe Couple Room?',
                a: 'The Deluxe Couple Room is NPR 2,000 per room. This accommodation is suitable for couples and two-person stays.'
              },
              {
                q: 'What is the price of the 10-Bed Group Room?',
                a: 'The 10-Bed Group Room is NPR 7,000 per room. This accommodation is designed for groups traveling together.'
              },
              {
                q: 'What is the price of Standard Non-A/C rooms?',
                a: 'Non-A/C Couple Room: NPR 1,200. Non-A/C Twin Room: NPR 1,300. These are budget-friendly options without air conditioning.'
              },
              {
                q: 'Does Moon Star Lodge have an Event & Program Hall?',
                a: 'Yes, Moon Star Lodge has a professional Event & Program Hall in Hetauda. Pricing is flexible and based on hourly usage and program requirements. Contact us for current rates and availability.'
              },
              {
                q: 'What amenities are included with every room?',
                a: 'All rooms include free high-speed Wi-Fi, hot water shower, 24/7 front desk support, daily housekeeping, and en-suite bathroom.'
              },
              {
                q: 'How do I book a room?',
                a: 'You can call Moon Star Lodge directly at 9865501880, use our contact form to inquire, or contact us via email at moonstarhotel@gmail.com. We provide quick check-in and flexible booking options.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-lg font-bold text-obsidian-900 mb-3">
                  {item.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking CTA */}
      <section className="py-20 sm:py-28 bg-obsidian-950 text-white border-t border-obsidian-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-obsidian-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              Contact Moon Star Restaurant & Lodge in Hetauda for room bookings, group accommodations, or Event & Program Hall inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <Phone className="w-8 h-8 text-gold-400 mb-3" />
              <span className="text-sm font-medium text-gray-300 mb-2">Phone</span>
              <span className="text-lg font-bold text-white">{HOTEL_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${HOTEL_INFO.email}`}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <Mail className="w-8 h-8 text-gold-400 mb-3" />
              <span className="text-sm font-medium text-gray-300 mb-2">Email</span>
              <span className="text-sm font-bold text-white text-center truncate">{HOTEL_INFO.email}</span>
            </a>

            <Link
              href="/contact"
              className="flex flex-col items-center p-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <MessageCircle className="w-8 h-8 text-gold-400 mb-3" />
              <span className="text-sm font-medium text-gray-300 mb-2">Contact Form</span>
              <span className="text-sm font-bold text-white">Send Message</span>
            </Link>

            <Link
              href="/contact?inquiry=directions"
              className="flex flex-col items-center p-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <MapPin className="w-8 h-8 text-gold-400 mb-3" />
              <span className="text-sm font-medium text-gray-300 mb-2">Location</span>
              <span className="text-sm font-bold text-white">Hetauda 44107</span>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-gold-500/30"
            >
              <span>Book Now or Get a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
