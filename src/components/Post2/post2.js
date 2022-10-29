import './post2.css'
import {FiMoreHorizontal, FiSend} from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsBookmark, BsEmojiSmile} from 'react-icons/bs'


import bielPerfil from './imagens/bielPerfil.jpeg'
import bielPost from './imagens/bielPost.jpeg'
import { IconContext } from 'react-icons/lib'

export function Post2(){
    return(
        <>
            <header className='header-post'>
                <div className="info-post">
                    <img className='img-header-post' src={bielPerfil}/>

                    <p>passos.web</p>
                </div>

                <FiMoreHorizontal/>
            </header>

            <div className='img-post'>
                <img src={bielPost}/>
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
                    <span>456 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>passos.web</strong> IXQUEEECEEEE
                    </p>
                </div>

                <div className='time-post'>
                    <time>HÁ 23 HORAS</time>
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
