import React from 'react';
import Observer from '../Observer/Observer';
import Typography from '../Typography/Typography';
import cssStyles from './Presentation.css';
import BoxLink from '../BoxLink/BoxLink';
import { AiOutlineLinkedin, AiOutlineFileText } from 'react-icons/ai';
import { MdOutlineSchool } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const Presentation: React.FC = () => {
	const navigate = useNavigate();

	return (
		<>
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
                            J'ai pour objectif d'évoluer professionnellement en tant que développeur web-full stack à la suite de mes études.
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
								{`Aujourd'hui, je suis en BTS SIO (Services Informatiques aux Organisations) en alternance pour approfondir mes connaissances en développement logiciel (pour être mieux préparé à de futures poursuites d'études) et acquérir de l'expérience professionnelle à travers de la formule en apprentissage.

                            Le BTS SIO se fait, comme tous les BTS, sur deux ans et propose deux spécialités : Solutions d'Infrastructure, Systèmes et Réseaux (SISR, typée réseau) et Solutions Logicielles et Applications Métiers (SLAM, typée développement).
							Je me suis orienté vers cette dernière, vouant une appétence particulière au domaine du développement logiciel.
                            `}
							</Typography>
						</div>
						<div
							css={{
								display: 'flex',
								columnGap: '32px',
								height: 'max',
								paddingTop: '40px',
							}}
						>
							<a
								href={
									'https://www.linkedin.com/in/matthieu-c-038657205/'
								}
								target='_blank'
								id='linkedin'
								data-tooltip-content='Consulter mon profil Linkedin'
							>
								<BoxLink>{<AiOutlineLinkedin />}</BoxLink>
							</a>
							<a
								href={'/downloads/cv.pdf'}
								target='_blank'
								id='resume'
								data-tooltip-content='Consulter mon CV'
							>
								<BoxLink>{<AiOutlineFileText />}</BoxLink>
							</a>
							<div
								onClick={() => navigate('/Formation')}
								id='school'
								data-tooltip-content='En savoir plus sur ma formation'
							>
								<BoxLink>{<MdOutlineSchool />}</BoxLink>
							</div>
						</div>
					</Observer>
				</div>
			</div>
			<Tooltip
				anchorId='linkedin'
				place='bottom'
			/>
			<Tooltip
				anchorId='resume'
				place='bottom'
			/>
			<Tooltip
				anchorId='school'
				place='bottom'
			/>
		</>
	);
};

export default Presentation;
