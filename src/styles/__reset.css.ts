import { css, Theme } from '@emotion/react';

const __reset = (theme: Theme) =>
	css({
		/* Overwrite the default to keep the scrollbar always visible */

		'WebkitScrollbar': {
			WebkitAppearance: 'none',
			width: 7,
		},
		'WebkitScrollbarThumb': {
			borderRadius: 4,
			backgroundColor: 'rgba(0,0,0,.5)',
			WebkitBoxShadow: '0 0 1px rgba(255,255,255,.5)',
		},
		[`a, abbr, acronym, address, big, button, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,
    html, body, div, span, applet, object, iframe, main,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, input, select, textarea,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, svg`]: {
			margin: 0,
			padding: 0,
			border: 'none',
			boxSizing: 'border-box',
			fontFamily: 'Gilroy Sans',
			color: theme.palette.text.primary,
			fontWeight: 400,
			fontSize: '1rem',
			outline: 'none',
			outlineColor: 'transparent',
		},
		'#root': {
			position: 'relative',
			minHeight: '100vh',
			transition: 'background-color .2s ease-in-out',
		},
		'body': {
			minHeight: '100vh',
		},
		'button': {
			'cursor': 'pointer',
			'border': 'none',
			'outline': 'none',
			'backgroundColor': 'transparent',
			'&:hover': {
				border: 'none',
				outline: 'none',
			},
			'&focus': {
				outline: 'none',
			},
			'&:focus-visible': {
				outline: 'none',
			},
		},
		'.observerHidden': {
			transform: 'translateY(40px)',
			opacity: 0,
		},
	});

export default __reset;
