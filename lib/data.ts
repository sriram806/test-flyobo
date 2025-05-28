// This file contains sample data for the travel packages
// In a real application, this would be fetched from a database

export interface PackageInclusion {
  id: number;
  name: string;
}

export interface TravelPackage {
  id: string;
  name: string;
  slug: string;
  price: number;
  duration: string;
  location: string;
  inclusions: string[];
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  featured: boolean;
  rating: number;
  reviewCount: number;
  whatsappLink: string;
}

export const travelPackages: TravelPackage[] = [
  {
    "id": "1",
    "name": "Manali Getaway",
    "slug": "manali-getaway",
    "price": 19406,
    "duration": "6 Days / 4 Nights",
    "location": "Manali, Himachal Pradesh",
    "inclusions": [
      "Resort Stay",
      "Beach Activities",
      "Meals",
      "Local Guide"
    ],
    "description": "Explore ancient heritage and modern charm.",
    "longDescription": "Explore ancient heritage and modern charm. Enjoy exclusive activities and personalized tours in Manali.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg"
    ],
    "featured": false,
    "rating": 4.8,
    "reviewCount": 89,
    "whatsappLink": "https://wa.me/919000000001"
  },
  {
    "id": "2",
    "name": "Goa Getaway",
    "slug": "goa-getaway",
    "price": 24238,
    "duration": "3 Days / 3 Nights",
    "location": "Goa",
    "inclusions": [
      "Palace Visit",
      "Cultural Tour",
      "Guide",
      "Breakfast"
    ],
    "description": "A perfect getaway for adventure seekers.",
    "longDescription": "A perfect getaway for adventure seekers. Enjoy exclusive activities and personalized tours in Goa.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/goa1.jpg",
      "/images/goa2.jpg"
    ],
    "featured": false,
    "rating": 4.8,
    "reviewCount": 106,
    "whatsappLink": "https://wa.me/919000000002"
  },
  {
    "id": "3",
    "name": "Alleppey Getaway",
    "slug": "kerala-getaway",
    "price": 11839,
    "duration": "4 Days / 5 Nights",
    "location": "Alleppey, Kerala",
    "inclusions": [
      "Houseboat Stay",
      "Cultural Shows",
      "All Meals",
      "Transfers"
    ],
    "description": "Explore ancient heritage and modern charm.",
    "longDescription": "Explore ancient heritage and modern charm. Enjoy exclusive activities and personalized tours in Alleppey.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/kerala1.jpg",
      "/images/kerala2.jpg"
    ],
    "featured": false,
    "rating": 4.8,
    "reviewCount": 221,
    "whatsappLink": "https://wa.me/919000000003"
  },
  {
    "id": "4",
    "name": "Leh-Ladakh Getaway",
    "slug": "ladakh-getaway",
    "price": 20718,
    "duration": "4 Days / 4 Nights",
    "location": "Leh-Ladakh",
    "inclusions": [
      "Houseboat Stay",
      "Cultural Shows",
      "All Meals",
      "Transfers"
    ],
    "description": "Experience the rich culture and scenic beauty.",
    "longDescription": "Experience the rich culture and scenic beauty. Enjoy exclusive activities and personalized tours in Leh-Ladakh.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/ladakh1.jpg",
      "/images/ladakh2.jpg"
    ],
    "featured": false,
    "rating": 4.5,
    "reviewCount": 72,
    "whatsappLink": "https://wa.me/919000000004"
  },
  {
    "id": "5",
    "name": "Jaipur Getaway",
    "slug": "jaipur-getaway",
    "price": 20796,
    "duration": "6 Days / 6 Nights",
    "location": "Jaipur, Rajasthan",
    "inclusions": [
      "Hotel Stay",
      "Breakfast",
      "Sightseeing",
      "Transportation"
    ],
    "description": "An unforgettable journey to a breathtaking destination.",
    "longDescription": "An unforgettable journey to a breathtaking destination. Enjoy exclusive activities and personalized tours in Jaipur.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/jaipur1.jpg",
      "/images/jaipur2.jpg"
    ],
    "featured": false,
    "rating": 4.8,
    "reviewCount": 198,
    "whatsappLink": "https://wa.me/919000000005"
  },
  {
    "id": "6",
    "name": "Ooty Getaway",
    "slug": "ooty-getaway",
    "price": 23558,
    "duration": "6 Days / 4 Nights",
    "location": "Ooty, Tamil Nadu",
    "inclusions": [
      "Houseboat Stay",
      "Cultural Shows",
      "All Meals",
      "Transfers"
    ],
    "description": "Relax and rejuvenate in nature\u2019s lap.",
    "longDescription": "Relax and rejuvenate in nature\u2019s lap. Enjoy exclusive activities and personalized tours in Ooty.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/ooty1.jpg",
      "/images/ooty2.jpg"
    ],
    "featured": false,
    "rating": 4.3,
    "reviewCount": 110,
    "whatsappLink": "https://wa.me/919000000006"
  },
  {
    "id": "7",
    "name": "Munnar Getaway",
    "slug": "munnar-getaway",
    "price": 14241,
    "duration": "6 Days / 2 Nights",
    "location": "Munnar, Kerala",
    "inclusions": [
      "Hotel Stay",
      "Breakfast",
      "Sightseeing",
      "Transportation"
    ],
    "description": "An unforgettable journey to a breathtaking destination.",
    "longDescription": "An unforgettable journey to a breathtaking destination. Enjoy exclusive activities and personalized tours in Munnar.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/munnar1.jpg",
      "/images/munnar2.jpg"
    ],
    "featured": false,
    "rating": 4.8,
    "reviewCount": 164,
    "whatsappLink": "https://wa.me/919000000007"
  },
  {
    "id": "8",
    "name": "Rishikesh Getaway",
    "slug": "rishikesh-getaway",
    "price": 18067,
    "duration": "7 Days / 4 Nights",
    "location": "Rishikesh, Uttarakhand",
    "inclusions": [
      "Houseboat Stay",
      "Cultural Shows",
      "All Meals",
      "Transfers"
    ],
    "description": "A perfect getaway for adventure seekers.",
    "longDescription": "A perfect getaway for adventure seekers. Enjoy exclusive activities and personalized tours in Rishikesh.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/rishikesh1.jpg",
      "/images/rishikesh2.jpg"
    ],
    "featured": false,
    "rating": 4.7,
    "reviewCount": 228,
    "whatsappLink": "https://wa.me/919000000008"
  },
  {
    "id": "9",
    "name": "Udaipur Getaway",
    "slug": "udaipur-getaway",
    "price": 18365,
    "duration": "7 Days / 3 Nights",
    "location": "Udaipur, Rajasthan",
    "inclusions": [
      "Hotel Stay",
      "Breakfast",
      "Sightseeing",
      "Transportation"
    ],
    "description": "A perfect getaway for adventure seekers.",
    "longDescription": "A perfect getaway for adventure seekers. Enjoy exclusive activities and personalized tours in Udaipur.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/udaipur1.jpg",
      "/images/udaipur2.jpg"
    ],
    "featured": false,
    "rating": 4.0,
    "reviewCount": 250,
    "whatsappLink": "https://wa.me/919000000009"
  },
  {
    "id": "10",
    "name": "Shimla Getaway",
    "slug": "shimla-getaway",
    "price": 21665,
    "duration": "6 Days / 4 Nights",
    "location": "Shimla, Himachal Pradesh",
    "inclusions": [
      "Adventure Sports",
      "Campfire",
      "Meals",
      "Trekking"
    ],
    "description": "Experience the rich culture and scenic beauty.",
    "longDescription": "Experience the rich culture and scenic beauty. Enjoy exclusive activities and personalized tours in Shimla.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/shimla1.jpg",
      "/images/shimla2.jpg"
    ],
    "featured": false,
    "rating": 4.5,
    "reviewCount": 170,
    "whatsappLink": "https://wa.me/919000000010"
  },
  {
    "id": "11",
    "name": "Andaman Islands Getaway",
    "slug": "andaman-getaway",
    "price": 22202,
    "duration": "3 Days / 4 Nights",
    "location": "Andaman Islands",
    "inclusions": [
      "Hotel Stay",
      "Breakfast",
      "Sightseeing",
      "Transportation"
    ],
    "description": "A perfect getaway for adventure seekers.",
    "longDescription": "A perfect getaway for adventure seekers. Enjoy exclusive activities and personalized tours in Andaman Islands.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/andaman1.jpg",
      "/images/andaman2.jpg"
    ],
    "featured": false,
    "rating": 4.3,
    "reviewCount": 215,
    "whatsappLink": "https://wa.me/919000000011"
  },
  {
    "id": "12",
    "name": "Coorg Getaway",
    "slug": "coorg-getaway",
    "price": 12496,
    "duration": "5 Days / 5 Nights",
    "location": "Coorg, Karnataka",
    "inclusions": [
      "Hotel Stay",
      "Breakfast",
      "Sightseeing",
      "Transportation"
    ],
    "description": "A perfect getaway for adventure seekers.",
    "longDescription": "A perfect getaway for adventure seekers. Enjoy exclusive activities and personalized tours in Coorg.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/coorg1.jpg",
      "/images/coorg2.jpg"
    ],
    "featured": false,
    "rating": 4.5,
    "reviewCount": 262,
    "whatsappLink": "https://wa.me/919000000012"
  },
  {
    "id": "13",
    "name": "Hampi Getaway",
    "slug": "hampi-getaway",
    "price": 18961,
    "duration": "5 Days / 4 Nights",
    "location": "Hampi, Karnataka",
    "inclusions": [
      "Palace Visit",
      "Cultural Tour",
      "Guide",
      "Breakfast"
    ],
    "description": "Experience the rich culture and scenic beauty.",
    "longDescription": "Experience the rich culture and scenic beauty. Enjoy exclusive activities and personalized tours in Hampi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/hampi1.jpg",
      "/images/hampi2.jpg"
    ],
    "featured": false,
    "rating": 4.3,
    "reviewCount": 93,
    "whatsappLink": "https://wa.me/919000000013"
  },
  {
    "id": "14",
    "name": "Rann of Kutch Getaway",
    "slug": "kutch-getaway",
    "price": 23962,
    "duration": "6 Days / 3 Nights",
    "location": "Rann of Kutch, Gujarat",
    "inclusions": [
      "Houseboat Stay",
      "Cultural Shows",
      "All Meals",
      "Transfers"
    ],
    "description": "A perfect getaway for adventure seekers.",
    "longDescription": "A perfect getaway for adventure seekers. Enjoy exclusive activities and personalized tours in Rann of Kutch.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/kutch1.jpg",
      "/images/kutch2.jpg"
    ],
    "featured": false,
    "rating": 4.5,
    "reviewCount": 83,
    "whatsappLink": "https://wa.me/919000000014"
  },
  {
    "id": "15",
    "name": "Tawang Getaway",
    "slug": "tawang-getaway",
    "price": 21774,
    "duration": "3 Days / 3 Nights",
    "location": "Tawang, Arunachal Pradesh",
    "inclusions": [
      "Resort Stay",
      "Beach Activities",
      "Meals",
      "Local Guide"
    ],
    "description": "A perfect getaway for adventure seekers.",
    "longDescription": "A perfect getaway for adventure seekers. Enjoy exclusive activities and personalized tours in Tawang.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/tawang1.jpg",
      "/images/tawang2.jpg"
    ],
    "featured": false,
    "rating": 4.3,
    "reviewCount": 224,
    "whatsappLink": "https://wa.me/919000000015"
  },
  {
    "id": "16",
    "name": "Darjeeling Getaway",
    "slug": "darjeeling-getaway",
    "price": 24594,
    "duration": "3 Days / 3 Nights",
    "location": "Darjeeling, West Bengal",
    "inclusions": [
      "Adventure Sports",
      "Campfire",
      "Meals",
      "Trekking"
    ],
    "description": "An unforgettable journey to a breathtaking destination.",
    "longDescription": "An unforgettable journey to a breathtaking destination. Enjoy exclusive activities and personalized tours in Darjeeling.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/darjeeling1.jpg",
      "/images/darjeeling2.jpg"
    ],
    "featured": false,
    "rating": 4.7,
    "reviewCount": 201,
    "whatsappLink": "https://wa.me/919000000016"
  },
  {
    "id": "17",
    "name": "Meghalaya Getaway",
    "slug": "meghalaya-getaway",
    "price": 22803,
    "duration": "6 Days / 2 Nights",
    "location": "Meghalaya",
    "inclusions": [
      "Adventure Sports",
      "Campfire",
      "Meals",
      "Trekking"
    ],
    "description": "An unforgettable journey to a breathtaking destination.",
    "longDescription": "An unforgettable journey to a breathtaking destination. Enjoy exclusive activities and personalized tours in Meghalaya.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/meghalaya1.jpg",
      "/images/meghalaya2.jpg"
    ],
    "featured": false,
    "rating": 4.5,
    "reviewCount": 53,
    "whatsappLink": "https://wa.me/919000000017"
  },
  {
    "id": "18",
    "name": "Sikkim Getaway",
    "slug": "sikkim-getaway",
    "price": 17301,
    "duration": "7 Days / 6 Nights",
    "location": "Sikkim",
    "inclusions": [
      "Adventure Sports",
      "Campfire",
      "Meals",
      "Trekking"
    ],
    "description": "Experience the rich culture and scenic beauty.",
    "longDescription": "Experience the rich culture and scenic beauty. Enjoy exclusive activities and personalized tours in Sikkim.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/sikkim1.jpg",
      "/images/sikkim2.jpg"
    ],
    "featured": false,
    "rating": 4.3,
    "reviewCount": 72,
    "whatsappLink": "https://wa.me/919000000018"
  },
  {
    "id": "19",
    "name": "Mahabalipuram Getaway",
    "slug": "mahabalipuram-getaway",
    "price": 10423,
    "duration": "4 Days / 5 Nights",
    "location": "Mahabalipuram, Tamil Nadu",
    "inclusions": [
      "Adventure Sports",
      "Campfire",
      "Meals",
      "Trekking"
    ],
    "description": "An unforgettable journey to a breathtaking destination.",
    "longDescription": "An unforgettable journey to a breathtaking destination. Enjoy exclusive activities and personalized tours in Mahabalipuram.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/mahabalipuram1.jpg",
      "/images/mahabalipuram2.jpg"
    ],
    "featured": false,
    "rating": 4.3,
    "reviewCount": 101,
    "whatsappLink": "https://wa.me/919000000019"
  },
  {
    "id": "20",
    "name": "Kaziranga Getaway",
    "slug": "kaziranga-getaway",
    "price": 11974,
    "duration": "4 Days / 4 Nights",
    "location": "Kaziranga, Assam",
    "inclusions": [
      "Palace Visit",
      "Cultural Tour",
      "Guide",
      "Breakfast"
    ],
    "description": "Explore ancient heritage and modern charm.",
    "longDescription": "Explore ancient heritage and modern charm. Enjoy exclusive activities and personalized tours in Kaziranga.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/kaziranga1.jpg",
      "/images/kaziranga2.jpg"
    ],
    "featured": false,
    "rating": 4.1,
    "reviewCount": 167,
    "whatsappLink": "https://wa.me/919000000020"
  },
  {
    "id": "21",
    "name": "Sundarbans Getaway",
    "slug": "sundarbans-getaway",
    "price": 10470,
    "duration": "4 Days / 2 Nights",
    "location": "Sundarbans, West Bengal",
    "inclusions": [
      "Hotel Stay",
      "Breakfast",
      "Sightseeing",
      "Transportation"
    ],
    "description": "A perfect getaway for adventure seekers.",
    "longDescription": "A perfect getaway for adventure seekers. Enjoy exclusive activities and personalized tours in Sundarbans.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/sundarbans1.jpg",
      "/images/sundarbans2.jpg"
    ],
    "featured": false,
    "rating": 4.9,
    "reviewCount": 213,
    "whatsappLink": "https://wa.me/919000000021"
  },
  {
    "id": "22",
    "name": "Spiti Valley Getaway",
    "slug": "spiti-getaway",
    "price": 23538,
    "duration": "7 Days / 5 Nights",
    "location": "Spiti Valley, Himachal",
    "inclusions": [
      "Resort Stay",
      "Beach Activities",
      "Meals",
      "Local Guide"
    ],
    "description": "A perfect getaway for adventure seekers.",
    "longDescription": "A perfect getaway for adventure seekers. Enjoy exclusive activities and personalized tours in Spiti Valley.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/spiti1.jpg",
      "/images/spiti2.jpg"
    ],
    "featured": false,
    "rating": 4.9,
    "reviewCount": 275,
    "whatsappLink": "https://wa.me/919000000022"
  },
  {
    "id": "23",
    "name": "Valley of Flowers Getaway",
    "slug": "valley-of-flowers-getaway",
    "price": 11448,
    "duration": "3 Days / 5 Nights",
    "location": "Valley of Flowers, Uttarakhand",
    "inclusions": [
      "Resort Stay",
      "Beach Activities",
      "Meals",
      "Local Guide"
    ],
    "description": "Experience the rich culture and scenic beauty.",
    "longDescription": "Experience the rich culture and scenic beauty. Enjoy exclusive activities and personalized tours in Valley of Flowers.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/valley-of-flowers1.jpg",
      "/images/valley-of-flowers2.jpg"
    ],
    "featured": false,
    "rating": 4.2,
    "reviewCount": 181,
    "whatsappLink": "https://wa.me/919000000023"
  },
  {
    "id": "24",
    "name": "Ajanta & Ellora Getaway",
    "slug": "ajanta-ellora-getaway",
    "price": 12900,
    "duration": "5 Days / 2 Nights",
    "location": "Ajanta & Ellora, Maharashtra",
    "inclusions": [
      "Adventure Sports",
      "Campfire",
      "Meals",
      "Trekking"
    ],
    "description": "Experience the rich culture and scenic beauty.",
    "longDescription": "Experience the rich culture and scenic beauty. Enjoy exclusive activities and personalized tours in Ajanta & Ellora.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/ajanta-ellora1.jpg",
      "/images/ajanta-ellora2.jpg"
    ],
    "featured": false,
    "rating": 4.4,
    "reviewCount": 83,
    "whatsappLink": "https://wa.me/919000000024"
  },
  {
    "id": "25",
    "name": "Auli Getaway",
    "slug": "auli-getaway",
    "price": 23093,
    "duration": "4 Days / 4 Nights",
    "location": "Auli, Uttarakhand",
    "inclusions": [
      "Houseboat Stay",
      "Cultural Shows",
      "All Meals",
      "Transfers"
    ],
    "description": "Relax and rejuvenate in nature\u2019s lap.",
    "longDescription": "Relax and rejuvenate in nature\u2019s lap. Enjoy exclusive activities and personalized tours in Auli.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/auli1.jpg",
      "/images/auli2.jpg"
    ],
    "featured": false,
    "rating": 4.4,
    "reviewCount": 54,
    "whatsappLink": "https://wa.me/919000000025"
  },
  {
    "id": "26",
    "name": "Khajuraho Getaway",
    "slug": "khajuraho-getaway",
    "price": 10172,
    "duration": "3 Days / 3 Nights",
    "location": "Khajuraho, Madhya Pradesh",
    "inclusions": [
      "Adventure Sports",
      "Campfire",
      "Meals",
      "Trekking"
    ],
    "description": "Relax and rejuvenate in nature\u2019s lap.",
    "longDescription": "Relax and rejuvenate in nature\u2019s lap. Enjoy exclusive activities and personalized tours in Khajuraho.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/khajuraho1.jpg",
      "/images/khajuraho2.jpg"
    ],
    "featured": false,
    "rating": 4.4,
    "reviewCount": 284,
    "whatsappLink": "https://wa.me/919000000026"
  },
  {
    "id": "27",
    "name": "Binsar Getaway",
    "slug": "binsar-getaway",
    "price": 12392,
    "duration": "7 Days / 6 Nights",
    "location": "Binsar, Uttarakhand",
    "inclusions": [
      "Houseboat Stay",
      "Cultural Shows",
      "All Meals",
      "Transfers"
    ],
    "description": "Experience the rich culture and scenic beauty.",
    "longDescription": "Experience the rich culture and scenic beauty. Enjoy exclusive activities and personalized tours in Binsar.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/binsar1.jpg",
      "/images/binsar2.jpg"
    ],
    "featured": false,
    "rating": 4.9,
    "reviewCount": 96,
    "whatsappLink": "https://wa.me/919000000027"
  },
  {
    "id": "28",
    "name": "Ranthambore Getaway",
    "slug": "ranthambore-getaway",
    "price": 17072,
    "duration": "6 Days / 4 Nights",
    "location": "Ranthambore, Rajasthan",
    "inclusions": [
      "Resort Stay",
      "Beach Activities",
      "Meals",
      "Local Guide"
    ],
    "description": "An unforgettable journey to a breathtaking destination.",
    "longDescription": "An unforgettable journey to a breathtaking destination. Enjoy exclusive activities and personalized tours in Ranthambore.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/ranthambore1.jpg",
      "/images/ranthambore2.jpg"
    ],
    "featured": false,
    "rating": 4.3,
    "reviewCount": 258,
    "whatsappLink": "https://wa.me/919000000028"
  },
  {
    "id": "29",
    "name": "Agra Getaway",
    "slug": "agra-getaway",
    "price": 14447,
    "duration": "4 Days / 4 Nights",
    "location": "Agra, Uttar Pradesh",
    "inclusions": [
      "Palace Visit",
      "Cultural Tour",
      "Guide",
      "Breakfast"
    ],
    "description": "Experience the rich culture and scenic beauty.",
    "longDescription": "Experience the rich culture and scenic beauty. Enjoy exclusive activities and personalized tours in Agra.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/agra1.jpg",
      "/images/agra2.jpg"
    ],
    "featured": false,
    "rating": 4.8,
    "reviewCount": 121,
    "whatsappLink": "https://wa.me/919000000029"
  },
  {
    "id": "30",
    "name": "Rameswaram Getaway",
    "slug": "rameswaram-getaway",
    "price": 9892,
    "duration": "3 Days / 5 Nights",
    "location": "Rameswaram, Tamil Nadu",
    "inclusions": [
      "Adventure Sports",
      "Campfire",
      "Meals",
      "Trekking"
    ],
    "description": "Relax and rejuvenate in nature\u2019s lap.",
    "longDescription": "Relax and rejuvenate in nature\u2019s lap. Enjoy exclusive activities and personalized tours in Rameswaram.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/rameswaram1.jpg",
      "/images/rameswaram2.jpg"
    ],
    "featured": false,
    "rating": 4.9,
    "reviewCount": 154,
    "whatsappLink": "https://wa.me/919000000030"
  },
  {
    "id": "31",
    "name": "Varanasi Getaway",
    "slug": "varanasi-getaway",
    "price": 11278,
    "duration": "7 Days / 6 Nights",
    "location": "Varanasi, Uttar Pradesh",
    "inclusions": [
      "Houseboat Stay",
      "Cultural Shows",
      "All Meals",
      "Transfers"
    ],
    "description": "Experience the rich culture and scenic beauty.",
    "longDescription": "Experience the rich culture and scenic beauty. Enjoy exclusive activities and personalized tours in Varanasi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/varanasi1.jpg",
      "/images/varanasi2.jpg"
    ],
    "featured": false,
    "rating": 4.8,
    "reviewCount": 112,
    "whatsappLink": "https://wa.me/919000000031"
  },
  {
    "id": "32",
    "name": "Kolkata Getaway",
    "slug": "kolkata-getaway",
    "price": 23040,
    "duration": "5 Days / 3 Nights",
    "location": "Kolkata, West Bengal",
    "inclusions": [
      "Houseboat Stay",
      "Cultural Shows",
      "All Meals",
      "Transfers"
    ],
    "description": "Explore ancient heritage and modern charm.",
    "longDescription": "Explore ancient heritage and modern charm. Enjoy exclusive activities and personalized tours in Kolkata.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/kolkata1.jpg",
      "/images/kolkata2.jpg"
    ],
    "featured": false,
    "rating": 4.1,
    "reviewCount": 110,
    "whatsappLink": "https://wa.me/919000000032"
  },
  {
    "id": "33",
    "name": "Mysore Getaway",
    "slug": "mysore-getaway",
    "price": 24630,
    "duration": "4 Days / 4 Nights",
    "location": "Mysore, Karnataka",
    "inclusions": [
      "Hotel Stay",
      "Breakfast",
      "Sightseeing",
      "Transportation"
    ],
    "description": "Relax and rejuvenate in nature\u2019s lap.",
    "longDescription": "Relax and rejuvenate in nature\u2019s lap. Enjoy exclusive activities and personalized tours in Mysore.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/mysore1.jpg",
      "/images/mysore2.jpg"
    ],
    "featured": false,
    "rating": 4.3,
    "reviewCount": 210,
    "whatsappLink": "https://wa.me/919000000033"
  },
  {
    "id": "34",
    "name": "Madikeri Getaway",
    "slug": "madikeri-getaway",
    "price": 19269,
    "duration": "3 Days / 5 Nights",
    "location": "Madikeri, Karnataka",
    "inclusions": [
      "Resort Stay",
      "Beach Activities",
      "Meals",
      "Local Guide"
    ],
    "description": "An unforgettable journey to a breathtaking destination.",
    "longDescription": "An unforgettable journey to a breathtaking destination. Enjoy exclusive activities and personalized tours in Madikeri.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/madikeri1.jpg",
      "/images/madikeri2.jpg"
    ],
    "featured": false,
    "rating": 4.6,
    "reviewCount": 178,
    "whatsappLink": "https://wa.me/919000000034"
  },
  {
    "id": "35",
    "name": "Amritsar Getaway",
    "slug": "amritsar-getaway",
    "price": 20944,
    "duration": "7 Days / 5 Nights",
    "location": "Amritsar, Punjab",
    "inclusions": [
      "Resort Stay",
      "Beach Activities",
      "Meals",
      "Local Guide"
    ],
    "description": "Relax and rejuvenate in nature\u2019s lap.",
    "longDescription": "Relax and rejuvenate in nature\u2019s lap. Enjoy exclusive activities and personalized tours in Amritsar.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/amritsar1.jpg",
      "/images/amritsar2.jpg"
    ],
    "featured": false,
    "rating": 4.1,
    "reviewCount": 279,
    "whatsappLink": "https://wa.me/919000000035"
  },
  {
    "id": "36",
    "name": "Delhi Getaway",
    "slug": "delhi-getaway",
    "price": 20414,
    "duration": "4 Days / 3 Nights",
    "location": "Delhi",
    "inclusions": [
      "Adventure Sports",
      "Campfire",
      "Meals",
      "Trekking"
    ],
    "description": "Experience the rich culture and scenic beauty.",
    "longDescription": "Experience the rich culture and scenic beauty. Enjoy exclusive activities and personalized tours in Delhi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountains%2C_Manali%2C_Himachal_Pradesh.jpg/250px-Mountains%2C_Manali%2C_Himachal_Pradesh.jpg",
    "gallery": [
      "/images/delhi1.jpg",
      "/images/delhi2.jpg"
    ],
    "featured": false,
    "rating": 4.6,
    "reviewCount": 296,
    "whatsappLink": "https://wa.me/919000000036"
  }
];

