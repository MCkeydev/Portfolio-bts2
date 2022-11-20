import React from 'react';
import useAppStore from '../../store/store';
import cssStyles from './ThemeToggle.css';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import Typography from '../Typography/Typography';
import IClassNameProp from '../../interfaces/IClassNameProp';

const ThemeToggle: React.FC<IClassNameProp> = ( props ) => {
    const setTheme = useAppStore((state) => state.setTheme);
    const isDarkTheme = useAppStore((state) => state.isDarkTheme);
    
    return(
        <div
            className={props.className}
            css={[cssStyles.container,]}
            onClick={()=>setTheme()}
        >
            {
                isDarkTheme ?
                (<BsSunFill/>) :
                (<BsFillMoonFill/>)
            }
            <Typography variant='subtitle1'>
                {
                    isDarkTheme ?
                    ('Light Mode') :
                    ('Dark Mode')
                }
            </Typography>
        </div>
    );
};

export default ThemeToggle;
