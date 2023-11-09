import './App.css'
import LuckyN from './LuckyN'
import { sum } from './utils'

function lessThanFour(dice) {
    return sum(dice) < 4
}
function allEqual(dice) {
    return dice.every(v => v === dice[0])
}
function App() {
    return (
        <>
            <LuckyN numDice={2} winCheck={lessThanFour} name={"Sum Less Than 4"} />
            <LuckyN numDice={3} winCheck={allEqual} name={"All Same Value"} />
        </>
    )
}

export default App
