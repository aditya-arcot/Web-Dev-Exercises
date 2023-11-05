import './App.css'
import Counter from './Counter'
import GameBoard from './GameBoard'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'

function App() {
    return (
        <>
            {/* <Counter /> */}
            {/* <GameBoard /> */}
            {/* <EmojiClicker /> */}
            <ScoreKeeper numPlayers={4} target={3} />
        </>
    )
}

export default App
