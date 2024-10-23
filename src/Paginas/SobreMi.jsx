import React from 'react'


function SobreMi({ lang }) {
    return (
        <div>
            <h1 id='Presentacion'>{lang.SobreMi}</h1>
            <hr id='hr1'></hr>

            <p id='Presentacion1er'>{lang.Presentación}</p>

            <br></br>
            <br></br>
            <p className='container'>{lang.Intro}</p>
            <br></br>
            <p className='container'>{lang.Entrada}</p>
            <br></br>
            <p className='cotainer'>{lang.Fin}</p>
            <br></br>
            <br></br>
            <h2 >{lang.Contacto}</h2>

            <a
                id='IconoWsp' class="bi bi-whatsapp" target='_blank' href='https://wa.me/5491140928717'> +54 9 11 4092-8717</a>












        </div>
    )
}

export default SobreMi