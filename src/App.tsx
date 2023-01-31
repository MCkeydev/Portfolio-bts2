import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import defaultTheme, { darkTheme } from './styles/theme';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Pages/HomePage';
import useAppStore from './store/store';
import ThemedGlobal from './ThemedGlobal/ThemedGlobal';
import Formation from './Components/Pages/Formation/Formation';
import Projets from './Components/Pages/Projets/Projets';
import SingleProject from './Components/Pages/SingleProject/SingleProject';
import __fonts from './fonts/__fonts.css';
import __reset from './styles/__reset.css';
import cssStyles from './App.css';
import './App.css';
import Veille from './Components/Pages/Veille/Veille';
import Footer from './Components/Footer/Footer';
import testBalle from './Components/Utils/Balle';

function App() {
	const isDarkTheme = useAppStore((state) => state.isDarkTheme);
	const [isMaillet, setIsMaillet] = React.useState<boolean>(false);
	const balleRef = React.useRef<HTMLImageElement>(null);

	React.useEffect(() => {
		let code: string = '';
		document.addEventListener('keydown', (e) => {
			code += e.key;
			if (code.length === 7) {
				if (code === 'maillet') {
					setIsMaillet(true);
				}
				if (code.includes('stop')) {
					setIsMaillet(false);
				}
				code = code.slice(1);
			}
		});
	}, []);

	React.useEffect(() => {
		if (isMaillet && balleRef.current !== null) {
			testBalle(balleRef.current);
		}
	}, [isMaillet, balleRef.current]);

	return (
		<div css={[cssStyles.app, isMaillet && cssStyles.maillet]}>
			{isMaillet && (
				<img
					id='nyan'
					css={cssStyles.nyan}
					src='/images/maillet.gif'
					ref={balleRef}
				></img>
			)}
			<ThemeProvider
				theme={
					isDarkTheme
						? { ...defaultTheme, ...darkTheme }
						: { ...defaultTheme }
				}
			>
				<ThemedGlobal />
				<Navbar />
				<Routes>
					<Route
						path='/accueil'
						element={<Homepage />}
					/>
					<Route
						path=''
						element={<Navigate to='/accueil' />}
					/>
					<Route
						path='/formation'
						element={<Formation />}
					/>
					<Route
						path='/projets'
						element={<Projets />}
					/>
					<Route
						path='/projets/:projet'
						element={<SingleProject />}
					/>
					<Route
						path='/veille'
						element={<Veille />}
					/>
				</Routes>
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
