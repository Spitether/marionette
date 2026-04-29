import { NextResponse } from 'next/server';
import * as userService from '@/services/userService';

export async function GET() {
  const users = await userService.getUsers();
  return NextResponse.json(users);
}

