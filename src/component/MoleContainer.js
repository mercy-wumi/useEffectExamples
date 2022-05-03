import React, { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = ({ setScore, score }) => {
    const [displayMole, setDisplayMole] = useState(false)
    const moleClicked = () => {
        setScore(score + 1)
        setDisplayMole(false)
    }
    return (
        <div style={{ display: 'inline-block' }}>
            {displayMole ? <Mole setDisplayMole={setDisplayMole} moleClicked={moleClicked} /> : <EmptySlot setDisplayMole={setDisplayMole} />}
        </div>
    )
}

export default MoleContainer