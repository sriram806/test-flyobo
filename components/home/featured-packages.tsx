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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-500 to-sky-900 drop-shadow-sm">
            ✨ Featured Travel Packages ✨
          </h2>
          <div className="relative flex justify-center">
            <span className="w-24 h-1 bg-gradient-to-r from-sky-300 via-sky-600 to-sky-900 rounded-full"></span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed tracking-wide text-lg">
            Discover our most loved adventures and curated escapes, perfect for every type of traveler.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src={pkg.image}
                  alt={pkg.name.replace(/^"+|"+$/g, "")}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center shadow-md">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>{pkg.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-2 px-4 pt-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">{pkg.name.replace(/^"+|"+$/g, "")}</h3>
                  <p className="text-xl font-bold text-primary">₹{pkg.price.toLocaleString()}</p>
                </div>
              </CardHeader>

              <CardContent className="pb-4 px-4 space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">{pkg.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm font-medium tracking-wide bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {(pkg.Titleref.split('-')[1]?.trim() || pkg.Titleref).replace(/^"+|"+$/g, "")}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3 text-sm leading-relaxed">{pkg.description.replace(/^"+|"+$/g, "").replace(/""/g, "")}</p>
              </CardContent>

              <CardFooter className="flex justify-end pt-0 px-4 pb-4">
                <Button asChild size="sm" className="gap-1">
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
              View All Packages <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}