import './Die.css'

export default function Die({ val, color = "black" }) {
    return (
        <div className="Die" style={{ backgroundColor: color }}>
            {val}
        </div>
    )
}