'use client'; // Указываем, что это клиентский компонент

import React from 'react';
import { Product } from '@/types/Product'; // Импортируем интерфейс
import { useCart } from '@/context/CartContext'; // Импортируем контекст

const CartItem: React.FC<Product> = ({ id, title, price }) => {
  const { removeFromCart } = useCart(); // Получаем функцию для удаления товара из корзины

  const handleRemove = () => {
    removeFromCart(id); // Вызываем функцию удаления при нажатии
  };

  return (
    <li className="flex justify-between mb-2">
      <span>{title}</span>
      <span>{price} грн</span>
      <button onClick={handleRemove} className="text-red-500">Видалити</button>
    </li>
  );
};

export default CartItem;