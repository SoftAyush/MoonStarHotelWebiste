import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';
import { ContactCard } from '@/components/ui/ContactCard';
import { ContactForm } from '@/components/sections/ContactForm';
import { HOTEL_INFO } from '@/constants/hotelData';

export const metadata: Metadata = {
  title: 'Contact Us | Moon Star Restaurant & Lodge, Hetauda',
  description: 'Contact Moon Star Restaurant & Lodge in Manaschowk, Hetauda-2, Makawanpur. Call, email, or send an inquiry for room availability and directions.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star Exterior Facade"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">
            24/7 Front Desk
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Get In <span className="text-gold-gradient">Touch</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Our team is happy to help with room availability, restaurant reservations, or directions to Manaschowk, Hetauda.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <ContactCard
              icon={<MapPin className="w-6 h-6" />}
              title="Hotel Address"
              value={HOTEL_INFO.address}
              actionText="View Location"
              actionHref="#map-section"
              delay={0}
            />
            <ContactCard
              icon={<Phone className="w-6 h-6" />}
              title="Phone & Reservations"
              value={HOTEL_INFO.phone}
              subValue={HOTEL_INFO.secondaryPhone}
              actionText="Call Direct"
              actionHref={`tel:${HOTEL_INFO.phone}`}
              delay={0.1}
            />
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="Email Inquiries"
              value={HOTEL_INFO.email}
              subValue={HOTEL_INFO.reservationsEmail}
              actionText="Send Email"
              actionHref={`mailto:${HOTEL_INFO.email}`}
              delay={0.2}
            />
            <ContactCard
              icon={<Clock className="w-6 h-6" />}
              title="Front Desk Hours"
              value={HOTEL_INFO.hours}
              subValue="Always Available"
              actionText="Check In Policy"
              actionHref="/rooms"
              delay={0.3}
            />
          </div>

          {/* Main Form & Interactive Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 relative">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2 block">
                  Send A Direct Message
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian-900">
                  Send Us a Message
                </h3>
              </div>

              <ContactForm />
            </div>

            {/* Right Column - Map Embed & Info */}
            <div id="map-section" className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-obsidian-950 text-white p-8 rounded-3xl border border-gold-400/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Sparkles className="w-32 h-32 text-gold-400" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  Find Us in Hetauda
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Moon Star Restaurant & Lodge is located in Manaschowk, Hetauda-2, Makawanpur — easy to find and easy to reach from the Hetauda bus park and highway.
                </p>
                <div className="space-y-3 text-xs text-gold-300 border-t border-white/10 pt-4">
                  <p>✓ 24/7 Front Desk & Check-in</p>
                  <p>✓ Secure On-Site Parking</p>
                  <p>✓ Free High-Speed Wi-Fi</p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src={HOTEL_INFO.googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Moon Star Restaurant & Lodge Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
