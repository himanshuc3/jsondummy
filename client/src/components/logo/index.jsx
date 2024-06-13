import React from 'react'
// TODO: Move later to public
import RightBracket from './right_bracket.svg'
import LeftBracket from './left_bracket.svg'

import './index.scss'

function Logo(){
    return (
        <div className='root-animation'>


            <div className='root-dummy-text'>
                <img src={LeftBracket} alt="" className='bracket-1' />
                <div>

                <div className='dummy montserrat-font'>
                    <span>d</span>
                    <span>u</span>
                    <span>m</span>
                    <span>m</span>
                    <span>y</span>
                </div>
                    &nbsp;&nbsp;
                </div>
                <img src={RightBracket} alt="" className='bracket-2' />
            </div>
        </div>
    )
}

export default Logo