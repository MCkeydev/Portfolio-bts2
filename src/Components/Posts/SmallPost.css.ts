import { css } from '@emotion/react';

const cssStyles = {
	container: {
		flex: '0 0 50%',
		paddingLeft: '8px',
		paddingRight: '8px',
		cursor: 'pointer',
		textDecoration: 'none',
	},
	imageContainer: {
		'position': 'relative',
		'overflow': 'hidden',
		'borderRadius': '12px',

		'&:hover': {
			img: {
				transform: 'scale(1.1)',
			},
		},

		'&:before': {
			position: 'absolute',
			content: "''",
			left: 0,
			top: 0,
			width: '100%',
			height: '100%',
			background:
				' linear-gradient(0deg, hsla(0, 0%, 24%, 1) 0%, hsla(0, 0%, 100%, 0) 100%)',
			zIndex: -1,
		},
	},
	thumbnail: css({
		position: 'relative',
		width: '100%',
		height: '250px',
		objectFit: 'cover',
		verticalAlign: 'bottom',
		zIndex: -2,
		transition: 'transform 0.2s ease-in-out',
	}),
};

export default cssStyles;
