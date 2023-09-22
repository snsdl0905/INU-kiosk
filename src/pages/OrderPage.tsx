import Cart from '../component/Cart';
import FilterableProductTable from '../component/FilterableProductTable';
import {Link} from 'react-router-dom';

export default function Order() {
	return (
		<>
			<FilterableProductTable />
			<Link to={'/cart'}>장바구니</Link>
		</>
	);
}
