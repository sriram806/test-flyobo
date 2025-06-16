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
import { ArrowRight, Star, MapPin, Clock, Search, FilterX, Filter } from 'lucide-react';
import { travelPackages, TravelPackage } from '@/lib/data';

export default function PackagesPage() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get('location');
  const searchQuery = searchParams.get('search');
  
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<TravelPackage[]>([]);
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: locationParam || '',
    priceRange: [1500, 50000],
    duration: '',
    sortBy: 'recommended'
  });
  
  useEffect(() => {
    // In a real app, this would be an API call with filters
    setPackages(travelPackages);
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
    if (filters.location) {
      result = result.filter(pkg => pkg.location === filters.location);
    }
    
    // Apply price range filter
    result = result.filter(pkg => 
      pkg.price >= filters.priceRange[0] && pkg.price <= filters.priceRange[1]
    );
    
    // Apply duration filter
    if (filters.duration) {
      // Simple parsing of duration strings
      result = result.filter(pkg => {
        const days = parseInt(pkg.duration.split('Days')[0].split('/')[1].trim());
        if (filters.duration === '1-3') return days <= 3;
        if (filters.duration === '4-6') return days >= 4 && days <= 6;
        if (filters.duration === '7-10') return days >= 7 && days <= 10;
        if (filters.duration === '10+') return days > 10;
        return true;
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
      priceRange: [1500, 50000],
      duration: '',
      sortBy: 'recommended'
    });
    setSearchTerm('');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Travel Packages</h1>
          <p className="max-w-2xl">
            Discover our handpicked selection of travel packages to destinations across India. 
            Filter by location, price, and duration to find your perfect getaway.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="w-full mb-4"
            >
              <Filter className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Filters Sidebar */}
          <div className={`w-full lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetFilters}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <FilterX className="h-4 w-4 mr-1" />
                    Reset
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      type="text"
                      placeholder="Search packages"
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Destination
                  </label>
                  <Select 
                    value={filters.location} 
                    onValueChange={(value) => setFilters({ ...filters, location: value })}
                  >
                    <SelectTrigger>
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
                  <div className="flex justify-between mb-2">
                    <label className="block text-sm font-medium">
                      Price Range
                    </label>
                    <span className="text-sm text-gray-500">
                      ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
                    </span>
                  </div>
                  <div className="px-2 py-4">
                    <Slider
                      defaultValue={[1500, 50000]}
                      min={1500}
                      max={50000}
                      step={1000}
                      value={filters.priceRange}
                      onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1,500</span>
                    <span>₹50,000</span>
                  </div>
                </div>
                
                {/* Duration Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Duration
                  </label>
                  <Select 
                    value={filters.duration} 
                    onValueChange={(value) => setFilters({ ...filters, duration: value })}
                  >
                    <SelectTrigger>
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
                  <label className="block text-sm font-medium mb-2">
                    Sort By
                  </label>
                  <Select 
                    value={filters.sortBy} 
                    onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                  >
                    <SelectTrigger>
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-lg font-semibold">
                    {filteredPackages.length} Packages Found
                  </h2>
                  {(searchTerm || filters.location || filters.duration || filters.priceRange[0] > 1500 || filters.priceRange[1] < 50000) && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Showing filtered results
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setShowFilters(!showFilters)}
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                  >
                    <Filter className="h-4 w-4 mr-1" />
                    Filters
                  </Button>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
                  <Select 
                    value={filters.sortBy} 
                    onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                  >
                    <SelectTrigger className="w-[180px]">
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
            
            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPackages.map((pkg) => (
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
                        {pkg.inclusions.slice(0, 2).map((inclusion, index) => (
                          <span 
                            key={index} 
                            className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
                          >
                            {inclusion}
                          </span>
                        ))}
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
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-12 text-center">
                <div className="mb-4 text-gray-400">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2">No packages found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  We couldn't find any packages matching your criteria. Try adjusting your filters or search terms.
                </p>
                <Button onClick={resetFilters}>
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