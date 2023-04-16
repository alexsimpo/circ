/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			sans: ['UncutSans', 'Helvetica', 'Arial', 'sans-serif'],
			display: ['EDNimpkish-Regular', 'Helvetica', 'Arial', 'sans-serif'],
		},
		fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.25rem' }],
			base: ['1rem', { lineHeight: '1.5rem' }],
			lg: ['1.125rem', { lineHeight: '1.75rem' }],
			xl: ['1.25rem', { lineHeight: '1.75rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
			'5xl': ['3rem', { lineHeight: '1' }],
			'6xl': ['3.75rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }],
		},
		extend: {
			minHeight: {
				'summary-experimental': 'calc(100svh - 5rem)',
				summary: 'calc(100vh - 5rem)',
			},
			borderRadius: {
				'4xl': '4rem',
			},
			aspectRatio: {
				'16/9': '16/9',
				'4/3': '4/3',
				'21/9': '21/9',
				'9/21': '9/21',
				'1/1': '1/1',
				'2/1': '2/1',
				'3/2': '3/2',
				'3/4': '3/4',
				'9/16': '9/16',
			},
		},
	},
	plugins: [],
};
