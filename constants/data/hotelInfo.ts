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
    description: 'Welcome to Moon Star Restaurant & Lodge in Manas Chowk, Hetauda. We deliver a blend of comfortable stays, delicious authentic dining, free high-speed Wi-Fi, and secure parking with genuine heart-felt Nepali hospitality.',
    
    // Full official address for NAP, schema, citations, Google Business Profile
    addressFull: 'Hetauda Sub-Metropolitan City–2, Manas Chowk, 590018, Bagmati Province, Nepal',
    addressFullWithName: 'Moon Star Restaurant & Lodge, Hetauda Sub-Metropolitan City–2, Manas Chowk, 590018, Bagmati Province, Nepal',
    
    // Short address for user-facing content, homepage, descriptions
    address: 'Moon Star Restaurant & Lodge, Manas Chowk, Hetauda',
    addressShort: 'Manas Chowk, Hetauda, Nepal',
    
    // Structured address components for schema
    streetAddress: 'Manas Chowk',
    locality: 'Hetauda',
    administrativeArea: 'Hetauda Sub-Metropolitan City–2',
    postalCode: '590018',
    region: 'Bagmati Province',
    country: 'NP',
    
    // Nepali versions
    addressNepali: 'हेटौँडा उपमहानगरपालिका-2, मानस चोक, 590018, बागमती प्रदेश, नेपाल',
    localityNepali: 'हेटौँडा',
    
    geo: {latitude: 27.4284, longitude: 85.0298},
    phone: '9865501880',
    secondaryPhone: '9855017880',
    formattedPhone: '+977 9865501880',
    formattedSecondaryPhone: '+977 9855017880',
    email: 'moonstarhotel@gmail.com',
    reservationsEmail: 'moonstarhotel@gmail.com',
    hours: '24/7 Days a Week',
    checkIn: '12:00 PM',
    checkOut: '12:00 PM',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.1432089593886!2d85.0362708!3d27.433647300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb495b9546a261%3A0x538f9e772ce78a8e!2sMoon%20Star%20Restaurant%20%26%20Lodge!5e0!3m2!1sen!2snp!4v1786868662189!5m2!1sen!2snp',
    socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com', 
        tripadvisor: 'https://tripadvisor.com',
        linkedin: 'https://linkedin.com'
    }
};
