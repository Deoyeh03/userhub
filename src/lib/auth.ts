import { cookies } from 'next/headers';

export interface AuthUser {
  id: number;
  username: string;
  name: string;
}

export async function getAuthUser(): Promise<AuthUser | null> {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('auth-user');
  
  if (!authCookie) {
    return null;
  }

  try {
    return JSON.parse(authCookie.value);
  } catch {
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getAuthUser();
  return user !== null;
}
