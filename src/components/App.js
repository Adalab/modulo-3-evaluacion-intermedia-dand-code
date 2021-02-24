import React from 'react';
import pokeInfo from '../data/info.json';
import '../style/App.css';
import Pokelist from './Pokelist';


class App extends React.Component {
  
  render() {
    // console.log(pokeInfo);
    // console.log(pokeInfo[0].id);
    return (
      <div className="App-page">
        <h1>Mi lista de pokemons</h1>
        <Pokelist list={pokeInfo}  />
      </div>
    );
  }
}

export default App;
