import React from 'react';
import { useNavigate } from 'react-router-dom';
import IClassNameProp from '../../interfaces/IClassNameProp';
import Typography from '../Typography/Typography';
import cssStyles from './ProjectCard.css';

interface IProjectCardProps {
	name: string;
	description: string;
	path: string;
	thumbnail: string;
	stack: string;
}

const ProjectCard: React.FC<IProjectCardProps & IClassNameProp> = (props) => {
	// Use of React-Router-Dom hooks
	const navigate = useNavigate();

	return (
		<div
			className={props.className}
			css={cssStyles.container}
			onClick={() => navigate(props.path)}
		>
			<Typography
				variant='h4'
				css={[cssStyles.text, { paddingBottom: 16 }]}
			>
				{props.name}
			</Typography>
			<Typography css={[cssStyles.text, { paddingBottom: 240 }]}>
				{props.description}
			</Typography>
			<img
				src={props.thumbnail}
				css={{
					border: 'none',
					position: 'absolute',
					objectFit: 'cover',
					width: ' 100%',
					height: '100%',
					top: 0,
					right: 0,
					left: 0,
					bottom: 0,
					zIndex: -2,
				}}
			/>
			<Typography
				css={{
					position: 'absolute',
					right: 16,
					bottom: 16,
					color: 'white',
				}}
			>
				{props.stack}
			</Typography>
		</div>
	);
};

export default ProjectCard;
