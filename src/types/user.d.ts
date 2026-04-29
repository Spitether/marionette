declare namespace UserTypes {
  export interface User {
    id: string;
    email: string;
    role: 'user' | 'admin';
  }
}

