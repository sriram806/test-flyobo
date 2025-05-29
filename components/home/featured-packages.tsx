"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { travelPackages, TravelPackage } from '@/lib/data';

export function FeaturedPackages() {
  const [featuredPackages, setFeaturedPackages] = useState<TravelPackage[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const featured = travelPackages.filter(pkg => pkg.featured);
    setFeaturedPackages(featured);
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Travel Packages</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our most popular travel packages, handpicked for unforgettable experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>{pkg.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p className="text-lg font-bold text-primary">₹{pkg.price.toLocaleString()}</p>
                </div>
              </CardHeader>
              
              <CardContent className="pb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pkg.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{pkg.description}</p>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="flex flex-wrap gap-1">
                  {pkg.inclusions.length > 2 && (
                    <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                      +{pkg.inclusions.length - 2} more
                    </span>
                  )}
                </div>
                <Button asChild variant="ghost" className="text-primary p-0">
                  <Link href={`/packages/${pkg.slug}`}>
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/packages">
              View All Packages <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}