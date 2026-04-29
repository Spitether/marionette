import { NextResponse } from 'next/server';
import * as messageService from '@/services/messageService';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get('roomId');
  if (!roomId) {
    return NextResponse.json({ error: 'roomId required' }, { status: 400 });
  }
  const messages = await messageService.getMessages(roomId);
  return NextResponse.json(messages);
}

