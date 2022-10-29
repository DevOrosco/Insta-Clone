import './post4.css'
import {FiMoreHorizontal, FiSend} from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsBookmark, BsEmojiSmile} from 'react-icons/bs'


import joaoPerfil from './imagens/joaoPerfil.jpg'
import joaoPost from './imagens/joaoPost.jpg'
import { IconContext } from 'react-icons/lib'

export function Post4(){
    return(
        <>
            <header className='header-post'>
                <div className="info-post">
                    <img className='img-header-post' src={joaoPerfil}/>

                    <p>joaovitor_conrado</p>
                </div>

                <FiMoreHorizontal/>
            </header>

            <div className='img-post'>
                <img src={joaoPost}/>
            </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size: "25px"}}>
                    <section className='engagement-post'>
                        <div className='icons-one'>
                            <div className='icon'>

                                <IoMdHeartEmpty/>

                            </div>

                            <div className='icon'>
                                
                                <BsChat/>

                            </div>
                                
                            <div className='icon'>

                                <FiSend/>

                            </div>
                        </div>
                        
                        <div className='icon'>
                            
                            <BsBookmark/>
                            
                        </div>

                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>1M curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>joaovitor_conrado</strong> “O primeiro passo para realizar um sonho é sonhar” 🚀💙
                    </p>
                </div>

                <div className='time-post'>
                    <time>HÁ 12 HORAS</time>
                </div>

                <div className='comment'>
                    <div className='fake-comment'>
                        <IconContext.Provider value={{size: "25px"}}>
                            <div className='icon'>
                                <BsEmojiSmile/>
                            </div>
                        </IconContext.Provider>

                        <input placeholder='Adicione um comentário...'/>

                    </div>

                    <button>Publicar</button>
                    
                </div>
            </div>
        </>

        
    )
}
