import type Menu from '../types/Food';
import type Restaurant from '../types/Restaurant';
import Foods from './Food';

type RestaurantRowProps = {
	restaurant: Restaurant;
};

export default function RestaurantRow({restaurant}: RestaurantRowProps) {
	return (
		<div className='Menu' key={restaurant.id}>
			<p>카테고리: {restaurant.category}</p>
			<h2>{restaurant.name}</h2>
			<ul>
				{restaurant.menu.map(menuItem => (
					<Foods menuItem={menuItem}/>
				))}
			</ul>
		</div>
	);
}
