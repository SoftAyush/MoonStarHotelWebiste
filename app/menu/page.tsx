import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Menu | Moon Star Restaurant Hetauda',
  description: 'Explore the dining options at Moon Star Restaurant in Hetauda, featuring Nepali, Indian, and Continental dishes.',
};

const menuHighlights = [
  'Nepali cuisine',
  'Indian dishes',
  'Continental selections',
  'Family-friendly dining',
];

export default function MenuPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star menu and dining experience in Hetauda"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">Menu</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Dining <span className="text-gold-gradient">menu</span> at Moon Star
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            The restaurant offers a practical mix of Nepali, Indian, and Continental dishes. Final menu details can be updated once the owner shares the verified full menu.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Overview"
            title="Menu categories currently served"
            subtitle="The restaurant focuses on familiar, comforting dishes and family-friendly dining."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuHighlights.map((item) => (
              <div key={item} className="p-6 rounded-2xl border border-gray-100 bg-gray-50 text-gray-700 text-sm leading-relaxed shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl bg-white border border-gray-100 shadow-lg p-8">
          <h2 className="font-serif text-3xl font-bold text-obsidian-900 mb-4">Verified menu update needed</h2>
          <p className="text-gray-600 leading-relaxed">
            To make this page fully searchable and user-friendly, the restaurant menu should be confirmed with the owner and added as a clear HTML menu with dish names, categories, and pricing where appropriate.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-obsidian-900 text-white px-6 py-3 font-semibold">
              Request full menu details
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
