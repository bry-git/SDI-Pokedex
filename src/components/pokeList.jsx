
import PokeListItem from './pokeListItem';
import PokePage from './pokePage';



const PokeList = (props) => {
    
    return (
      
        <div className="poke-list-root">
             {props.pokemon.map((p) => <PokeListItem props={p}/>)}
        </div>

    )
}

export default PokeList;