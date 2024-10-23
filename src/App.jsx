import { useEffect, useState } from 'react';
import './App.css';
import languages from './lang';
import { Routes, Route } from 'react-router-dom';
import Layout from './Paginas/Layout';
import Inicio from './Paginas/Inicio';
import SobreMi from './Paginas/SobreMi';
import Proyectos from './Paginas/Proyectos';

function App() {
	const [lang, setLang] = useState(languages.spanish);
	const [dark, setDark] = useState(false);

	return (

		<>
			<Routes>
				<Route path="/" element={<Layout lang={lang} dark={dark} setLang={setLang} setDark={setDark} />}>
					<Route index element={<Inicio lang={lang} dark={dark} />} />
					<Route path='Proyectos' element={<Proyectos lang={lang} dark={dark} />} />
					<Route path='SobreMi' element={<SobreMi lang={lang} dark={dark} />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
