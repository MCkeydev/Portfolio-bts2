import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import projetsData from '../../../data/projets';
import Typography from '../../Typography/Typography';
import cssStyles from './SingleProject.css';
import Tools from '../../Utils/Tools';
import Observer from '../../Observer/Observer';
import BoxLink from '../../BoxLink/BoxLink';
import { FiGithub } from 'react-icons/fi';
import { BiDownload } from 'react-icons/bi';
import { AiOutlineCloud } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const SingleProject: React.FC = () => {
	const { projet } = useParams();
	const [currentCategory, setCurrentCategory] = React.useState(
		projetsData.find((current) => {
			// @ts-ignore
			const project = current.items.find((item) => item.path === projet);
			console.log(project);
			return project;
		}),
	);

	const [currentProject, setCurrentProject] = React.useState(
		// @ts-ignore
		currentCategory?.items.find((item) => item.path === projet),
	);

	const navigate = useNavigate();

	if (undefined === currentProject) {
		return (
			<React.Fragment>
				'Mince, aucun projet n'a été trouvé ! N'hésitez pas à revenir
				plus tard !'
			</React.Fragment>
		);
	} else {
		return (
			<>
				<Observer>
					<div css={[cssStyles.container]}>
						<Typography variant='h1'>
							{currentProject?.name}
						</Typography>
						<img
							src={currentProject?.thumbnail}
							css={{
								borderRadius: 16,
								objectFit: 'cover',
								maxHeight: 480,
								height: 'auto',
							}}
						/>
						<Typography variant='h2'>
							{'Contexte Du Projet'}
						</Typography>
						<Typography
							variant='body1'
							css={{ paddingLeft: 40 }}
							gutterBottom
						>
							<ul>
								{Object.entries(currentProject.context).map(
									([key, value]) => (
										<li>
											<Typography
												component='span'
												css={{ fontWeight: 700 }}
											>
												{Tools.capitalizeString(key) +
													' : '}
											</Typography>
											<Typography component='span'>
												{/* @ts-ignore */}
												{Tools.capitalizeString(value)}
											</Typography>
										</li>
									),
								)}
							</ul>
						</Typography>
						<Typography variant='h2'>
							{'Pile applicative'}
						</Typography>
						<div css={{ display: 'flex', columnGap: 40 }}>
							{currentProject.stack?.map((technology) => (
								<img
									src={technology.icon}
									css={{ width: 80, height: 80 }}
								/>
							))}
						</div>
						<Typography variant='h2'>{'Résumé'}</Typography>
						<Typography gutterBottom>
							{currentProject.resume}
						</Typography>
						<Typography variant='h2'>{'Liens Utiles'}</Typography>
						<div css={{ display: 'flex', columnGap: 32 }}>
							<a
								href={currentProject.githublink}
								target='_blank'
								id='depot'
								data-tooltip-content='Dépôt Github'
							>
								<BoxLink>{<FiGithub />}</BoxLink>
							</a>
							<a
								href={currentProject.cahierCharge}
								target='_blank'
								id='dossier'
								data-tooltip-content='Dossier Documentaire'
							>
								<BoxLink>{<BiDownload />}</BoxLink>
							</a>
							{currentProject.hosted && (
								<a
									href={currentProject.hosted}
									target='_blank'
									id='lien'
									data-tooltip-content="Voir l'application en direct"
								>
									<BoxLink>{<AiOutlineCloud />}</BoxLink>
								</a>
							)}
						</div>
					</div>
				</Observer>
				<Tooltip
					className='placeholder'
					anchorId='depot'
					place='bottom'
				/>
				<Tooltip
					className='placeholder'
					anchorId='dossier'
					place='bottom'
				/>
				<Tooltip
					className='placeholder'
					anchorId='lien'
					place='bottom'
				/>
			</>
		);
	}
};

export default SingleProject;
