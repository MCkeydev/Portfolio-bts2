import { css, Theme } from "@emotion/react";

const cssStyles = {
    // Copied MUI text variants (maybe change if needed)
   variants: {
        body1: {
            fontWeight: 500,
            fontSize: '1.1rem',
            lineHeight: 1.56,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.43,
            letterSpacing: '0.00938em',
        },
        subtitle1:{
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.267,
            letterSpacing: '0em',
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: '0.874rem',
            lineHeight: 1.57,
            letterSpacing: '0.00714em',
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.6,
            letterSpacing: '-0.02em',
        },
        h5: {
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: 1.334,
            letterSpacing: '0em',
        },
        h4: {
            fontWeight: 800,
            fontSize: '2.125rem',
            lineHeight: 1.167,
            letterSpacing: '0em',
        },
        h3: {
            fontWeight: 600,
            fontSize: '3rem',
            lineHeight: 1.167,
            letterSpacing: '0em',
        },
        h2: (theme: Theme) => css({
            color: theme.palette.text.secondary,
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.167,
            letterSpacing: '-0.03rem',
        }),
        h1: (theme: Theme) => css({
            color: theme.palette.text.secondary,
            fontWeight: 900,
            fontSize: '3.635rem',
            lineHeight: 1.167,
            letterSpacing: '0',
        }),
    },
    noWrap: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
};

export default cssStyles;
