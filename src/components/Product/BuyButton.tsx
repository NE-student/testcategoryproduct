'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/Product';

const CartButton: React.FC<Product> = ({ id, title, description, price }) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart({ id, title, description, price })}>
      Купити
    </button>
  );
};

export default CartButton;