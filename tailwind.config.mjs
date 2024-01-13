/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': 'rgba(119,158,198,90)',
				'primary-light': 'rgba(119,158,198,0.3)',

				// Tech colors
				'javascript': '#f7df1e',
				'typescript': '#3178c6',
				'git': '#f05032',
				'html': '#e34f26',
				'css': '#1572b6',
				'sass': '#cc6699',
				'tailwindcss': '#06b6d4',
				'astro': '#bc52ee',
				'react': '#61dafb',
				'redux': '#764abc',
				'node': '#339933',
				'express': '#404040',
				'mongodb': '#47a248',
				'nextjs': '#404040',
			},
			keyframes: {
				'rotation': {
					'0%': {
						transform: 'rotateZ(0deg)',
					},
					'0%': {
						transform: 'rotateZ(360deg)',
					}
				},
				'floating': {
					'0%': {
						transform: 'translateY(0px)',
					},
					'50%': {
						transform: 'translateY(10px)',
					},
					'100%': {
						transform: 'translateY(0px)',
					}
				}
			},
			animation: {
				'rotation': 'rotation 7s infinite linear',
				'floating': 'floating 2.6s infinite linear',
			}
		},
	},
	plugins: [],
}
