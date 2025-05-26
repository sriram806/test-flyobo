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
    id: "TS0170-1RTOJ",
    name: "Kashmir Bliss: 4 Nights of Pahalgam & Srinagar Serenity at ₹11560",
    slug: "kashmir-bliss-4-nights-of-pahalgam-srinagar-serenity-at-11560",
    price: 11560,
    duration: "4 Nights / 5 Days",
    location: "Kashmir",
    inclusions: ["1N Pahalgam", "3N Srinagar"],
    description: "Kashmir Bliss: 4 Nights of Pahalgam & Srinagar Serenity at ₹11560",
    longDescription: "Kashmir Bliss: 4 Nights of Pahalgam & Srinagar Serenity at ₹11560. Itinerary: 1N Pahalgam|3N Srinagar.",
    image: "https://www.travsie.com/destination/kashmir/big/2.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/2.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-1RTOJ%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Bliss%3A%204%20Nights%20of%20Pahalgam%20%26%20Srinagar%20Serenity%20at%20%E2%82%B911560%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Pahalgam%7C3N%20Srinagar%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B911560%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-VF2DQ",
    name: "Enchanting Kashmir Escape: 3 Nights of Gulmarg & Srinagar Bliss at ₹10460",
    slug: "enchanting-kashmir-escape-3-nights-of-gulmarg-srinagar-bliss-at-10460",
    price: 10460,
    duration: "3 Nights / 4 Days",
    location: "Kashmir",
    inclusions: ["1N Gulmarg", "2N Srinagar"],
    description: "Enchanting Kashmir Escape: 3 Nights of Gulmarg & Srinagar Bliss at ₹10460",
    longDescription: "Enchanting Kashmir Escape: 3 Nights of Gulmarg & Srinagar Bliss at ₹10460. Itinerary: 1N Gulmarg|2N Srinagar.",
    image: "https://www.travsie.com/destination/kashmir/big/3.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/3.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-VF2DQ%0A-%20FLYoBOAT%20Name%3A%20%22Enchanting%20Kashmir%20Escape%3A%203%20Nights%20of%20Gulmarg%20%26%20Srinagar%20Bliss%20at%20%E2%82%B910460%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Gulmarg%7C2N%20Srinagar%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B910460%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-3N0W9",
    name: "Enchanting Kashmir Escape: 1 Night Pahalgam & 2 Nights Srinagar at ₹11660",
    slug: "enchanting-kashmir-escape-1-night-pahalgam-2-nights-srinagar-at-11660",
    price: 11660,
    duration: "3 Nights / 4 Days",
    location: "Kashmir",
    inclusions: ["1N Pahalgam", "2N Srinagar"],
    description: "Enchanting Kashmir Escape: 1 Night Pahalgam & 2 Nights Srinagar at ₹11660",
    longDescription: "Enchanting Kashmir Escape: 1 Night Pahalgam & 2 Nights Srinagar at ₹11660. Itinerary: 1N Pahalgam|2N Srinagar.",
    image: "https://www.travsie.com/destination/kashmir/big/4.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/4.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-3N0W9%0A-%20FLYoBOAT%20Name%3A%20%22Enchanting%20Kashmir%20Escape%3A%201%20Night%20Pahalgam%20%26%202%20Nights%20Srinagar%20at%20%E2%82%B911660%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Pahalgam%7C2N%20Srinagar%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Jammu%20Airport-IXJ%0A-%20Total%20Fare%3A%20%E2%82%B911660%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-BV4Z0",
    name: "Kashmir Bliss: 6 Nights of Serenity on Houseboats & Hills",
    slug: "kashmir-bliss-6-nights-of-serenity-on-houseboats-hills",
    price: 17560,
    duration: "6 Nights / 7 Days",
    location: "Kashmir",
    inclusions: ["1N Srinagar Houseboats", "1N Pahalgam", "4N Srinagar"],
    description: "Kashmir Bliss: 6 Nights of Serenity on Houseboats & Hills",
    longDescription: "Kashmir Bliss: 6 Nights of Serenity on Houseboats & Hills. Itinerary: 1N Srinagar Houseboats|1N Pahalgam|4N Srinagar.",
    image: "https://www.travsie.com/destination/kashmir/big/5.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/5.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-BV4Z0%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Bliss%3A%206%20Nights%20of%20Serenity%20on%20Houseboats%20%26%20Hills%0A-%20FLYoBOAT%20Stops%3A%201N%20Srinagar%20Houseboats%7C1N%20Pahalgam%7C4N%20Srinagar%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B917560%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-3VTIM",
    name: "Kashmir Kaleidoscope: 7 Nights of Serenity & Adventure at ₹24,960",
    slug: "kashmir-kaleidoscope-7-nights-of-serenity-adventure-at-24960",
    price: 24960,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["1N Srinagar Houseboats", "1N Sonmarg", "2N Gulmarg", "2N Pahalgam"],
    description: "Kashmir Kaleidoscope: 7 Nights of Serenity & Adventure at ₹24,960",
    longDescription: "Kashmir Kaleidoscope: 7 Nights of Serenity & Adventure at ₹24,960. Itinerary: 1N Srinagar Houseboats|1N Sonmarg|2N Gulmarg|2N Pahalgam.",
    image: "https://www.travsie.com/destination/kashmir/big/6.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/6.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-3VTIM%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Kaleidoscope%3A%207%20Nights%20of%20Serenity%20%26%20Adventure%20at%20%E2%82%B924%2C960%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Srinagar%20Houseboats%7C1N%20Sonmarg%7C2N%20Gulmarg%7C2N%20Pahalgam%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B924960%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-UZ7MY",
    name: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24,960",
    slug: "kashmir-kaleidoscope-8-days-of-enchanting-valleys-at-24960",
    price: 24960,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["1N Srinagar", "1N Sonmarg", "2N Gulmarg", "2N Pahalgam"],
    description: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24,960",
    longDescription: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24,960. Itinerary: 1N Srinagar|1N Sonmarg|2N Gulmarg|2N Pahalgam.",
    image: "https://www.travsie.com/destination/kashmir/big/7.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/7.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-UZ7MY%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Kaleidoscope%3A%208%20Days%20of%20Enchanting%20Valleys%20at%20%E2%82%B924%2C960%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Srinagar%7C1N%20Sonmarg%7C2N%20Gulmarg%7C2N%20Pahalgam%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B924960%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-BMW6Y",
    name: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24160",
    slug: "kashmir-kaleidoscope-8-days-of-enchanting-valleys-at-24160",
    price: 24160,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["2N Srinagar", "1N Sonmarg", "2N Gulmarg", "2N Pahalgam"],
    description: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24160",
    longDescription: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24160. Itinerary: 2N Srinagar|1N Sonmarg|2N Gulmarg|2N Pahalgam.",
    image: "https://www.travsie.com/destination/kashmir/big/8.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/8.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-BMW6Y%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Kaleidoscope%3A%208%20Days%20of%20Enchanting%20Valleys%20at%20%E2%82%B924160%22%0A-%20FLYoBOAT%20Stops%3A%202N%20Srinagar%7C1N%20Sonmarg%7C2N%20Gulmarg%7C2N%20Pahalgam%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B924160%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-085GD",
    name: "Kashmir Kaleidoscope: 8 Days of Serenity & Splendor at ₹21660",
    slug: "kashmir-kaleidoscope-8-days-of-serenity-splendor-at-21660",
    price: 21660,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["1N Srinagar Houseboats", "2N Pahalgam", "1N Gulmarg", "3N Srinagar"],
    description: "Kashmir Kaleidoscope: 8 Days of Serenity & Splendor at ₹21660",
    longDescription: "Kashmir Kaleidoscope: 8 Days of Serenity & Splendor at ₹21660. Itinerary: 1N Srinagar Houseboats|2N Pahalgam|1N Gulmarg|3N Srinagar.",
    image: "https://www.travsie.com/destination/kashmir/big/9.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/9.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-085GD%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Kaleidoscope%3A%208%20Days%20of%20Serenity%20%26%20Splendor%20at%20%E2%82%B921660%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Srinagar%20Houseboats%7C2N%20Pahalgam%7C1N%20Gulmarg%7C3N%20Srinagar%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B921660%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-CX72D",
    name: "Enchanting Kashmir: 8 Days of Serenity & Adventure at ₹20860",
    slug: "enchanting-kashmir-8-days-of-serenity-adventure-at-20860",
    price: 20860,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["3N Srinagar", "2N Pahalgam", "1N Gulmarg", "1N Srinagar"],
    description: "Enchanting Kashmir: 8 Days of Serenity & Adventure at ₹20860",
    longDescription: "Enchanting Kashmir: 8 Days of Serenity & Adventure at ₹20860. Itinerary: 3N Srinagar|2N Pahalgam|1N Gulmarg|1N Srinagar.",
    image: "https://www.travsie.com/destination/kashmir/big/2.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/2.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-CX72D%0A-%20FLYoBOAT%20Name%3A%20%22Enchanting%20Kashmir%3A%208%20Days%20of%20Serenity%20%26%20Adventure%20at%20%E2%82%B920860%22%0A-%20FLYoBOAT%20Stops%3A%203N%20Srinagar%7C2N%20Pahalgam%7C1N%20Gulmarg%7C1N%20Srinagar%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B920860%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-96XIB",
    name: "Kashmir Kaleidoscope: 7 Nights of Serenity & Splendor at ₹21660",
    slug: "kashmir-kaleidoscope-7-nights-of-serenity-splendor-at-21660",
    price: 21660,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["3N Srinagar", "2N Pahalgam", "1N Gulmarg", "1N Srinagar Houseboats"],
    description: "Kashmir Kaleidoscope: 7 Nights of Serenity & Splendor at ₹21660",
    longDescription: "Kashmir Kaleidoscope: 7 Nights of Serenity & Splendor at ₹21660. Itinerary: 3N Srinagar|2N Pahalgam|1N Gulmarg|1N Srinagar Houseboats.",
    image: "https://www.travsie.com/destination/kashmir/big/3.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/3.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-96XIB%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Kaleidoscope%3A%207%20Nights%20of%20Serenity%20%26%20Splendor%20at%20%E2%82%B921660%22%0A-%20FLYoBOAT%20Stops%3A%203N%20Srinagar%7C2N%20Pahalgam%7C1N%20Gulmarg%7C1N%20Srinagar%20Houseboats%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B921660%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-1UE70",
    name: "Enchanting Kashmir: 8 Days of Serenity & Adventure at ₹24,960",
    slug: "enchanting-kashmir-8-days-of-serenity-adventure-at-24960",
    price: 24960,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["1N Srinagar Houseboats", "2N Pahalgam", "2N Gulmarg", "1N Sonmarg"],
    description: "Enchanting Kashmir: 8 Days of Serenity & Adventure at ₹24,960",
    longDescription: "Enchanting Kashmir: 8 Days of Serenity & Adventure at ₹24,960. Itinerary: 1N Srinagar Houseboats|2N Pahalgam|2N Gulmarg|1N Sonmarg.",
    image: "https://www.travsie.com/destination/kashmir/big/4.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/4.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-1UE70%0A-%20FLYoBOAT%20Name%3A%20%22Enchanting%20Kashmir%3A%208%20Days%20of%20Serenity%20%26%20Adventure%20at%20%E2%82%B924%2C960%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Srinagar%20Houseboats%7C2N%20Pahalgam%7C2N%20Gulmarg%7C1N%20Sonmarg%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B924960%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%2-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-QZXRP",
    name: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24,960",
    slug: "kashmir-kaleidoscope-8-days-of-enchanting-valleys-at-24960",
    price: 24960,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["1N Srinagar", "2N Pahalgam", "2N Gulmarg", "1N Sonmarg"],
    description: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24,960",
    longDescription: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24,960. Itinerary: 1N Srinagar|2N Pahalgam|2N Gulmarg|1N Sonmarg.",
    image: "https://www.travsie.com/destination/kashmir/big/5.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/5.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-QZXRP%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Kaleidoscope%3A%208%20Days%20of%20Enchanting%20Valleys%20at%20%E2%82%B924%2C960%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Srinagar%7C2N%20Pahalgam%7C2N%20Gulmarg%7C1N%20Sonmarg%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B924960%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-UX208",
    name: "Kashmir Kaleidoscope: Doodhpathri Day Excursion & Scenic Stays",
    slug: "kashmir-kaleidoscope-doodhpathri-day-excursion-scenic-stays",
    price: 23160,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["1N Srinagar Houseboats", "2N Pahalgam", "2N Gulmarg", "2N Srinagar"],
    description: "Kashmir Kaleidoscope: Doodhpathri Day Excursion & Scenic Stays",
    longDescription: "Kashmir Kaleidoscope: Doodhpathri Day Excursion & Scenic Stays. Itinerary: 1N Srinagar Houseboats|2N Pahalgam|2N Gulmarg|2N Srinagar.",
    image: "https://www.travsie.com/destination/kashmir/big/6.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/6.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-UX208%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Kaleidoscope%3A%20Doodhpathri%20Day%20Excursion%20%26%20Scenic%20Stays%0A-%20FLYoBOAT%20Stops%3A%201N%20Srinagar%20Houseboats%7C2N%20Pahalgam%7C2N%20Gulmarg%7C2N%20Srinagar%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B923160%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-75LEA",
    name: "Kashmir Kaleidoscope: Doodhpathri Day Excursion & Scenic Stays",
    slug: "kashmir-kaleidoscope-doodhpathri-day-excursion-scenic-stays",
    price: 23160,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["1N Srinagar Houseboats", "2N Pahalgam", "2N Gulmarg", "2N Srinagar"],
    description: "Kashmir Kaleidoscope: Doodhpathri Day Excursion & Scenic Stays",
    longDescription: "Kashmir Kaleidoscope: Doodhpathri Day Excursion & Scenic Stays. Itinerary: 1N Srinagar Houseboats|2N Pahalgam|2N Gulmarg|2N Srinagar.",
    image: "https://www.travsie.com/destination/kashmir/big/7.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/7.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-75LEA%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Kaleidoscope%3A%20Doodhpathri%20Day%20Excursion%20%26%20Scenic%20Stays%0A-%20FLYoBOAT%20Stops%3A%201N%20Srinagar%20Houseboats%7C2N%20Pahalgam%7C2N%20Gulmarg%7C2N%20Srinagar%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B923160%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
  },
  {
    id: "TS0170-QZXRP",
    name: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24,960",
    slug: "kashmir-kaleidoscope-8-days-of-enchanting-valleys-at-24960",
    price: 24960,
    duration: "7 Nights / 8 Days",
    location: "Kashmir",
    inclusions: ["1N Srinagar", "2N Pahalgam", "2N Gulmarg", "1N Sonmarg"],
    description: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24,960",
    longDescription: "Kashmir Kaleidoscope: 8 Days of Enchanting Valleys at ₹24,960. Itinerary: 1N Srinagar|2N Pahalgam|2N Gulmarg|1N Sonmarg.",
    image: "https://www.travsie.com/destination/kashmir/big/8.jpg",
    gallery: ["https://www.travsie.com/destination/kashmir/big/8.jpg"],
    featured: false,
    rating: 0,
    reviewCount: 0,
    whatsappLink: `https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-QZXRP%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Kaleidoscope%3A%208%20Days%20of%20Enchanting%20Valleys%20at%20%E2%82%B924%2C960%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Srinagar%7C2N%20Pahalgam%7C2N%20Gulmarg%7C1N%20Sonmarg%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B924960%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Name%3A%20%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29,`
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