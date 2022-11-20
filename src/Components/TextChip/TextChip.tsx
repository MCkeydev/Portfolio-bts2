import { Theme } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import IClassNameProp from '../../interfaces/IClassNameProp';
import { alpha } from '../../styles/colors';
import Typography from '../Typography/Typography';
import cssStyles from './TextChip.css';

interface ITextChipProps {
    color?: 'success'|'error'|'warning',
}

const TextChip: React.FC<IClassNameProp&ITextChipProps&PropsWithChildren> = ({color = 'success', ...props}) => {

    return (
        <div className={props.className}
            css={(theme: Theme) => [
                cssStyles.container,
                {backgroundColor: alpha(theme.palette[color], 0.2)},
            ]}>
            <span
                css={(theme: Theme) => [
                    cssStyles.dot,
                    { 
                        backgroundColor: theme.palette[color],
                    }
                ]}
            />
            <Typography
                variant='body2'
                component='span'
                css={(theme: Theme) => ({ 
                        color: theme.palette[color],
                })}
            >
                {props.children}
            </Typography>
        </div>
    );
};

export default TextChip;
