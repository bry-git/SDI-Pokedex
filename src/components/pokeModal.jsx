import React from 'react';

const placeholders = {
    name: 'bulbasaur',
    type: 'grass',
    ability: 'overgrow',
    location: 'kanto'
}

const PokeModal = ({ name, type, ability, location} ) => {

    return(
        <div className="modal-root">
            <div className="modal-container">
                <p>{`Name: ${placeholders.name}`}</p>
                <p>{`Type: ${placeholders.type}`}</p>
                <p>{`Ability: ${placeholders.ability}`}</p>
                <p>{`Found in: ${placeholders.location}`}</p>
            </div>
        </div>
    )
}