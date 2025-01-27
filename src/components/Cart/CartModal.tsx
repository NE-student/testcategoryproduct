'use client'; // Указываем, что это клиентский компонент

import React from 'react';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/Cart/CartItem'; // Импортируем новый компонент

const CartModal: React.FC = () => {
  const { cart, isModalOpen, toggleModal } = useCart();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Ваш кошик</h2>
        {cart.length === 0 ? (
          <p>Кошик пустий</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <CartItem key={product.id} {...product} /> // Используем новый компонент
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