import { css } from "@emotion/react";

const cssStyles = {
    hidden: css({
        transform: 'translateY(-20px)',
        opacity: 0,
    }),
    visible: css({
        opacity: 1,
        transform: 'translateX(0px)',
        transition: 'transform .15s ease-in-out',
    }),
};

export default cssStyles;
