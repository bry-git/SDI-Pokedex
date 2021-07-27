import { useEffect, useState } from 'react';
import PokeListItem from './pokeListItem';
import fetch from 'node-fetch';


const PokeList = () => {

    const [pokemon, setPokemon] = useState([])

    const getAllPoke = async () => {
         await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then(data => {setPokemon(data.results)})
    }
    //use query param later = pokemon?limit=151'
    useEffect(() => {
        getAllPoke()
    }, [])

    return (
        <div className="poke-list-root">
             {pokemon.map((p) => <PokeListItem props={p}/>)}
        </div>

    )
}

export default PokeList;