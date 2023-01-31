const cssStyles = {
	container: {
		'position': 'relative',
		'borderRadius': '12px',
		'overflow': 'hidden',
		'flex': '0 0 55%',
		'maxHeight': '596px',
		'height': '596px',
		'padding': 32,
		'textDecoration': 'none',

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
	thumbnail: {
		position: 'absolute',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		zIndex: -2,
		transition: 'transform 0.2s ease-in-out',
	},
};

export default cssStyles;
