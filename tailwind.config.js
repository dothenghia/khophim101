/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: [
		'./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
		'./node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'li-header': '#ededed',
				'li-bg-1': '#e9ebee',
				'li-bg-2': '#f7f7f7',
				'li-bg-3': '#ffffff',
				'li-border': '#c9c9c9',

				'li-heading': '#121212',
				'li-subheading': '#545454',
				'li-text': '#111',
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
			},
			boxShadow: {
				'inner-bottom': '0px -149px 65px -85px rgba(0,0,0,0.8) inset',
			}
		},
	},
	plugins: [
        require('flowbite/plugin')
    ],
}
