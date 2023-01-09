import React, { PropsWithChildren } from 'react';
import IClassNameProp from '../../interfaces/IClassNameProp';
import cssStyles from './Container.css';

const Container: React.FC<IClassNameProp & PropsWithChildren> = ({
	children,
	...props
}) => {
	return (
		<div
			css={cssStyles.container}
			{...props}
		>
			{children}
		</div>
	);
};

export default Container;
