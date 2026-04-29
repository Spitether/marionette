export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  PRODUCTS: '/products',
  PROFILE: '/profile',
  MESSAGES: '/messages',
  ADMIN: '/admin',
} as const;

export const API_ENDPOINTS = {
  PRODUCTS: '/api/products',
  USERS: '/api/users',
  MESSAGES: '/api/messages',
} as const;

export const ROLES = {
  USER: 'user',
  ADMIN: 'admin',
} as const;

