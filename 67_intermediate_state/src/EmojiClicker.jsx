import { useState } from "react"
import { v4 as uuid } from "uuid"

const emojis = ["🤣", "😡", "😭", "😀"]
const randomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)]
}
export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }])
    const addEmoji = () => {
        setEmojis(oldEmojis => [...oldEmojis, { id: uuid(), emoji: randomEmoji() }])
    }
    const deleteEmoji = (id) => {
        setEmojis(oldEmojis => [...oldEmojis].filter(e => e.id !== id))
    }
    return (
        <>
            <div>
                {emojis.map(e => (
                    <span key={e.id} onClick={() => deleteEmoji(e.id)} style={{ fontSize: "4rem" }}>{e.emoji}</span>
                ))}
            </div>
            <button onClick={addEmoji}>Add Emoji</button>

        </>
    )
}