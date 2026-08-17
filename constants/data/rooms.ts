import { Room } from '@/types';

export const ROOMS_DATA: Room[] = [
    {
        id: 'family-room',
        name: 'Family Room',
        slug: 'family-room',
        tagline: 'Comfortable accommodation for families visiting Hetauda',
        description: 'A comfortable accommodation option for families visiting Hetauda.',
        price: 2200,
        sizeSqFt: 350,
        capacity: {adults: 3, children: 0},
        bedType: 'Double Bed + Single Bed',
        view: 'Room',
        featured: true,
        image: '/moonstar/family-room.jpeg',
        gallery: [
            '/moonstar/family-room.jpeg'
        ],
        amenities: ['En-suite Bathroom', 'Hot Shower', 'Free Wi-Fi'],
        features: ['Daily Housekeeping', '24/7 Support']
    },
    {
        id: 'deluxe-couple-room',
        name: 'Deluxe Couple Room',
        slug: 'deluxe-couple-room',
        tagline: 'A comfortable accommodation option for couples',
        description: 'A comfortable room option for couples and two-person stays.',
        price: 2000,
        sizeSqFt: 300,
        capacity: {adults: 2, children: 0},
        bedType: 'Master Bed',
        view: 'Room',
        featured: true,
        image: '/moonstar/double-bed.jpeg',
        gallery: [
            '/moonstar/double-bed.jpeg',
            '/moonstar/double-bed.jpeg'
        ],
        amenities: ['En-suite Bathroom', 'Hot Shower', 'Free Wi-Fi'],
        features: ['Daily Housekeeping', '24/7 Support']
    },
    {
        id: '10-bed-group-room',
        name: '10-Bed Group Room',
        slug: '10-bed-group-room',
        tagline: 'A group accommodation option designed for guests traveling together',
        description: 'A group accommodation option designed for guests traveling together.',
        price: 7000,
        sizeSqFt: 500,
        capacity: {adults: 10, children: 0},
        bedType: '10 Beds',
        view: 'Room',
        featured: true,
        image: '/moonstar/single-bed.jpeg',
        gallery: [
            '/moonstar/single-bed.jpeg'
        ],
        amenities: ['Shared Bathroom', 'Hot Shower', 'Free Wi-Fi'],
        features: ['Group Space', 'Daily Housekeeping', '24/7 Support']
    },
    {
        id: 'non-ac-couple-room',
        name: 'Standard Non-A/C Couple Room',
        slug: 'non-ac-couple-room',
        tagline: 'An affordable non-air-conditioned accommodation option for couples',
        description: 'An affordable non-air-conditioned accommodation option for couples.',
        price: 1200,
        sizeSqFt: 250,
        capacity: {adults: 2, children: 0},
        bedType: 'Double Bed',
        view: 'Room',
        featured: false,
        image: '/moonstar/double-bed.jpeg',
        gallery: [
            '/moonstar/double-bed.jpeg'
        ],
        amenities: ['En-suite Bathroom', 'Hot Shower', 'Free Wi-Fi'],
        features: ['Non-Air-Conditioned', 'Daily Housekeeping', '24/7 Support']
    },
    {
        id: 'non-ac-twin-room',
        name: 'Standard Non-A/C Twin Room',
        slug: 'non-ac-twin-room',
        tagline: 'A practical non-air-conditioned room option for guests traveling together',
        description: 'A practical non-air-conditioned room option for guests traveling together.',
        price: 1300,
        sizeSqFt: 270,
        capacity: {adults: 2, children: 0},
        bedType: '2 Single Beds',
        view: 'Room',
        featured: false,
        image: '/moonstar/single-bed.jpeg',
        gallery: [
            '/moonstar/single-bed.jpeg'
        ],
        amenities: ['En-suite Bathroom', 'Hot Shower', 'Free Wi-Fi'],
        features: ['Non-Air-Conditioned', 'Daily Housekeeping', '24/7 Support']
    }
];
