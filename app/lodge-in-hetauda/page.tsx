import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Lodge in Hetauda | Moon Star Lodge',
  description: 'A comfortable lodge in Hetauda for travelers seeking clean rooms, warm hospitality, secure parking, and convenient dining in Manaschowk.',
};

const faqs = [
  {
    question: 'What makes Moon Star Lodge suitable for travelers?',
    answer: 'It offers a practical mix of comfortable accommodation, dining, and guest services in a central Hetauda location.',
  },
  {
    question: 'Is Moon Star Lodge suitable for business travelers?',
    answer: 'Yes. It is a convenient accommodation option for visitors who need a dependable place to stay and easy access to local services.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes. Secure parking is available for guests who arrive by vehicle.',
  },
  {
    question: 'Does the lodge include food service?',
    answer: 'Yes. Moon Star Restaurant is available on-site, making it easier for guests to dine without leaving the property.',
  },
];

export default function LodgeInHetaudaPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star Lodge in Hetauda"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">Lodge in Hetauda</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            A comfortable <span className="text-gold-gradient">lodge</span> for local and visiting guests
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Moon Star Lodge is a comfortable choice for travelers looking for accommodation in Hetauda, with warm hospitality, easy access, and a practical stay experience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              badge="About the property"
              title="A practical place to stay in Manaschowk"
              subtitle="The lodge is built for travelers who want a dependable stay in Hetauda without complicated booking friction."
              centered={false}
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Located in Manaschowk, Hetauda-2, Moon Star Lodge offers simple, straightforward accommodation for families, individuals, and travelers in Makawanpur.
              </p>
              <p>
                Guests can expect a clean room, convenient access, round-the-clock support, and dining options close to the stay experience.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop"
              alt="Guest room at Moon Star Lodge in Hetauda"
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
            badge="Guest essentials"
            title="What guests can expect"
            subtitle="The property focuses on the practical comforts that matter most during a stay in Hetauda."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Clean and comfortable rooms',
              'Fast Wi-Fi access',
              'On-site restaurant dining',
              'Parking and easy access',
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
            title="Questions about staying at Moon Star Lodge"
            subtitle="Helpful answers for guests planning their trip to Hetauda."
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
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-obsidian-900 text-white px-6 py-3 font-semibold">
          Contact the property
        </Link>
      </div>

      <ContactCTA />
    </>
  );
}
