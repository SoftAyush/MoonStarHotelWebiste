import { Room, GalleryItem, Facility, StatItem, TeamMember } from '@/types';

// Resolves to the Vercel-assigned production domain automatically; swap in a
// custom domain later via NEXT_PUBLIC_SITE_URL without touching this file.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

export const HOTEL_INFO = {
  name: 'Moon Star Restaurant & Lodge',
  brandName: 'MOON STAR',
  subTitle: 'Restaurant & Lodge',
  tagline: 'Hospitality with a Heart',
  description: 'Welcome to Moon Star Restaurant & Lodge in Manaschowk, Hetauda. We deliver a blend of comfortable stays, delicious authentic dining, free high-speed Wi-Fi, and secure parking with genuine heart-felt Nepali hospitality.',
  address: 'Hetauda-2, Manaschowk, Makawanpur, Nepal',
  phone: '9865501880',
  secondaryPhone: '9855017880',
  formattedPhone: '+977 9865501880',
  formattedSecondaryPhone: '+977 9855017880',
  email: 'moonstarhotel@gmail.com',
  reservationsEmail: 'moonstarhotel@gmail.com',
  hours: '24 Hours / 7 Days a Week',
  checkIn: '12:00 PM',
  checkOut: '12:00 PM',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.385498394625!2d85.0298!3d27.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb490000000001%3A0x0!2zMjfCsDI1JzecLjIiTiA4NcKwMDEnNDcuMyJF!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    tripadvisor: 'https://tripadvisor.com',
    linkedin: 'https://linkedin.com'
  }
};

