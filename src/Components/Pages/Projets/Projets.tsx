import React from 'react';
import Typography from '../../Typography/Typography';
import cssStyles from './Projets.css';
import projetsData from '../../../data/projets';
import ProjectCard from '../../ProjectCard/ProjectCard';
import Observer from '../../Observer/Observer';
import SmallNav from '../../SmallNav/SmallNav';
import { useNavigate } from 'react-router-dom';
import { BiDownload } from 'react-icons/bi';

const Projets: React.FC = (props) => {
    const [active, setActive] = React.useState(
        projetsData.find(
            (obj) => obj.name === localStorage.getItem('projectCategory'),
        ) ?? projetsData[0],
    );
    const navigate = useNavigate();

    return (
        <div css={cssStyles.container}>
            <Typography
                variant='h1'
                css={{ paddingBottom: '32px' }}
            >
                Mes Projets
            </Typography>
            <div
                css={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <SmallNav
                    active={active.name}
                    setActive={setActive}
                    links={projetsData}
                />
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
                        transition: 'all .15s ease-in-out',
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
                        '/downloads/Courréjou Matthieu - Tableau de synthèse.pdf'
                    }
                    target='_blank'
                >
                    Tableau de synthèse
                    <BiDownload />
                </a>
            </div>
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
