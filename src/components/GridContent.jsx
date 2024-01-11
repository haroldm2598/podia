import Button from './button';

function GridContent({ categories, title, description, imageSrc, button }) {
	return (
		<>
			<div className='order-2 md:order-1 w-full md:w-[45%] [&>*]:mb-2'>
				<h6 className='heroContent__categories font-Inter text-xs font-semibold'>
					{categories}
				</h6>
				<h1 className='font-TemTiempos text-2xl lg:text-5xl leading-7 lg:leading-[4.125rem] font-semibold'>
					{title}
				</h1>
				<p className='font-Inter text-base lg:text-lg leading-7 lg:leading-9'>
					{description}
				</p>
				<Button
					name={button}
					customStyle='last:mb-0 heroContent__btn font-Inter text-lg font-semibold rounded-full'
				/>
			</div>
			<div className='order-1 md:order-2 w-full md:w-[48%]'>
				<img
					src={imageSrc}
					alt='image source'
					className='w-full object-cover rounded-lg'
				/>
			</div>
		</>
	);
}

export default GridContent;
