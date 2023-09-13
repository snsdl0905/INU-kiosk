import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Order from './pages/order';

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/order' element={<Order />} />
		</Routes>
	);
}
