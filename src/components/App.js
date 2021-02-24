import React from 'react';
import pokeInfo from '../data/info.json';
import '../App.css';
import Pokelist from './Pokelist';


class App extends React.Component {
  
  render() {
    console.log(pokeInfo);
    console.log(pokeInfo[0].id);
    return (
      <div className="page">
        <Pokelist list={pokeInfo} />
      </div>
    );
  }
}

export default App;
