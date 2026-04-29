'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-lg border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Marionette
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/products">
            <Button variant="ghost">Products</Button>
          </Link>
          <Link href="/messages">
            <Button variant="ghost">Messages</Button>
          </Link>
          <Link href="/profile">
            <Button>Profile</Button>
          </Link>
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

