'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '@/lib/validators';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Create later

export default function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    console.log('Login:', data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <Input id="email" {...form.register('email')} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" {...form.register('password')} />
      </div>
      <Button type="submit" className="w-full">Login</Button>
    </form>
  );
}

