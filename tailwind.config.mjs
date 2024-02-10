/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': 'rgba(119,158,198,90)',
				'primary-light': 'rgba(119,158,198,0.6)',

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
				'bootstrap': '#7952b3',
				'materialui': '#007fff',
				'reactquery': '#ff4154',
				'reactrouter': '#ca4245',
				'chartjs': '#ff6384',
				'axios': '#5a29e4',
				'mongoose': '#880000',
				'nextintl': '#5fc3e7',
				'tremor': '#1e293b',
				'dndkit': '#000000',
				'jwt': '#000000',
				'reacthookform': '#ec5990',
				'zod': '#3e67b1',
				'resend': '#000000',
				'sonner': '#fff',
				'tailwindmerge': '#6366F1',
				'lucidereact': '#1b1b1f',
				'shadcnui': '#000000',
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
				},
				'slide': {
					'0%': {
					  	transform: 'translateX(0%)',
					},
					'100%': {
						transform: 'translateX(-450px)',
					}
				},
				'loader-time': {
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'loader-mask': {
					'0%': {
						background: '#5996d5',
						transform: 'rotate(0deg)'
					},
					'50%': {
						background: '#5996d5',
						transform: 'rotate(-180deg)'
					},
					'50.01%': {
						background: '#fafafa',
						transform: 'rotate(0deg)'
					},
					'100%': {
						background: '#fafafa',
						transform: 'rotate(-180deg)'
					}
				},
			},
			animation: {
				'rotation': 'rotation 7s infinite linear',
				'floating': 'floating 2.6s infinite linear',
				'slide': 'slide 15s infinite linear',
				'loader-time': 'loader-time 3s linear steps(800,start)',
				'loader-mask': 'loader-mask 3s steps(250,start)',
			}
		},
	},
	plugins: [],
}
