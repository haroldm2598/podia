import { createSlice } from '@reduxjs/toolkit';

import starRatingImg from '../../assets/images/start_rating.png';
import digitalHeroImg from '../../assets/images/digital_products-hero.png';
import digitalCoursesImg from '../../assets/images/digital_products-courses.png';
import digitalDownloadImg from '../../assets/images/digital_products-downloads.png';
import digitalCoachingImg from '../../assets/images/digital_products-coaching.png';
import digitalWebinarsImg from '../../assets/images/digital_products-webinars.png';

import productCart from '../../assets/images/digital_products-icon-cart.svg';
import productLogin from '../../assets/images/digital_products-icon-login.svg';
import productUpload from '../../assets/images/digital_products-icon-upload.svg';

const initialState = {
	value: 0,
	navLinks: ['Website', 'Email', 'Sell', 'Pricing', 'Resources'],
	footerLinks: [
		{
			title: 'Platform',
			desc: [
				'Pricing',
				'Sign up free',
				'Community',
				'Website builder',
				'Digital products',
				'Email marketing'
			]
		},
		{
			title: 'Support',
			desc: [
				'Contact us',
				'Help center',
				'Hire a Podia pro',
				'Creator community',
				'Podia 101'
			]
		},
		{
			title: 'Features',
			desc: [
				'Online courses',
				'Downloads',
				'Webinars',
				'Coaching',
				'All features'
			]
		},
		{
			title: 'Compare',
			desc: [
				'Kajabi',
				'Teachable',
				'Thinkific',
				'Patreon',
				'Gumroad',
				'Podia alternatives'
			]
		},
		{
			title: 'Resources',
			desc: [
				'Examples',
				'Demo',
				'Creator stories',
				'Blog',
				'Free tools',
				'All resources'
			]
		},
		{
			title: 'Podia',
			desc: [
				'Jobs',
				'About',
				'Branding',
				'Reviews',
				'Refer-a-creator',
				'Affiliates'
			]
		},
		{
			title: 'Social',
			desc: ['Twitter', 'Facebook', 'Instagram', 'YouTube']
		}
	],
	heroContent: [
		{
			imageSrc: digitalHeroImg,
			categories: 'DIGITAL PRODUCTS',
			title:
				'Sell online courses, coaching sessions, webinars, workshops, ebooks, and anything you can think of on Podia',
			description:
				'Get everything you need in one place that you own. Podia takes care of hosting products, taking payments, and getting products to your customers. And you always control your own work.',
			button: 'Get your free account'
		}
	],
	productContent: [
		{
			imageSrc: productCart,
			title: 'Checkout and sales are handled for you',
			description:
				'You don’t have to figure out a bunch of tools or website embeds. Just connect a payment provider and your Podia site takes care of payments for you.'
		},
		{
			imageSrc: productLogin,
			title: 'Your customers log in, and your products are there for them',
			description:
				'Your Podia site handles access to products for you. Everything is in one place. When your customers buy a product, they get a log in. After that, they can see all the products they’ve bought from you.'
		},
		{
			imageSrc: productUpload,
			title: 'Upload your product. Make your sales page. Done.',
			description:
				'You could sell a digital product by this afternoon. Podia handles hosting, sales pages, checkout, and delivery. All you need is something to sell.'
		}
	],
	digitalContent: [
		{
			imageSrc: digitalCoursesImg,
			categories: 'ONLINE COURSES',
			title: 'Beautiful online courses you can build in moments',
			description:
				'Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you.',
			button: 'Learn more about courses',
			ratingDesc:
				'I’ve wanted to offer e-courses for a while but always felt overwhelmed with how to set it up. Podia has made it super easy.',
			ratingAuthor: '— Joy Cho, Oh Joy! Academy',
			ratingStars: starRatingImg
		},
		{
			imageSrc: digitalDownloadImg,
			categories: 'DIGITAL DOWNLOADS',
			title: 'Ebooks, templates, and any file type you can think of',
			description:
				'Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type.',
			button: 'Learn more about downloads',
			ratingDesc:
				'We didn’t have to stress about technical details or custom coding. Using Podia made selling our first eBook quick, efficient, and fun.',
			ratingAuthor: '— Matt & Steph, Plant-based food bloggers',
			ratingStars: starRatingImg
		},
		{
			imageSrc: digitalCoachingImg,
			categories: 'COACHING',
			title:
				'One-on-one coaching and consultations, with billing managed for you',
			description:
				'Sometimes your students want one-on-one attention. Podia makes it easy for you to charge for coaching sessions and consultations.',
			button: 'Learn more about coaching',
			ratingDesc:
				'Podia just works. It’s easy to use and includes everything you need to sell digital products. I’ve tried all the alternatives, and Podia is hard to beat.',
			ratingAuthor: '— Shawn Leamon, Divorce and Your Money',
			ratingStars: starRatingImg
		},
		{
			imageSrc: digitalWebinarsImg,
			categories: 'WEBINARS',
			title:
				'Webinars and workshops with registration and payment in one place',
			description:
				'How can you charge for your webinars and workshops? Do it from your Podia site. Set up a paid webinar product and your customers can register straight from your website.',
			button: 'Learn more about webinars'
		}
	],
	isQuestionClick: null
};

const dataSlice = createSlice({
	name: 'podia',
	initialState,
	reducers: {
		handleQuestionClick: (state, action) => {
			if (state.isQuestionClick === action.payload) {
				state.isQuestionClick = null;
			}

			state.isQuestionClick = action.payload;
		}
	}
});

export const { handleQuestionClick } = dataSlice.actions;
export default dataSlice.reducer;
