import { restaurants } from '../data.json';
import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
  filteredRestaurant: Restaurant[];
}

export default function RestaurantTable({ filteredRestaurant }: RestaurantTableProps) {

  return (
    <div>
      {filteredRestaurant.map((restaurant) => (
        <RestaurantRow key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}