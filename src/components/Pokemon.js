
const Pokemon = (props) => {
   
    // const pokemon = props.pokemonItem.map((types) => {
    //     return (
    //         <li key={types.id}>
    //             {types} 
    //         </li>
    //     )
    // } 
    // );    
  
  return (
      <article>
          <img src={props.pokemonItem.url} alt={props.pokemonItem.name}></img>
          <h2>{props.pokemonItem.name}</h2>
          <ul>
              {/* {pokemon} */}
          </ul>
      </article>

  );
}

export default Pokemon;