import React from 'react';

const Button: React.FC<React.PropsWithChildren & { handler: () => void }> = (
  props
) => {
  return (
    <div
      css={{
        textDecoration: 'none',
        backgroundColor: 'transparent',
        borderRadius: 50,
        border: '1px solid black',
        display: 'inline-flex',
        columnGap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        padding: '8px 16px',
        transition:
          'background-color .15s ease-in-out, color .15s ease-in-out, fill .15s ease-in-out, stroke .15s ease-in-out',
        cursor: 'pointer',

        '&:hover': {
          color: 'white',
          backgroundColor: 'black',
          '& svg': {
            fill: 'white',
            stroke: 'white',
          },
        },
      }}
      onClick={props.handler}
    >
      {props.children}
    </div>
  );
};

export default Button;
