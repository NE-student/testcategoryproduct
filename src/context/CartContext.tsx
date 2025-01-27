'use client';

import React, { createContext, useContext, useState } from 'react';
import { Product } from '@/types/Product';

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  isModalOpen: boolean;
  toggleModal: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    console.log('Товар добавлен в корзину:', product);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, isModalOpen, toggleModal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};