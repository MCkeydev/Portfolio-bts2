import { css, Theme } from '@emotion/react';

const cssStyles = {
	header: (theme: Theme) =>
		css({
			'display': 'flex',
			'columnGap': 8,
			'fontSize': '1.25em',
			'fontWeight': 700,
			'position': 'relative',
			'paddingLeft': 32,
			'&:before': {
				content: "''",
				display: 'block',
				position: 'absolute',
				top: 0,
				left: 0,
				width: 20,
				height: 20,
				backgroundColor: theme.palette.text.primary,
				borderRadius: '50%',
			},
			'span': {
				fontSize: '1em',
			},
		}),
	content: (theme: Theme) =>
		css({
			'display': 'flex',
			'position': 'relative',
			'fontSize': '1.1em',
			'paddingLeft': 32,
			'paddingTop': 24,
			'paddingBottom': 24,
			'&:before': {
				content: "''",
				position: 'absolute',
				bottom: 0,
				left: 8,
				display: 'block',
				width: 5,
				height: 'calc(100% + 8px)',
				backgroundColor: theme.palette.text.primary,
			},
		}),
};

export default cssStyles;
