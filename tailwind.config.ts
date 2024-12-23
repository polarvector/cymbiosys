import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#B29D7B',
				secondary: '#FFECCE',
			},
			keyframes: {
				'scrolling-banner': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-50% - var(--gap)/2))' },
				},
				'scrolling-banner-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-50% - var(--gap)/2))' },
				},
			},
			animation: {
				'scrolling-banner': 'scrolling-banner var(--duration) linear infinite',
				'scrolling-banner-vertical':
					'scrolling-banner-vertical var(--duration) linear infinite',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
export default config;
