import { useEffect, useState } from 'react';
import './App.css';
import languages from './lang';

function App() {
	const [lang, setLang] = useState(languages.spanish);
	const [dark, setDark] = useState(false);
	console.log('dark :', dark);

	const handleLang = () => {
		if (lang.KEY === 'ES') setLang(languages.english);
		if (lang.KEY === 'EN') setLang(languages.spanish);
	};

	const toggleTheme = () => {
		setDark(!dark);
	};

	return (
		<div className={`app ${dark ? 'dark' : 'light'}`}>
			<button onClick={toggleTheme}>Tema: {dark ? 'Oscuro' : 'Claro'}</button>
			<button onClick={handleLang}>Idioma={lang.KEY}</button>
			<h1>{lang.title}</h1>
			<p>{lang.language}</p>
		</div>
	);
}

export default App;
