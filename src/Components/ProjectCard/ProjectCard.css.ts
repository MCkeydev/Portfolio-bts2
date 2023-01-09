import { css, Theme } from '@emotion/react';

const cssStyles = {
	container: (theme: Theme) =>
		css({
			'position': 'relative',
			'width': '100%',
			'padding': 16,
			'borderRadius': 16,
			'overflow': 'hidden',
			'zIndex': 1,
			'cursor': 'pointer',

			'img': {
				transition: 'transform .5s ease-in-out',
			},

			'&:before': {
				position: 'absolute',
				content: "''",
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
				background:
					'linear-gradient(0deg, hsla(0, 0%, 24%, 1) 0%,  hsla(0, 0%, 24%, 0.4) 100%)',
				zIndex: -1,
			},
			'&:hover': {
				img: {
					transform: 'scale(1.1)',
				},
			},
		}),
	text: (theme: Theme) =>
		css({
			color: 'white',
		}),
};

export default cssStyles;
