import React from 'react';
import './App.css'
import { ThemeProvider } from '@emotion/react';
import defaultTheme, { darkTheme } from './styles/theme';
import __reset from './styles/__reset.css';
import __fonts from './fonts/__fonts.css';
import Navbar from './Components/Navbar/Navbar';
import cssStyles from './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Pages/HomePage';
import useAppStore from './store/store';
import ThemedGlobal from './ThemedGlobal/ThemedGlobal';
import Formation from './Components/Pages/Formation/Formation';
import Projets from './Components/Pages/Projets/Projets';
import SingleProject from './Components/Pages/SingleProject/SingleProject';
import { motion, useAnimationControls } from 'framer-motion';

function App() {
  const isDarkTheme = useAppStore((state)=>state.isDarkTheme);
  const [isMaillet, setIsMaillet] = React.useState<boolean>(false);

  React.useEffect(() => {
    let code: string = '';
    document.addEventListener('keydown', (e) => {
      code += e.key;
      if (code.length === 7) {
        if (code === 'maillet') {
          setIsMaillet(true);
        } 
        code = code.slice(1);
      }
    })
  }, [])

  return (
    <div css={[
      cssStyles.app,
      isMaillet && cssStyles.maillet,
      ]}>
      {
        isMaillet && <img css={cssStyles.nyan} src='/images/maillet.gif'></img>
      }
      <ThemeProvider theme={isDarkTheme ? {...defaultTheme, ...darkTheme} : {...defaultTheme}}>
          <ThemedGlobal/>
            <Navbar/>
            <Routes>
              <Route path='/accueil' element={<Homepage/>} />
              <Route path='' element={<Navigate to='/accueil' />} />
              <Route path='/formation' element={<Formation/>} />
              <Route path='/projets' element={<Projets/>} />
              <Route path='/projets/:projet' element={<SingleProject/>} />
            </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App
