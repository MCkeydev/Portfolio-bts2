import { css, Theme } from "@emotion/react";

const cssStyles = {
    container: (theme: Theme) => css({
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0, 
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.background,
        padding: '16px 32px',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'padding .15s ease-in-out, background-color .2s ease-in-out',  
    }),
    sticky: (theme: Theme) => css({
        borderBottom: '1px solid',
        borderColor: theme.colors.blackA.blackA5,
        padding: '6px 32px',

    }),
};

export default cssStyles;