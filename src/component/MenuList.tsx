import React from 'react';
import './style.css';

export default function MenuList() {
	const restaurants = [
		{
			id: '1',
			category: '중식',
			name: '인천반점',
			menu: [
				{
					id: '1',
					name: '짜장면',
					price: 8000,
					image: 'food1.png',
				},
				{
					id: '2',
					name: '짬뽕',
					price: 8000,
					image: 'food2.png',
				},
				{
					id: '3',
					name: '탕수육',
					price: 14000,
					image: 'food3.png',
				},
			],
		},
		{
			id: '2',
			category: '한식',
			name: '인하김밥',
			menu: [
				{
					id: '4',
					name: '김밥',
					price: 3500,
					image: 'food4.png',
				},
				{
					id: '5',
					name: '제육김밥',
					price: 5500,
					image: 'food5.png',
				},
				{
					id: '6',
					name: '컵라면',
					price: 2000,
					image: 'food6.png',
				},
			],
		},
		{
			id: '3',
			category: '일식',
			name: '싱싱초밥',
			menu: [
				{
					id: '7',
					name: '새우초밥',
					price: 5500,
					image: 'food7.png',
				},
				{
					id: '8',
					name: '연어초빕',
					price: 8500,
					image: 'food8.png',
				},
				{
					id: '9',
					name: '참치초밥',
					price: 9000,
					image: 'food9.png',
				},
			],
		},
	];

	return (
		<div>
			{restaurants.map(restaurant => (
				<div className='Menu' key={restaurant.id}>
					<p>카테고리: {restaurant.category}</p>
					<h2>{restaurant.name}</h2>
					<ul>
						{restaurant.menu.map(menuItem => (
							<li key={menuItem.id}>
								<img src={menuItem.image} alt={menuItem.name} />
								<h4>{menuItem.name}</h4>
								<p>가격: {menuItem.price}원</p>
								<button>구매</button>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

