"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Clock, CalendarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function HeroSection() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    destination: '',
    duration: '',
    month: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();

    if (searchParams.destination) {
      queryParams.set('destination', searchParams.destination);
    }

    if (searchParams.duration) {
      queryParams.set('duration', searchParams.duration);
    }

    if (searchParams.month) {
      queryParams.set('month', searchParams.month);
    }

    const queryString = queryParams.toString();
    router.push(`/packages${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg')",
          height: "100%",
          width: "100%"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Discover Your Perfect Getaway
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
            Explore our handpicked travel packages and embark on the journey of a lifetime. Best prices guaranteed.
          </p>
          
          {/* Search Form */}
          <div className="mt-10">
            <form
              onSubmit={handleSearch}
              className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-lg bg-white/10 backdrop-blur-md p-4 sm:flex-row sm:items-stretch"
            >
              {/* Destination Input */}
              <div className="relative w-full sm:w-1/3">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Enter the destination"
                  className="w-full pl-10 bg-white text-gray-900"
                  value={searchParams.destination}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, destination: e.target.value }))}
                />
              </div>

              {/* Duration and Month Selects */}
              <div className="grid grid-cols-2 gap-4 w-full sm:w-auto sm:flex-grow">
                {/* Duration Select */}
                <div>
                  <Select
                    value={searchParams.duration}
                    onValueChange={(value) => setSearchParams(prev => ({ ...prev, duration: value }))}
                  >
                    <SelectTrigger className="w-full bg-white text-gray-900">
                       <Clock className="mr-2 h-4 w-4 opacity-50" />
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 Days</SelectItem>
                      <SelectItem value="4-6">4-6 Days</SelectItem>
                      <SelectItem value="7-10">7-10 Days</SelectItem>
                      <SelectItem value="10+">10+ Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Month Select */}
                <div>
                  <Select
                    value={searchParams.month}
                    onValueChange={(value) => setSearchParams(prev => ({ ...prev, month: value }))}
                  >
                    <SelectTrigger className="w-full bg-white text-gray-900">
                       <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                       <SelectItem value="january">January</SelectItem>
                      <SelectItem value="february">February</SelectItem>
                      <SelectItem value="march">March</SelectItem>
                      <SelectItem value="april">April</SelectItem>
                      <SelectItem value="may">May</SelectItem>
                      <SelectItem value="june">June</SelectItem>
                      <SelectItem value="july">July</SelectItem>
                      <SelectItem value="august">August</SelectItem>
                      <SelectItem value="september">September</SelectItem>
                      <SelectItem value="october">October</SelectItem>
                      <SelectItem value="november">November</SelectItem>
                      <SelectItem value="december">December</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full sm:w-auto bg-red-500 hover:bg-red-600">
                View Packages
              </Button>
            </form>
          </div>
          
          {/* Quick Links */}
          <div className="mt-8">
            <p className="text-sm text-gray-300 mb-2">Popular Destinations:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link 
                href="/packages?location=Goa" 
                className="rounded-full bg-white/20 px-4 py-1 text-sm text-white hover:bg-white/30 transition-colors"
              >
                Goa
              </Link>
              <Link 
                href="/packages?location=Kerala" 
                className="rounded-full bg-white/20 px-4 py-1 text-sm text-white hover:bg-white/30 transition-colors"
              >
                Kerala
              </Link>
              <Link 
                href="/packages?location=Rajasthan" 
                className="rounded-full bg-white/20 px-4 py-1 text-sm text-white hover:bg-white/30 transition-colors"
              >
                Rajasthan
              </Link>
              <Link 
                href="/packages?location=Himachal Pradesh" 
                className="rounded-full bg-white/20 px-4 py-1 text-sm text-white hover:bg-white/30 transition-colors"
              >
                Himachal
              </Link>
              <Link 
                href="/packages?location=Andaman" 
                className="rounded-full bg-white/20 px-4 py-1 text-sm text-white hover:bg-white/30 transition-colors"
              >
                Andaman
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}