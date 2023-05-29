import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import projetsData from '../../../data/projets';
import Typography from '../../Typography/Typography';
import cssStyles from './SingleProject.css';
import Tools from '../../Utils/Tools';
import Observer from '../../Observer/Observer';
import BoxLink from '../../BoxLink/BoxLink';
import { FiGithub } from 'react-icons/fi';
import { FaFigma } from 'react-icons/fa';
import { MdDownload, MdOutlineDocumentScanner } from 'react-icons/md';
import { AiOutlineCloud } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { BiDownload } from 'react-icons/bi';
import { AnimatePresence } from 'framer-motion';

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
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    const [currentProject, setCurrentProject] = React.useState(
        // @ts-ignore
        currentCategory?.items.find((item) => item.path === projet),
    );

    React.useEffect(() => {
        if (isModalOpen) {
            document.body.style.height = '100%';
            document.body.style.overflow = 'hidden';
        } else if (!isModalOpen) {
            document.body.style.height = '';
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.height = '';
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

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
                        {currentProject.ficheActivite && (
                            <Button handler={() => setIsModalOpen(true)}>
                                {"Fiche d'activité"}
                                <BiDownload />
                            </Button>
                        )}
                        <AnimatePresence>
                            {currentProject.ficheActivite && isModalOpen && (
                                <Modal
                                    clickHandler={() => setIsModalOpen(false)}
                                >
                                    <iframe
                                        src='/downloads/FA-dashboard.pdf'
                                        css={{ width: '100%', height: '100%' }}
                                    />
                                </Modal>
                            )}
                        </AnimatePresence>
                        <Typography variant='h2'>
                            {'Pile applicative'}
                        </Typography>
                        <div css={{ display: 'flex', columnGap: 40 }}>
                            {currentProject.stack?.map((technology) => (
                                <React.Fragment>
                                    <img
                                        src={technology.icon}
                                        css={{
                                            width: 80,
                                            height: 80,
                                            cursor: 'pointer',
                                        }}
                                        id={technology.name}
                                        data-tooltip-content={technology.name}
                                    />
                                    <Tooltip
                                        css={{ marginTop: 8 }}
                                        anchorId={technology.name}
                                        place='bottom'
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                        <Typography variant='h2'>{'Résumé'}</Typography>
                        <Typography gutterBottom>
                            {currentProject.resume}
                        </Typography>
                        {
                            currentProject.docUtilisateur && (
                                <>
                                    <Typography variant='h2'>{'Documentation utilisateur'}</Typography>
                                    <video controls >
                                        <source src={currentProject.docUtilisateur} type="video/mp4"/>
                                    </video>

                                </>
                            )
                        }
                        <Typography variant='h2'>{'Liens Utiles'}</Typography>
                        <div css={{ display: 'flex', columnGap: 32 }}>
                            {currentProject.githublink && (
                                <a
                                    href={currentProject.githublink}
                                    target='_blank'
                                    id='depot'
                                    data-tooltip-content='Dépôt Github'
                                >
                                    <BoxLink>{<FiGithub />}</BoxLink>
                                </a>
                            )}
                            {currentProject.cahierCharge && (
                                <a
                                    href={currentProject.cahierCharge}
                                    target='_blank'
                                    id='dossier'
                                    data-tooltip-content='Dossier Documentaire'
                                >
                                    <BoxLink>
                                        {<MdOutlineDocumentScanner />}
                                    </BoxLink>
                                </a>
                            )}
                            {currentProject.download && (
                                <a
                                    href={currentProject.download}
                                    target='_blank'
                                    id='download'
                                    data-tooltip-content='Télécharger le projet'
                                >
                                    <BoxLink>{<MdDownload />}</BoxLink>
                                </a>
                            )}
                            {currentProject.figma && (
                                <a
                                    href={currentProject.figma}
                                    target='_blank'
                                    id='figma'
                                    data-tooltip-content="Visualiser la maquette de l'application"
                                >
                                    <BoxLink>{<FaFigma />}</BoxLink>
                                </a>
                            )}
                            {currentProject.hosted && (
                                <a
                                    href={currentProject.hosted}
                                    target='_blank'
                                    id='hosted'
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
                    anchorId='download'
                    place='bottom'
                />
                <Tooltip
                    className='placeholder'
                    anchorId='dossier'
                    place='bottom'
                />
                <Tooltip
                    className='placeholder'
                    anchorId='hosted'
                    place='bottom'
                />
                <Tooltip
                    className='placeholder'
                    anchorId='figma'
                    place='bottom'
                />
                <Tooltip
                    className='placeholder'
                    anchorId='fa'
                    place='bottom'
                />
            </>
        );
    }
};

export default SingleProject;
