import React, { useEffect } from 'react'
import lov from '../images/lov.jpg'

const Mole = ({ setDisplayMole, moleClicked }) => {
    useEffect(() => {
        let randomSec = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            setDisplayMole(false)
        }, randomSec)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src={lov} style={{ padding: '5px' }} alt='mole' onClick={moleClicked} />
        </div>
    )
}

export default Mole