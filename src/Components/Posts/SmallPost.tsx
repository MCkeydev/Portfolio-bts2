import React from 'react';
import Typography from '../Typography/Typography';
import cssStyles from './SmallPost.css';
import { IPostData } from '../../data/veille';
import { Interpolation, Theme } from '@emotion/react';

interface ISmallPost {
	data: IPostData;
}

const SmallPost: React.FC<ISmallPost> = (props) => {
	return (
		<>
			<a
				css={cssStyles.container}
				href={props.data.link}
				target='_blank'
			>
				<div css={cssStyles.imageContainer as Interpolation<Theme>}>
					<img
						src={props.data.thumbnail}
						css={cssStyles.thumbnail}
					/>
				</div>
				<Typography variant='body1'>{props.data.title}</Typography>
			</a>
		</>
	);
};

export default SmallPost;
