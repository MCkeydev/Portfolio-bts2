import { Interpolation, Theme } from '@emotion/react';
import React from 'react';
import { createPortal } from 'react-dom';
import cssStyles from './Modal.css';
import { motion } from 'framer-motion';

interface IModalProps {
    clickHandler: () => void;
}

const Modal: React.FC<IModalProps & React.PropsWithChildren> = (props) => {
    return createPortal(
        <>
            <motion.div
                initial={{ top: 'calc(50% - 40px)', opacity: 0 }}
                animate={{ top: '50%', opacity: 1 }}
                exit={{ top: 'calc(50% - 40px)', opacity: 0 }}
                css={cssStyles.modal as Interpolation<Theme>}
            >
                <div css={cssStyles.content as Interpolation<Theme>}>
                    {props.children}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                css={cssStyles.overlay as Interpolation<Theme>}
                onClick={props.clickHandler}
            />
        </>,
        document.getElementById('root') ?? document.body,
    );
};

export default Modal;
