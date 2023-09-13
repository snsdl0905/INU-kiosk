import Layout from './component/Layout';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';

const routes = [
	{element: <Layout />,
		children: [
			{path: '/', element: <HomePage />},
			{path: '/order', element: <OrderPage />},
		],

	},
];

export default routes;
