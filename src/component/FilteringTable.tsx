import { restaurants } from '../data.json';
import RestaurantRow from './RestaurantRow';

export default function FilteringTable({ filterText }: { filterText: string }) {
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.category.includes(filterText)
  );

  return (
    <div>
      {filteredRestaurants.map((restaurant) => (
        <RestaurantRow key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}