import { css } from '@emotion/react';

const __fonts = {
    GilroyFont: {
        light: css({
            '@font-face' : {
                fontFamily: 'Gilroy Sans',
                src: "url('/fonts/GilroyFont/Gilroy-Light.otf') format('opentype')",
                fontWeight: 300,
                fontStyle: 'normal',
            },
        }),
        regular : css({
            '@font-face' : {
                fontFamily: 'Gilroy Sans',
                src: "url('/fonts/GilroyFont/Gilroy-Regular.otf') format('opentype')",
                fontWeight: 400,
                fontStyle: 'normal',
            },
        }),
        medium: css({
            '@font-face' : {
                fontFamily: 'Gilroy Sans',
                src: "url('/fonts/GilroyFont/Gilroy-Medium.otf') format('opentype')",
                fontWeight: 500,
                fontStyle: 'normal',
            },
        }),
        semiBlod: css({
            '@font-face' : {
                fontFamily: 'Gilroy Sans',
                src: "url('/fonts/GilroyFont/Gilroy-SemiBold.otf') format('opentype')",
                fontWeight: 700,
                fontStyle: 'normal',
            },
        }),
        bold: css({
            '@font-face' : {
                fontFamily: 'Gilroy Sans',
                src: "url('/fonts/GilroyFont/Gilroy-Bold.otf') format('opentype')",
                fontWeight: 900,
                fontStyle: 'normal',
            },
        }),
    },
};

export default __fonts;
