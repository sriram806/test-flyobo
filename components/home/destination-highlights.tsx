import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const destinations = [
  {
    name: "Goa",
    image: "https://www.travsie.com/destination/goa/big/1.jpg",
    description: "Goa is a beautiful beach destination in western India."
  },
  {
    name: "Kerala",
    image: "https://www.travsie.com/destination/kerala/big/1.jpg",
    description: "Kerala is a stunning state known for backwaters and beaches."
  },
  {
    name: "North East India",
    image: "https://www.travsie.com/destination/north_east/big/2.jpg",
    description: "North East India boasts stunning landscapes and diverse tribal culture."
  },
  {
    name: "Kashmir",
    image: "https://www.travsie.com/destination/kashmir/big/2.jpg",
    description: "Kashmir is a breathtakingly beautiful paradise with snow-capped mountains."
  }
];

export function DestinationHighlights() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          {/* Gradient Heading with Glow */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-600 to-sky-900 animate-fade-in drop-shadow-md">
            ✨ Featured Travel Packages ✨
          </h2>

          {/* Decorative Gradient Underline */}
          <div className="flex justify-center">
            <span className="h-1 w-28 bg-gradient-to-r from-sky-300 to-sky-600 rounded-full shadow-md"></span>
          </div>

          {/* Subheading Paragraph */}
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide animate-fade-in delay-200">
            Embark on unforgettable journeys with our handpicked travel experiences, curated for thrill-seekers, culture lovers, and peace finders alike.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              href={`/packages?location=${destination.name}`}
              className="group block"
            >
              <Card className="overflow-hidden h-full transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-60">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-sm text-gray-200">{destination.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}