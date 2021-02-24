import Pokemon from './Pokemon';

const Pokelist = (props) => {
  const pokemons = props.list.map((onePokemon) => {
    return (
       <li key={onePokemon.id}>
          <Pokemon pokemonItem={onePokemon} />
       </li>
        )
    });
        
  return (
   
    <div>
      <ul>
       {pokemons}
      </ul>
    </div>
  );
}

export default Pokelist;
