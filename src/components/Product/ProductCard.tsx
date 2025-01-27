'use client'; // Указываем, что это клиентский компонент

import React from 'react';
import { Product } from '@/types/Product';
import BuyButton from './BuyButton'; // Импортируем кнопку покупки

const ProductCard: React.FC<Product> = ({ id, title, description, price }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>
      <p className="font-semibold">Ціна: {price} грн</p>
      <BuyButton {...{ id, title, description, price }} /> {/* Передаем все свойства продукта в кнопку */}
    </div>
  );
};

export default ProductCard;