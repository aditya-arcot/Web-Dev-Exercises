import { useState } from "react";

function generateGameBoard(){
    console.log("making game board")
    return Array(5000)
}

export default function GameBoard() {
    const [board, setBoard] = useState(generateGameBoard)
    return <button onClick={() => setBoard("board")}>click me to change state</button>
}