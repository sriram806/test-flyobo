import { travelPackages } from '@/lib/data';
import PackageDetail from './package-detail';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return travelPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default function PackagePage({ params }: { params: { slug: string } }) {
  // Try to find the package by slug
  let packageData = travelPackages.find(pkg => pkg.slug === params.slug);
  
  // If not found, try to find by package title
  if (!packageData) {
    packageData = travelPackages.find(pkg => {
      const titleSlug = pkg.name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      return titleSlug === params.slug.toLowerCase();
    });
  }

  if (!packageData) {
    notFound();
  }

  return <PackageDetail />;
} 