import React from 'react';
import cssStyles from './BigPost.css';
import IClassNameProp from '../../interfaces/IClassNameProp';
import Typography from '../Typography/Typography';

const BigPost: React.FC<IClassNameProp> = (props) => {
	return (
		<div
			css={cssStyles.container}
			className={props.className}
		>
			<Typography
				variant='h2'
				css={{ color: 'white', zIndex: 2 }}
			>
				{'Article numéro 1'}
			</Typography>
			<img
				src='https://source.unsplash.com/random'
				css={cssStyles.thumbnail}
			/>
		</div>
	);
};

export default BigPost;
