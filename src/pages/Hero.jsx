import { useSelector } from 'react-redux';
import Button from '../components/button';
import { Fragment } from 'react';

function Hero() {
	const { heroContent } = useSelector((state) => state.podiaTemplate);

	return (
		<section className='heroContent'>
			<div className='max-w-7xl mx-auto py-20 px-4 lg:px-0 flex flex-col lg:flex-row md:justify-between'>
				{heroContent.map((item, index) => (
					<Fragment key={index}>
						<div className='order-2 md:order-1 w-full md:w-[45%] [&>*]:mb-2'>
							<h6 className='heroContent__categories font-Inter text-xs font-semibold'>
								{item.categories}
							</h6>
							<h1 className='font-TemTiempos text-3xl lg:text-5xl leading-[2.75rem] lg:leading-[4.125rem] font-semibold'>
								{item.title}
							</h1>
							<p className='font-Inter text-lg leading-8 lg:leading-9'>
								{item.description}
							</p>
							<Button
								name={item.button}
								customStyle='last:mb-0 heroContent__btn font-Inter text-lg font-semibold rounded-full'
							/>
						</div>
						<div className='order-1 md:order-2 w-full md:w-[48%]'>
							<img
								src={item.imageSrc}
								alt='image source'
								className='w-full object-cover rounded-lg'
							/>
						</div>
					</Fragment>
				))}
			</div>
		</section>
	);
}

export default Hero;
