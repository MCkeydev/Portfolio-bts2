import React from 'react';
import Typography from '../Typography/Typography';
import cssStyles from './SmallPost.css';

const SmallPost: React.FC = () => {
	return (
		<>
			<div css={{ width: '25%', maxWidth: '25%' }}>
				<div css={cssStyles.imageContainer}>
					<img src='https://source.unsplash.com/random' />
				</div>
				<Typography variant='h6'>Titre de l'article</Typography>
			</div>
		</>
	);
};

export default SmallPost;
