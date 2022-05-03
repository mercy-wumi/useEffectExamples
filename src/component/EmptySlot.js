import React, { useEffect } from 'react'
import vas from '../images/vas.jpg'

const EmptySlot = ({ setDisplayMole }) => {
    useEffect(() => {
        let randomSec = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            setDisplayMole(true)
        }, randomSec)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src={vas} style={{ padding: '5px' }} alt='mole' />
        </div>
    )
}

export default EmptySlot