import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, name } = await request.json();

    if (!username || !name) {
      return NextResponse.json(
        { error: 'Username and name are required' },
        { status: 400 }
      );
    }

    // Mock "new" user payload (ID generation is random for mock)
    const newUser = {
      id: Math.floor(Math.random() * 10000) + 100,
      username,
      name,
    };

    // Create response with cookie immediately (auto-login)
    const response = NextResponse.json({ success: true, user: newUser });
    
    response.cookies.set('auth-user', JSON.stringify(newUser), {
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
