'use client'; // Вказуємо, що це клієнтський компонент

import React from 'react';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

const CartButton: React.FC<Product> = ({ id, title, description, price }) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart({ id, title, description, price })}>
      Купити
    </button>
  );
};

export default CartButton;