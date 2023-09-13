import type Menu from '../types/Food';

type FoodsProps = {
	menuItem: Menu;
};

export default function Foods({menuItem}: FoodsProps) {
	return (<li key={menuItem.id}>
		<img src={menuItem.image} alt={menuItem.name} />
		<h4>{menuItem.name}</h4>
		<p>가격: {menuItem.price}원</p>
		<button>구매</button>
	</li>);
}
