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
    
    if (searchParams.location) {
      queryParams.set('location', searchParams.location);
    }
    
    if (searchParams.search) {
      queryParams.set('search', searchParams.search);
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
              <Select 
                onValueChange={(value) => setSearchParams(prev => ({ ...prev, location: value }))}
              >
                <SelectTrigger className="w-full sm:w-1/3 bg-white text-gray-900">
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
                  className="w-full pl-10 bg-white text-gray-900"
                  value={searchParams.search}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, search: e.target.value }))}
                />
              </div>
              
              <Button type="submit" className="w-full sm:w-auto">
                Search
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