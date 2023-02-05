import React from 'react';
import cssStyles from './Footer.css';
import { Interpolation } from '@emotion/serialize';
import { Theme } from '@emotion/react';

const Footer: React.FC = (props) => {
	return (
		<footer css={cssStyles.container as Interpolation<Theme>}>
			{'Courréjou Matthieu  |  Portfolio 2022  |  Tous droits réservés'}
		</footer>
	);
};

export default Footer;
