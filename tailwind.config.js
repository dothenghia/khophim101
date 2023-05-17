/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'li-header': '#ededed',
				'li-bg-1': '#fefefe',
				'li-bg-2': '#f2f2f2',
				'li-bg-3': '#f0f2fa',
				'li-border': '#dbdeeb',

				'li-heading': '#1e202a',
				'li-subheading': '#63687e',
				'li-text': '#63687e',
				'li-primary': '#0ea5e9',
				
				

				'da-header': '#151414',
				'da-bg-1': '#424040',
				'da-bg-2': '#262525',
				'da-bg-3': '#1a1a1afa',
				'da-border': '#6f6f6f',

				'da-heading': '#fff',
				'da-subheading': '#9f9f9f',
				'da-text': '#e2e8f0',
				'da-primary': '#0ea5e9',
			}
		},
	},
	plugins: [],
}
