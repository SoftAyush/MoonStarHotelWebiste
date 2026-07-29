'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight, Share2, Globe, MessageCircle, Heart } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { HOTEL_INFO } from '@/constants/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian-950 text-white pt-16 sm:pt-20 pb-8 border-t border-gold-400/20 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Logo showTagline={true} size="lg" className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {HOTEL_INFO.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={HOTEL_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-500 hover:text-obsidian-950 text-gray-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={HOTEL_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-500 hover:text-obsidian-950 text-gray-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-500 hover:text-obsidian-950 text-gray-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> About Our Lodge
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Comfortable Rooms
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Photo & Food Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details from Card */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Business Card Details
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-gold-400 transition-colors font-medium">
                    {HOTEL_INFO.phone}
                  </a>
                  <a href={`tel:${HOTEL_INFO.secondaryPhone}`} className="hover:text-gold-400 transition-colors">
                    {HOTEL_INFO.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-gold-400 transition-colors">
                  {HOTEL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Front Desk: {HOTEL_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Key Services & Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Card Highlights
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 mb-6">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center font-medium">
                🛏️ Comfortable Stay
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center font-medium">
                🍽️ Delicious Food
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center font-medium">
                📶 Free Wi-Fi
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center font-medium">
                🅿️ Parking Facility
              </div>
            </div>
            <p className="text-gold-300 text-xs italic flex items-center gap-1.5 font-serif">
              <Heart className="w-3.5 h-3.5 text-gold-400 fill-current" />
              "Hospitality with a Heart - Thank You For Visiting Us!"
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gold-400 cursor-pointer">Manaschowk, Hetauda-2</span>
            <span className="hover:text-gold-400 cursor-pointer">Makawanpur, Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
