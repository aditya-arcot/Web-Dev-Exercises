import './RandomPokemon.css'


function RandomPokemon() {
    const n = Math.floor(Math.random() * 151) + 1
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n}.png`
    return (
        <div className='RandomPokemon'>
            <h1>#{n}</h1>
            <img src={url}/>
        </div>
    )
}

export default RandomPokemon