import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { FACILITIES_DATA } from '@/constants/hotelData';

export const metadata: Metadata = {
  title: 'Facilities | Moon Star Lodge Hetauda',
  description: 'Explore the core facilities at Moon Star Lodge, including comfortable rooms, free Wi-Fi, secure parking, and on-site dining in Hetauda.',
};

export default function FacilitiesPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star Lodge facilities and access in Hetauda"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">Facilities</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Practical <span className="text-gold-gradient">hotel facilities</span> in Hetauda
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Moon Star Lodge provides the essentials that matter during a stay: comfortable rooms, dependable Wi-Fi, secure parking, and on-site dining.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Core amenities"
            title="Facilities that support a smooth guest stay"
            subtitle="Every amenity is chosen to make accommodation and dining easier for travelers in Hetauda."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_DATA.map((facility) => (
              <div key={facility.id} className="p-6 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
                <div className="inline-flex rounded-full bg-gold-400/10 text-gold-600 text-[10px] uppercase tracking-wider px-2.5 py-1 font-semibold mb-4">{facility.highlight}</div>
                <h3 className="font-serif text-xl font-bold text-obsidian-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-obsidian-900 text-white px-6 py-3 font-semibold">
          Ask about availability
        </Link>
      </div>

      <ContactCTA />
    </>
  );
}
