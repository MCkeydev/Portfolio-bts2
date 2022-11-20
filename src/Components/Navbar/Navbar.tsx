import React from 'react';
import Navlink from '../Navlink/Navlink';
import LogoLink from '../LogoLink/LogoLink';
import cssStyles from './Navbar.css';
import { gsap } from 'gsap';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Theme } from '@emotion/react';

const NAVBAR_FOLD = 73;

const Navbar: React.FC = () => {

  const navBarRef = React.useRef<HTMLDivElement>(null);
  let boundingClientRectRef = React.useRef<number|null>(null);
  const [isSticky, setIsSticky] = React.useState<boolean>(false);

  React.useEffect(() => {
    gsap.fromTo('.navlink', {opacity: 0}, {opacity: 1, duration: 0.35, stagger: 0.1 });  

    const setBindingClientRec = ()=> {
      boundingClientRectRef.current = window.scrollY;
    };

    document?.addEventListener('scroll', (e) => {
      setBindingClientRec();
      if(NAVBAR_FOLD <= boundingClientRectRef.current!) {
        setIsSticky(true);
      } 
      if (NAVBAR_FOLD >= boundingClientRectRef.current!) {
        setIsSticky(false);
      }
    });
  }, []);


  return (
    <div 
      ref={navBarRef}
      css={[
        cssStyles.container,
        isSticky && cssStyles.sticky,
      ]}
      className='flex items-center flex-row w-full p-2 justify-between cursor-pointer px-5'
    >
      <LogoLink />
      <div css={{ display: 'flex', alignItems: 'center'}}>
        <ThemeToggle css={(theme: Theme) => ({ marginRight: theme.spacing(4), paddingTop: theme.spacing(1) })}/>
        <Navlink destination='accueil' />
        <Navlink destination='a propos' />
        <Navlink destination='projets' />
        <Navlink destination='structure' />
        <Navlink destination='contact' />
      </div>
    </div>
  );
};

export default Navbar;
