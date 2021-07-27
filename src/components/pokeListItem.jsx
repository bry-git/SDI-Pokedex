import React, { useEffect, useState } from 'react'
import './pokeListItem.css'



const PokeListItem = (props) => {

    const [pokePic, setPokePic] = useState('')

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
            <a href="#"><div className="pokePic"><img src={pokePic}/></div>
            <div className="pokeTitle">{props.props.name}<br /><br /><br /></div></a>
        </div>
    )
}





export default PokeListItem;



// 