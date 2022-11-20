import React from 'react';
import cssStyles from './SmallNav.css';
import { compData } from '../../data/hompage';
import Typography from '../Typography/Typography';
import IClassNameProp from '../../interfaces/IClassNameProp';

interface ISmallNavProps {
    active: string,
    links: Array<{ name: string }>,
    setActive: React.Dispatch<React.SetStateAction<typeof compData.categories[0]>>,
}

const SmallNav: React.FC<ISmallNavProps&IClassNameProp> = (props) => {
    // By default, the first category is selected.

    return (
        <nav css={cssStyles.container} className={props.className}>
            {
                props.links.map((category) => (
                    <Typography
                        component='a'
                        css={[
                            cssStyles.link,
                            category.name === props.active && cssStyles.linkActive,
                        ]}
                        onClick={() => props.setActive(category)}
                    >
                        {category.name}
                    </Typography>
                ))
            }
        </nav>
    );
};

export default SmallNav;
