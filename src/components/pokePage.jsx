import React, { useEffect } from 'react';
// import fetch from 'node-fetch';
// import ReactDOM from 'react-dom';
// import Header from './header';
// import Navigation from './navigation';

const PokePage = (props) => {

    useEffect(() => {
        console.log('WE KNOW YOU KNOW', props.pokemon)
    }, [])

    return(
       
        <div className="poke-page">
            <div className="pokeTitle">
                <p>{props.pokemon.name}</p>
                <p>Weight: {props.pokemon.weight}</p>
                
                <p>Type-1: {props.pokemon.types[0].type.name}</p>
                {/* <p>Location: {props.location_}</p> */}
                </div>
           
        </div>
    )
}

export default PokePage