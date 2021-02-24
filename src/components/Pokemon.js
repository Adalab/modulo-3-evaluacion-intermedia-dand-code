
const Pokemon = (props) => {

    const pokemon = props.pokemonItem.types.map((type, i) => {
        return (
            <li key={i} className="App-poke_item">
                {type}
            </li>
        )
    }
    );

    return (
        <article>
            <img src={props.pokemonItem.url} alt={props.pokemonItem.name} />
            <h2 className="border">{props.pokemonItem.name}</h2>
            <ul>
                {pokemon}
            </ul>
        </article>

    );
}

export default Pokemon;