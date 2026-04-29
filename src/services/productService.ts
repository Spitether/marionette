import { prisma } from '@/lib/db';
import type { Product } from '@/models/Product';

export async function getProducts(): Promise<Product[]> {
  return prisma.product.findMany();
}

export async function getProduct(id: string): Promise<Product | null> {
  return prisma.product.findUnique({ where: { id } });
}

export async function createProduct(data: Omit<Product, 'id'>): Promise<Product> {
  return prisma.product.create({ data });
}

export async function updateProduct(id: string, data: Partial<Product>): Promise<Product | null> {
  return prisma.product.update({ where: { id }, data });
}

export async function deleteProduct(id: string): Promise<Product> {
  return prisma.product.delete({ where: { id } });
}

// Mock data for dev
export const mockProducts = [
  { 
    id: '1', 
    name: 'Wooden Marionette - Classic Pinocchio Style', 
    price: 89.99, 
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop',
    description: 'Handcrafted wooden marionette with traditional 24 strings. Perfect for classic puppet shows and storytelling.'
  },
  { 
    id: '2', 
    name: 'Ball-Jointed Doll - Fantasy Elf', 
    price: 199.99, 
    image: 'https://images.unsplash.com/photo-1578601599886-d4df2f3b3e21?w=400&h=400&fit=crop',
    description: 'Premium ball-jointed fantasy elf doll with articulated joints and custom glass eyes. Collectible quality.'
  },
  { 
    id: '3', 
    name: 'Modern Wire Marionette - Street Performer', 
    price: 45.99, 
    image: 'https://images.unsplash.com/photo-1609348425386-7a7486bb9f17?w=400&h=400&fit=crop',
    description: 'Lightweight aluminum wire marionette designed for street performances. Durable and highly poseable.'
  },
  {
    id: '4',
    name: 'Vintage Felt Marionette - Circus Clown',
    price: 67.50,
    image: 'https://images.unsplash.com/photo-1601001435828-f627d2d59c28?w=400&h=400&fit=crop',
    description: '1950s style felt marionette with hand-painted features and real pom-poms. Perfect collector\'s item.'
  },
  {
    id: '5',
    name: 'Steampunk Automaton Puppet',
    price: 245.00,
    image: 'https://images.unsplash.com/photo-1578865648253-e1e16f17fd46?w=400&h=400&fit=crop',
    description: 'Brass and leather steampunk puppet with working gear mechanisms. Limited edition artisan piece.'
  },
  {
    id: '6',
    name: 'Mini Finger Marionette - Fairy',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    description: 'Tiny 3-inch fairy marionette perfect for children or desk decoration. 8 delicate strings.'
  }
];


