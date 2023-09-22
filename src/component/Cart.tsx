import React, { useEffect, useState } from 'react';
import CartItem from '../types/CartItem';

type CartProps = {
  selectedFoods: CartItem[];
};

export default function Cart() {

  const [selectedFoods, setSelectedFoods] = useState<CartItem[]>([]);


  useEffect(() => {
    const selectedFoodsString = localStorage.getItem('cartItems');
    if (selectedFoodsString) {
      const parsedSelectedFoods = JSON.parse(selectedFoodsString);
      setSelectedFoods(parsedSelectedFoods);
    }
  }, []);


  return (
    <div>
      <h2>장바구니</h2>
      {selectedFoods.map((item, index) => (
        <div key={index}>
          <p>{item.name} {item.price}원 수량: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}




