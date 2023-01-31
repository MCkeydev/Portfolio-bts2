import React from 'react';
import cssStyles from './Footer.css';
import { Interpolation } from '@emotion/serialize';
import { Theme } from '@emotion/react';

const Footer: React.FC = (props) => {
	return (
		<footer css={cssStyles.container as Interpolation<Theme>}>
			{
				'Courréjou Matthieu | Portfolio 2022 | Tous droits réservés (En fait en france les droits d"auteur sont sui generis, cela signifie qu"il est absolument pas nécessaire de préciser "tous droits réservés" cependat ça fait vachement pro du coup je le met quand même, voila voila)'
			}
		</footer>
	);
};

export default Footer;
