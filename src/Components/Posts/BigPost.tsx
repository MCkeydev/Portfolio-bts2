import React from 'react';
import cssStyles from './BigPost.css';
import IClassNameProp from '../../interfaces/IClassNameProp';
import Typography from '../Typography/Typography';
import { IPostData } from '../../data/veille';
import { Interpolation, Theme } from '@emotion/react';

interface IBigPostProps {
	data: IPostData;
}

const BigPost: React.FC<IClassNameProp & IBigPostProps> = (props) => {
	return (
		<a
			href={props.data.link}
			target='_blank'
			css={cssStyles.container as Interpolation<Theme>}
			className={props.className}
		>
			<Typography
				variant='h2'
				css={{ color: 'white', zIndex: 2 }}
			>
				{props.data.title}
			</Typography>
			<img
				src={props.data.thumbnail}
				css={cssStyles.thumbnail as Interpolation<Theme>}
			/>
		</a>
	);
};

export default BigPost;
