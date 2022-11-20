import { css, Theme } from "@emotion/react";

const cssStyles = {
    container: {
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        columnGap: 8,
        paddingLeft: 8,
        paddingRight: 8,
    },
    dot: (theme: Theme) => css({
        width: 6,
        height: 6,
        borderRadius: 50,
    }),
};

export default cssStyles;