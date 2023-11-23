const antPrefix = 'ant';

const antdPresetColors = [
  'primary',
  'pink',
  'magenta',
  'red',
  'volcano',
  'orange',
  'yellow',
  'gold',
  'cyan',
  'lime',
  'green',
  'blue',
  'geekblue',
  'purple'
];

const postfixes = ['base', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const antdPalette = {
  white: '#fff',
  black: '#000',
};
for (const color of antdPresetColors) {
  for (const postfix of postfixes) {
    const pf = postfix === 'base' ? '' : `-${postfix}`
    antdPalette[`${color}${pf}`] = `var(--${antPrefix}-${color}-${postfix})`;
  }
}

// gray
for (const postfix of ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) {
  const pf = !postfix ? '' : `-${postfix}`
  antdPalette[`gray${pf}`] = `var(--${antPrefix}-gray${pf})`;
}

const antdThemeColors = {
  ...antdPalette,

	primary: `var(--${antPrefix}-primary-color)`,
	'primary-hover': `var(--${antPrefix}-primary-color-hover)`,
	'primary-active': `var(--${antPrefix}-primary-color-active)`,
	'primary-outline': `var(--${antPrefix}-primary-color-outline)`,

	info: `var(--${antPrefix}-info-color)`,

	success: `var(--${antPrefix}-success-color)`,
	'success-hover': `var(--${antPrefix}-success-color-hover)`,
	'success-active': `var(--${antPrefix}-success-color-active)`,
	'success-outline': `var(--${antPrefix}-success-color-outline)`,

	warning: `var(--${antPrefix}-warning-color)`,
	'warning-hover': `var(--${antPrefix}-warning-color-hover)`,
	'warning-active': `var(--${antPrefix}-warning-color-active)`,
	'warning-outline': `var(--${antPrefix}-warning-color-outline)`,

	error: `var(--${antPrefix}-error-color)`,
	'error-hover': `var(--${antPrefix}-error-color-hover)`,
	'error-active': `var(--${antPrefix}-error-color-active)`,
	'error-outline': `var(--${antPrefix}-error-color-outline)`,

	highlight: `red`,
	normal: `#d9d9d9`,
}


const antdBreakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1600px',
};


/** @type {import('tailwindcss').Config} */
module.exports = {
	// @see https://tailwindcss.com/docs/upcoming-changes
  corePlugins: {
    preflight: false,
  },
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
  // content: ["./src/**/*.{html,js}"],
	content: [
    "./index.html",
    "./src/**/*.{html,js,tsx,jsx}"
  ],
	theme: {
		colors: antdThemeColors,
    screens: antdBreakpoints,
	},
	variants: {},
	plugins: [
		require('tailwindcss'),
		require('precss'),
		require('autoprefixer')
	]
}

