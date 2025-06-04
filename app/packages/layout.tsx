import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Packages - FlyOBO',
  description: 'Explore our range of travel packages across India.',
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 