import { css, keyframes } from "@emotion/react";

const party = keyframes({
    '0%': { backgroundColor: 'red' },
    '30%': { backgroundColor: 'yellow' },
    '68%': { backgroundColor: 'red' },
    '72%': { backgroundColor: 'purple' },
    '100%': { backgroundColor: 'orange' },
})

const moveX = keyframes({

        'from': { left: 0, }, 'to': { left: 'calc(100vw - 272px)' },
});
const moveY = keyframes({
    'from': { top: 0, }, 'to': { top: 'calc(100vh - 168px)' },
});

const cssStyles = {
    app: css({
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 152,
    }),
    maillet: css({
    }),
    nyan: css({
        zIndex: 12,
        position: 'absolute',
        display: 'inline-block',
        animation: `${moveX} 2s linear 0s infinite alternate, ${moveY} 3.4s linear 0s infinite alternate;`,

    }),
    
};


export default cssStyles;