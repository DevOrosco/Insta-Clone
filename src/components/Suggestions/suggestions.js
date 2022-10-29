import './suggestion.css'

import vini from "./img/vini.jpg"
import biaPerfil from "./img/bia.jpg"
import gabs from "./img/gabs.jpg"
import vitor from "./img/vitor.jpg"
import belli from "./img/belli.jpg"

export function Suggestion() {
    return (
        <>
            <div className='headerSugs'>
                <img src={vini} />
                <div className='userInfosSugs'>
                    <div className='infos'>
                        <span>dev_orosco</span>
                        <p>Vinicius Orosco</p>
                    </div>
                    <button className='switch'>Mudar</button>
                </div>
            </div>

            <div className='headerMainSugs'>
                <p> Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className='userSugs'>
                <div className='informacoesSugs'>
                    <img src={vitor} />
                    <div className='dadosSugs'>
                        <span>_vittorlima</span>
                        <p>Seguido por isabellioliveira29</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>

                <div className='informacoesSugs'>
                    <img src={belli} />
                    <div className='dadosSugs'>
                        <span>isabellioliveira29</span>
                        <p>Seguido por _vittorlima</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>

                <div className='informacoesSugs'>
                    <img src={biaPerfil} />
                    <div className='dadosSugs'>
                        <span>bia_szmartins</span>
                        <p>Segue você</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>

                <div className='informacoesSugs'>
                    <img src={gabs} />
                    <div className='dadosSugs'>
                        <span>gab.augustoz</span>
                        <p>Segue você</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>
            </div>

            <footer className='footerSugs'>
            <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

<p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </>
    )
}



