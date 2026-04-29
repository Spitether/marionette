import { prisma } from '@/lib/db';
import type { Message } from '@/models/Message';

export async function getMessages(roomId: string): Promise<Message[]> {
  return prisma.message.findMany({
    where: { roomId },
    orderBy: { createdAt: 'asc' },
  });
}

export async function sendMessage(data: Omit<Message, 'id' | 'createdAt'>): Promise<Message> {
  return prisma.message.create({ data });
}

