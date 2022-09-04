module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			'xxs': '200px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px', // min-width
		},
		extend: {
			backgroundImage: {
				'bk-1': "url('/images/card-bg-1.jpg')",
				'bk-2': "url('/images/card-bg-2.jpg')",
				'bk-3': "url('/images/card-bg-3.jpg')"
			}
		},
		fontFamily: {
			almendra: ['Almendra', 'serif'],
			poppins: ['Poppins', 'sans-serif'],
			rubik: ['Rubik', 'sans-serif'],
			sanchez: ['Sanchez', 'serif'],
			josef: ['Josefin Sans', 'sans-serif']
		},
	},
	plugins: [],
};
