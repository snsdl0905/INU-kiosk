import Restaurant from '../types/Restaurant';

export default function filterRestaurants(restaurants: Restaurant[], filterText: string): Restaurant[] {
	return restaurants.filter((restaurant) => restaurant.name.includes(filterText));
  }