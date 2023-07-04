import React from 'react'


export default function Card({
    idx, src, isOpen, matched, onClick
}) {
    /*
    const [isOpen, setIsOpen] = React.useState(false)
    function handleClick()  {
        setIsOpen(!isOpen)
    }
    */
    return <img src={isOpen?src:'/back.jpg'} alt="memgame" className={`w-100 border-4 ${matched?'border-green-600':'border-rose-600'}`} onClick={()=>onClick(idx)}/>
    
}