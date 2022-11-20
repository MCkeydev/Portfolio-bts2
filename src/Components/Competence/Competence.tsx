import React from 'react';
import IClassNameProp from '../../interfaces/IClassNameProp';
import Typography from '../Typography/Typography';

const Competence: React.FC<IClassNameProp> = ( props ) => {
    
    return(
        <div
            className={props.className}
            css={[]}
        >
            <Typography variant='h2'></Typography>
        </div>
    );
};

export default Competence;
