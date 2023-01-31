import React from 'react';
import cssStyles from './Footer.css';

const Footer: React.FC = (props) => {
	return (
		<footer css={cssStyles.container}>
			{
				'Courréjou Matthieu | Portfolio 2022 | Tous droits réservés (En fait en france les droits d"auteur sont sui generis, cela signifie qu"il est absolument pas nécessaire de préciser "tous droits réservés" cependat ça fait vachement pro du coup je le met quand même, voila voila)'
			}
		</footer>
	);
};

export default Footer;
