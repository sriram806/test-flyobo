"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, MapPin, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { travelPackages, TravelPackage } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

// Skeleton Card Component
const PackageCardSkeleton = () => (
  <Card className="overflow-hidden border border-gray-100 dark:border-gray-700">
    <div className="relative h-48 bg-gray-200 dark:bg-gray-700 animate-pulse" />
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    </CardHeader>
    <CardContent className="pb-4">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex justify-end pt-0">
      <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </CardFooter>
  </Card>
);

export function FeaturedPackages() {
  const [featuredPackages, setFeaturedPackages] = useState<TravelPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const featured = travelPackages.filter(pkg => pkg.featured);
      setFeaturedPackages(featured);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-600 to-sky-900 animate-fade-in drop-shadow-md">
            ✨ Featured Travel Packages ✨
          </h2>
          <div className="flex justify-center">
            <span className="h-1 w-28 bg-gradient-to-r from-sky-300 to-sky-600 rounded-full shadow-md" />
          </div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
            Discover our most loved adventures and curated escapes, perfect for every type of traveler.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <PackageCardSkeleton key={index} />
            ))
          ) : (
            featuredPackages.map((pkg) => {
              const title = pkg.name.replace(/^"+|"+$/g, "");
              const subtitle = (pkg.Titleref.split("-")[1]?.trim() || pkg.Titleref).replace(/^"+|"+$/g, "");
              const actualPrice = Number(pkg.Flyoboprice).toLocaleString();
              const discountedPrice = Number(
                typeof pkg.price === "string"
                  ? parseFloat(pkg.price.replace(/[^0-9.-]+/g, ""))
                  : pkg.price
              ).toLocaleString();

              return (
                <Card
                  key={pkg.id}
                  className="group overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={title || "Package image"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center shadow-md">
                      <Calendar className="h-4 w-4 text-sky-600 dark:text-sky-400 mr-1" />
                      <span>{pkg.Packagevalidity}</span>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <h3
                      className="text-lg font-semibold group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug overflow-hidden break-words"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-sky-600 dark:text-sky-400" />
                      <span className="text-sm">{pkg.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                      <Clock className="h-4 w-4 mr-2 text-sky-600 dark:text-sky-400" />
                      <span className="text-sm font-medium">{subtitle}</span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Actual Price:</span>
                          <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            ₹{actualPrice}
                          </span>
                        </div>
                        {pkg.discount && (
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full text-xs font-medium">
                            {pkg.discount} OFF
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center pt-0">
                    <p className="text-lg font-semibold text-sky-600 dark:text-sky-400">
                      ₹{discountedPrice}
                    </p>
                    <Button
                      asChild
                      size="sm"
                      className="gap-2 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600"
                    >
                      <Link href={`/packages/${pkg.slug}`} aria-label={`View details of ${title}`}>
                        View Details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })
          )}
        </div>

        {/* Footer Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 transition-transform duration-200 hover:scale-105"
          >
            <Link href="/packages" aria-label="View all travel packages">
              View All Packages <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

  );
}