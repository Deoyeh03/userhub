# UserHub

A production-ready **User Directory Application** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Modern Architecture**: Built on Next.js 13+ App Router, utilizing React Server Components and Server Actions/API routes.
- **Secure Authentication**:
  - Custom cookie-based session management (`auth-user`).
  - Middleware protection for private routes (`/dashboard`, `/users`).
  - Hardcoded password enforcement (`userhub123` for demo users).
  - Automatic redirection to registration for unknown users.
- **User Directory**:
  - Data-rich dashboard with real-time search filtering.
  - Detailed user profiles with "Premium" 2-column layout.
  - **Intercepting Routes**: User details open in a modal when clicked from the dashboard, but function as standalone pages when accessed directly.
- **Premium UI/UX**:
  - "Hero Enterprise" aesthetic with glassmorphism and high-quality imagery.
  - Responsive design for all devices.
  - Loading skeletons and error boundaries.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist & Geist Mono
- **Icons**: Heroicons (SVG)

## Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    ```

2.  **Run the development server**:

    ```bash
    npm run dev
    ```

3.  **Open the application**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## Demo Credentials

You can log in with any existing user from the directory.

- **Username**: `Bret` (or `Antonette`, `Samantha`)
- **Password**: `userhub123`

To test the **Registration Flow**:

1.  **Option A (Redirect)**: Enter a username that _doesn't_ exist (e.g., `NewUser`) on the Login page. You will be automatically redirected to Register.
2.  **Option B (Direct Link)**: Click the "Sign up" link at the bottom of the Login form.
3.  Create an account to access the dashboard.
