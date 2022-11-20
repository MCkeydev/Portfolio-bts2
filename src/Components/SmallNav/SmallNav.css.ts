import { css, Theme } from "@emotion/react";

const cssStyles = {
    container: css({
        display: 'flex',
        columnGap: 16,
    }),
    link: (theme: Theme) => css({
        cursor: 'pointer',
        fontWeight: 400,
        fontSize: '0.875rem',
        letterSpacing: '0.038rem',
        textTransform: 'uppercase',
        transition: theme.transition,
        
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    }),
    linkActive: (theme: Theme) => css({
        color: theme.palette.secondary.main,
    }),
};

export default cssStyles;
