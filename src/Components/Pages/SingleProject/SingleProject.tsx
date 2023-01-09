import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import projetsData from '../../../data/projets';
import Typography from '../../Typography/Typography';
import cssStyles from './SingleProject.css';
import Tools from '../../Utils/Tools';
import Observer from '../../Observer/Observer';
import BoxLink from '../../BoxLink/BoxLink';
import { FiGithub } from 'react-icons/fi';
import { GiHeartWings } from 'react-icons/gi';
import { BiDownload } from 'react-icons/bi';

const SingleProject: React.FC = (props) => {
	const { projet } = useParams();
	const [currentProject, setCurrentProject] = React.useState(
		projetsData.projets.find((current) => current.path === projet),
	);

	const navigate = useNavigate();

	if (undefined === currentProject) {
		return <React.Fragment>'OUPS'</React.Fragment>;
	} else {
		return (
			<Observer>
				<div css={[cssStyles.container]}>
					<Typography variant='h1'>{currentProject?.name}</Typography>
					<img
						src={currentProject?.thumbnail}
						css={{
							borderRadius: 16,
							objectFit: 'cover',
							maxHeight: 480,
							height: 'auto',
						}}
					/>
					<Typography variant='h2'>{'Contexte Du Projet'}</Typography>
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
											{Tools.capitalizeString(value)}
										</Typography>
									</li>
								),
							)}
						</ul>
					</Typography>
					<Typography variant='h2'>{'Pile applicative'}</Typography>
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
						<a href={currentProject.githublink}>
							<BoxLink>{<FiGithub />}</BoxLink>
						</a>
						<a href={currentProject.cahierCharge}>
							<BoxLink>{<BiDownload />}</BoxLink>
						</a>
					</div>
				</div>
			</Observer>
		);
	}
};

export default SingleProject;
