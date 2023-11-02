import { useState } from "react"
import './ColorBox.css'

const randElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

export default function ColorBox({ colors }) {
    const [color, setColor] = useState(randElement(colors))
    const setRandomColor = () => {
        setColor(randElement(colors))
    }
    return (
        <div
            onClick={setRandomColor}
            className="ColorBox"
            style={{ backgroundColor: color }}>
        </div>
    )
}