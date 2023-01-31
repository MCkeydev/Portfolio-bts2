import { Theme } from '@emotion/react';

const cssStyles = {
	container: (theme: Theme) => ({
		borderTop: `1px solid ${theme.palette.divider}`,
		textAlign: 'center',
		margin: '32px auto 0 auto',
		padding: '40px 0 40px 0',
		width: '60%',
	}),
};

export default cssStyles;
