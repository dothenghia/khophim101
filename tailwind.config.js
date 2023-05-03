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
				'li-border-light': '#dbdeeb',
				'li-border-dark': '#e5e7eb',

				'li-heading': '#1e202a',
				'li-subheading': '#63687e',
				'li-text': '#63687e',
				'li-primary': '#0ea5e9',
				
				
				'da-header': '#1e293b',
				'da-bg-1': '#0f172a',
				'da-bg-2': '#161f34',
				'da-bg-3': '#1e293b',
				'da-border-dark': '#333d4d',
				'da-border-light': '#e5e7eb',

				'da-heading': '#e2e8f0',
				'da-subheading': '#778394',
				'da-text': '#778394',
				'da-primary': '#0ea5e9',
			}
		},
	},
	plugins: [],
}
