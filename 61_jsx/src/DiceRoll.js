import './DiceRoll.css'
import Die from "./Die"

function DiceRoll() {
    return (
        <div className='DiceRoll'>
            <h1>Dice Roll</h1>
            <Die />
            <Die />
            <Die />
        </div>
    )
}

export default DiceRoll