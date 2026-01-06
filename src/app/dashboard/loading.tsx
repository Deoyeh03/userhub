import Card from '@/components/Card';

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-9 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="h-7 w-48 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="p-6 h-full">
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-1" />
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-1" />
                <div className="h-3 w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
