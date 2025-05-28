"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ArrowRight, Star, MapPin, Clock, Search, FilterX, ChevronLeft, ChevronRight } from 'lucide-react';
import { travelPackages, TravelPackage } from '@/lib/data';
import { CalendarIcon } from 'lucide-react';

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
    <CardFooter className="flex justify-between items-center pt-0">
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
      </div>
      <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </CardFooter>
  </Card>
);

export default function PackagesPage() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get('location');
  const searchQuery = searchParams.get('search');

  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<TravelPackage[]>([]);
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');
  const [filters, setFilters] = useState({
    location: locationParam || '',
    priceRange: [0, 50000],
    duration: '',
    sortBy: 'recommended'
  });
  const [isLoading, setIsLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 12; // Number of packages to show per page

  useEffect(() => {
    // Simulate loading delay
    setIsLoading(true);
    setTimeout(() => {
      setPackages(travelPackages);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (locationParam) {
      setFilters(prev => ({ ...prev, location: locationParam }));
    }
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [locationParam, searchQuery]);

  useEffect(() => {
    applyFilters();
  }, [packages, filters, searchTerm]);

  const applyFilters = () => {
    let result = [...packages];

    // Apply search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(pkg =>
        pkg.name.toLowerCase().includes(search) ||
        pkg.description.toLowerCase().includes(search) ||
        pkg.location.toLowerCase().includes(search)
      );
    }

    // Apply location filter
    if (filters.location && filters.location !== 'all-destinations') {
      result = result.filter(pkg => pkg.location === filters.location);
    }

    // Apply price range filter
    result = result.filter(pkg =>
      pkg.price >= filters.priceRange[0] && pkg.price <= filters.priceRange[1]
    );

    // Apply duration filter
    if (filters.duration) {
      result = result.filter(pkg => {
        try {
          // Handle different duration formats
          const durationStr = pkg.duration.toLowerCase();
          let days = 0;

          // Try to extract days from different formats
          if (durationStr.includes('day')) {
            // Format: "X Days" or "X Days/Nights"
            const match = durationStr.match(/(\d+)\s*days?/i);
            if (match) {
              days = parseInt(match[1]);
            }
          } else if (durationStr.includes('night')) {
            // Format: "X Nights"
            const match = durationStr.match(/(\d+)\s*nights?/i);
            if (match) {
              days = parseInt(match[1]) + 1; // Nights + 1 for days
            }
          }

          // Apply duration filter
          if (filters.duration === '1-3') return days <= 3;
          if (filters.duration === '4-6') return days >= 4 && days <= 6;
          if (filters.duration === '7-10') return days >= 7 && days <= 10;
          if (filters.duration === '10+') return days > 10;
          return true;
        } catch (error) {
          console.error('Error parsing duration:', error);
          return true; // Include the package if duration parsing fails
        }
      });
    }

    // Apply sorting
    if (filters.sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredPackages(result);
  };

  const resetFilters = () => {
    setFilters({
      location: '',
      priceRange: [0, 50000],
      duration: '',
      sortBy: 'recommended'
    });
    setSearchTerm('');
  };

  // Calculate pagination
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = filteredPackages.slice(indexOfFirstPackage, indexOfLastPackage);
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the packages section
    window.scrollTo({
      top: document.getElementById('packages-section')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchTerm]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/travel-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Discover Your Perfect Journey
          </h1>
          <p className="max-w-2xl text-lg text-white/90 leading-relaxed">
            Explore our handpicked selection of travel packages across India.
            From serene beaches to majestic mountains, find your dream destination.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24 border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Refine Your Search
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                >
                  <FilterX className="h-4 w-4 mr-1" />
                  Reset
                </Button>
              </div>

              <div className="space-y-8">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                    Search Packages
                  </label>
                  <div className="relative group">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                    <Input
                      type="text"
                      placeholder="Search destinations..."
                      className="pl-10 border-gray-200 dark:border-gray-700 focus:border-primary transition-colors"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                    Destination
                  </label>
                  <Select
                    value={filters.location}
                    onValueChange={(value) => setFilters({ ...filters, location: value })}
                  >
                    <SelectTrigger className="border-gray-200 dark:border-gray-700">
                      <SelectValue placeholder="All destinations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-destinations">All destinations</SelectItem>
                      <SelectItem value="Goa">Goa</SelectItem>
                      <SelectItem value="Kerala">Kerala</SelectItem>
                      <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                      <SelectItem value="Andaman">Andaman</SelectItem>
                      <SelectItem value="Delhi-Agra-Jaipur">Golden Triangle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Price Range
                    </label>
                    <span className="text-sm text-primary font-medium">
                      ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    defaultValue={[0, 50000]}
                    max={50000}
                    step={1000}
                    value={filters.priceRange}
                    onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                    className="py-4"
                  />
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                    Duration
                  </label>
                  <Select
                    value={filters.duration}
                    onValueChange={(value) => setFilters({ ...filters, duration: value })}
                  >
                    <SelectTrigger className="border-gray-200 dark:border-gray-700">
                      <SelectValue placeholder="Any duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any-duration">Any duration</SelectItem>
                      <SelectItem value="1-3">1-3 Days</SelectItem>
                      <SelectItem value="4-6">4-6 Days</SelectItem>
                      <SelectItem value="7-10">7-10 Days</SelectItem>
                      <SelectItem value="10+">10+ Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                    Sort By
                  </label>
                  <Select
                    value={filters.sortBy}
                    onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                  >
                    <SelectTrigger className="border-gray-200 dark:border-gray-700">
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Package Listings */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {isLoading ? (
                      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    ) : (
                      `${filteredPackages.length} Packages Found`
                    )}
                  </h2>
                  {(searchTerm || filters.location || filters.duration || filters.priceRange[0] > 0 || filters.priceRange[1] < 50000) && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Showing filtered results
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
                  <Select
                    value={filters.sortBy}
                    onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                  >
                    <SelectTrigger className="w-[180px] border-gray-200 dark:border-gray-700">
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <PackageCardSkeleton key={index} />
                ))}
              </div>
            ) : filteredPackages.length > 0 ? (
              <>
                <div id="packages-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPackages.map((pkg) => (
                    <Card key={pkg.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700 group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{pkg.rating}</span>
                        </div>
                      </div>

                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">{pkg.name}</h3>
                          <p className="text-lg font-bold text-primary">₹{pkg.price.toLocaleString()}</p>
                        </div>
                      </CardHeader>

                      <CardContent className="pb-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{pkg.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{pkg.duration}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 line-clamp-2 text-sm">{pkg.description}</p>
                      </CardContent>

                      <CardFooter className="flex justify-between items-center pt-0">
                        <div className="flex flex-wrap gap-1">
                          {pkg.inclusions.slice(0, 2).map((inclusion, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
                            >
                              {inclusion}
                            </span>
                          ))}
                          {pkg.inclusions.length > 2 && (
                            <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
                              +{pkg.inclusions.length - 2} more
                            </span>
                          )}
                        </div>
                        <Button asChild variant="ghost" className="text-primary hover:text-primary/80 p-0 group">
                          <Link href={`/packages/${pkg.slug}`} className="flex items-center">
                            View Details
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 space-y-6">
                    {/* Results Summary */}
                    <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Showing {indexOfFirstPackage + 1}-{Math.min(indexOfLastPackage, filteredPackages.length)} of {filteredPackages.length} packages
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center gap-1">
                          {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;
                            // Show first page, last page, current page, and pages around current page
                            if (
                              pageNumber === 1 ||
                              pageNumber === totalPages ||
                              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                            ) {
                              return (
                                <Button
                                  key={pageNumber}
                                  variant={currentPage === pageNumber ? "default" : "outline"}
                                  onClick={() => handlePageChange(pageNumber)}
                                  className={`rounded-full min-w-[40px] h-10 transition-all ${currentPage === pageNumber
                                      ? "bg-primary text-white hover:bg-primary/90"
                                      : "hover:bg-primary/10 hover:text-primary"
                                    }`}
                                >
                                  {pageNumber}
                                </Button>
                              );
                            } else if (
                              pageNumber === currentPage - 2 ||
                              pageNumber === currentPage + 2
                            ) {
                              return (
                                <span
                                  key={pageNumber}
                                  className="px-2 text-gray-500 dark:text-gray-400"
                                >
                                  ...
                                </span>
                              );
                            }
                            return null;
                          })}
                        </div>

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center border border-gray-100 dark:border-gray-700">
                <div className="mb-6 text-gray-400">
                  <Search className="h-16 w-16 mx-auto animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  No packages found
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
                  We couldn't find any packages matching your criteria. Try adjusting your filters or search terms to discover amazing destinations.
                </p>
                <Button
                  onClick={resetFilters}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition-colors"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}