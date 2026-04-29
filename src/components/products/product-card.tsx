'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
}


export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="group border rounded-lg p-6 hover:shadow-lg transition-all">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-2xl font-bold text-primary mb-4">${price}</p>
      <Button className="w-full">Add to Cart</Button>
    </div>
  );
}

