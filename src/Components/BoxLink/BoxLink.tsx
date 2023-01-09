import React, { PropsWithChildren } from 'react';
import cssStyles from './BoxLink.css';

interface IBoxLink {
	onClick?: (e: MouseEvent) => void;
}

const BoxLink: React.FC<PropsWithChildren & IBoxLink> = (props) => {
	return (
		<div
			css={[cssStyles.container]}
			// @ts-ignore
			onClick={(e) => undefined !== props.onClick && props.onClick(e)}
		>
			{props.children}
		</div>
	);
};

export default BoxLink;
