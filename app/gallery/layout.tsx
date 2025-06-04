import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - FlyOBO',
  description: 'Explore our gallery of travel photos and memories from our customers.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 