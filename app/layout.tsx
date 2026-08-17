import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { HOTEL_INFO, SITE_URL } from '@/constants/hotelData';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${HOTEL_INFO.name} | ${HOTEL_INFO.tagline}`,
    template: `%s | ${HOTEL_INFO.name}`
  },
  description: HOTEL_INFO.description,
  keywords: [
    'Moon Star Restaurant & Lodge',
    'Moon Star Restaurant and Lodge',
    'Hotel in Hetauda',
    'Lodge in Hetauda',
    'Restaurant in Hetauda',
    'Family Hotel Hetauda',
    'Hetauda accommodation',
    'Makwanpur Hotel Nepal',
    'Hetauda Hotel Booking'
  ],
  authors: [{ name: HOTEL_INFO.name }],
  creator: HOTEL_INFO.name,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: `${HOTEL_INFO.name} | ${HOTEL_INFO.tagline}`,
    description: HOTEL_INFO.description,
    siteName: HOTEL_INFO.name,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: HOTEL_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${HOTEL_INFO.name} | ${HOTEL_INFO.tagline}`,
    description: HOTEL_INFO.description,
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/icon.svg',
  },
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: HOTEL_INFO.name,
    description: HOTEL_INFO.description,
    url: SITE_URL,
    telephone: HOTEL_INFO.formattedPhone,
    email: HOTEL_INFO.email,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Manaschowk',
      addressLocality: 'Hetauda',
      addressRegion: 'Bagmati Province',
      addressCountry: 'NP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: HOTEL_INFO.geo.latitude,
      longitude: HOTEL_INFO.geo.longitude,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24-Hour Front Desk', value: true },
    ],
    sameAs: [
      HOTEL_INFO.socials.facebook,
      HOTEL_INFO.socials.instagram,
      HOTEL_INFO.socials.twitter,
      HOTEL_INFO.socials.tripadvisor,
      HOTEL_INFO.socials.linkedin,
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Moon Star Restaurant',
    servesCuisine: ['Nepali', 'Indian', 'Continental'],
    telephone: HOTEL_INFO.formattedPhone,
    email: HOTEL_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: HOTEL_INFO.streetAddress,
      addressLocality: HOTEL_INFO.locality,
      addressRegion: HOTEL_INFO.region,
      postalCode: HOTEL_INFO.postalCode,
      addressCountry: HOTEL_INFO.country,
    },
    url: SITE_URL,
    menu: `${SITE_URL}/menu`,
    hasMap: HOTEL_INFO.googleMapsUrl,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Moon Star Restaurant & Lodge located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Moon Star Restaurant & Lodge is located in ${HOTEL_INFO.addressFull}`,
        },
      },
      {
        '@type': 'Question',
        name: 'What rooms are available at Moon Star Restaurant & Lodge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The property offers Deluxe Comfort Room, Executive Lodge Suite, and Family Heritage Suite options.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Moon Star Restaurant & Lodge have Wi-Fi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, free high-speed Wi-Fi is available for guests.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Moon Star Restaurant & Lodge have a restaurant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Moon Star Restaurant offers Nepali, Indian, and Continental food for guests and diners.',
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans bg-gray-50 text-obsidian-900 antialiased min-h-screen flex flex-col selection:bg-gold-400 selection:text-obsidian-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
