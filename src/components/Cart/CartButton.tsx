'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

const OpenCartButton: React.FC = () => {
  const { toggleModal } = useCart();

  return (
    <button onClick={toggleModal} className="bg-green-500 text-white rounded px-4 py-2 mb-4">
      Відкрити кошик
    </button>
  );
};

export default OpenCartButton;