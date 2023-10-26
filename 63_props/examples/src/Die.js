export default function Die({ numSides = 6 }) {
    const roll = Math.floor(Math.random() * numSides) + 1
    return (
        <>
            <p>Sides: {numSides}</p>
            <p>Die roll: {roll}</p>
        </>
    )
}