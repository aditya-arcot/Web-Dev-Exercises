import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

export default function LuckyN({ numDice = 2, winCheck, name }) {
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = winCheck(dice)
    const roll = () => setDice(getRolls(numDice))
    return (
        <main className="LuckyN">
            <h1>{name}{isWinner && " - You Win!"}</h1>
            <Dice dice={dice} />
            {/* <button onClick={roll}>Re-Roll Dice</button> */}
            <Button text="Re-Roll Dice" onClick={roll}/>
        </main>
    )
}