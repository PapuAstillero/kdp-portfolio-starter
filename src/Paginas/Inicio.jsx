import React from 'react'


function Inicio({ lang }) {
    return (
        <div id='infoinicio'>



            <h1>{lang.title}</h1>
            <br></br>
            <p id='p1'>{lang.language}</p>
            <p>HTML| CSS | JAVASCRIPT| REACT JS  </p>
            <hr id='hr1'></hr>
            <div id='messi'>

                <a
                    href="https://github.com/PapuAstillero" class="bi bi-github" target='_blank'> </a>





                <a class=" bi-linkedin" href="https://www.linkedin.com/in/ramiro-r-400aba310/" target='_blank'> </a>

            </div>
        </div>
    )
}

export default Inicio