/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': 'rgba(119,158,198,90)',
				'primary-light': 'rgba(119,158,198,0.3)',
			}
		},
	},
	plugins: [],
}
