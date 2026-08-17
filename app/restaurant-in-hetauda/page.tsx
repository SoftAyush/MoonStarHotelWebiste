import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Restaurant in Hetauda | Moon Star Restaurant',
  description: 'Moon Star Restaurant in Hetauda serves Nepali, Indian, and Continental dishes in a comfortable dining setting for families and travelers.',
};

const faqs = [
  {
    question: 'Does Moon Star Lodge have a restaurant?',
    answer: 'Yes. Moon Star Restaurant is available on-site and serves a range of Nepali, Indian, and Continental dishes.',
  },
  {
    question: 'What kind of food is served?',
    answer: 'The restaurant offers Nepali, Indian, and Continental food with a focus on familiar favorites and hearty dining.',
  },
  {
    question: 'Is the restaurant suitable for families?',
    answer: 'Yes. It provides a comfortable dining environment for family gatherings and everyday meals.',
  },
  {
    question: 'Can non-guests dine there?',
    answer: 'The restaurant is intended to serve guests and diners visiting the property in Hetauda.',
  },
];

export default function RestaurantInHetaudaPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star Restaurant dining in Hetauda"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">Restaurant in Hetauda</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Dining at <span className="text-gold-gradient">Moon Star Restaurant</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Moon Star Restaurant in Hetauda offers a comfortable place to enjoy Nepali, Indian, and Continental food with family and friends.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              badge="Dining experience"
              title="Comfortable food and hospitality in Hetauda"
              subtitle="The restaurant is designed for everyday meals, family gatherings, and traveler dining needs."
              centered={false}
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Moon Star Restaurant is part of the lodge experience and serves a selection of dishes rooted in Nepali, Indian, and Continental cuisine.
              </p>
              <p>
                Visitors can enjoy a relaxed dining setting while staying at the property or dropping in for a meal while in Hetauda.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1200&auto=format&fit=crop"
              alt="Moon Star Restaurant meal in Hetauda"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Dining options"
            title="A practical restaurant for everyday meals"
            subtitle="The food experience is built around familiar flavors and dependable hospitality."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Nepali dishes',
              'Indian favorites',
              'Continental selections',
            ].map((item) => (
              <div key={item} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-gray-700 text-sm leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FAQs"
            title="Restaurant questions in Hetauda"
            subtitle="Useful answers for diners and guests."
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-obsidian-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Link href="/menu" className="inline-flex items-center gap-2 rounded-full bg-obsidian-900 text-white px-6 py-3 font-semibold">
          View dining menu
        </Link>
      </div>

      <ContactCTA />
    </>
  );
}
