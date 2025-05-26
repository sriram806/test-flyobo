"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Clock, 
  Star, 
  Calendar, 
  Users, 
  Check, 
  X, 
  ChevronLeft, 
  Share2, 
  MessageCircle 
} from 'lucide-react';
import { travelPackages, TravelPackage } from '@/lib/data';
import BookingForm from '@/components/packages/booking-form';

export default function PackageDetail() {
  const params = useParams();
  const router = useRouter();
  const [packageData, setPackageData] = useState<TravelPackage | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showShareOptions, setShowShareOptions] = useState(false);

  useEffect(() => {
    if (params.slug) {
      // In a real app, this would be an API call
      const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      const packageDetails = travelPackages.find(pkg => pkg.slug === slug);
      
      if (packageDetails) {
        setPackageData(packageDetails);
      } else {
        // Package not found, redirect to packages page
        router.push('/packages');
      }
      
      setLoading(false);
    }
  }, [params.slug, router]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = packageData?.name || 'Travel Package';
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`Check out this amazing travel package: ${title} ${url}`)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this amazing travel package: ${title}`)}&url=${encodeURIComponent(url)}`);
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(`Check out this travel package: ${title}`)}&body=${encodeURIComponent(`I found this amazing travel package and thought you might be interested: ${url}`)}`);
        break;
      default:
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
    }
    
    setShowShareOptions(false);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="animate-pulse space-y-8 w-full max-w-4xl">
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
        <p className="mb-8">The package you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/packages">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Packages
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-12">
      {/* Gallery Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={packageData.gallery[activeImageIndex]} 
          alt={packageData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Navigation Arrows */}
        <button 
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm transition-colors"
          onClick={() => setActiveImageIndex((prev) => (prev === 0 ? packageData.gallery.length - 1 : prev - 1))}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button 
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm transition-colors transform rotate-180"
          onClick={() => setActiveImageIndex((prev) => (prev === packageData.gallery.length - 1 ? 0 : prev + 1))}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        
        {/* Thumbnails */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {packageData.gallery.map((image, index) => (
            <button
              key={index}
              className={`w-16 h-10 rounded overflow-hidden border-2 transition-all ${
                index === activeImageIndex ? 'border-white' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
              onClick={() => setActiveImageIndex(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        
        {/* Back button */}
        <Link 
          href="/packages" 
          className="absolute top-4 left-4 flex items-center gap-1 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Link>
        
        {/* Share button */}
        <div className="absolute top-4 right-4">
          <button 
            className="flex items-center gap-1 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm transition-colors"
            onClick={() => setShowShareOptions(!showShareOptions)}
          >
            <Share2 className="h-4 w-4" />
            Share
          </button>
          
          {showShareOptions && (
            <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 w-48">
              <div className="grid grid-cols-2 gap-2">
                <button 
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm"
                  onClick={() => handleShare('whatsapp')}
                >
                  <span className="bg-green-500 text-white p-1 rounded">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.249 17.467c-.217.617-.5 1.186-.916 1.682-1.14 1.364-2.96 2.21-4.917 2.306-1.31.06-2.61-.325-3.785-.899-1.156-.616-2.216-1.428-3.14-2.352-1.124-1.124-2.094-2.317-2.876-3.646-1.086-1.892-1.468-4.074-1.02-6.204.65-2.707 2.432-5.15 4.9-6.346 3.094-1.535 6.72-1.14 9.324 1.001.87.71 1.692 1.49 2.271 2.426.579.936.873 2.002.873 3.074 0 3.298-1.482 6.433-3.714 8.958z"/>
                    </svg>
                  </span>
                  WhatsApp
                </button>
                <button 
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm"
                  onClick={() => handleShare('facebook')}
                >
                  <span className="bg-blue-600 text-white p-1 rounded">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                    </svg>
                  </span>
                  Facebook
                </button>
                <button 
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm"
                  onClick={() => handleShare('twitter')}
                >
                  <span className="bg-blue-400 text-white p-1 rounded">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                    </svg>
                  </span>
                  Twitter
                </button>
                <button 
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm"
                  onClick={() => handleShare('email')}
                >
                  <span className="bg-gray-500 text-white p-1 rounded">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Email
                </button>
              </div>
              <Separator className="my-2" />
              <button 
                className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded w-full text-sm"
                onClick={() => handleShare('copy')}
              >
                <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 p-1 rounded">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </span>
                Copy Link
              </button>
            </div>
          )}
        </div>
        
        {/* Package title */}
        <div className="absolute bottom-16 md:bottom-20 left-0 right-0 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {packageData.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{packageData.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{packageData.duration}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>{packageData.rating} ({packageData.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Details */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions & Exclusions</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="policies">Policies</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <h2 className="text-2xl font-bold mb-4">Package Overview</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {packageData.longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Location</h3>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{packageData.location}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Duration</h3>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{packageData.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">Package Highlights</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {packageData.inclusions.map((inclusion, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="inclusions">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-xl font-bold mb-4 flex items-center text-green-600 dark:text-green-500">
                        <Check className="h-5 w-5 mr-2" />
                        Inclusions
                      </h2>
                      <ul className="space-y-2">
                        {packageData.inclusions.map((inclusion, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                            <span>{inclusion}</span>
                          </li>
                        ))}
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>All applicable taxes</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>24/7 on-trip assistance</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold mb-4 flex items-center text-red-600 dark:text-red-500">
                        <X className="h-5 w-5 mr-2" />
                        Exclusions
                      </h2>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                          <span>Airfare (unless specified)</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                          <span>Personal expenses</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                          <span>Optional activities not mentioned in inclusions</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                          <span>Travel insurance</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                          <span>Additional meals not specified in inclusions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="itinerary">
                  <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
                  
                  {/* Sample itinerary based on the package */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Day 1: Arrival</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Arrive at your destination and transfer to your hotel. Check-in and relax. In the evening, enjoy a welcome dinner and briefing about your upcoming tour.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Day 2: Sightseeing</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        After breakfast, embark on a full-day sightseeing tour of the main attractions. Lunch will be at a local restaurant to experience authentic cuisine. Return to the hotel in the evening for leisure time.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Day 3: Activities & Exploration</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Enjoy breakfast at the hotel, followed by activities specific to your destination. For beach destinations, this could include water sports. For hill stations, this might include trekking or nature walks. For heritage destinations, this could be monument visits.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Day 4: Departure</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        After breakfast, check-out from the hotel. Depending on your departure time, you may have free time for last-minute shopping or sightseeing. Transfer to the airport/railway station for your onward journey.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Note:</strong> This is a sample itinerary and may vary based on weather conditions, local events, and other factors. A detailed itinerary will be provided after booking.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="policies">
                  <h2 className="text-2xl font-bold mb-6">Booking & Cancellation Policies</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Payment Policy</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>50% payment at the time of booking</li>
                        <li>Remaining 50% payment 14 days before the trip</li>
                        <li>For bookings made within 14 days of the trip, 100% payment is required</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Cancellation Policy</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>30+ days before departure: 90% refund</li>
                        <li>15-29 days before departure: 70% refund</li>
                        <li>7-14 days before departure: 50% refund</li>
                        <li>Less than 7 days before departure: No refund</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Refund Processing</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        All refunds will be processed within 7-10 working days after the cancellation is confirmed. Refunds will be made to the original payment method used for booking.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Booking Modifications</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Changes to booking dates are subject to availability and may incur additional charges. Modifications must be requested at least 14 days before the trip.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Customer Reviews</h2>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-semibold">{packageData.rating}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">({packageData.reviewCount} reviews)</span>
                </div>
              </div>
              
              {/* Sample reviews */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden mr-3">
                        <img 
                          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
                          alt="Reviewer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Rahul Sharma</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Traveled in June 2023</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Amazing experience! The package was well-organized, and everything was as promised. The hotel was clean and comfortable, and the sightseeing tours were informative and fun. Would definitely recommend this package to anyone visiting.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden mr-3">
                        <img 
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                          alt="Reviewer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Priya Patel</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Traveled in May 2023</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Great package overall! The hotel was nice, and the sightseeing was good. Only suggestion would be to include more meals in the package. Had to spend extra on food. Otherwise, it was a wonderful experience.
                  </p>
                </div>
              </div>
              
              <Button className="mt-6" variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                View All Reviews
              </Button>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">Book This Package</h2>
                  <p className="text-2xl font-bold text-primary">₹{packageData.price.toLocaleString()}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">per person on twin sharing basis</p>
              </div>
              {packageData.whatsappLink && (
                <a
                  href={packageData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition-colors text-lg mb-2"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.249 17.467c-.217.617-.5 1.186-.916 1.682-1.14 1.364-2.96 2.21-4.917 2.306-1.31.06-2.61-.325-3.785-.899-1.156-.616-2.216-1.428-3.14-2.352-1.124-1.124-2.094-2.317-2.876-3.646-1.086-1.892-1.468-4.074-1.02-6.204.65-2.707 2.432-5.15 4.9-6.346 3.094-1.535 6.72-1.14 9.324 1.001.87.71 1.692 1.49 2.271 2.426.579.936.873 2.002.873 3.074 0 3.298-1.482 6.433-3.714 8.958z"/>
                  </svg>
                  Book on WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
