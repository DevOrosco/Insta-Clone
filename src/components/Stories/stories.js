import "./stories.css"
import marialice from './imagens/marialicePerfil.jpeg'
import ingrid from './imagens/ingridPerfil.jpeg'
import joao from './imagens/joaoPerfil.jpg'
import proa from './imagens/proaPerfil.jpg'
import biel from './imagens/bielPerfil.jpeg'
import marquin from './imagens/marquinhos.jpeg'
import lol from './imagens/lol.jpg'

export function Stories(){
    return(

        <div className="container">
            <div className="user-elements">
                <div>
                    <img className="image-user-stories" alt="Foto" src={marialice}/>
                </div>
                <span>_maria.alice</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className="image-user-stories" alt="Foto" src={ingrid}/>
                </div>
                <span>ingrid.lis2</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className="image-user-stories" alt="Foto" src={joao}/>
                </div>
                <span>joaovitor_...</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className="image-user-stories" alt="Foto" src={proa}/>
                </div>
                <span>instituto.pr...</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className="image-user-stories" alt="Foto" src={biel}/>
                </div>
                <span>passos.web</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className="image-user-stories" alt="Foto" src={marquin}/>
                </div>
                <span>marquin_...</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className="image-user-stories" alt="Foto" src={lol}/>
                </div>
                <span>leagueof...</span>
            </div>
            
        </div>
    )
}