import React from 'react';
import { useNavigate } from 'react-router-dom';
import Observer from '../../Observer/Observer';
import Typography from '../../Typography/Typography';
import cssStyles from './Formation.css';

const Formation: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Observer>
            <section
                css={cssStyles.container}
            >
                <Typography variant='h1' css={{ paddingBottom: '32px' }}>
                    BTS SIO
                </Typography>
                <Typography variant='h5' gutterBottom>
                    Qu'est-ce-que le BTS SIO ?
                </Typography>
                <Typography gutterBottom>
                Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations, s’adresse à ceux qui souhaitent se former en deux ans aux métiers d’administrateur réseau ou de développeur. Pour par la suite intégrer directement le marché du travail ou continuer des études, dans le domaine de l’informatique.
                </Typography>
                <div
                    css={{
                        display: 'flex',
                        flexDirection: 'row',
                        columnGap: 16,
                        paddingBottom: 64,
                    }}
                    >
                    <div>
                        <Typography variant='h5' gutterBottom>
                            OPTION SISR
                        </Typography>
                        <Typography gutterBottom>
                            L’acronyme SISR signifie « Solutions d’infrastructure, systèmes et réseaux ». Voici des précisions sur cette formation et ses débouchés.
                            L’option SISR est destinée aux étudiants qui s’orientent vers les métiers liés à la conception et la maintenance d’infrastructures réseaux. Assurer la sécurité, la maintenance et l’installation des réseaux et des équipements informatiques font partie des principales missions des futurs administrateurs, techniciens ou pilotes d’exploitation. Des cours plus généraux viendront compléter la formation et apporter des compétences plus généralistes, permettant aux diplômés d’être opérationnels dans n’importe quelle entreprise.
                        </Typography>
                        <Typography variant='h5' gutterBottom>
                            Débouchés possibles
                        </Typography>
                        <Typography>
                            {`
                                – Technicien de production
                                – Technicien d’infrastructure
                                – Technicien réseau et télécoms
                                – Technicien systèmes et réseaux
                                – Technicien Micro et réseaux
                                – Administrateur systèmes et réseaux
                                – Support systèmes et réseaux
                                – Pilote d’exploitation
                                – Informaticien support et déploiement
                                – Technico-commercial en informatique`
                            }
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h5' gutterBottom>
                            OPTION SLAM
                        </Typography>
                        <Typography gutterBottom>
                            L’acronyme SLAM signifie « Solutions Logicielles et
                            Applications Métier ». Voici quelques indications sur cette seconde
                            option du BTS SIO, ainsi des précisions sur cette formation et ses débouchés. L’option SLAM est destinée aux étudiants qui s’orientent vers les métiers liés à la conception et la maintenance de programmes applicatifs. Grâce à des cours spécifiques, les diplômés seront capables de gérer un parc informatique ou d’administrer un réseau au sein d’une entreprise.
                            Ils pourront également gérer l’intégration, la sécurisation et la configuration des serveurs, mais aussi des postes clients et des équipements d’interconnexion.
                        </Typography>
                        <Typography variant='h5' gutterBottom>
                            Débouchés possibles
                        </Typography>
                        <Typography>
                            {`
                                – Développeur d’applications informatiques
                                – Développeur informatique
                                – Analyste d’applications ou d’études
                                – Analyste programmeur
                                – Chargé d’études informatiques
                                – Informaticien d’études
                                – Programmeur analyste
                                – Programmeur d’applications
                                – Responsable des services applicatifs
                                – Technicien d’études informatiques`
                            }
                        </Typography>
                    </div>
                </div>
                <a css={{
                    textDecoration: 'none',
                    backgroundColor: 'transparent',
                    borderRadius: 50,
                    border: '1px solid black',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-start',
                    padding: '8px 16px',
                    transition: 'all .15s ease-in-out',
                    cursor: 'pointer',

                    '&:hover': {
                        color: 'white',
                        backgroundColor: 'black',
                    }
                }}
                href={"https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-a-solutions-d-infrastructure-systemes-et-reseaux"}
                target='_blank'
                >
                
                        EN SAVOIR PLUS
                </a>
            </section>
        </Observer>
    );
};

export default Formation;
