'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.status === 404) {
        // User not found -> Redirect to Register
        router.push(`/register?username=${encodeURIComponent(username)}`);
        return;
      }

      if (!res.ok) {
        setError(data.error || 'Login failed');
        setLoading(false);
        return;
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

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
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome Back</h1>
            <p className="text-white/70 font-light">Enter your credentials to access the directory</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-white/90">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="e.g. Bret"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors"
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-white/90">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <p className="text-sm text-red-400 mt-1 animate-in fade-in slide-in-from-top-1">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-100 font-bold rounded-lg py-3 text-lg transition-transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white/50"
              disabled={loading || !username.trim() || !password.trim()}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center space-y-4">
            <p className="text-sm text-white/50">
              Demo Access: Try <span className="text-white font-medium">Bret</span> with password <span className="text-white font-medium">userhub123</span>
            </p>
            <p className="text-sm text-white/50">
              Don&apos;t have an account? <a href="/register" className="text-white hover:underline">Sign up</a>
            </p>
          </div>
        </div>
        
        <div className="text-center mt-6 text-white/40 text-xs">
          &copy; 2026 UserHub Systems
        </div>
      </div>
    </div>
  );
}
