import React from 'react';
import { Theme } from '@emotion/react';
import { gsap } from 'gsap';
import Navlink from '../Navlink/Navlink';
import LogoLink from '../LogoLink/LogoLink';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import cssStyles from './Navbar.css';
import debounce from 'lodash.debounce';
import { useDebounce } from 'usehooks-ts';

const NAVBAR_FOLD = 73;

const Navbar: React.FC = () => {
	// Use of React hooks
	const [isSticky, setIsSticky] = React.useState<boolean>(false);
	const navBarRef = React.useRef<HTMLDivElement>(null);
	let boundingClientRectRef = React.useRef<number | null>(null);

	// Use of React-Hooks hooks
	const debounced = useDebounce<() => void>(
		() => console.log('trigger'),
		5000,
	);
	// useEffect when component first renders
	React.useEffect(() => {
		gsap.fromTo(
			'.navlink',
			{ opacity: 0 },
			{ opacity: 1, duration: 0.35, stagger: 0.1 },
		);

		const setBindingClientRec = () => {
			boundingClientRectRef.current = window.scrollY;
		};

		document?.addEventListener('scroll', (e) => {
			setBindingClientRec();
			if (NAVBAR_FOLD <= boundingClientRectRef.current!) {
				setIsSticky(true);
			}
			if (NAVBAR_FOLD >= boundingClientRectRef.current!) {
				setIsSticky(false);
			}
		});
	}, []);

	// React.useEffect(() => {
	// 	const debounced = debounce(() => console.log('trigger'), 5000);

	// 	document.addEventListener('scroll', debounced);
	// }, []);

	React.useEffect(() => {
		document.addEventListener('scroll', debounced);
	}, []);

	return (
		<div
			ref={navBarRef}
			css={[cssStyles.container, isSticky && cssStyles.sticky]}
			className='flex items-center flex-row w-full p-2 justify-between cursor-pointer px-5'
		>
			<LogoLink />
			<div css={{ display: 'flex', alignItems: 'center' }}>
				<ThemeToggle
					css={(theme: Theme) => ({
						marginRight: theme.spacing(4),
						paddingTop: theme.spacing(1),
					})}
				/>
				<Navlink destination='accueil' />
				<Navlink destination='Formation' />
				<Navlink destination='projets' />
				<Navlink destination='structure' />
				<Navlink destination='contact' />
			</div>
		</div>
	);
};

export default Navbar;
