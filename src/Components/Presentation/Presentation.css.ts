import { css, Theme } from "@emotion/react";
import { alpha } from "../../styles/colors";

const cssStyles = {
    container: (theme: Theme) =>  css({
       zIndex: 1,
       display: 'flex',
       columnGap: '4rem',
      
    }),
    imageContainer: (theme: Theme) => css({
        zIndex: -1,
        position: 'relative',
        width: '55%',
        display: 'flex',
        flexDirection: 'column-reverse',
        padding: 16,
        height: theme.size.large,
        backgroundColor: theme.colors.blackA.blackA4,
        borderRadius: `calc(${theme.borderRadius}px * 1.5)`,
        overflow: 'hidden',

        '&:before': {
            position: 'absolute',
            content: "''",
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: ' linear-gradient(0deg, hsla(0, 0%, 24%, 0.9) 0%, hsla(0, 0%, 100%, 0.1) 100%)',
            zIndex: -1,
        },
    }),
    image: css({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        objectFit: 'cover',
        width: '100%',
        height: 'auto',
        zIndex: -2,
    }),
    text: (theme: Theme) =>css({
        color: 'white',
    }),
    presentationContainter: css({
        flexBasis: '50%',
        flexGrow: 0,
    }),
    title: (theme: Theme) => css({
        color: theme.palette.text.secondary,
    }),
};

export default cssStyles;