import React, { PropsWithChildren } from 'react';
import Observer from '../Observer/Observer';
import Timeline from '../Timeline/Timeline';
import Typography from '../Typography/Typography';

const Parcours: React.FC<PropsWithChildren> = (props) => {
	return (
		<div>
			<Typography
				variant='h1'
				gutterBottom
			>
				Mon Parcours
			</Typography>
			<div css={{ display: 'flex', columnGap: 80 }}>
				<Timeline css={{ paddingBottom: 48, width: '80%' }} />
				<Timeline
					css={{ paddingBottom: 48, width: '80%' }}
					type='professionnel'
				/>
			</div>
		</div>
	);
};

export default Parcours;
