import type Menu from '../types/Food';
import { useState } from 'react';
import onAddToCart from '../utils/onAddToCart';
import CartItem from '../types/CartItem';

type FoodsProps = {
	food: Menu;
};

export default function Foods({ food }: FoodsProps) {
  const { image, name, price } = food;
  
  const handleAddToCart = () => {
    onAddToCart(food);
  };

  return (
    <li>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>가격: {price}원</p>
      <button onClick={handleAddToCart}>구매</button>
    </li>
  );
}
