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
    'Moon Star Hotel',
    'Moon Star Restaurant and Lodge',
    'Lodge in Hetauda',
    'Manaschowk Hotel',
    'Comfortable Stay Hetauda',
    'Delicious Food Hetauda',
    'Makawanpur Hotel Nepal',
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

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: HOTEL_INFO.name,
  description: HOTEL_INFO.description,
  url: SITE_URL,
  telephone: HOTEL_INFO.formattedPhone,
  email: HOTEL_INFO.email,
  priceRange: '$$',
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
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