export const CARD_HIGHLIGHTS = [
  { icon: 'BedDouble', title: 'Comfortable Stay', description: 'Clean, spacious, and soundproof rooms designed for peaceful rest.' },
  { icon: 'UtensilsCrossed', title: 'Delicious Food', description: 'Freshly prepared Nepali, Indian, and Continental culinary specialties.' },
  { icon: 'Wifi', title: 'Free Wi-Fi', description: 'High-speed internet coverage across all rooms, dining areas, and lobby.' },
  { icon: 'Car', title: 'Parking Facility', description: 'Spacious, secure, and hassle-free vehicle parking area for all guests.' },
];

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Comfort Room',
    slug: 'deluxe-comfort-room',
    tagline: 'Refined comfort with cozy ambient lighting and town view',
    description: 'Designed for absolute relaxation, featuring a plush queen-sized bed, en-suite modern bath, ambient air conditioning, and LED TV.',
    longDescription: 'Immerse yourself in serenity within our Deluxe Comfort Room at Moon Star. Adorned with warm timber finishes, crisp linens, and prompt room service, this room guarantees peaceful sleep after a long day of travel.',
    price: 35,
    sizeSqFt: 350,
    capacity: { adults: 2, children: 1 },
    bedType: '1 Deluxe Queen Bed',
    view: 'Manaschowk Landscape View',
    featured: true,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: ['Free High-Speed Wi-Fi', 'En-suite Bathroom & Hot Shower', '24/7 Room Service', 'LED TV', 'Complimentary Bottled Water', 'Secure Parking'],
    features: ['Soundproof Windows', 'Air Conditioned', 'Daily Housekeeping', 'Power Backup']
  },
  {
    id: 'executive-suite',
    name: 'Executive Lodge Suite',
    slug: 'executive-lodge-suite',
    tagline: 'Spacious suite with private lounge and premium furnishings',
    description: 'Featuring a separate sitting lounge, plush king bed, workspace, and premium bathroom amenities for business travelers and families.',
    longDescription: 'The Executive Lodge Suite balances space with homelike warmth. Enjoy your morning organic tea in your private seating corner and taste fresh chef delicacies delivered straight to your suite.',
    price: 55,
    sizeSqFt: 550,
    capacity: { adults: 3, children: 1 },
    bedType: '1 Super King Bed',
    view: 'Hetauda City & Mountain View',
    featured: true,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: ['Private Sitting Lounge', 'Work Desk', 'Free High-Speed Wi-Fi', 'Hot & Cold Shower', '24/7 Room Service', 'Smart TV'],
    features: ['City Mountain View', 'Executive Desk', 'Complimentary Breakfast', 'Express Check-in']
  },
  {
    id: 'family-suite',
    name: 'Family Heritage Suite',
    slug: 'family-heritage-suite',
    tagline: 'Generous double bedroom accommodation for family comfort',
    description: 'Created for families seeking generous space and connectivity. Features two comfortable queen beds, dining table, and dual vanity bath.',
    longDescription: 'Designed for memorable family stays in Hetauda. The Family Heritage Suite provides two separate beds, generous storage, and direct access to Moon Star Restaurant dining options.',
    price: 75,
    sizeSqFt: 750,
    capacity: { adults: 4, children: 2 },
    bedType: '2 Queen Beds',
    view: 'Manaschowk Skyline',
    featured: true,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: ['Two Large Beds', 'Dining Table', 'Free High-Speed Wi-Fi', 'Dual Vanities', 'Complimentary Breakfast', 'Dedicated Parking'],
    features: ['Family Room Layout', 'Child Safe', 'Priority Dining Table', '24/7 Support']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Moon Star Deluxe Suite',
    category: 'rooms',
    categoryLabel: 'Comfortable Rooms',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
    caption: 'Comfortable stay with modern decor and peaceful ambience.',
    aspectRatio: 'landscape'
  },
  {
    id: '2',
    title: 'Moon Star Dining Hall',
    category: 'restaurant',
    categoryLabel: 'Delicious Food',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    caption: 'Authentic Nepali, Indian, and Chinese culinary delights.',
    aspectRatio: 'landscape'
  },
  {
    id: '3',
    title: 'Lobby & Reception Desk',
    category: 'lobby',
    categoryLabel: 'Warm Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    caption: '24/7 friendly front desk welcoming guests with heart.',
    aspectRatio: 'portrait'
  },
  {
    id: '4',
    title: 'Exterior & Parking Area',
    category: 'exterior',
    categoryLabel: 'Parking Facility',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
    caption: 'Secure vehicle parking facility in Hetauda-2 Manaschowk.',
    aspectRatio: 'landscape'
  },
  {
    id: '5',
    title: 'Moon Star Family Dining',
    category: 'restaurant',
    categoryLabel: 'Delicious Food',
    image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1200&auto=format&fit=crop',
    caption: 'Hygeinic seating for family gatherings and celebrations.',
    aspectRatio: 'landscape'
  },
  {
    id: '6',
    title: 'Executive Suite Lounge',
    category: 'rooms',
    categoryLabel: 'Comfortable Rooms',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop',
    caption: 'Quiet workspace and high-speed Wi-Fi connectivity.',
    aspectRatio: 'landscape'
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: '1',
    icon: 'BedDouble',
    title: 'Comfortable Stay',
    description: 'Clean, cozy rooms equipped with plush bedding, LED TVs, and hot/cold water showers.',
    highlight: 'Pure Comfort'
  },
  {
    id: '2',
    icon: 'UtensilsCrossed',
    title: 'Delicious Food',
    description: 'Freshly cooked authentic Nepali meals, Momo, Chowmein, Indian curries, and Continental dishes.',
    highlight: 'Hygienic Kitchen'
  },
  {
    id: '3',
    icon: 'Wifi',
    title: 'Free High-Speed Wi-Fi',
    description: 'Seamless wireless connectivity throughout all guest rooms, dining spaces, and parking areas.',
    highlight: 'Free Access'
  },
  {
    id: '4',
    icon: 'Car',
    title: 'Parking Facility',
    description: 'Ample and secure vehicle parking space available 24/7 for cars and motorcycles.',
    highlight: 'Secure Parking'
  }
];

export const HOTEL_STATS: StatItem[] = [
  { value: '100%', label: 'Hospitality with a Heart', description: 'Warm and genuine Nepali welcoming service for every guest.' },
  { value: '24/7', label: 'Front Desk & Room Service', description: 'Round-the-clock check-in support and dining requests.' },
  { value: 'Hetauda-2', label: 'Manaschowk Location', description: 'Conveniently situated in the heart of Makawanpur, Nepal.' },
  { value: '1000s', label: 'Happy Guests Served', description: 'Trusted destination for travelers, families, and food lovers.' }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Moon Star Hospitality Management',
    role: 'Managing Team',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop',
    bio: 'Dedicated to providing high quality lodge accommodation and delicious restaurant dining in Hetauda.'
  },
  {
    name: 'Executive Head Chef',
    role: 'Culinary Master',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=500&auto=format&fit=crop',
    bio: 'Crafting hygienic, flavorful Nepali thali, sizzlers, snacks, and continental delicacies with heart.'
  }
];
