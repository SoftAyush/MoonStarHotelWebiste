import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, HeartHandshake, Compass, Sparkles, Users, ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { HOTEL_STATS, TEAM_MEMBERS, FACILITIES_DATA } from '@/constants/hotelData';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'About Us | Moon Star Restaurant & Lodge, Hetauda',
  description: 'Meet the team behind Moon Star Restaurant & Lodge in Manaschowk, Hetauda — a locally run lodge and restaurant serving Makawanpur travelers with genuine Nepali hospitality.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star Architecture"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">
            Manaschowk, Hetauda
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Our Story & <span className="text-gold-gradient">Hospitality</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Discover the people and philosophy behind Hetauda's home for comfortable stays and honest, delicious food.
          </p>
        </div>
      </section>

      {/* Hotel Story Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <SectionTitle
                badge="Heritage & Philosophy"
                title="Built On Genuine Nepali Hospitality"
                subtitle="Moon Star Restaurant & Lodge was founded to give travelers in Hetauda a comfortable, welcoming place to stay and eat."
                centered={false}
              />
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Located in Manaschowk, Hetauda-2, Moon Star was built for travelers passing through Makawanpur — families, business visitors, and road-trippers — who want a clean room, a good meal, and a front desk that treats them like family.
                </p>
                <p>
                  Our ethos is simple and unchanged since day one: comfortable rooms, freshly cooked Nepali, Indian, and Continental food, and warm, intuitive service. It's hospitality with a heart, not a script.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop"
                  alt="Moon Star Heritage Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Guiding Principles"
            title="Our Mission & Vision"
            subtitle="The core values that shape every interaction, amenity, and culinary dish."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-xl relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-gold-400/10 text-gold-600 flex items-center justify-center mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-obsidian-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To give every guest in Hetauda a comfortable room, a delicious meal, and genuinely warm service — the same care we'd want for our own family.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-xl relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-gold-400/10 text-gold-600 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-obsidian-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To be Makawanpur's most trusted lodge and restaurant — the first name travelers to Hetauda think of for a comfortable stay and honest food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="What We Offer"
            title="Facilities & Amenities"
            subtitle="Everything you need for a comfortable stay in Hetauda, included as standard."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_DATA.map((fac) => (
              <div
                key={fac.id}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gold-400/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-gold-400/10 text-gold-600 font-semibold text-[10px] uppercase tracking-wider mb-4">
                    {fac.highlight}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-obsidian-900 mb-2">{fac.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{fac.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="py-16 bg-obsidian-950 text-white border-y border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {HOTEL_STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-gold-400 block mb-1">
                  {stat.value}
                </span>
                <span className="font-semibold text-white text-base block mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-gray-400 leading-relaxed block max-w-xs mx-auto">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Leadership"
            title="Meet Our Executive Team"
            subtitle="The visionaries and master hospitality craftsmen managing your Moon Star experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-gold-300 transition-all duration-300 group"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-gold-300 uppercase tracking-widest font-medium">{member.role}</span>
                    <h3 className="font-serif text-xl font-bold">{member.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
