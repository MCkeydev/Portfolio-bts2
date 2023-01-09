import React from 'react';
import Typography from '../Typography/Typography';
import parcours from '../../data/parcours';
import cssStyles from './Timeline.css';
import Tools from '../Utils/Tools';
import IClassNameProp from '../../interfaces/IClassNameProp';
import Observer from '../Observer/Observer';

interface ITimelineProps {
	type?: 'scolaire' | 'professionnel';
}

const Timeline: React.FC<ITimelineProps & IClassNameProp> = ({
	type = 'scolaire',
	...props
}) => {
	return (
		<div className={props.className}>
			<Typography
				variant='h3'
				gutterBottom
			>
				{`Parcours ${Tools.capitalizeString(type)}`}
			</Typography>
			{parcours[type].map((item, index) => (
				<React.Fragment key={index}>
					<Observer>
						<span css={cssStyles.header}>
							<span>{item.periode}</span>
							{item.lieu}
						</span>
						<p css={cssStyles.content}>{item.description}</p>
					</Observer>
				</React.Fragment>
			))}
		</div>
	);
};

export default Timeline;
