const cssStyles = {
	container: {
		'position': 'relative',
		'borderRadius': '12px',
		'overflow': 'hidden',
		'flex': '0 0 55%',
		'maxHeight': '596px',
		'height': '596px',
		'padding': 32,

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
	},
};

export default cssStyles;
