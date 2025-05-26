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
    id: "1",
    name: "Kashmir Bliss: 4 Nights of Pahalgam & Srinagar Serenity",
    slug: "kashmir-bliss",
    price: 11500,
    duration: "4 Nights / 5 Days",
    location: "Kashmir",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmation"],
    description: "A serene 4-night getaway exploring Pahalgam and Srinagar in Kashmir.",
    longDescription: "Discover the breathtaking beauty of Kashmir with our Kashmir Bliss package. Spend 1 night in the scenic valleys of Pahalgam and 3 nights in the tranquil city of Srinagar. This trip includes comfortable accommodation, daily breakfast, and guided tours covering picturesque landscapes, houseboats, Mughal gardens, and vibrant local markets. Enjoy a perfect mix of relaxation, cultural experiences, and nature’s splendor, all at an affordable price.",
    image: "https://www.travsie.com/destination/kashmir/big/2.jpg",
    gallery: [
      "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg",  // Kashmir valley landscape
      "https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydGwXfw7i-m1UF8ihleXp31_pZ3A4uVnajg&s",    // Pahalgam river and hills
      "https://images.pexels.com/photos/2362306/pexels-photo-2362306.jpeg"   // Pahalgam forest and hills
    ],
    featured: true,
    rating: 5,
    reviewCount: 0,
    whatsappLink: "https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-1RTOJ%0A-%20FLYoBOAT%20Name%3A%20%22Kashmir%20Bliss%3A%204%20Nights%20of%20Pahalgam%20%26%20Srinagar%20Serenity%20at%20%E2%82%B911550%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Pahalgam%7C3N%20Srinagar%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B911550%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29"
  },
  {
    id: "2",
    name: "Enchanting Kashmir: 7 Days of Serenity & Splendor",
    slug: "enchanting-kashmir",
    price: 17500,
    duration: "6 Nights / 7 Days",
    location: "Kashmir",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmation"],
    description: "Enchanting 7-day journey through the serene beauty of Kashmir.",
    longDescription: "Discover the breathtaking landscapes of Kashmir with our 7-day package featuring stays at traditional houseboats in Srinagar, scenic visits to Pahalgam, and ample time to soak in Srinagar's charm. Experience comfortable accommodations, authentic Kashmiri cuisine, guided tours of pristine lakes, gardens, and valleys, and immerse yourself in the region's rich culture and tranquility. This package offers the perfect balance of adventure, relaxation, and cultural splendor in the heart of the Himalayas.",
    image: "https://www.travsie.com/destination/kashmir/big/5.jpg",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISxXNBHQhLvK2mE1f0Bd_AtTeb7ciYkPflQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxH1oDUBayDG1PqrLm85NT5FOtsvdmGOgwg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKLMxuxpfm5Uo1O8shkVjyc9GftJSQBD1fA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9IZxYCXRgEY6WbhXjC0MGU4k3CoNqWeUUA&s"
    ],
    featured: true,
    rating: 5,
    reviewCount: 5,
    whatsappLink: "https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Kashmir%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-BV4Z0%0A-%20FLYoBOAT%20Name%3A%20%22Enchanting%20Kashmir%3A%207%20Days%20of%20Serenity%20%26%20Splendor%20at%20%E2%82%B917%2C500%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Srinagar%20Houseboats%7C1N%20Pahalgam%7C4N%20Srinagar%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Jun%202025%0A-%20Boarding%20Point%3A%20Srinagar%20Airport-SXR%0A-%20Total%20Fare%3A%20%E2%82%B917500%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29"
  },
  {
    id: "3",
    name: "Kerala Kaleidoscope: 5 Nights of Nature & Serenity",
    slug: "kerela-kaleidoscope",
    price: 29670,
    duration: "5 Nights / 6 Days",
    location: "Kerala",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "Scenic 6-day escape through Kerala's lush hills, wildlife, and backwaters.",
    longDescription: "Embark on a vibrant 6-day journey through 'God's Own Country' with our Kerala Kaleidoscope package. Begin in the colonial charm of Cochin, then relax in the cool tea-scented hills of Munnar. Explore the wildlife and spice plantations of Thekkady before unwinding with a serene houseboat stay in Alleppey’s tranquil backwaters. This all-inclusive tour offers deluxe stays, daily breakfast, private transfers, and guided sightseeing—perfect for travelers seeking nature, culture, and rejuvenation in one unforgettable trip.",
    image: "https://www.travsie.com/destination/kerala/big/2.jpg",
    gallery: [
      "https://images.pexels.com/photos/17870119/pexels-photo-17870119/free-photo-of-wooden-boats-on-shore-with-river-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45xDNv38mD3e0SM7meZOCHSOR9-unbkPRCw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqk8MWjCI_1A1wWwC6BaSdV5SvFj9lFPxkA&s"
    ],
    featured: true,
    rating: 5,
    reviewCount: 5,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Kerala%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+6694-6213%0A-+FLYoBOAT+Name%3A+%22Kerala+Kaleidoscope%3A+5+Nights+of+Nature+%26+Serenity+at+%E2%82%B929%2C670%22%0A-+FLYoBOAT+Stops%3A+1N+Cochin%7C2N+Munnar%7C1N+Thekkady%7C1N+Alleppey%0A-+Reservation+-+Valid+Till%3A+30+Sep+2025%0A-+Boarding+Point%3A+Cochin+Intl+Airport+-+COK%0A-+Total+Fare%3A+%E2%82%B929670%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "4",
    name: "Kerala Serenity: Houseboat Bliss & Kanyakumari Charm",
    slug: "kerala-serenity",
    price: 45430,
    duration: "6 Nights / 7 Days",
    location: "Kerala",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "7 days of Kerala’s finest – misty hills, wildlife, houseboats, and coastal bliss.",
    longDescription: "Discover the best of Kerala with our 'Kerala Serenity' package – a 7-day exploration of nature, relaxation, and coastal charm. Start your journey in the lush tea gardens of Munnar, followed by wildlife adventures and spice trails in Thekkady. Enjoy a tranquil stay on a traditional houseboat in Alleppey’s backwaters and unwind on the sun-kissed beaches of Kovalam. With handpicked accommodations, private transport, daily breakfast, and guided sightseeing, this tour promises a perfect mix of serenity, culture, and scenic beauty from the hills to the sea.",
    image: "https://www.travsie.com/destination/kerala/big/5.jpg",
    gallery: [
      "https://images.pexels.com/photos/17870119/pexels-photo-17870119/free-photo-of-wooden-boats-on-shore-with-river-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45xDNv38mD3e0SM7meZOCHSOR9-unbkPRCw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26gnRQilT246kZae3u2AFcuSo27YITrDGZw&s"
    ],
    featured: false,
    rating: 4.6,
    reviewCount: 0,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Kerala%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+6713-6504%0A-+FLYoBOAT+Name%3A+%22Kerala+Serenity%3A+Houseboat+Bliss+%26+Kanyakumari+Charm+-+7+Days+of+Scenic+Splendor+at+%E2%82%B945430%22%0A-+FLYoBOAT+Stops%3A+2N+Munnar%7C1N+Thekkady%7C1N+Alleppey%7C2N+Kovalam%0A-+Reservation+-+Valid+Till%3A+30+Sep+2025%0A-+Boarding+Point%3A+Cochin+Intl+Airport+-+COK%0A-+Total+Fare%3A+%E2%82%B945430%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "5",
    name: "Kerala & Kanyakumari Delight",
    slug: "kerela-kanyakumari",
    price: 15990,
    duration: "4 Nights / 5 Days",
    location: "Kerala",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "A short and sweet southern escape through Cochin, backwaters, and beachside bliss.",
    longDescription: "Experience the best of coastal Kerala and the southern tip of India with our 4-day ‘Kerala & Kanyakumari Delight’ tour. Begin your journey in the vibrant city of Cochin, rich in colonial charm and culture. Cruise the serene backwaters of Alleppey on a traditional houseboat and unwind in the tranquil beauty of Kovalam’s sandy beaches. This compact getaway offers a perfect mix of heritage, nature, and relaxation – ideal for a quick rejuvenating break in God’s Own Country. Includes accommodation, private transfers, breakfast, and guided experiences.",
    image: "https://www.travsie.com/destination/kerala/big/3.jpg",
    gallery: [
      "https://images.pexels.com/photos/17870119/pexels-photo-17870119/free-photo-of-wooden-boats-on-shore-with-river-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45xDNv38mD3e0SM7meZOCHSOR9-unbkPRCw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26gnRQilT246kZae3u2AFcuSo27YITrDGZw&s"
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 78,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Kerala%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+TS0170-FVY2D%0A-+FLYoBOAT+Name%3A+%22Kerala+%26+Kanyakumari+Delight%3A+4+Days%2C+3+Nights%2C+%E2%82%B915990+%E2%80%93+Cochin%2C+Alleppey+%26+Kovalam+Escape%22%0A-+FLYoBOAT+Stops%3A+1N+Cochin%7C1N+Alleppey%7C2N+Kovalam%0A-+Reservation+-+Valid+Till%3A+31+May+2025%0A-+Boarding+Point%3A+Cochin+Intl+Airport-COK%0A-+Total+Fare%3A+%E2%82%B915990%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "6",
    name: "Kerala Bliss: 3 Nights of Spice & Serenity",
    slug: "Kerala-bliss",
    price: 9400,
    duration: "3 Nights / 4 Days",
    location: "Kerala",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "A serene 3-day escape into Kerala’s spice hills and peaceful backwaters.",
    longDescription: "Unwind with our 3-night Kerala Bliss getaway, offering a refreshing mix of nature, culture, and calm. Spend two nights in Thekkady, surrounded by spice plantations and wildlife, with a chance to explore the Periyar Sanctuary. Then drift into the tranquility of Alleppey with a soothing houseboat cruise through the backwaters. This short and soulful journey is perfect for those seeking a budget-friendly retreat amidst Kerala’s green charm. Includes stays, private transfers, breakfast, and essential local experiences.",
    image: "https://www.travsie.com/destination/kerala/big/9.jpg",
    gallery: [
      "https://images.pexels.com/photos/17870119/pexels-photo-17870119/free-photo-of-wooden-boats-on-shore-with-river-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45xDNv38mD3e0SM7meZOCHSOR9-unbkPRCw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26gnRQilT246kZae3u2AFcuSo27YITrDGZw&s"
    ],
    featured: false,
    rating: 4,
    reviewCount: 5,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Kerala%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+TS0170-KYPH2%0A-+FLYoBOAT+Name%3A+%22Kerala+Bliss%3A+3+Nights+of+Spice+%26+Serenity%0A-+FLYoBOAT+Stops%3A+2N+Thekkady%7C1N+Alleppey%0A-+Reservation+-+Valid+Till%3A+31+May+2025%0A-+Boarding+Point%3A+Cochin+Intl+Airport-COK%0A-+Total+Fare%3A+%E2%82%B99400%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "9",
    name: "Kerala Kaleidoscope: 8 Days of Nature & Culture",
    slug: "kerala-kaleidoscope",
    price: 22500,
    duration: "7 Nights / 8 Days",
    location: "Kerala",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "An 8-day colorful journey through Kerala’s nature, hills, and coastal charm at an unbeatable value.",
    longDescription: "Experience the best of Kerala with our 8-day Kerala Kaleidoscope adventure — a delightful blend of city, hills, wildlife, and beach escapes. Start in vibrant Cochin with its colonial charm, then immerse yourself in the lush tea gardens of Munnar for two nights. Continue to Thekkady to explore spice plantations and the famous Periyar Wildlife Sanctuary. Conclude your trip with two serene nights in the beach town of Kovalam, known for its golden shores and laid-back vibe. This package is ideal for nature and culture lovers looking for a well-balanced holiday at just ₹22,500. Includes accommodation, breakfast, private transfers, and curated local experiences.",
    image: "https://www.travsie.com/destination/kerala/big/4.jpg",
    gallery: [
      "https://images.pexels.com/photos/17870119/pexels-photo-17870119/free-photo-of-wooden-boats-on-shore-with-river-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45xDNv38mD3e0SM7meZOCHSOR9-unbkPRCw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26gnRQilT246kZae3u2AFcuSo27YITrDGZw&s"
    ],
    featured: true,
    rating: 4.8,
    reviewCount: 134,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Kerala%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+TS0170-L0TPX%0A-+FLYoBOAT+Name%3A+%22Kerala+Kaleidoscope%3A+8+Days+of+Nature+%26+Culture+at+%E2%82%B922%2C500%22%0A-+FLYoBOAT+Stops%3A+1N+Cochin%7C2N+Munnar%7C1N+Thekkady%7C2N+Kovalam%0A-+Reservation+-+Valid+Till%3A+31+May+2025%0A-+Boarding+Point%3A+Cochin+Intl+Airport-COK%0A-+Total+Fare%3A+%E2%82%B922500%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "10",
    name: "Himalayan Harmony: 2N Bir, 2N Barot, 2N Tirthan – Serenity ",
    slug: "himalayan-harmony",
    price: 27030,
    duration: "6 Nights / 7 Days",
    location: "Himachal Pradesh",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "Discover Himachal’s hidden gems across Bir, Barot, and Tirthan Valleys in a serene 6-day retreat.",
    longDescription: "Unplug from the chaos and soak in the tranquility of Himachal’s untouched havens with our Himalayan Harmony package. Begin your escape in Bir, the paragliding capital of India, where Tibetan monasteries and peaceful mountain vistas await. Continue to the secluded Barot Valley, a perfect hideout surrounded by pine forests and trout-filled rivers. Finally, rejuvenate in the offbeat paradise of Tirthan Valley, nestled by the Great Himalayan National Park. This 6-day, 3-destination itinerary is ideal for peace-seekers and mountain lovers alike. At just ₹27,030, it includes cozy stays, breakfast, transfers, and handpicked local experiences.",
    image: "https://www.travsie.com/destination/himachal/big/5.jpg",
    gallery: [
      "https://www.travsie.com/destination/himachal/big/1.jpg",
      "https://www.travsie.com/destination/himachal/big/2.jpg",
      "https://www.travsie.com/destination/himachal/big/3.jpg",
      "https://www.travsie.com/destination/himachal/big/4.jpg",

    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Himachal%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+6559-5948%0A-+FLYoBOAT+Name%3A+%22Himalayan+Harmony%3A+2N+Bir%2C+2N+Barot%2C+2N+Tirthan+%E2%80%93+Serenity+Awaits+at+%E2%82%B927%2C030%22%0A-+FLYoBOAT+Stops%3A+2N+Bir%7C2N+Barot+Valley%7C2N+Tirthan+Valley%0A-+Reservation+-+Valid+Till%3A+31+Aug+2025%0A-+Boarding+Point%3A+Chandigarh+Intl+Airport+-+IXC%0A-+Total+Fare%3A+%E2%82%B927030%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "11",
    name: "Explore Himachal: 3 Nights in Manali Magic",
    slug: "himalayan-explore",
    price: 10950,
    duration: "3 Nights / 4 Days",
    location: "Himachal Pradesh",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "Experience the charm of Manali with 3 nights of adventure, culture, and mountain serenity.",
    longDescription: "Step into the heart of Himachal with our 3-night Manali Magic getaway! From snow-capped peaks to bustling mall roads, this itinerary offers the perfect blend of nature and local flavor. Discover iconic spots like Solang Valley, Hadimba Temple, and Old Manali, while indulging in local cafes and cozy hillside stays. Whether you're chasing snow or just some peace in the pines, this all-in escape at ₹10,950 covers stays, transfers, and signature experiences. Perfect for a quick mountain recharge!",
    image: "https://www.travsie.com/destination/himachal/big/2.jpg",
    gallery: [
      "https://www.travsie.com/destination/himachal/big/1.jpg",
      "https://www.travsie.com/destination/himachal/big/5.jpg",
      "https://www.travsie.com/destination/himachal/big/3.jpg",
      "https://www.travsie.com/destination/himachal/big/4.jpg",

    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Himachal%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+TS0170-Q7WZ2%0A-+FLYoBOAT+Name%3A+%22Explore+Himachal%3A+3+Nights+in+Manali+Magic+at+%E2%82%B910950%22%0A-+FLYoBOAT+Stops%3A+3N+Manali%0A-+Reservation+-+Valid+Till%3A+31+Mar+2026%0A-+Boarding+Point%3A+Chandigarh+Intl+Airport-IXC%0A-+Total+Fare%3A+%E2%82%B910950%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "12",
    name: "Himachal Harmony: 4 Nights of Shimla & Manali Magic",
    slug: "himalayan-harmony",
    price: 13700,
    duration: "4 Nights / 5 Days",
    location: "Himachal Pradesh",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "Unwind in the hills with 2 nights each in Shimla and Manali — a perfect Himachal duo getaway.",
    longDescription: "Escape to the hills with our Himachal Harmony package — 4 magical nights split between the colonial charm of Shimla and the scenic wonders of Manali. Begin your journey with the crisp air and historic vibes of Shimla, exploring Mall Road, Jakhoo Temple, and Ridge. Then head to Manali for breathtaking views, adventure sports in Solang Valley, and serene moments by the Beas River. This all-in-one hill holiday at just ₹13,700 includes stays, transfers, and curated local experiences — ideal for couples, families, or first-timers to Himachal!",
    image: "https://www.travsie.com/destination/himachal/big/9.jpg",
    gallery: [
      "https://www.travsie.com/destination/himachal/big/6.jpg",
      "https://www.travsie.com/destination/himachal/big/7.jpg",
      "https://www.travsie.com/destination/himachal/big/8.jpg",
      "https://www.travsie.com/destination/himachal/big/1.jpg",

    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98,
    whatsappLink: "https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Himachal%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-QAR6N%0A-%20FLYoBOAT%20Name%3A%20%22Himachal%20Harmony%3A%204%20Nights%20of%20Shimla%20%26%20Manali%20Magic%20at%20%E2%82%B913%2C700%22%0A-%20FLYoBOAT%20Stops%3A%202N%20Shimla%7C2N%20Manali%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Sep%202025%0A-%20Boarding%20Point%3A%20Chandigarh%20Intl%20Airport-IXC%0A-%20Total%20Fare%3A%20%E2%82%B913700%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29"
  },
  {
    id: "14",
    name: "Himachal Harmony: 7 Days of Shimla, Manali & Kasol Bliss",
    slug: "himalayan-harmony",
    price: 20570,
    duration: "6 Nights / 7 Days",
    location: "Himachal Pradesh",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "Discover Himachal's finest — 7 days across Shimla, Manali, and Kasol for the perfect mountain escape.",
    longDescription: "Embrace the beauty of Himachal with this 7-day journey through its most loved destinations — Shimla, Manali, and Kasol. Begin with 2 serene nights in Shimla exploring colonial landmarks and mountain views. Continue to Manali for 3 action-packed nights with Solang Valley thrills, Hadimba Temple calm, and café-hopping by the riverside. Conclude with 1 soul-refreshing night in Kasol, nestled in the Parvati Valley, where tranquility and vibes meet. Priced at just ₹20,570, this FLYOBOAT includes scenic stays, transfers, and curated activities — perfect for adventurers, couples, or those seeking a peaceful retreat in the hills.",
    image: "https://www.travsie.com/destination/himachal/big/11.jpg",
    gallery: [
      "https://www.travsie.com/destination/himachal/big/6.jpg",
      "https://www.travsie.com/destination/himachal/big/7.jpg",
      "https://www.travsie.com/destination/himachal/big/8.jpg",
      "https://www.travsie.com/destination/himachal/big/1.jpg",

    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Himachal%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+TS0170-HUB4E%0A-+FLYoBOAT+Name%3A+%22Himachal+Harmony%3A+7+Days+of+Shimla%2C+Manali+%26+Kasol+Bliss+at+%E2%82%B920570%22%0A-+FLYoBOAT+Stops%3A+2N+Shimla%7C3N+Manali%7C1N+Kasol%0A-+Reservation+-+Valid+Till%3A+30+Jun+2025%0A-+Boarding+Point%3A+%0A-+Total+Fare%3A+%E2%82%B920570%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "15",
    name: "Explore Himachal: 2 Nights in Dalhousie",
    slug: "himalayan-explore",
    price: 9400,
    duration: "2 Nights / 3 Days",
    location: "Himachal Pradesh",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "Unwind in the hills with 2 serene nights in Dalhousie — Himachal’s peaceful gem at just ₹9400!",
    longDescription: "Step into the quiet charm of Himachal with a 2-night getaway in Dalhousie — a town where pine-covered valleys, colonial architecture, and Himalayan views create the perfect escape. Whether you're strolling down Mall Road, capturing panoramic views from Dainkund Peak, or just relaxing at your hilltop stay, this FLYOBOAT promises serenity and scenic vibes. Starting from Amritsar Railway Station (ASR), this ₹9400 experience covers cozy accommodation and all transfers. Ideal for a quick romantic escape, solo break, or peaceful family time in the mountains.",
    image: "https://www.travsie.com/destination/himachal/big/10.jpg",
    gallery: [
      "https://www.travsie.com/destination/himachal/big/6.jpg",
      "https://www.travsie.com/destination/himachal/big/7.jpg",
      "https://www.travsie.com/destination/himachal/big/8.jpg",
      "https://www.travsie.com/destination/himachal/big/1.jpg",

    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Himachal%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+TS0170-T194P%0A-+FLYoBOAT+Name%3A+%22Explore+Himachal%3A+2+Nights+in+Dalhousie+%E2%80%93+Adventure+Awaits+at+%E2%82%B99400%21%22%0A-+FLYoBOAT+Stops%3A+2N+Dalhousie%0A-+Reservation+-+Valid+Till%3A+30+Sep+2025%0A-+Boarding+Point%3A+Amritsar+Railway+Station-ASR%0A-+Total+Fare%3A+%E2%82%B99400%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  //andaman
  {
    id: "16",
    name: "Andaman Escape: 3 Nights of Tropical Bliss in Port Blair",
    slug: "andaman-escape",
    price: 20760,
    duration: "3 Nights / 4 Days",
    location: "Andaman",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "3 dreamy nights in tropical Port Blair — beaches, sunsets, and history await at just ₹20,760!",
    longDescription: "Set sail on a tropical adventure with 3 unforgettable nights in Port Blair, the heart of the Andaman Islands. Stroll along pristine beaches, dive into the history at the Cellular Jail, and witness mesmerizing sunsets by the sea. This FLYOBOAT escape includes accommodation, local sightseeing, and airport transfers from Veer Savarkar International Airport (IXZ). Whether you're a beach lover, history buff, or just looking to unwind, this ₹20,760 package offers the perfect balance of relaxation and exploration in a paradise setting.",
    image: "https://www.travsie.com/destination/andaman/big/1.jpg",
    gallery: [
      "https://www.travsie.com/destination/andaman/big/2.jpg",
      "https://www.travsie.com/destination/andaman/big/3.jpg",
      "https://www.travsie.com/destination/andaman/big/4.jpg",
      "https://www.travsie.com/destination/andaman/big/5.jpg",

    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Andaman%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+2191-4322%0A-+FLYoBOAT+Name%3A+%22Andaman+Escape%3A+3+Nights+of+Tropical+Bliss+in+Port+Blair+at+%E2%82%B920%2C760%22%0A-+FLYoBOAT+Stops%3A+3N+Port+Blair%0A-+Reservation+-+Valid+Till%3A+30+Sep+2025%0A-+Boarding+Point%3A+Veer+Savarkar+International+Airport+-+Port+Blair+-+IXZ%0A-+Total+Fare%3A+%E2%82%B920760%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "17",
    name: "Andaman Escape: Chota Break Bliss – 3 Days, 2 Islands",
    slug: "andaman-escape",
    price: 22560,
    duration: "3 Nights / 4 Days",
    location: "Andaman",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    longDescription: "Craving a short yet stunning escape? The 'Chota Break Bliss' package offers the best of Andaman in just 3 days! Spend your first and last nights in the historic and vibrant Port Blair, and enjoy a serene day on the world-renowned Havelock Island. Witness the turquoise waters, relax on white sandy beaches, and savor the laid-back island vibes. This FLYOBOAT experience includes inter-island transfers, stays, and airport pickup from Veer Savarkar International Airport (IXZ), all for just ₹22,560. Perfect for those who want a quick recharge in paradise!",
    description: "A quick tropical getaway! Explore Port Blair & Havelock Island in 3 days of beachy bliss at just ₹22,560.",
    image: "https://www.travsie.com/destination/andaman/big/5.jpg",
    gallery: [
      "https://www.travsie.com/destination/andaman/big/2.jpg",
      "https://www.travsie.com/destination/andaman/big/3.jpg",
      "https://www.travsie.com/destination/andaman/big/4.jpg",
      "https://www.travsie.com/destination/andaman/big/6.jpg",

    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Andaman%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+1646-4395%0A-+FLYoBOAT+Name%3A+Andaman+Escape%3A+Chota+Break+Bliss+%E2%80%93+3+Days%2C+2+Islands%2C+%E2%82%B922560%0A-+FLYoBOAT+Stops%3A+1N+Port+Blair%7C1N+Havelock+Island%7C1N+Port+Blair%0A-+Reservation+-+Valid+Till%3A+30+Sep+2025%0A-+Boarding+Point%3A+Veer+Savarkar+International+Airport+-+Port+Blair+-+IXZ%0A-+Total+Fare%3A+%E2%82%B922560%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "18",
    name: "Andaman Escape: 5 Days of Island Bliss",
    slug: "andaman-escape",
    price: 25800,
    duration: "4 Nights / 5 Days",
    location: "Andaman",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "Five days in island paradise! Explore Port Blair and unwind on Havelock’s beaches for just ₹25,800.",
    longDescription: "Immerse yourself in the serene beauty of the Andaman Islands with this 5-day escape. Begin and end your journey in historic Port Blair, where the sea breeze meets colonial charm. Spend two dreamy nights on the white sands of Havelock Island, famous for Radhanagar Beach and crystal-clear waters. This FLYOBOAT itinerary includes airport transfers from Veer Savarkar International Airport (IXZ), ferry rides, and curated stays across two enchanting islands. At ₹25,800, it’s the perfect blend of relaxation, exploration, and tropical delight!",
    image: "https://www.travsie.com/destination/andaman/big/7.jpg",
    gallery: [
      "https://www.travsie.com/destination/andaman/big/12.jpg",
      "https://www.travsie.com/destination/andaman/big/3.jpg",
      "https://www.travsie.com/destination/andaman/big/6.jpg",
      "https://www.travsie.com/destination/andaman/big/5.jpg",

    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98,
    whatsappLink: "https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Andaman%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%202513-4272%0A-%20FLYoBOAT%20Name%3A%20Andaman%20Escape%3A%205%20Days%20of%20Island%20Bliss%20at%20%E2%82%B925800%0A-%20FLYoBOAT%20Stops%3A%201N%20Port%20Blair%7C2N%20Havelock%20Island%7C1N%20Port%20Blair%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Sep%202025%0A-%20Boarding%20Point%3A%20Veer%20Savarkar%20International%20Airport%20-%20Port%20Blair%20-%20IXZ%0A-%20Total%20Fare%3A%20%E2%82%B925800%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29"
  },
  {
    id: "19",
    name: "Andaman Escape: 4 Nights, 5 Days of Island Bliss",
    slug: "andaman-escape",
    price: 21120,
    duration: "4 Nights / 5 Days",
    location: "Andaman",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "Island-hop across Port Blair, Havelock, and Neil in 5 days of tropical magic for just ₹21,120!",
    longDescription: "Experience the ultimate Andaman getaway with this 5-day FLYOBOAT adventure across three stunning islands. Start your journey in Port Blair, the gateway to Andaman’s charm. Cruise to the turquoise shores of Havelock Island for unforgettable beach moments, followed by a serene escape to the laid-back vibes of Neil Island. End your trip back in Port Blair with memories of sea, sun, and smiles. This package includes airport transfers via Veer Savarkar International Airport (IXZ), inter-island ferry rides, and comfortable stays throughout. At just ₹21,120, it’s the perfect balance of adventure and relaxation!",
    image: "https://www.travsie.com/destination/andaman/big/8.jpg",
    gallery: [
      "https://www.travsie.com/destination/andaman/big/11.jpg",
      "https://www.travsie.com/destination/andaman/big/3.jpg",
      "https://www.travsie.com/destination/andaman/big/10.jpg",
      "https://www.travsie.com/destination/andaman/big/5.jpg",

    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98,
    whatsappLink: "https://api.whatsapp.com/send/?phone=919291237999&text=%EF%BF%BD+Let%27s+FLYOBO+Andaman%21%21%0A%0AYou+Queried+For+%3A%0A%0A-+PNR+Number%3A+2593-4265%0A-+FLYoBOAT+Name%3A+%22Andaman+Escape%3A+4+Nights%2C+5+Days+of+Island+Bliss+at+%E2%82%B921%2C120%22%0A-+FLYoBOAT+Stops%3A+1N+Port+Blair%7C1N+Havelock+Island%7C1N+Neil%7C1N+Port+Blair%0A-+Reservation+-+Valid+Till%3A+30+Sep+2025%0A-+Boarding+Point%3A+Veer+Savarkar+International+Airport+-+Port+Blair+-+IXZ%0A-+Total+Fare%3A+%E2%82%B921120%0A-+Charting+Status%3A+WL-RAC+%28Wish-List+Reservation+After+Customer+confirmation%29%EF%BF%BD%0A%0ATo+get+your+FLYOBO+ticket+Reserved%2C+please+share+the+below+details+%3A%0A%0A-+Boarding+Date%3A+DD%2FMM%2FYYYY%0A-+No.+of+Passengers%3A+AA-KK+%28Adults+-+Kids%29&type=phone_number&app_absent=0"
  },
  {
    id: "20",
    name: "Andaman Escape: 6 Days of Island Bliss",
    slug: "andaman-escape",
    price: 11740,
    duration: "4 Nights / 5 Days",
    location: "Andaman",
    inclusions: ["A detailed day-by-day Inclusions will be provided upon booking confirmatio"],
    description: "Discover Andaman’s best with 6 days across Port Blair, Havelock, and Neil – all for just ₹11,740!",
    longDescription: "Embark on a 6-day tropical journey through the breathtaking islands of the Andaman. Begin your adventure in Port Blair, exploring its historical charm and coastal culture. Sail to Havelock Island for two nights of scenic beaches and unforgettable sunsets. Then drift into the tranquil vibes of Neil Island, known for its coral reefs and laid-back beauty. Return to Port Blair for your final night, capturing every last moment of island bliss. This FLYOBOAT package offers seamless inter-island transfers, handpicked stays, and curated experiences—all starting at just ₹11,740. A perfect pick for budget-friendly wanderers craving paradise!",
    image: "https://www.travsie.com/destination/andaman/big/15.jpg",
    gallery: [
      "https://www.travsie.com/destination/andaman/big/12.jpg",
      "https://www.travsie.com/destination/andaman/big/3.jpg",
      "https://www.travsie.com/destination/andaman/big/4.jpg",
      "https://www.travsie.com/destination/andaman/big/5.jpg",

    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98,
    whatsappLink: "https://wa.me/919291237999?text=%F0%9F%9A%86%20Let%27s%20FLYOBO%20Andaman%21%21%0A%0AYou%20Queried%20For%20%3A%0A%0A-%20PNR%20Number%3A%20TS0170-BOPRK%0A-%20FLYoBOAT%20Name%3A%20%22Andaman%20Escape%3A%206%20Days%20of%20Island%20Bliss%20at%20%E2%82%B911740%22%0A-%20FLYoBOAT%20Stops%3A%201N%20Port%20Blair%7C2N%20Havelock%20Island%7C1N%20Neil%7C1N%20Port%20Blair%0A-%20Reservation%20-%20Valid%20Till%3A%2030%20Sep%202025%0A-%20Boarding%20Point%3A%20%0A-%20Total%20Fare%3A%20%E2%82%B911740%0A-%20Charting%20Status%3A%20WL-RAC%20%28Wish-List%20Reservation%20After%20Customer%20confirmation%29%F0%9F%9A%89%0A%0ATo%20get%20your%20FLYOBO%20ticket%20Reserved%2C%20please%20share%20the%20below%20details%20%3A%0A%0A-%20Boarding%20Date%3A%20DD%2FMM%2FYYYY%0A-%20No.%20of%20Passengers%3A%20AA-KK%20%28Adults%20-%20Kids%29"
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 5,
    text: "Our Goa trip was perfectly organized by TravelEase. The hotel was amazing and the sightseeing tours were informative and fun. Will definitely book with them again!"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Bangalore",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5,
    text: "The Kerala backwaters package exceeded our expectations. The houseboat stay was magical and the service was impeccable. Highly recommend TravelEase for their attention to detail."
  },
  {
    id: 3,
    name: "Amit Singh",
    location: "Delhi",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 4,
    text: "Our Rajasthan tour was amazing. The heritage hotels were beautiful and the guide was knowledgeable. Only suggestion would be to include more meals in the package."
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Kolkata",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5,
    text: "Andaman Island Escape was the best vacation we've ever had. The beaches were pristine and the water activities were so much fun. TravelEase took care of everything perfectly."
  }
];

export const faqs = [
  {
    id: 1,
    question: "How do I book a travel package?",
    answer: "You can book a travel package by browsing our packages, selecting the one you're interested in, and filling out the booking form. You'll receive a confirmation email with details about your booking and payment options."
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, net banking, UPI, and bank transfers. For certain packages, we also offer EMI options with selected banks."
  },
  {
    id: 3,
    question: "Can I customize a travel package?",
    answer: "Yes, we offer customization options for all our packages. You can contact our customer service team to discuss your specific requirements and we'll create a tailored package for you."
  },
  {
    id: 4,
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy varies depending on the package and how close to the departure date you cancel. Generally, cancellations made 30+ days before departure receive a 90% refund, 15-29 days before departure receive a 70% refund, and 7-14 days before departure receive a 50% refund. Cancellations made less than 7 days before departure are non-refundable."
  },
  {
    id: 5,
    question: "Are flights included in the package price?",
    answer: "Flight inclusion varies by package. Please check the 'Inclusions' section of each package to see if flights are included. We can also arrange flights separately if needed."
  },
  {
    id: 6,
    question: "Do I need travel insurance?",
    answer: "While travel insurance is not mandatory, we strongly recommend it to protect against unforeseen circumstances. We can suggest suitable travel insurance options based on your trip details."
  }
];