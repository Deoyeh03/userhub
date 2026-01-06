import Link from 'next/link';
import { User } from '@/types/user';
import Card from '@/components/Card';
import Button from '@/components/Button';

// Helper component for the large avatar
function InitialsAvatarLarge({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
  
  return (
    <div className="h-32 w-32 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-4xl shadow-inner border-4 border-white">
      {initials}
    </div>
  );
}

interface UserProfileProps {
  user: User;
  isModal?: boolean;
}

export default function UserProfile({ user, isModal = false }: UserProfileProps) {
  return (
    <div className={`bg-gray-50 font-sans ${!isModal ? 'min-h-screen pb-12' : 'pb-0'}`}>
      
      {/* Header / Cover Area - Only show "Back" if NOT in modal (modal has its own close) */}
      {!isModal && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to Directory
            </Link>
          </div>
        </div>
      )}

      <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${!isModal ? '-mt-8' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar: Identity */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col items-center text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-white z-0" />
               <div className="relative z-10">
                <InitialsAvatarLarge name={user.name} />
                <h1 className="mt-4 text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-500 font-medium">@{user.username}</p>
                 <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Active Member
                  </span>
                 </div>
               </div>
            </div>


          </div>

          {/* Right Content: Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Company Card */}
            <Card className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Company Profile</h2>
                  <p className="text-gray-500 text-sm">Organization details</p>
                </div>
                 <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                 </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-lg font-semibold text-gray-900 mb-1">{user.company.name}</div>
                <div className="text-gray-600 italic mb-4">&quot;{user.company.catchPhrase}&quot;</div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                   <span className="font-medium text-gray-700">Focus:</span> {user.company.bs}
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Card className="p-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Contact Info</h3>
                  <div className="space-y-4">
                     <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <div className="overflow-hidden">
                           <p className="text-sm font-medium text-gray-900">Email Address</p>
                           <p className="text-sm text-gray-600 truncate">{user.email}</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>
                           <p className="text-sm font-medium text-gray-900">Phone</p>
                           <p className="text-sm text-gray-600">{user.phone}</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <div>
                           <p className="text-sm font-medium text-gray-900">Website</p>
                           <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                             {user.website}
                           </a>
                        </div>
                     </div>
                  </div>
               </Card>

               <Card className="p-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Location</h3>
                  <div className="space-y-4">
                     <div>
                        <p className="text-sm font-medium text-gray-900">{user.address.street}, {user.address.suite}</p>
                        <p className="text-sm text-gray-600">{user.address.city}, {user.address.zipcode}</p>
                     </div>
                     <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-500 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19.05 10 19.05c.7 0 1.967-.403 2.581-1.289.435-.77.56-1.689.414-2.69-.175-1.186-.806-2.612-2.183-4.494l-.271-.366a2.25 2.25 0 0 0-2.646 0l-.258.354c-1.356 1.873-1.98 3.27-2.164 4.492-.15 1.01.07 1.944.57 2.703.623.945 1.954 1.29 2.648 1.185Z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd" />
                        </svg>
                        Geo: {user.address.geo.lat}, {user.address.geo.lng}
                     </div>
                  </div>
               </Card>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
