import Card from '@/components/Card';
import Button from '@/components/Button';

export default function UserLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="h-9 w-32 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-8">
          <div className="mb-8">
            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-4" />
                <div className="space-y-3">
                  <div className="h-4 w-full max-w-sm bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-full max-w-sm bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
