import './App.css';
import PokeList from './components/pokeList';

import { Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <PokeList/>   
      
    </div>
  );
}

export default App;
