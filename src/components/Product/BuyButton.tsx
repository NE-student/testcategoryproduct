'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/Product';

const CartButton: React.FC<Product> = ({ id, title, description, price }) => {
  const { addToCart } = useCart();

  return (
    <button className="mt-4 bg-green-500 text-white rounded px-4 py-2" onClick={() => addToCart({ id, title, description, price })}>
      Купити
    </button>
  );
};

export default CartButton;