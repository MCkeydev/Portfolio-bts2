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

function App() {
	const isDarkTheme = useAppStore((state) => state.isDarkTheme);
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
		});
	}, []);

	return (
		<div css={[cssStyles.app, isMaillet && cssStyles.maillet]}>
			{isMaillet && (
				<img
					css={cssStyles.nyan}
					src='/images/maillet.gif'
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
			</ThemeProvider>
		</div>
	);
}

export default App;
