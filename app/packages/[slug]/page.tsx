import { travelPackages } from '@/lib/data';
import PackageDetail from './package-detail';

export function generateStaticParams() {
  return travelPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default function PackagePage() {
  return <PackageDetail />;
} 