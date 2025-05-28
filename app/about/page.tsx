import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">About TravelEase</h1>
          <p className="max-w-2xl">
            Learn about our story, mission, and the team behind TravelEase.
            We're passionate about creating memorable travel experiences for our customers.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Founded in 2024, Flyobo was born from a passion for travel and a desire to make quality travel experiences accessible to everyone. What started as a small team of travel enthusiasts has grown into a trusted travel company serving thousands of customers across India.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our founders, avid travelers themselves, noticed a gap in the market for transparent, hassle-free travel packages that delivered on their promises. They set out to create a company that would prioritize customer satisfaction, authentic experiences, and value for money.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, Flyobo offers a wide range of carefully curated travel packages to destinations across India, with plans to expand internationally in the near future. Despite our growth, we remain committed to our core values of integrity, excellence, and customer-centricity.
            </p>
          </div>
          <div className="relative h-80 lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
              alt="TravelEase team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Our Mission Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-8">
              "To inspire and enable memorable travel experiences that enrich lives, foster cultural understanding, and create lasting memories, while providing exceptional value and service to our customers."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Customer-Centric</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We put our customers first in everything we do, tailoring experiences to meet their unique needs and preferences.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We personally vet all accommodations, activities, and services to ensure they meet our high standards.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5m-2.5 0H9.5m0 0v2.5M9.5 17H7"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Authentic Experiences</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We create travel experiences that connect travelers with local cultures, traditions, and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our diverse team of travel experts is passionate about creating amazing experiences for our customers. 
              With decades of combined experience in the travel industry, we're here to make your dream vacation a reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Digvijay Naidu Atla",
                position: "Founder & CEO",
                image: "C:\Users\hp\Downloads\IMG_20240411_005417_708.jpg",
                bio: "Travel enthusiast with 15+ years in the tourism industry. Digvijay is passionate about sustainable travel."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold mb-6">Why Choose TravelEase?</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 bg-primary/10 text-primary p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Expertly Curated Packages</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our travel experts handpick every destination, accommodation, and activity to ensure quality and value.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-primary/10 text-primary p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Flexible Booking Options</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Choose from ready-made packages or work with us to create a custom itinerary tailored to your preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-primary/10 text-primary p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    No hidden fees or surprise charges. What you see is what you pay.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-primary/10 text-primary p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">24/7 Customer Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our support team is always available to assist you before, during, and after your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5865634/pexels-photo-5865634.jpeg"
                alt="Travel Experience 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden translate-y-8">
              <img
                src="https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg"
                alt="Travel Experience 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden -translate-y-8">
              <img
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg"
                alt="Travel Experience 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5865822/pexels-photo-5865822.jpeg"
                alt="Travel Experience 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Today, Flyobo offers a wide range of carefully curated travel packages to destinations across India and internationally, with plans to expand to more places in the near future. Despite our growth, we remain committed to our core values of integrity, excellence, and customer-centricity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="/packages">
                Browse Packages
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}