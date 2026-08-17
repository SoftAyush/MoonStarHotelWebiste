import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Family Hotel in Hetauda | Moon Star Lodge',
  description: 'A family-friendly accommodation option in Hetauda offering comfortable rooms, practical amenities, and convenient dining for family stays.',
};

const faqs = [
  {
    question: 'Is Moon Star Lodge family-friendly?',
    answer: 'It is a practical accommodation option for families, with spacious room choices and a comfortable stay experience in Hetauda.',
  },
  {
    question: 'Does the property offer family rooms?',
    answer: 'The room selection includes a Family Heritage Suite designed for family comfort and extra space.',
  },
  {
    question: 'Is there room for families to dine together?',
    answer: 'Yes. Guests can enjoy on-site restaurant dining, which makes family meals convenient.',
  },
  {
    question: 'Is parking suitable for family trips?',
    answer: 'Yes. Secure on-site parking supports family travel and convenience.',
  },
];

export default function FamilyHotelHetaudaPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1920&auto=format&fit=crop"
            alt="Family stay at Moon Star Lodge"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">Family stay in Hetauda</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Family-friendly <span className="text-gold-gradient">accommodation</span> in Hetauda
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Moon Star Lodge offers a family-friendly stay experience for visitors needing comfortable rooms, practical amenities, and on-site dining in Hetauda.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              badge="Family comfort"
              title="A convenient choice for families visiting Hetauda"
              subtitle="Families traveling to Hetauda can benefit from comfortable room options, easy access, and a supportive front desk."
              centered={false}
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Family Heritage Suite is designed for family comfort, while the broader property supports guests looking for straightforward, welcoming accommodation in Makawanpur.
              </p>
              <p>
                Families can stay in a clean room, dine on-site, and enjoy a stress-free travel base while exploring Hetauda and the surrounding area.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop"
              alt="Family friendly room at Moon Star Lodge"
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
            badge="Family features"
            title="What matters most for family stays"
            subtitle="Practical comforts that make a family trip easier."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Spacious room options',
              'Comfortable bedding',
              'Family dining nearby',
              'Convenient parking',
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
            badge="FAQ"
            title="Family accommodation questions"
            subtitle="Helpful answers for families planning a stay in Hetauda."
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
        <Link href="/rooms" className="inline-flex items-center gap-2 rounded-full bg-obsidian-900 text-white px-6 py-3 font-semibold">
          View room options
        </Link>
      </div>

      <ContactCTA />
    </>
  );
}
