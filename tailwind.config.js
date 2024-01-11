/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			Inter: ['Inter', 'sans-serif'],
			TemTiempos: ['TemTiemposHeadline', 'sans-serif']
		}
	},
	plugins: [require('daisyui')]
};
