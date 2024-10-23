import React from 'react'

function Proyectos({ lang }) {
    return (
        <div>
            <h1 id='Presentacion'>{lang.Proyectos}</h1>
            <hr id='hr1'></hr>
            <br></br>
            <br></br>
            <div className='ContainerProyectos'>
                <h6 className='Clientes'>{lang.Clientes}</h6>
                <div id='IconosGitHub'>
                    <a
                        href="https://github.com/PapuAstillero/registrodeclientes" class="bi bi-github" target='_blank'> </a>


                    <h6 className='Calculadora'>{lang.Calculadora}</h6>
                    <a
                        href="https://github.com/PapuAstillero/calculadora" class="bi bi-github" target='_blank'> </a>
                    <h6 className='Conversor'>{lang.Conversor}</h6>
                    <a
                        href="https://github.com/PapuAstillero/conversorars" class="bi bi-github" target='_blank'> </a>
                </div>
            </div>
        </div>
    )
}

export default Proyectos