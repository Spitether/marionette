import { prisma } from '@/lib/db';
import type { User } from '@/models/User';

export async function getUser(id: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}

export async function updateProfile(id: string, data: Partial<User>): Promise<User | null> {
  return prisma.user.update({ where: { id }, data });
}

export async function getUsers(): Promise<User[]> {
  return prisma.user.findMany();
}

