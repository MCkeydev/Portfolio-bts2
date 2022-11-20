import { css, Theme } from "@emotion/react";
import React, { PropsWithChildren } from "react";
import { compData } from "../../data/hompage";
import Competence from "../Competence/Competence";
import Presentation from "../Presentation/Presentation";
import SmallNav from "../SmallNav/SmallNav";
import TextChip from "../TextChip/TextChip";
import Typography from "../Typography/Typography";
import cssStyles from "./HomePage.css";

interface IHomepageProps {

};

const Homepage: React.FC<IHomepageProps&PropsWithChildren> = (props) => {
    const [active, setActive] = React.useState<typeof compData.categories[0]>(compData.categories[0]);

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
            <Typography variant='h1' css={(theme: Theme) => ({ paddingBottom: '32px', paddingTop: theme.spacing(10) })}>
                Compétences
            </Typography>
            <Typography variant='h6' gutterBottom>
                {
                `Vous pourrez ici trouver toutes mes compétences accumulés au cours de ma formation, et de mes expériences professionnelles,
                  classées par catégories.`
                } 
            </Typography>
            <SmallNav active={active.name} setActive={setActive} links={compData.categories} css={{ paddingBottom: 16 }}/>
            <div css={(theme: Theme) => css({
                height: 'calc(100vh - 38px)',
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '24px',
                border: '1px solid',
                borderColor: theme.palette.divider,
                borderRadius: theme.borderRadius * 2, 
                padding: 16,
            })}>
                <Typography variant='body1' css={ (theme: Theme) => ({ paddingBottom: '32px', color: theme.palette.text.secondary })} >
                    {active.description}
                </Typography>
                {
                    active.items?.map((item, index) => (
                        <React.Fragment key={item.name}>
                            <div css={{ display: 'flex', alignItems: 'center', columnGap: '32px', position: 'relative' }}>
                                <img 
                                    src={item.asset} 
                                    css={{
                                        maxWidth: 80,
                                        height: 'auto',
                                    }}
                                    />
                                <div>
                                    <Typography variant='h6' component='p'>
                                        {item.name}
                                    </Typography>
                                    <Typography>
                                        {item.description}
                                    </Typography>
                                </div>
                                <TextChip color={item.color as 'success'|'warning'|'error'} css={{ position: 'absolute', top: 0, right: 0}}>
                                    {`Niveau: ${item.level}`}
                                </TextChip>
                            </div>
                            {
                                index < active.items.length - 1 && (
                                    <hr css={(theme: Theme) => ({
                                        padding: 0,
                                        width: '95%',
                                        borderWidth: 0,
                                        borderColor: theme.palette.divider,
                                        borderBottomWidth: 'thin',
                                    })}/>
                                )
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
} ;

export default Homepage;