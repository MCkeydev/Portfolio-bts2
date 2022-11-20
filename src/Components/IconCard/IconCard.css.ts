import { css, Theme } from "@emotion/react";

const cssStyles = {
    iconCard: (theme: Theme) => css({
        borderRadius: theme.borderRadius,
        border: '1px solid',
        borderColor: theme.palette.divider,
        padding: theme.spaces.small,
    }),
};

export default cssStyles;