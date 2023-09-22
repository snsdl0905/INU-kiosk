import React, { useEffect, useState } from 'react';
import CartItem from '../types/CartItem';
import onDeleteCart from '../utils/onDeleteCart';
import { Link } from 'react-router-dom';
import getTotalPrice from '../utils/getTotalPrice';

export default function Cart() {
  const [selectedFoods, setSelectedFoods] = useState<CartItem[]>([]);

  useEffect(() => {
    const selectedFoodsString = localStorage.getItem('cartItems');
    if (selectedFoodsString) {
      const parsedSelectedFoods = JSON.parse(selectedFoodsString);
      setSelectedFoods(parsedSelectedFoods);
    }
  }, []);

  const handleDeleteItem = (itemId: string) => {
    onDeleteCart(itemId);  
    setSelectedFoods(prevSelectedFoods => prevSelectedFoods.filter(item => item.id !== itemId));
  };


  return (
    <div>
      <h2>장바구니</h2>
      {selectedFoods.map((item, index) => (
        <div key={index}>
          <p>{item.name} {item.price}원 수량: {item.quantity}
          &nbsp; 
          <button onClick={()=>handleDeleteItem(item.id)}>삭제</button></p>
        </div>
      ))}
      <p>총 주문가격 : {getTotalPrice()}</p>
      <Link to={'/order'}>돌아가기</Link>
    </div>
  );
}




