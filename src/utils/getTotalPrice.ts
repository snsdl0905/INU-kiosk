import CartItem from '../types/CartItem';

const getTotalPrice = () => {

  const selectedFoodsString = localStorage.getItem('cartItems');
  const selectedFoods = selectedFoodsString ? JSON.parse(selectedFoodsString) as CartItem[] : [];

  let totalPrice = 0;

  selectedFoods.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return totalPrice;
};

export default getTotalPrice;
