import { NextResponse } from 'next/server';
// Add order service logic

export async function POST(request: Request) {
  // Create order
  return NextResponse.json({ message: 'Order created' }, { status: 201 });
}

