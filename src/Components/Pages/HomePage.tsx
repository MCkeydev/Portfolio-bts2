import { Theme } from "@emotion/react";
import React, { PropsWithChildren } from "react";
import Competence from "../Competence/Competence";
import Presentation from "../Presentation/Presentation";
import Typography from "../Typography/Typography";
import cssStyles from "./HomePage.css";

interface IHomepageProps {

};

const Homepage: React.FC<IHomepageProps&PropsWithChildren> = (props) => {
    return(
        <section
            css={[
                cssStyles.container,
                {
                }
            ]}
        >
            <Typography variant='h1' css={{ paddingBottom: '32px' }}>
                Portfolio
            </Typography>
            <Presentation/>
            <Competence/>
            <Typography variant='h1' css={(theme: Theme) => ({ paddingBottom: '32px', paddingTop: theme.spacing(10s) })}>
                Compétences
            </Typography>
        </section>
    )
} ;

export default Homepage;
