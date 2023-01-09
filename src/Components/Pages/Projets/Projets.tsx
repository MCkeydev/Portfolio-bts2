import React from 'react';
import Typography from '../../Typography/Typography';
import cssStyles from './Projets.css';
import projetsData from '../../../data/projets';
import ProjectCard from '../../ProjectCard/ProjectCard';
import Observer from '../../Observer/Observer';

const Projets: React.FC = (props) => {
	return (
		<div css={cssStyles.container}>
			<Typography
				variant='h1'
				css={{ paddingBottom: '32px' }}
			>
				Mes Projets
			</Typography>
			<Observer>
				{projetsData.projets.map((projet) => (
					<ProjectCard
						name={projet.name}
						description={projet.description}
						path={projet.path}
						thumbnail={projet.thumbnail}
						stack={projet.tags}
					/>
				))}
			</Observer>
		</div>
	);
};

export default Projets;
