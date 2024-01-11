import { useSelector, useDispatch } from 'react-redux';
import { handleQuestionClick } from '../action/reducers/podiaSlice';

function Footer() {
	const { footerLinks, isQuestionClick } = useSelector(
		(state) => state.podiaTemplate
	);
	const dispatch = useDispatch();

	return (
		<section className='footerContent py-20'>
			<div className='max-w-7xl mx-auto flex flex-col justify-center gap-10'>
				<div className='hidden lg:block [&>*]:mb-4'>
					{footerLinks.map((item, index) => (
						<div key={index} className='px-5 lg:px-0 flex gap-5'>
							<h1 className='font-TemTiempos lg:font-Inter text-lg font-semibold leading-8'>
								{item.title}
							</h1>
							{item.desc?.map((descs, index) => (
								<h2
									key={index}
									className='footerContent__desc font-Inter text-lg leading-8 underline cursor-pointer opacity-80'
								>
									{descs}
								</h2>
							))}
						</div>
					))}
				</div>

				<div className='block lg:hidden'>
					{footerLinks.map((item, index) => (
						<div
							key={index}
							className={`${
								isQuestionClick === index ? 'collapse-open' : 'collapse-close'
							} collapse collapse-arrow px-5 lg:px-0 flex flex-col`}
							onClick={() => dispatch(handleQuestionClick(index))}
						>
							{/* <div className='collapse-title'> */}
							<h1 className='collapse-title font-TemTiempos lg:font-Inter text-lg font-semibold leading-8'>
								{item.title}
							</h1>
							{/* </div> */}

							<div
								className={`collapse-content ${
									isQuestionClick === index ? 'block' : 'hidden'
								}`}
							>
								{item.desc?.map((descs, index) => (
									<h2
										key={index}
										className='footerContent__desc font-Inter text-lg leading-8 underline cursor-pointer opacity-80'
									>
										{descs}
									</h2>
								))}
							</div>
						</div>
					))}
				</div>

				<div className='px-5 lg:px-0 flex gap-5'>
					<h1 className='font-Inter'>Podia Labs, Inc. © 2024</h1>
					<h2 className='footerContent__desc font-Inter underline cursor-pointer'>
						Terms
					</h2>
					<h2 className='footerContent__desc font-Inter underline cursor-pointer'>
						Privacy
					</h2>
				</div>
			</div>
		</section>
	);
}

export default Footer;
