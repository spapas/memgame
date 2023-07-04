import React from 'react'


export default function Card({
    idx, src, isOpen, matched, onClick
}) {

    return <div className={`tile ${isOpen?'is-flipped':''}`}>
        <div className="tile__face tile__face--front">
            <img src='/back.jpg' alt="memgame" className={`w-100 border-4 ${matched?'border-green-600':'border-rose-600'}`} onClick={()=>onClick(idx)}/>
        </div>
        <div className="tile__face tile__face--back">
            <img src={src} alt="memgame" className={`w-100 border-4 ${matched?'border-green-600':'border-rose-600'}`} onClick={()=>onClick(idx)}/>
        </div>
    </div>
    /*
    return <img src={isOpen?src:'/back.jpg'} alt="memgame" className={`w-100 border-4 ${matched?'border-green-600':'border-rose-600'}`} onClick={()=>onClick(idx)}/>
    */
}