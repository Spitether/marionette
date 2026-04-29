export interface Message {
  id: string;
  content: string;
  senderId: string;
  roomId: string;
  createdAt: Date;
  readAt?: Date;
}

