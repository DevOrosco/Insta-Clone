import './layout.css'

import { Stories} from '../Stories/stories'
import { Post1 } from '../Post/post'
import { Post2 } from '../Post2/post2'
import { Post3 } from '../Post3/post3'
import { Post4 } from '../Post4/post4'
import { Suggestion } from '../Suggestions/suggestions'


export function Layout(){
    return (
        <>
            <div className='MainGrid'>
                <div className='first-column' style={{gridArea: "firstColumn"}}>
                    <div className="box" style={{margin: "30px 0"}}>
                        <Stories/>
                    </div>
                    <div className="box" style={{margin: "30px 0"}}>
                        <Post1/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}}>
                        <Post2/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}}>
                        <Post3/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}}>
                        <Post4/>
                    </div>
                </div>

                <div className='secondColumn' style={{gridArea: "secondColumn"}}>
                    <div className="suggestionBox" style={{margin: "30px 0"}}>
                        <Suggestion/>
                    </div>
                </div>

            </div>
        </>
        
    )
}