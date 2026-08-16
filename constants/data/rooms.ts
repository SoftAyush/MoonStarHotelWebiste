import { Room } from '@/types';

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
        capacity: {adults: 2, children: 1},
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
        capacity: {adults: 3, children: 1},
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
        capacity: {adults: 4, children: 2},
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
