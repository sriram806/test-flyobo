import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - FlyOBO',
  description: 'Get in touch with our team for any questions or assistance.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 