import Link from 'next/link';
import { getAuthUser } from '@/lib/auth';
import usersData from '@/data/users.json';
import LogoutButton from '@/components/LogoutButton';
import SearchInput from '@/components/SearchInput';
import { User } from '@/types/user';

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
  
  return (
    <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
      {initials}
    </div>
  );
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const authUser = await getAuthUser();
  const search = (await searchParams).q;

  // Filter users based on search query
  const filteredUsers = search
    ? usersData.filter((user: User) =>
        user.name.toLowerCase().includes(String(search).toLowerCase()) ||
        user.username.toLowerCase().includes(String(search).toLowerCase()) ||
        user.email.toLowerCase().includes(String(search).toLowerCase())
      )
    : usersData;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">
                UH
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">UserHub</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
                <div className="h-2 w-2 rounded-full bg-green-50 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">{authUser?.name}</span>
              </div>
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Members</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">{usersData.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Active Now</h3>
            <p className="mt-2 text-3xl font-bold text-green-600">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Departments</h3>
            <p className="mt-2 text-3xl font-bold text-blue-600">8</p>
          </div>
        </div>

        {/* Directory Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            Directory Members 
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({filteredUsers.length} found)
            </span>
          </h2>
          <SearchInput />
        </div>

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user: User) => (
              <Link key={user.id} href={`/users/${user.id}`} className="group block">
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500/30 group-hover:-translate-y-1 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <InitialsAvatar name={user.name} />
                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      Active
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">@{user.username}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 text-gray-400">
                        <path fillRule="evenodd" d="M2.5 4A1.5 1.5 0 0 0 1 5.5V6h18v-.5A1.5 1.5 0 0 0 17.5 4h-15ZM19 8.5H1v6A1.5 1.5 0 0 0 2.5 16h15a1.5 1.5 0 0 0 1.5-1.5v-6ZM3 13.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm4.75-.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" clipRule="evenodd" />
                      </svg>
                      {user.company.name}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 text-gray-400">
                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                      </svg>
                      {user.email}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              <h3 className="text-lg font-medium text-gray-900">No members found</h3>
              <p>Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
