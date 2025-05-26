import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const destinations = [
  {
    name: "Goa",
    image: "https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg",
    description: "Sun-kissed beaches and vibrant nightlife"
  },
  {
    name: "Kerala",
    image: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg",
    description: "Serene backwaters and lush greenery"
  },
  {
    name: "Rajasthan",
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
    description: "Royal palaces and desert adventures"
  },
  {
    name: "Himachal Pradesh",
    image: "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg",
    description: "Breathtaking mountain landscapes"
  }
];

export function DestinationHighlights() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Destinations</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our most popular destinations in India
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