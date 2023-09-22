import Layout from './component/Layout';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
//import Cart from './pages/CartPage';
import Cart from './component/Cart';
const routes = [
	{element: <Layout />,
		children: [
			{path: '/', element: <HomePage />},
			{path: '/order', element: <OrderPage />},
			{path: '/cart', element: <Cart />},
		],
	},
];

export default routes;
