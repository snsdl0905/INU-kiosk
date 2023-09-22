import CartItem from '../types/CartItem';

const onDeleteCart = (foodId: string) => {
    const selectedFoodsString = localStorage.getItem('cartItems');
    const selectedFoods = selectedFoodsString ? JSON.parse(selectedFoodsString) as CartItem[] : [];
    

    const filterSelectedItem = selectedFoods.filter(item => item.id !== foodId);
    const deletedItem = selectedFoods.find(item => item.id === foodId);
    
    alert(`${deletedItem?.name} 이(가) 삭제되었습니다.`);
    
    localStorage.setItem('cartItems', JSON.stringify(filterSelectedItem));
    return filterSelectedItem;
};

export default onDeleteCart;
