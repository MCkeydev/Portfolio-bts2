import React, {  ElementType, PropsWithChildren } from 'react';
import IClassNameProp from '../../interfaces/IClassNameProp';
import cssStyles from './Typography.css';

type TTypographyVariants = 'body1'|'body2'|'subtitle1'|'subtitle2'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
type TTypographyAlign = 'center'|'inherit'|'justify'|'left'|'right';

interface ITypographyProps {
    align?: TTypographyAlign,
    noWrap?: boolean,
    variant?: TTypographyVariants,
    component?: ElementType<any>|undefined,
    gutterBottom?: boolean,
    onClick?: (event: MouseEvent) => void,
};

const Typography: React.FC<PropsWithChildren&ITypographyProps&IClassNameProp> = props => {

    /**
     * function that checks wich HTML tag should be rendered, depending on the props passed to typography.
     * @returns a string corresponding to a valid HTML tag.
     */
    function defineHtmlTag() : string|ElementType<any> {
        if(undefined !== props.variant && undefined === props.component){
            if(props.variant === 'body1' || props.variant === 'body2'){

                return 'p'
            } else if (props.variant === 'subtitle1' || props.variant === 'subtitle2'){

                return 'h6';
            } else {

                return props.variant;
            };
        } else if (undefined !== props.component && undefined === props.variant) {

            return props.component;
        } else if (undefined !== props.component && undefined !== props.variant) {

            return props.component;
        } else {

            return 'p';
        }
    };

    // We must store the result in a PascalCase variable for jsx to not throw an error.
    const Variant = defineHtmlTag();

    return(
        <Variant
            className={props.className}
            css={[
                // Variant defaults to body1
                cssStyles.variants[undefined === props.variant ? 'body1' : props.variant],
                props.noWrap && cssStyles.noWrap,
                props.align && { textAlign: props.align },
                props.gutterBottom && { paddingBottom: '0.85em', }
            ]}
            onClick={props.onClick}
        >
            {props.children}
        </Variant>
    );
};

export default Typography;
