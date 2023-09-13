import Category from '../component/Category';
import MenuList from '../component/MenuList';
import SearchBar from '../component/SearchBar';

export default function KioskMenu() {
	return (
		<>
			<h1>간단한 키오스크</h1>
			<SearchBar />
			<Category />
			<MenuList />
		</>
	);
}
