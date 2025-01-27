'use client'; // Указываем, что это клиентский компонент

import React, { createContext, useContext, useState } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void; // Добавляем функцию для удаления товара
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

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter(item => item.id !== id)); // Удаляем товар из корзины
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isModalOpen, toggleModal }}>
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