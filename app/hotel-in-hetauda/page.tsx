import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { HOTEL_INFO, ROOMS_DATA } from '@/constants/hotelData';

export const metadata: Metadata = {
  title: 'Hotel in Hetauda | Moon Star Lodge',
  description: 'Comfortable hotel accommodation in Hetauda with clean rooms, parking, Wi-Fi, and family-friendly service at Moon Star Lodge.',
};

const faqs = [
  {
    question: 'Where is Moon Star Lodge located?',
    answer: `Moon Star Restaurant & Lodge is located in ${HOTEL_INFO.addressFull}`,
  },
  {
    question: 'What type of rooms are available?',
    answer: 'Guests can choose from Deluxe Comfort Room, Executive Lodge Suite, and Family Heritage Suite.',
  },
  {
    question: 'Is Wi-Fi available?',
    answer: 'Yes. Free high-speed Wi-Fi is available throughout the guest areas and rooms.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes. Secure parking facilities are available for guests at the property.',
  },
];

export default function HotelInHetaudaPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
            alt="Moon Star Lodge hotel in Hetauda"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3 block">Hotel in Hetauda</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Comfortable <span className="text-gold-gradient">Accommodation</span> in Hetauda
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Moon Star Lodge offers welcoming accommodation in Hetauda for families, business travelers, and visitors seeking a clean room, warm service, and convenient dining close to the town center.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              badge="Stay with ease"
              title="A practical choice for accommodation in Hetauda"
              subtitle="Whether you are visiting for work, family travel, or a short stop in Makwanpur, Moon Star Lodge provides a clean, comfortable base with helpful service."
              centered={false}
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The property combines hotel-style comfort with the convenience of on-site dining and a central location in Manaschowk. Guests benefit from secure parking, free high-speed Wi-Fi, and 24/7 front desk support.
              </p>
              <p>
                With room options designed for individuals, couples, families, and business travelers, Moon Star Lodge is a versatile choice for accommodation in Hetauda.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
              alt="Comfortable room at Moon Star Lodge in Hetauda"
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
            badge="Room options"
            title="Accommodation designed for different guest needs"
            subtitle="The property offers a range of room types for individual travelers, couples, and families."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => (
              <div key={room.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-serif text-2xl font-bold text-obsidian-900 mb-2">{room.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{room.tagline}</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• {room.bedType}</li>
                  <li>• {room.capacity.adults} adults, {room.capacity.children} child</li>
                  <li>• {room.sizeSqFt} sq ft</li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/rooms"
                    className="inline-flex items-center text-sm font-semibold text-gold-600 hover:text-gold-700"
                  >
                    View room details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Why guests choose us"
            title="The essentials travelers look for"
            subtitle="The hotel focuses on comfort, convenience, and service rather than empty promises."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Clean and comfortable rooms',
              'Free high-speed Wi-Fi',
              'Secure parking available',
              'Friendly front desk support',
            ].map((item) => (
              <div key={item} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-gray-700 text-sm leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FAQs"
            title="Hotel questions in Hetauda"
            subtitle="Helpful answers for travelers planning a stay."
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-obsidian-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
