import React from 'react';
import Typography from '../../Typography/Typography';
import cssStyles from './Projets.css';
import projetsData from '../../../data/projets';
import ProjectCard from '../../ProjectCard/ProjectCard';
import Observer from '../../Observer/Observer';
import SmallNav from '../../SmallNav/SmallNav';
import { useNavigate } from 'react-router-dom';

const Projets: React.FC = (props) => {
	const [active, setActive] = React.useState(projetsData[0]);
	const navigate = useNavigate();

	return (
		<div css={cssStyles.container}>
			<Typography
				variant='h1'
				css={{ paddingBottom: '32px' }}
			>
				Mes Projets
			</Typography>
			<SmallNav
				active={active.name}
				setActive={setActive}
				links={projetsData}
				css={{ paddingBottom: 16 }}
			/>
			{active.items.map((projet) => (
				<Observer>
					<ProjectCard
						name={projet.name}
						description={projet.description}
						path={projet.path}
						thumbnail={projet.thumbnail}
						stack={projet.tags}
					/>
				</Observer>
			))}
		</div>
	);
};

export default Projets;
