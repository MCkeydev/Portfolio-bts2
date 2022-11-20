import { css, Theme } from "@emotion/react";

const cssStyles = {
    container: (theme: Theme) => css({
        display: 'flex',
        alignItems: 'center',
        columnGap:  theme.spacing(1),
        '& > *': {
            transition: theme.transition,
        },
        '&:hover > *': {
            color: theme.palette.secondary.main,
        },
    }),

};

export default cssStyles;
