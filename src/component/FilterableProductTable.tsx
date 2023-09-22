import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import Category from './Category';
import { restaurants } from '../data.json';

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleSearch = (text: string) => {
    setFilterText(text);
  };

  const filterRestaurants = () => {
    return restaurants.filter((restaurant) =>
      restaurant.category.includes(filterCategory) && restaurant.name.includes(filterText));
  } 

  const filteredRestaurant = filterRestaurants();
  console.log(filteredRestaurant)

  return (
    <>
      <h1>간단한 키오스크</h1>
      <SearchBar onSearch={handleSearch} />
      <Category setFilterCategory={setFilterCategory}/>
      <RestaurantTable filteredRestaurant={filteredRestaurant}/>
    </>
  );
}