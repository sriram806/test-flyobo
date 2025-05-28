import { travelPackages } from '@/lib/data';
import PackageDetail from './package-detail';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return travelPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default function PackagePage({ params }: { params: { slug: string } }) {
  const packageData = travelPackages.find(pkg => pkg.slug === params.slug);
  
  if (!packageData) {
    notFound();
  }

  return <PackageDetail />;
} 