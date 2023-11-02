import { useState } from "react";
import './Toggler.css'

export default function Toggler() {
    const [happy, setHappy] = useState(true)
    const toggleHappy = () => setHappy(!happy)
    return (
        <p className="Toggler" onClick={toggleHappy}>
            {happy ? "😀" : "😭"}
        </p>
    )
}