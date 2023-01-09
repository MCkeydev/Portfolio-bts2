const cssStyles = {
	imageContainer: {
		'position': 'relative',
		'overflow': 'hidden',
		'borderRadius': '12px',

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
	thumbnail: {
		objectFit: 'cover',
		zIndex: -2,
	},
};

export default cssStyles;
