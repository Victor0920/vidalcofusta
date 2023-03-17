/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		screens: {
			sm: { max: '768px' },
			// => @media (max-width: 768px) { ... }

			lg: { min: '768px' }
			// => @media (min-width: 768) { ... }
		}
	},
	plugins: []
};
