import Pokemon from './Pokemon';

const Pokelist = (props) => {
  const pokemons = props.list.map((onePokemon) => {
    return (
       <li key={onePokemon.id} className="App-poke_list">
          <Pokemon pokemonItem={onePokemon} />
       </li>
        )
    });
        
  return (
   
    <div>
      <ul className="App-poke_flex">
       {pokemons}
      </ul>
    </div>
  );
}

export default Pokelist;
