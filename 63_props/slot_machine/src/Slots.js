export default function Slots({ val1, val2, val3 }) {
    const win = (val1 === val2) && (val2 === val3)
    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={{ color: win ? 'green' : 'red' }}>{win ? 'You win' : 'You lose'}</h2>
            {win && <h3>Congrats!</h3>}
        </div>
    )
}