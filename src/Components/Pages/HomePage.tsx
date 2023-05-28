import { Theme } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import Competence from '../Competence/Competence';
import Parcours from '../Parcours/Parcours';
import Presentation from '../Presentation/Presentation';
import Typography from '../Typography/Typography';
import cssStyles from './HomePage.css';

interface IHomepageProps {
    color?: string | undefined;
}

const Homepage: React.FC<IHomepageProps & PropsWithChildren> = ({
    children,
    ...props
}) => {
    return (
        <section
            {...props}
            css={[cssStyles.container, {}]}
        >
            <Typography
                variant='h1'
                css={{ paddingBottom: '32px' }}
            >
                Portfolio
            </Typography>
            <Presentation />
            <Parcours />
            <Competence />
        </section>
    );
};

export default Homepage;
