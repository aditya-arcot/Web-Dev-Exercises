export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1
    const num2 = Math.floor(Math.random() * 3) + 1
    // return (
    //     <div>
    //         <h2>Double Dice</h2>
    //         {num1 === num2 ? <p>You Win!</p> : <p>You Lose</p>}
    //         <p>{num1}, {num2}</p>
    //     </div>
    // )
    const isWinner = num1 === num2
    const style = { color: isWinner ? 'green' : 'red' }
    return (
        <div style={style}>
            <h2>Double Dice</h2>
            {isWinner && <p>You Win!</p>}
            <p>{num1}, {num2}</p>
        </div>
    )
}