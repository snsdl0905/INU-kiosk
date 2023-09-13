import type Menu from '../types/Food';

type FoodsProps = {
	food: Menu;
};

export default function Foods({food}: FoodsProps) {
	const {image, name, price} = food;
	return (
		<li>
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>가격: {price}원</p>
			<button>구매</button>
		</li>
	);

