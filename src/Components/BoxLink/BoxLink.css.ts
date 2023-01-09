import { css, Theme } from "@emotion/react";

const cssStyles = {
    container: (theme: Theme) => css({
        cursor: 'pointer',
        border: '1px solid',
        color: theme.palette.text.primary,
        bordercolor: theme.palette.text.primary,
        borderRadius: 8,
        padding: 16,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: theme.transition,

        svg: {
            width: 32,
            height: 32,
        },

        '&:hover': {
            color: theme.palette.text.contrast,
            borderColor: theme.palette.text.contrast,
            backgroundColor: theme.palette.text.primary,
            svg: {
                fill: theme.palette.text.contrast,
                stroke: theme.palette.text.contrast,
            }
        },
    }),
};

export default cssStyles;