export const packageInclusions: PackageInclusion[] = [
  { id: 1, name: "Accommodation" },
  { id: 2, name: "Flights" },
  { id: 3, name: "Meals" },
  { id: 4, name: "Activities" },
  { id: 5, name: "Transportation" },
  { id: 6, name: "Sightseeing" },
  { id: 7, name: "Visa Assistance" },
  { id: 8, name: "Travel Insurance" },
];

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "How do I book a package?",
    answer: "You can book a package directly through our website by selecting your desired package and following the booking instructions. Alternatively, you can contact our customer service team via phone or email for assistance.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, net banking, UPI, and bank transfers. For certain packages, we also offer EMI options with selected banks.",
  },
  {
    id: 3,
    question: "Can I customize a travel package?",
    answer: "Yes, we offer customization options for all our packages. You can contact our customer service team to discuss your specific requirements and we'll create a tailored package for you.",
  },
  {
    id: 4,
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy varies depending on the package and how close to the departure date you cancel. Generally, cancellations made 30+ days before departure receive a 90% refund, 15-29 days before departure receive a 70% refund, and 7-14 days before departure receive a 50% refund. Cancellations made less than 7 days before departure are non-refundable.",
  },
  {
    id: 5,
    question: "Are flights included in the package price?",
    answer: "Flight inclusion varies by package. Please check the 'Inclusions' section of each package to see if flights are included. We can also arrange flights separately if needed.",
  },
  {
    id: 6,
    question: "Do I need travel insurance?",
    answer: "While travel insurance is not mandatory, we strongly recommend it to protect against unforeseen circumstances. We can suggest suitable travel insurance options based on your travel plans.",
  },
];