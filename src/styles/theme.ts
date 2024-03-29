import { Theme } from '@emotion/react';
import colors from './colors';

const defaultTheme: Theme = {
	spaces: {
		small: '4px',
		medium: '8px',
		large: '16px',
	},
	size: {
		large: '656px',
	},
	spacing: (value: number) =>
		`calc(${defaultTheme.spaces.medium} * ${value})`,
	borderRadius: 4,
	typography: {
		caption: '0.75rem',
		body2: '0.875rem',
		body1: '1rem',
		h6: '1.25em',
		h5: '1.5rem',
		h4: '2.125rem',
		h3: '3rem',
		h2: '3.75rem',
		h1: '6rem',
	},
	transition: 'all .2s ease-in-out',
	shadows: {
		shadow1: '10px 5px 5px red',
		// etc.
	},
	zIndex: {
		appBar: 1100,
		drawer: 1200,
		modal: 1300,
		tooltip: 1500,
	},
	colors: {
		...colors,
	},
	palette: {
		primary: {
			main: '#263544',
			contrastText: '#ffffff',
		},
		secondary: {
			main: colors.blue.blue10,
			contrastText: '#ffffff',
		},
		link: 'royalblue',
		background: 'whitesmoke',
		error: colors.redDark.red9,
		warning: '#f7c74a',
		success: '#3D8B2D',
		text: {
			primary: '#272727',
			secondary: '#3E3E3E',
			contrast: 'white',
		},
		divider: 'rgba(0, 0, 0, 0.08)',
		footer: '#3a3a3a',
	},
};

export const darkTheme = {
	palette: {
		primary: {
			main: '#263544',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#7289da',
			contrastText: '#ffffff',
		},
		link: 'royalblue',
		background: '#282b30',
		error: colors.redDark.red9,
		warning: '#f7c74a',
		success: '#82D173',
		text: {
			primary: 'white',
			secondary: 'whitesmoke',
			contrast: 'grey',
		},
		divider: 'rgba(255, 255, 255, 0.08)',
		footer: '#3a3a3a',
	},
};

export default defaultTheme;
