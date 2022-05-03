import React, { useState } from 'react'
import MoleContainer from '../MoleContainer'

const useEffectBasics = () => {
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
            <h4>Click a mole</h4>
            <h3>{score}</h3>
            {createMoleHill()}
        </div>
    )
}

export default useEffectBasics