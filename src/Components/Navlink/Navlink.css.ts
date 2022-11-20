import { css, Theme } from "@emotion/react";


const cssStyles = {
  navlink: (theme: Theme) => css({
    position: 'relative',
    display: 'inline-block',
    padding: 8,
    cursor: 'pointer',
    border: 'none',
    fontWeight: 500,
    
    '&:before': {
      content: '""',
      position: 'absolute',
      backgroundColor: theme.palette.secondary.main,
      bottom:'2px',
      height: '5px',
      width: 0,
      transition: 'width 0.15s ease-in-out',
    },
    '&:hover': {
      border:'none',
      '&::before': {
        width: 'calc(100% - 1rem)',
      }
    },
  }),
  active: css({
    '&:before': {
      width: 'calc(100% - 1rem)',
    },
  }),
};

export default cssStyles;
