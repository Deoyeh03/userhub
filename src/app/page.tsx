import Link from 'next/link';

export default function Home() {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans text-white"
      suppressHydrationWarning
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for readability */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-md leading-tight">
          Your Network.<br />Verified.
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
          The single source of truth for your organization&apos;s talent. 
          <br className="hidden md:block" />
          Secure access to global profiles, anytime, anywhere.
        </p>

        <div className="pt-4">
          <Link href="/login">
            <button className="bg-white text-black hover:bg-gray-100 transition-colors text-lg font-medium px-8 py-3 rounded-full shadow-lg">
              Access Directory
            </button>
          </Link>
        </div>
      </div>

      {/* Footer / Copyright (Optional subtle touch) */}
      <div className="absolute bottom-8 text-white/60 text-sm">
        &copy; 2026 UserHub Systems
      </div>
    </div>
  );
}
