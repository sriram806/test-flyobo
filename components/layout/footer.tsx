import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand Info */}
          <div>
            {/* Logo Image */}
            <Link href="/" className="inline-block">
              <Image
                src="/images/banner.png"
                alt="Flyobo banner"
                width={160}
                height={50}
                className="object-contain"
              />
            </Link>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Making your travel dreams come true since 2024. Unbeatable prices, unforgettable experiences.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/flyobo/" className="hover:text-sky-400 transition-all duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/flyobo/" className="hover:text-pink-400 transition-all duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-all duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['Home', 'Packages', 'Gallery', 'About Us', 'Contact', 'FAQ'].map((item, idx) => (
                <li key={idx}>
                  <Link href={`/${item === 'Home' ? '' : item.toLowerCase().replace(/\s/g, '')}`} className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Popular Destinations</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['Goa', 'Kerala', 'Rajasthan', 'Himachal', 'Andaman'].map((place, idx) => (
                <li key={idx}>
                  <Link href={`/packages?location=${place}`} className="hover:text-white transition">
                    {place === 'Himachal' ? 'Himachal Pradesh' : place}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                Visakhapatnam <br />
                Andhra Pradesh, India - 530044
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-500" />
                +91 92912 37999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-500" />
                <span>wecare@flyobo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-800 pt-6">
          <p className="text-center text-xs text-gray-500">
            &copy; 2024 Flyobo (Swagatom World LLP). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
