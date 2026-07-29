export interface Room {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  sizeSqFt: number;
  capacity: {
    adults: number;
    children: number;
  };
  bedType: string;
  view: string;
  featured: boolean;
  image: string;
  gallery: string[];
  amenities: string[];
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'lobby' | 'restaurant' | 'exterior' | 'pool' | 'events';
  categoryLabel: string;
  image: string;
  caption: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface Facility {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  checkIn?: string;
  checkOut?: string;
  roomType?: string;
  guests?: string;
  message: string;
}
