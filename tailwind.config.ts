import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
			14: '14',
			15: '15',
			16: '16',
		},
		extend: {},
	},

	plugins: [typography, forms, containerQueries, aspectRatio],
} satisfies Config;
