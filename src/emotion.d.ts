import '@emotion/react';

declare module '@emotion/react'{
    export interface Theme {
        spaces: {
            small: string,
            medium: string,
            large: string,
        },
        size: {
            large: string,
        }
        spacing: (number) => string,
        borderRadius: number,
        typography: any,
        typography: {
            caption: string,
            body2: string,
            body1: string,
            h6: string,
            h5: string,
            h4: string,
            h3: string,
            h2: string,
            h1: string,
        },
        transition: any,
        shadows: any,
        zIndex: {
            appBar: number,
            drawer: number,
            modal: number,
            tooltip: number,
        },
        colors: {
            [key: string]: {
                [key: string]: string
            },
        },
        palette: {
            primary: {
                main: string,
                contrastText: string,
            },
            secondary: {
                main: string,
                contrastText: string,
            },
            link: string,
            background: string,
            error: string,
            success: string,
            warning: string,
            text: {
                primary: string,
                secondary: string,
                contrast: string,
            },
            divider: string,
        },
    }
}
