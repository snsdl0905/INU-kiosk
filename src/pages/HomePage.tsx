import {Link} from 'react-router-dom';

export default function Home() {
	return (
		<>
			<Link to={'/order'}>매장 주문</Link>
			<br/>
			<Link to={'/order'}>전체 포장</Link>
		</>
	);
}
