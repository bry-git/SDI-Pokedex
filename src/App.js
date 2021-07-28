import './App.css';
import PokeList from './components/pokeList';
import PokePage from './components/pokePage';
import { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {


  const [pokemon, setPokemon] = useState([])

  const getAllPoke = async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=3')
      .then(response => response.json())
      .then(data => { setPokemon(data.results) })
  }

  useEffect(() => {
    getAllPoke()
  }, [])

  return (
    <div className="App">
      <Router>
        <Link to="/"></Link>
        <Route exact path='/'>
          <PokeList pokemon={pokemon} />
        </Route>
        {/* <Route exact path='/pokePage/:pokemon'>
          <PokePage pokemon={pokemon}/> 
        </Route> */}
      </Router>
    </div>

  );
}

export default App;
