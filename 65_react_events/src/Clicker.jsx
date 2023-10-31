export default function Clicker({ text, msg }) {
    function handleClick() {
        alert(msg)
    }
    return (
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}