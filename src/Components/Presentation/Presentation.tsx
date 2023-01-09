import React from 'react';
import Observer from '../Observer/Observer';
import Typography from '../Typography/Typography';
import cssStyles from './Presentation.css';

const Presentation: React.FC = () => {
	return (
		<div css={[cssStyles.container]}>
			<Observer animation={{ duration: 1.5 }}>
				<div css={[cssStyles.imageContainer]}>
					<Typography
						variant='h3'
						css={[cssStyles.text]}
					>
						Courréjou Matthieu
					</Typography>
					<Typography
						variant='subtitle1'
						css={[cssStyles.text]}
					>
						Developpeur Full-Stack - 2nd Année de BTS SIO SLAM
					</Typography>
					<img
						src='/images/matthieu.jpg'
						css={[cssStyles.image]}
					/>
				</div>
			</Observer>
			<div css={[cssStyles.presentationContainter]}>
				<Observer animation={{ delay: 0.75 }}>
					<div>
						<Typography
							variant='h4'
							css={cssStyles.title}
							gutterBottom
						>
							Qui suis-je ?
						</Typography>
						<Typography
							variant='body1'
							gutterBottom
						>
							{`Bonjour, je m'appelle Matthieu Courréjou, j'ai 23 ans et la programmation est l'une de mes passions !
                            J'ai pour objectif d'évoluer professionnellement en tant que développeur web-full stack à la suite de mes études,
                            et dans la continuité logique de mon alternance à Linkweb, Agen, 47000.

                            

                            `}
						</Typography>
					</div>
					<div>
						<Typography
							variant='h4'
							css={cssStyles.title}
							gutterBottom
						>
							Mon Parcours
						</Typography>
						<Typography variant='body1'>
							{`Aujourd'hui, je suis en BTS SIO en alternance pour appronfondir mes connaissances sur l'informatique (pour être mieux préparé à de futures études) et acquérir de l'expérience professionnelle pour le futur.

                            Le BTS SIO se fait, comme tous les BTS, sur deux ans et propose deux spécialités : Solutions d'Infrastructure, Systèmes et Réseaux (SISR, typée réseau) et Solutions Logicielles et Applications Métiers (SLAM, typée développement).

                            `}
						</Typography>
					</div>
					<a
						css={{
							'textDecoration': 'none',
							'backgroundColor': 'transparent',
							'borderRadius': 50,
							'border': '1px solid black',
							'display': 'inline-flex',
							'alignItems': 'center',
							'justifyContent': 'center',
							'alignSelf': 'flex-start',
							'marginTop': 16,
							'padding': '16px 16px',
							'transition': 'all .15s ease-in-out',
							'cursor': 'pointer',

							'&:hover': {
								color: 'white',
								backgroundColor: 'black',
							},
						}}
						href={'/Formation'}
					>
						EN SAVOIR PLUS
					</a>
				</Observer>
			</div>
		</div>
	);
};

export default Presentation;
