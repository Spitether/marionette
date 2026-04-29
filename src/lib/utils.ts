import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date formatter
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US').format(date);
}

// Truncate text
export function truncate(text: string, length: number = 100) {
  return text.length > length ? text.slice(0, length) + '...' : text;
}

