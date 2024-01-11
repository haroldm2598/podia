import InfoTitle from '../components/InfoTitle';
import Button from '../components/button';
function Signup() {
	return (
		<section className='productContent py-10 px-4 lg:px-0'>
			<div className='signUp max-w-7xl mx-auto flex flex-col items-center rounded-lg [&>*]:mb-4'>
				<InfoTitle
					title='Get your free Podia account'
					description='Join the 150,000+ creators who use Podia to create websites, sell digital products, and build online communities.'
					customTitle='signUp__title'
					customDescription='signUp__description '
				/>
				<Button
					name='Sign up free'
					customStyle='signUp__btn text-lg border-transparent hover:border-transparent rounded-full last:mb-0'
				/>
			</div>
		</section>
	);
}

export default Signup;
