import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import ReactDOM from 'react-dom';
import Header from './header';
import Navigation from './navigation';

const PokePage = () => {

    // const [ pokemon, setPokemon ] = useState('')

    // const getPokeData = async () => {
    //     await fetch(props.props.url)
    //      .then(resolve => resolve.json())
    //      .then(data => { setPokemon(data)) })
    // }
    
    // useEffect(() => {
    //     getPokeData()
    // }, [])

    return(
        <div className="poke-page">
            <span>this is the individual pokemon page</span>
        </div>
    )
}

export default PokePage