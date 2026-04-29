import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'; // Optional: adjust for your auth provider
import { type CookieOptions } from 'next/dist/exports';

export const getUrl = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  return url;
};

export async function getSession() {
  const cookieStore = cookies();
  return createServerComponentClient({
    cookies: () => cookieStore,
  }).auth.getSession();
}

export function createCookie(name: string, value: string, options?: CookieOptions) {
  // Helper for auth cookies
}

