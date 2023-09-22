import RestaurantTable from './RestaurantTable';
import './style.css';

type CategoryProps = {
	setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
  };

export default function Category({setFilterCategory}: CategoryProps) {
	const handleCategoryClick = (category: string) => {
		setFilterCategory(category);
	};	

	return (
		<div className='category'>
			<ul>
				<li>전체보기</li>
				<li onClick={() => handleCategoryClick('한식')}>한식</li>
				<li onClick={() => handleCategoryClick('중식')}>중식</li>
				<li onClick={() => handleCategoryClick('일식')}>일식</li>
			</ul>
		</div>
	);
}
