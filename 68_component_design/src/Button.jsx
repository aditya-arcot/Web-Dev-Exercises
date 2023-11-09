export default function Button({text = "Click Me", onClick}) {
    return (
        <button onClick={onClick}>{text}</button>
    )
}