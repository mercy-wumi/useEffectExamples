import React, { useState } from 'react'
import MoleContainer from '../MoleContainer'

const ClickAMole = () => {
    const [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 10; i++) {
            hills.push(
                <MoleContainer
                    key={i}
                    score={score}
                    setScore={setScore}
                />
            )
        }
        return (
            <div>{hills}</div>
        )
    }

    return (
        <div>
            <h4>Click the blue Sneaker</h4>
            <h3>{score}</h3>
            {createMoleHill()}
        </div>
    )
}

export default ClickAMole