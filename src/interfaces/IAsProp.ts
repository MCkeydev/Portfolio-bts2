import { ElementType, HTMLAttributes } from 'react';

export default interface IAsProp extends HTMLAttributes<HTMLOrSVGElement> {
    as?: ElementType|undefined;
};
