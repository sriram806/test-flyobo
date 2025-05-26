"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Read testimonials from our satisfied customers who have experienced our travel packages
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gray-50 dark:bg-gray-900 border-none shadow-md">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <blockquote className="text-lg italic mb-4">"{testimonial.text}"</blockquote>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary w-4' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}