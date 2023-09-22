import CartItem from '../types/CartItem';
import Menu from '../types/Food';

const onAddToCart = (food: Menu) => {

  const selectedFoodsString = localStorage.getItem('cartItems');
  const selectedFoods = selectedFoodsString ? JSON.parse(selectedFoodsString) as CartItem[] : [];

  const checkItem = selectedFoods.find((item) => item.id === food.id);

  if (checkItem) {
    checkItem.quantity += 1;
    alert(`${checkItem?.name} 이(가) 장바구니에 추가되었습니다.`);
  } else {
    const newItem = {
      id: food.id,
      name: food.name,
      price: food.price,
      quantity: 1,
    };
    selectedFoods.push(newItem);
    alert(`${newItem?.name} 이(가) 장바구니에 추가되었습니다.`);
  }

  localStorage.setItem('cartItems', JSON.stringify(selectedFoods));

};

export default onAddToCart;
