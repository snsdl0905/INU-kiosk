import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

export default function FilterableProductTable() {
	return (
		<>
			<h1>간단한 키오스크</h1>
			<SearchBar />
			<RestaurantTable />
		</>
	);
}
