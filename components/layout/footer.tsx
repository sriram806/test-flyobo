import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">TravelEase</h2>
            <p className="mt-4 text-sm text-gray-300">
              Making your travel dreams come true since 2020. We offer the best travel packages with unbeatable prices and exceptional service.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-white">Packages</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-300 hover:text-white">Testimonials</Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-300 hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Popular Destinations</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/packages?location=Goa" className="text-gray-300 hover:text-white">Goa</Link>
              </li>
              <li>
                <Link href="/packages?location=Kerala" className="text-gray-300 hover:text-white">Kerala</Link>
              </li>
              <li>
                <Link href="/packages?location=Rajasthan" className="text-gray-300 hover:text-white">Rajasthan</Link>
              </li>
              <li>
                <Link href="/packages?location=Himachal" className="text-gray-300 hover:text-white">Himachal Pradesh</Link>
              </li>
              <li>
                <Link href="/packages?location=Andaman" className="text-gray-300 hover:text-white">Andaman</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 shrink-0 text-gray-400" />
                <span className="text-gray-300">123 Travel Street, Mumbai, India - 400001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 shrink-0 text-gray-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 shrink-0 text-gray-400" />
                <span className="text-gray-300">info@travelease.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} TravelEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}