export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  avatar?: string;
  profile?: {
    bio?: string;
    location?: string;
  };
  createdAt: Date;
}

