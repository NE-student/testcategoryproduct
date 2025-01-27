'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

const CartModal: React.FC = () => {
  const { cart, isModalOpen, toggleModal } = useCart();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-black">
        <h2 className="text-lg font-bold mb-4">Ваш кошик</h2>
        {cart.length === 0 ? (
          <p>Кошик пустий</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="flex justify-between mb-2">
                <span>{product.title}</span>
                <span>{product.price} грн</span>
              </li>
            ))}
          </ul>
        )}
        <button className="mt-4 bg-red-500 text-white rounded px-4 py-2" onClick={toggleModal}>
          Закрити
        </button>
      </div>
    </div>
  );
};

export default CartModal;