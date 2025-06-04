import { HeroSection } from '@/components/home/hero-section';
import { FeaturedPackages } from '@/components/home/featured-packages';
import { DestinationHighlights } from '@/components/home/destination-highlights';
import { FAQSection } from '@/components/home/faq-section';
import { Newsletter } from '@/components/home/newsletter';

export const metadata = {
  title: 'FlyOBO - Fly Off,Break Out',
  description: 'Discover the best travel packages across India with FlyOBO. Explore stunning destinations, book hassle-free trips, and create unforgettable memories.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedPackages />
      <DestinationHighlights />
      <FAQSection />
      <Newsletter />
    </>
  );
}