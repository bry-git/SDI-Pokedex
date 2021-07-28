import React, { useEffect, useState } from 'react'
import './pokeListItem.css'
import App from '../App';
import pokePage from './pokePage';

import { Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';


const PokeListItem = (props) => {

    const [pokePic, setPokePic] = useState('')

    const pokemon = props.props.name

    const getPic = async () => {
        await fetch( props.props.url )
            .then(resolve => resolve.json())
            .then(pic => { setPokePic(pic.sprites.front_default) })
    }

    useEffect(() => {
        getPic()
    }, [])

    return (
        <div className="poke-list-item">
            <a href={`/${pokemon}`}><div className="pokePic"><img src={pokePic}/></div>
            <div className="pokeTitle">{props.props.name}<br /><br /><br /></div></a>
            
        </div>
    )
}





export default PokeListItem;



// 