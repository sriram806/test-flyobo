"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function HeroSection() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    location: '',
    search: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (searchParams.location) queryParams.set('location', searchParams.location);
    if (searchParams.search) queryParams.set('search', searchParams.search);
    router.push(`/packages${queryParams.toString() ? `?${queryParams}` : ''}`);
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-md">
            Discover Your Perfect Getaway
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-200">
            Explore our handpicked travel packages and embark on the journey of a lifetime.
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="mt-10 mx-auto max-w-3xl rounded-xl backdrop-blur-sm bg-white/10 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3 shadow-lg"
          >
            <Select
              onValueChange={(value) =>
                setSearchParams((prev) => ({ ...prev, location: value }))
              }
            >
              <SelectTrigger className="w-full sm:w-1/3 bg-white text-gray-900 rounded-md shadow-sm">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Goa">Goa</SelectItem>
                <SelectItem value="Kerala">Kerala</SelectItem>
                <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                <SelectItem value="Andaman">Andaman</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative w-full sm:w-2/3">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Search packages, activities, or destinations"
                className="w-full pl-10 bg-white text-gray-900 rounded-md shadow-sm"
                value={searchParams.search}
                onChange={(e) =>
                  setSearchParams((prev) => ({ ...prev, search: e.target.value }))
                }
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto rounded-md">
              Search
            </Button>
          </form>

          {/* Popular Destinations */}
          <div className="mt-8">
            <p className="text-sm text-gray-200 mb-2">Popular Destinations:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Goa', 'Kerala', 'Rajasthan', 'Himachal Pradesh', 'Andaman'].map((loc) => (
                <Link
                  key={loc}
                  href={`/packages?location=${encodeURIComponent(loc)}`}
                  className="rounded-full bg-white/20 px-4 py-1 text-sm text-white hover:bg-white/30 transition-colors"
                >
                  {loc}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
