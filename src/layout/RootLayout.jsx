import Navbar from './Navbar';
import Footer from './Footer';

import Hero from '../pages/Hero';
import Product from '../pages/Product';
import DigitalItems from '../pages/DigitalItems';
import Signup from '../pages/Signup';

function RootLayout() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
				<Product />
				<DigitalItems />
				<Signup />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default RootLayout;
