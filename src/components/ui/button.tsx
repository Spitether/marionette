'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  const base = 'px-4 py-2 rounded-lg font-medium shadow-md transition-all hover:shadow-lg active:scale-95 inline-flex items-center justify-center';
  const variants = {
    default: 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700',
    outline: 'border-2 border-gray-200 bg-white text-gray-800 hover:border-indigo-500 hover:text-indigo-600'
  };

  return (
    <button
      className={`${base} ${variants[variant || 'default']} ${className}`}
      {...props}
    />
  );
}

