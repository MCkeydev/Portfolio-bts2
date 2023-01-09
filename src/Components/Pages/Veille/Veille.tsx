import React from 'react';
import Typography from '../../Typography/Typography';
import Observer from '../../Observer/Observer';
import BigPost from '../../Posts/BigPost';
import cssStyles from './Veille.css';
import SmallPost from '../../Posts/SmallPost';

const Veille: React.FC = () => {
	return (
		<div css={cssStyles.container}>
			<Observer>
				<Typography
					variant='h1'
					gutterBottom
				>
					Veille Technologique
				</Typography>
				<Typography
					variant='body1'
					gutterBottom
				>
					{`La veille technologique consiste à s'informer en continu sur les nouveautés du secteur informatique, les inventions des concurrents   ainsi que les nouvelles technologies et ce dans le but d'être le meilleur dans son domaine.
                    `}
				</Typography>
				<Typography
					variant='body1'
					gutterBottom
				>
					{`En tant que développeur, j'ai eu l'occasion d'utiliser des`}{' '}
					<Typography
						component={'span'}
						css={{ fontWeight: 700 }}
					>
						{' '}
						Intelligences Artificielles{' '}
					</Typography>{' '}
					{`en milieu professionnel. Ces Outils sont de plus en plus répandus, et risquent d'avoir un impact énorme sur notre société. C'est pourquoi il est important d'effectuer une veille afin de pouvoir s'adapter aux changements que les IA risquent d'engranger.`}
				</Typography>
				<div css={{ display: 'flex', paddingTop: 32 }}>
					<BigPost />
					<div css={{ display: 'flex' }}>
						<SmallPost />
						<SmallPost />
						<SmallPost />
						<SmallPost />
					</div>
				</div>
			</Observer>
		</div>
	);
};

export default Veille;
