import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0))
    const incrementPlayerScore = (idx) => {
        setScores(oldScores => {
            return oldScores.map(function (score, index) {
                if (index === idx) {
                    return score + 1
                } else {
                    return score
                }
            })
        })
    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0))
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return (
                        <li key={idx}>
                            Player{idx + 1}: {score}
                            <button onClick={() => incrementPlayerScore(idx)}>+1</button>
                            {score >= target && "Winner!"}
                        </li>
                    )
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}