'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity } : item).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const total = useMemo(() => 
    items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]
  );

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext)!;

