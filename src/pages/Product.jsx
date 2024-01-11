import { useSelector } from 'react-redux';
import InfoTitle from '../components/InfoTitle';

function Product() {
	const { productContent } = useSelector((state) => state.podiaTemplate);

	return (
		<section className='py-10 productContent'>
			<InfoTitle
				title='All you have to do is make the product. Podia takes care of the details for you.'
				description='Podia lets you make your sales page, take payments, and give your customers access all in one place. Host and sell your products without needing to figure out a handful of new tools.'
			/>

			<div className='max-w-7xl mx-auto my-10 px-5 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-10'>
				{productContent.map((item, index) => (
					<div
						key={index}
						className='flex flex-col items-center text-center gap-2'
					>
						<img src={item.imageSrc} alt='product svg' />
						<h1 className='font-TemTiempos text-xl'>{item.title}</h1>
						<p className='productDesc font-Inter text-base leading-[1.688rem]'>
							{item.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Product;
