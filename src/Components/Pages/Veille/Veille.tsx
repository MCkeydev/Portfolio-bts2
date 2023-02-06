import React from 'react';
import Typography from '../../Typography/Typography';
import Observer from '../../Observer/Observer';
import BigPost from '../../Posts/BigPost';
import cssStyles from './Veille.css';
import SmallPost from '../../Posts/SmallPost';
import veilleData from '../../../data/veille';
import { BiDownload } from 'react-icons/bi';
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
                    {`En tant que développeur, j'ai eu l'occasion d'utiliser des `}
                    <Typography
                        component={'span'}
                        css={{ fontWeight: 700 }}
                    >
                        Intelligences Artificielles
                    </Typography>
                    {` en milieu professionnel. Ces Outils sont de plus en plus répandus, et risquent d'avoir un impact énorme sur notre société. C'est pourquoi il est important d'effectuer une veille afin de pouvoir s'adapter aux changements que les IA risquent d'engranger.

					J'effectue ma veille en visitant régulièrement différents sites de presses traitant du sujet. Aussi, j'ai paramétré mes notifications push afin d'en recevoir lors de la publication d'un article pertinent sur le sujet. Enfin, étant utilisateur de Twitter je suis de très près les comptes officiels de personnalités éminentes du milieu, comme Sam Altman, le créateur d'OpenAI.
					
					Cette démarche me permet de croiser les sources, et surtout de découvrir certaines vers lesquelles je ne me serais pas forcément orienté instinctivement.`}
                </Typography>
                <Typography
                    variant='body1'
                    gutterBottom
                >
                    {`Un tableau de veille, permettant de suivre le processus au cours des deux années de formations est disponible en cliquant sur le lien ci-dessous.`}
                </Typography>
                <a
                    css={{
                        textDecoration: 'none',
                        backgroundColor: 'transparent',
                        borderRadius: 50,
                        border: '1px solid black',
                        display: 'inline-flex',
                        columnGap: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'flex-start',
                        padding: '8px 16px',
                        transition:
                            'background-color .15s ease-in-out, color .15s ease-in-out, fill .15s ease-in-out, stroke .15s ease-in-out',
                        cursor: 'pointer',

                        '&:hover': {
                            color: 'white',
                            backgroundColor: 'black',
                            '& svg': {
                                fill: 'white',
                                stroke: 'white',
                            },
                        },
                    }}
                    href={
                        '/downloads/Courréjou Matthieu - Tableau de Veille.xlsx'
                    }
                    target='_blank'
                >
                    Tableau de veille
                    <BiDownload />
                </a>
                <div
                    css={{ display: 'flex', paddingTop: 32, columnGap: '32px' }}
                >
                    <BigPost data={veilleData[0]} />
                    <div
                        css={{
                            display: 'flex',
                            maxWidth: '45%',
                            flex: '0 0 45%',
                            flexWrap: 'wrap',
                        }}
                    >
                        {veilleData.slice(1).map((post) => (
                            <SmallPost data={post} />
                        ))}
                    </div>
                </div>
            </Observer>
        </div>
    );
};

export default Veille;
