import { useSelector } from 'react-redux';
import Button from '../components/button';

function Navbar() {
	const { navLinks } = useSelector((state) => state.podiaTemplate);
	// https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
	// SCROLLING NAVBAR CHANGE COLOR

	// fixed top-0 left-[50%] translate-x-[-50%]
	return (
		<section className='max-w-7xl mx-auto py-5 px-4 lg:px-0 flex justify-between  bg-white'>
			<div className='flex items-center gap-10'>
				<h1 className='nav__logo font-Inter font-black text-3xl'>podia</h1>

				<ul className='pt-1 hidden lg:flex gap-10'>
					{navLinks.map((item, index) => (
						<li key={index} className='font-Inter text-xl'>
							{item}
						</li>
					))}
				</ul>
			</div>

			<div className='flex'>
				<Button
					name='Login'
					customStyle='mr-5 nav__btnLogin text-lg rounded-full'
				/>
				<Button
					name='Sign up free'
					customStyle='nav__btnSign text-lg rounded-full'
				/>
			</div>
		</section>
	);
}

export default Navbar;
