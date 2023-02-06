const cssStyles = {
    modal: {
        position: 'fixed',
        margin: '0 auto',
        minHeight: '200px',
        minWidth: '500px',
        height: '80%',
        width: '80%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 12,
        backgroundColor: 'white',
        zIndex: 2,
    },
    content: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
    },
};

export default cssStyles;
