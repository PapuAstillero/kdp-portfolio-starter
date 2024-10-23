import { Outlet, Link } from "react-router-dom"
import languages from "../lang"
import CV from "../assets/background/CV.pdf";


function Layout({ lang, setDark, dark, setLang }) {
    console.log('dark :', dark);
    const handleLang = () => {
        if (lang.KEY === 'Español') setLang(languages.english);
        if (lang.KEY === 'Inglés') setLang(languages.spanish);
    };
    const toggleTheme = () => {
        setDark(!dark);
    };
    return (

        <div className={`app ${dark ? 'dark' : 'light'}`}>
            <div id='nav'>
                <button onClick={toggleTheme}> {dark ? <i class="bi bi-brightness-high"></i> : <i class="bi bi-moon"></i>}</button>
                <button onClick={handleLang}> {lang.KEY}{dark ? '' : ''}</button>
                <Link to={"/"} ><button> {lang.Casa}{dark ? '' : ''}</button></Link>
                <Link to={"/SobreMi"} ><button> {lang.Inicio}{dark ? '' : ''}</button></Link>
                <Link to={"/Proyectos"} ><button> {lang.introducción}{dark ? '' : ''}</button></Link>
                <a href={CV} download="CV.pdf"><button >{lang.descarga}{dark ? "" : ""} </button></a>
            </div>
            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default Layout