import './style.css';

import {restaurants} from '../data.json';

import RestaurantRow from './RestaurantRow';

export default function RestaurantTable() {
	return (
		<div>
			{restaurants.map(restaurant => (
				<RestaurantRow restaurant={restaurant} />
			))}
		</div>
	);
}

