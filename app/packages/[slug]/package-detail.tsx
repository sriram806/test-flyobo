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
  MessageCircle,
  Heart,
  ArrowRight
} from 'lucide-react';
import { travelPackages, TravelPackage } from '@/lib/data';

export default function PackageDetail() {
  const params = useParams();
  const router = useRouter();
  const [packageData, setPackageData] = useState<TravelPackage | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  useEffect(() => {
    if (params.slug) {
      const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      const packageDetails = travelPackages.find(pkg => pkg.slug === slug);

      if (packageDetails) {
        setPackageData(packageDetails);
      } else {
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

  const totalPages = packageData ? Math.ceil(packageData.gallery.length / imagesPerPage) : 0;
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = packageData?.gallery.slice(startIndex, endIndex) || [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-[60vh] bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold mb-4">Package Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The package you're looking for doesn't exist or has been removed.</p>
          <Button asChild size="lg">
            <Link href="/packages" className="gap-2">
              <ChevronLeft className="h-5 w-5" />
              Back to Packages
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Simplified Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={packageData.image}
            alt={packageData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        {/* Simplified Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 md:p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link
              href="/packages"
              className="flex items-center gap-2 text-white bg-black/30 hover:bg-black/40 rounded-lg px-4 py-2 text-sm transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Packages
            </Link>

            <div className="flex items-center gap-3">
              <button
                className="text-white bg-black/30 hover:bg-black/40 rounded-lg p-2 transition-colors"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </button>
              <div className="relative">
                <button 
                  className="flex items-center gap-2 text-white bg-black/30 hover:bg-black/40 rounded-lg px-4 py-2 text-sm transition-colors"
                  onClick={() => setShowShareOptions(!showShareOptions)}
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                
                {showShareOptions && (
                  <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-48 border border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm transition-colors"
                        onClick={() => handleShare('whatsapp')}
                      >
                        <span className="bg-green-500 text-white p-1.5 rounded-lg">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          </svg>
                        </span>
                        WhatsApp
                      </button>
                      <button
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm transition-colors"
                        onClick={() => handleShare('facebook')}
                      >
                        <span className="bg-blue-600 text-white p-1.5 rounded-lg">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                          </svg>
                        </span>
                        Facebook
                      </button>
                      <button
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm transition-colors"
                        onClick={() => handleShare('twitter')}
                      >
                        <span className="bg-blue-400 text-white p-1.5 rounded-lg">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                          </svg>
                        </span>
                        Twitter
                      </button>
                      <button
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm transition-colors"
                        onClick={() => handleShare('email')}
                      >
                        <span className="bg-gray-500 text-white p-1.5 rounded-lg">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        Email
                      </button>
                    </div>
                    <Separator className="my-2" />
                    <button
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg w-full text-sm transition-colors"
                      onClick={() => handleShare('copy')}
                    >
                      <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 p-1.5 rounded-lg">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </span>
                      Copy Link
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Simplified Package Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-white/90 mb-4">
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">{packageData.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5" />
                <span className="text-sm">{packageData.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">{packageData.rating} ({packageData.reviewCount} reviews)</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {packageData.name}
            </h1>
            <p className="text-lg text-white/90 max-w-3xl">
              {packageData.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Simplified Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
              <Tabs defaultValue="overview" className="w-full">
                <div className="border-b border-gray-200 dark:border-gray-700">
                  <TabsList className="w-full justify-start p-0 bg-transparent">
                    <TabsTrigger value="overview" className="px-6 py-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="gallery" className="px-6 py-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                      Gallery
                    </TabsTrigger>
                    <TabsTrigger value="inclusions" className="px-6 py-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                      Inclusions & Exclusions
                    </TabsTrigger>
                    <TabsTrigger value="itinerary" className="px-6 py-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                      Itinerary
                    </TabsTrigger>
                    <TabsTrigger value="policies" className="px-6 py-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                      Policies
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="p-6">
                  <TabsContent value="overview" className="space-y-6">
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        {packageData.longDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold mb-4">Location</h3>
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <MapPin className="h-5 w-5 text-primary mr-3" />
                          <span className="text-lg">{packageData.location}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold mb-4">Duration</h3>
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <Clock className="h-5 w-5 text-primary mr-3" />
                          <span className="text-lg">{packageData.duration}</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery" className="space-y-8">
                    <div className="text-center mb-16 relative">
                      <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-32 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full"></div>
                      <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                        Photo Gallery
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore the beauty of {packageData.name} through our curated collection of stunning photographs
                      </p>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                      {currentImages.map((image, index) => (
                        <div
                          key={index}
                          className="break-inside-avoid relative group cursor-pointer"
                          onClick={() => setActiveImageIndex(startIndex + index)}
                        >
                          <div className="relative overflow-hidden rounded-3xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                            <img
                              src={image}
                              alt={`${packageData.name} - Image ${startIndex + index + 1}`}
                              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                                <div className="flex items-center justify-between">
                                  <div className="space-y-2">
                                    <span className="text-white text-xl font-semibold block tracking-wide">
                                      {packageData.name}
                                    </span>
                                    <span className="text-white/80 text-sm font-medium tracking-wide">
                                      Photo {startIndex + index + 1}
                                    </span>
                                  </div>
                                  <div className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-full transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                                    <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-12">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <div className="flex items-center gap-2">
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                                currentPage === page
                                  ? 'bg-primary text-white shadow-lg'
                                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                              }`}
                            >
                              {page}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}

                    {activeImageIndex !== null && (
                      <div 
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-xl"
                        onClick={() => setActiveImageIndex(null)}
                      >
                        <div className="relative w-full max-w-6xl max-h-[90vh]">
                          <img
                            src={packageData.gallery[activeImageIndex]}
                            alt={`${packageData.name} - Image ${activeImageIndex + 1}`}
                            className="w-full h-full object-contain rounded-2xl shadow-2xl shadow-primary/20"
                          />
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageIndex(null);
                            }}
                            className="absolute top-8 right-8 text-white bg-black/50 hover:bg-black/70 rounded-full p-4 transition-all duration-500 hover:scale-110 hover:rotate-90 shadow-lg"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageIndex(prev => {
                                if (prev === null) return 0;
                                return prev === 0 ? packageData.gallery.length - 1 : prev - 1;
                              });
                            }}
                            className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-5 transition-all duration-500 hover:scale-110 hover:-translate-x-2 shadow-lg"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageIndex(prev => {
                                if (prev === null) return 0;
                                return prev === packageData.gallery.length - 1 ? 0 : prev + 1;
                              });
                            }}
                            className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-5 transition-all duration-500 hover:scale-110 hover:translate-x-2 shadow-lg"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>

                          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-xl text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide shadow-lg">
                            {activeImageIndex + 1} / {packageData.gallery.length}
                          </div>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="inclusions" className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                        <h3 className="text-2xl font-semibold mb-6 flex items-center text-green-600 dark:text-green-500">
                          <Check className="h-6 w-6 mr-3" />
                          Inclusions
                        </h3>
                        <div className="space-y-4">
                          {packageData.inclusions.map((inclusion, index) => (
                            <div key={index} className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                              <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-gray-700 dark:text-gray-300">{inclusion}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-8 rounded-2xl border border-primary/10 dark:border-primary/20 shadow-lg">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                          <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Need More Details?</h4>
                          <p className="text-gray-600 dark:text-gray-400 max-w-md">
                            Contact our travel agent on WhatsApp for complete inclusions and exclusions list. Get personalized assistance and answers to all your questions.
                          </p>
                        </div>
                        {packageData.whatsappLink && (
                          <a
                            href={packageData.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[200px] justify-center"
                          >
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            </svg>
                            <span className="font-semibold text-lg">Contact Agent</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="itinerary" className="space-y-8">
                    <div className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-8 rounded-2xl border border-primary/10 dark:border-primary/20 shadow-lg">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                          <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Detailed Itinerary Available</h4>
                          <p className="text-gray-600 dark:text-gray-400 max-w-md">
                            Get a complete day-by-day itinerary for this package. Our travel agent will provide you with detailed information about activities, timings, and more.
                          </p>
                        </div>
                        {packageData.whatsappLink && (
                          <a
                            href={packageData.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[200px] justify-center"
                          >
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            </svg>
                            <span className="font-semibold text-lg">Get Itinerary</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="policies" className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Booking & Cancellation Policies</h3>

                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4">Payment Policy</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-primary font-semibold">1</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">50% payment at the time of booking</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-primary font-semibold">2</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">Remaining 50% payment 14 days before the trip</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-primary font-semibold">3</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">For bookings made within 14 days of the trip, 100% payment is required</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4">Cancellation Policy</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-red-600 dark:text-red-400 font-semibold">1</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">30+ days before departure: 90% refund</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-red-600 dark:text-red-400 font-semibold">2</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">15-29 days before departure: 70% refund</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-red-600 dark:text-red-400 font-semibold">3</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">7-14 days before departure: 50% refund</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-red-600 dark:text-red-400 font-semibold">4</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">Less than 7 days before departure: No refund</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4">Refund Processing</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          All refunds will be processed within 7-10 working days after the cancellation is confirmed. Refunds will be made to the original payment method used for booking.
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4">Booking Modifications</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Changes to booking dates are subject to availability and may incur additional charges. Modifications must be requested at least 14 days before the trip.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
          
          {/* Simplified Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-24 border border-gray-100 dark:border-gray-700">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Book This Package</h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Starting from</span>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">₹{packageData.price.toLocaleString()}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">per person</p>
                    </div>
                  </div>
                </div>
              </div>

              {packageData.whatsappLink && (
                <a
                  href={packageData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg shadow-sm transition-colors text-lg mb-6"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  Book on WhatsApp
                </a>
              )}

              <div className="space-y-3">
                {[
                  "Best Price Guarantee",
                  "Instant Confirmation",
                  "24/7 Customer Support"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                  >
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
