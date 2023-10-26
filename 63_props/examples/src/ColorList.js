export default function ColorList({ colors }) {
    return (
        <div>
            <p>Color List</p>
            <p>{colors.map(el => <li style={{ color: el }}>{el}</li>)}</p>
        </div>
    )
}