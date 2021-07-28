import React, { useEffect, useState } from 'react'
import './pokeListItem.css'
import App from '../App';
import PokePage from './pokePage';
import { Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import fetch from 'node-fetch';



const PokeListItem = (props) => {

    const [pokePic, setPokePic] = useState('')
    const [pokeData, setPokeData] = useState('')

    const pokemon = props.props

    // get type, ability, environmentm, pic
   
    const getPokeData = async () => {
        await fetch( pokemon.url )
            .then(resolve => resolve.json())
            .then(data => {
                setPokeData(data)
                setPokePic(data.sprites.front_default)
            })
    }
    
    useEffect(() => {
        getPokeData() 
    }, [])


    return (
        <div className="poke-list-item" id={pokemon.name} >
            <Router>
                <Link to={`/pokePage/${pokemon.name}`}>
                    <div className="pokePic"><img src={pokePic}/></div>
                    <div className="pokeTitle">{pokemon.name}</div>
                </Link>
                <Route exact path={`/pokePage/${pokemon.name}`} component={() => <PokePage pokemon={pokeData}/> } />
            </Router> 
        </div>
    )
}

export default PokeListItem;