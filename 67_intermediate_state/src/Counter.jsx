import { useState } from "react";

export default function Counter(){
    console.log("render")

    const [count, setCount] = useState(0)
    const addOne = () => {
        setCount(count + 1)
    }
    const addThree = () => {
        setCount(cur => cur + 1)
    }
    const setToTen = () => {
        setCount(10)
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>10</button>
        </div>
    )
}