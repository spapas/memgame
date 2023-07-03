import React from 'react'


export default function Card({
    idx, src
}) {
    const [isOpen, setIsOpen] = React.useState(false)
    function handleClick()  {
        
        setIsOpen(!isOpen)
    }
    return <img src={isOpen?src:'/back.jpg'} alt="memgame" className="w-100" onClick={handleClick}/>
    
}