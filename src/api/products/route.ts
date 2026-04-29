import { NextResponse } from 'next/server';
import * as productService from '@/services/productService';

export async function GET() {
  const products = await productService.getProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const data = await request.json();
  const product = await productService.createProduct(data);
  return NextResponse.json(product, { status: 201 });
}

