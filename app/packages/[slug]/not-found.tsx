import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The travel package you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild size="lg">
          <Link href="/packages" className="gap-2">
            <ChevronLeft className="h-5 w-5" />
            Back to Packages
          </Link>
        </Button>
      </div>
    </div>
  );
} 