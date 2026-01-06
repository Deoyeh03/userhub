'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  };

  return (
    <Button variant="ghost" onClick={handleLogout}>
      Sign Out
    </Button>
  );
}
