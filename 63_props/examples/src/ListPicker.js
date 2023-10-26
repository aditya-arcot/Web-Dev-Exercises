export default function ListPicker({ vals = [] }) {
    const randInd = Math.floor(Math.random() * vals.length)
    return (
        <div>
            <p>List: {vals[randInd]}</p>
        </div>
    )
}