import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Tools from '../Utils/Tools';
import cssStyles from './Navlink.css';

const Navlink: React.FC<{ destination: string; label?: string }> = ({
	destination,
	...props
}) => {
	// Use of React-router-dom hooks.
	const navigate = useNavigate();
	const location = useLocation();

	// True when route matches navlink
	const [isActive, setIsActive] = React.useState(false);

	// Initial effect checking if route matches navlink
	React.useEffect(() => {
		// We check wether the current location matches the navlink.
		location.pathname
			.replace('/', '')
			.replaceAll('+', ' ')
			.includes(destination)
			? setIsActive(true)
			: setIsActive(false);
	}, [location.pathname, destination]);

	return (
		<button
			className='navlink'
			css={[cssStyles.navlink, isActive && cssStyles.active]}
			onClick={() => navigate(destination.replaceAll(' ', '+'))}
		>
			{props.label ?? Tools.capitalizeString(destination)}
		</button>
	);
};

export default Navlink;
