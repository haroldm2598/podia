import { useSelector } from 'react-redux';
import InfoTitle from '../components/InfoTitle';
import GridContent from '../components/GridContent';
import { Fragment } from 'react';

function DigitalItems() {
	const { digitalContent } = useSelector((state) => state.podiaTemplate);

	return (
		<section className='py-10 productContent'>
			<InfoTitle
				title='What kinds of products can you sell with Podia?'
				description='Podia gives you the flexibility to sell whatever you want. That means you have more ways to grow your creator business.'
			/>

			{digitalContent.map((item, index) => (
				<Fragment key={index}>
					<div className='max-w-7xl mx-auto py-20 px-4 lg:px-0 flex flex-col lg:flex-row md:justify-between'>
						<GridContent
							categories={item.categories}
							title={item.title}
							description={item.description}
							button={item.button}
							imageSrc={item.imageSrc}
						/>
					</div>

					{item.ratingStars?.length > 0 && (
						<div className='max-w-5xl mx-auto px-4 md:px-0 flex flex-col items-center text-center [&>*]:mb-3'>
							<img src={item.ratingStars} alt='rating stars' className='w-44' />
							<p className='font-TemTiempos text-lg md:text-xl leading-8 md:leading-[2.188rem]'>
								{item.ratingDesc}
							</p>
							<h6 className='productDesc font-Inter text-base md:text-lg leading-7 md:leading-8 last:mb-0'>
								{item.ratingAuthor}
							</h6>
						</div>
					)}
				</Fragment>
			))}
		</section>
	);
}

export default DigitalItems;
