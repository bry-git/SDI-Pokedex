import { useEffect, useState, TextInput } from "react";
import React from 'react';
import fetch from 'node-fetch'


function Navigation(props) {

  // const [text, setText] = useState(null)
  // const [pokemon, setPokemon] = useState(null)

  // const searchPoke = async () => {
  //   await fetch(`https://pokeapi.co/api/v2/pokemon/${text}/`)
  //   .then(response => response.json())
  //   .then(data => setPokemon(data.results))
  // } 

  // useEffect(() => {
  //   searchPoke(text)
  // }, [text])

// const handleChange = (event) => {
//   event.preventDefault();
//   setText(event.target.value)
//   console.log(text)
// }

// const sendRequest = event => {
//   if (event.key === 'Enter') {
//     setText()
//   }
// }

  return (
    <div>
      <div className="navbar">
        <ul>
          <li><a href="#">Link holder</a></li>
          <li><a href="#">Link holder</a></li>
          <li><a href="#">Link holder</a></li>
        </ul>
      </div>
    </div>
  );  
  
}

export default Navigation;
