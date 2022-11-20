import React from 'react';
import './App.css'
import { Global, ThemeProvider } from '@emotion/react';
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

function App() {
  const isDarkTheme = useAppStore((state)=>state.isDarkTheme);
  
  return (
    <div css={cssStyles.app}>
      <ThemeProvider theme={isDarkTheme ? {...defaultTheme, ...darkTheme} : {...defaultTheme}}>
          <ThemedGlobal/>
            <Navbar/>
            <Routes>
              <Route path='/accueil' element={<Homepage/>} />
              <Route path='' element={<Navigate to='/accueil' />} />
              <Route path='/formation' element={<Formation/>} />
            </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App
