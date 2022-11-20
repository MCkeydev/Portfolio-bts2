import React from 'react';
import Observer from '../Observer/Observer';
import Typography from '../Typography/Typography';
import cssStyles from './Presentation.css';

const Presentation: React.FC = () => {

    return(
        <div css={[
            cssStyles.container,
        ]}>
            <Observer animation={{duration: 1.5,}}>
                <div css={[
                    cssStyles.imageContainer,
                ]}>
                        <Typography variant='h3' css={[cssStyles.text]}>
                            Courréjou Matthieu
                        </Typography>
                        <Typography variant='subtitle1' css={[cssStyles.text]}>
                            Developpeur Full-Stack - 2nd Année de BTS SIO SLAM
                        </Typography>
                        <img src='/images/fab.jpg' css={[
                            cssStyles.image,
                        ]}/>
                </div>
            </Observer>
            <div css={[
                cssStyles.presentationContainter,
            ]}
            >
                <Observer animation={{delay: 0.75}}>
                    <div>
                        <Typography variant='h4' css={cssStyles.title} gutterBottom>
                            Qui suis-je ?
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                                                    {`Bonjour, je m'appelle Michele FLORIO, j'ai 18 ans et la programmation est l'une de mes plus grandes passions !

                            Féru d'informatique, je pratique le développement depuis la 5ème (donc environ 7 ans), mais avant déjà je touchais à d'autre de ses facettes : montage/démontage d'ordinateurs, lecture du code source de certains sites internet, jeux vidéos... L'informatique m'intéresse dans la grande majorité de ses aspects.

                            `}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h4' css={cssStyles.title} gutterBottom>
                            Mon Parcours
                        </Typography>
                        <Typography variant='body1'>
                            {`Aujourd'hui, je suis en BTS SIO en alternance pour appronfondir mes connaissances sur l'informatique (pour être mieux préparé à de futures études) et acquérir de l'expérience professionnelle pour le futur.

                            Le BTS SIO se fait, comme tous les BTS, sur deux ans et propose deux spécialités : Solutions d'Infrastructure, Systèmes et Réseaux (SISR, typée réseau) et Solutions Logicielles et Applications Métiers (SLAM, typée développement).

                            `}  
                        </Typography>
                    </div>
                </Observer>
            </div>      
        </div>
    );
};

export default Presentation;
