import { NextRequest, NextResponse } from 'next/server';
import usersData from '@/data/users.json';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Find user by username
    const user = usersData.find(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 } // Specific status for client redirect
      );
    }

    // Hardcoded password check for assessment
    if (password !== 'userhub123') {
       return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Create auth payload
    const authUser = {
      id: user.id,
      username: user.username,
      name: user.name,
    };

    // Create response with cookie
    const response = NextResponse.json({ success: true, user: authUser });
    
    response.cookies.set('auth-user', JSON.stringify(authUser), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
