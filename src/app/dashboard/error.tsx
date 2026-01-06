'use client';

import { useEffect } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">{error.message || 'Failed to load dashboard data'}</p>
        <Button onClick={reset}>Try again</Button>
      </Card>
    </div>
  );
}
