'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { ContactCard } from '@/components/ui/ContactCard';
import { HOTEL_INFO, ROOMS_DATA } from '@/constants/hotelData';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialRoom = searchParams.get('room') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    roomType: initialRoom,
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    message: '',
  });

  useEffect(() => {
    if (initialRoom) {
      setFormData((prev) => ({ ...prev, roomType: initialRoom }));
    }
  }, [initialRoom]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="p-8 rounded-2xl bg-gold-400/10 border border-gold-400/30 text-center py-12"
        >
          <div className="w-16 h-16 rounded-full bg-gold-500 text-obsidian-950 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-serif text-2xl font-bold text-obsidian-900 mb-2">
            Inquiry Received with Pleasure
          </h4>
          <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
            Thank you, <span className="font-semibold text-obsidian-900">{formData.name}</span>. Our VVIP concierge manager will respond to <span className="font-semibold">{formData.email}</span> within 2 hours.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                roomType: '',
                checkIn: '',
                checkOut: '',
                guests: '2 Guests',
                message: '',
              });
            }}
            className="px-6 py-2.5 rounded-full bg-obsidian-900 text-white font-medium text-xs tracking-wider uppercase hover:bg-gold-500 hover:text-obsidian-950 transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alexander Vance"
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alexander@example.com"
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Preferred Room Suite
              </label>
              <select
                value={formData.roomType}
                onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              >
                <option value="">Select Room (Optional)</option>
                {ROOMS_DATA.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name} (${r.price}/night)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Expected Check-in
              </label>
              <input
                type="date"
                value={formData.checkIn}
                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Expected Check-out
              </label>
              <input
                type="date"
                value={formData.checkOut}
                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Your Message or Special Request *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your upcoming stay, dietary preferences, or limousine transfer request..."
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Transmitting Inquiry...</span>
            ) : (
              <>
                <span>Send Concierge Request</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

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
            24/7 Concierge Service
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Get In <span className="text-gold-gradient">Touch</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Our dedicated team is delighted to assist with suite inquiries, private dining arrangements, or tailored coastal itineraries.
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
              title="Phone & Concierge"
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
            {/* Left Column - Contact Form Wrapped in Suspense */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 relative">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2 block">
                  Send A Direct Message
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian-900">
                  Concierge Inquiry Form
                </h3>
              </div>

              <Suspense fallback={<div className="py-12 text-center text-gray-400 text-sm">Loading inquiry form...</div>}>
                <ContactFormInner />
              </Suspense>
            </div>

            {/* Right Column - Map Embed & Info */}
            <div id="map-section" className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-obsidian-950 text-white p-8 rounded-3xl border border-gold-400/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Sparkles className="w-32 h-32 text-gold-400" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  Find Our Sanctuary
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Moon Star Hotel is located in the quiet coastal enclave of Coastal Haven, just 25 minutes from the International Airport. Limousine airport transfers available upon request.
                </p>
                <div className="space-y-3 text-xs text-gold-300 border-t border-white/10 pt-4">
                  <p>✓ Private Helipad Access Available</p>
                  <p>✓ Complimentary Valet Parking</p>
                  <p>✓ Yacht Marina Access (5 mins away)</p>
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
                  title="Moon Star Hotel Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
