import Card from '../../components/Card/Card';

const ResultSectionLogic = ()=>{
    const renderPokemonCards = (pokemons) =>{
        const renderPokemons = pokemons.map((pokemon)=>{
            return <Card pokemon = {pokemon}/>
        });
        
        return renderPokemons;
    }

    const getPokemonsNameAndType = (pokemonData) =>{
        let pokemons = [];
        for(let i = 0; i< pokemonData.length; i++){
            let pokemon = {
                id : pokemonData[i].id,
                img : `https://pokeres.bastionbot.org/images/pokemon/${pokemonData[i].id}.png`,
                name : pokemonData[i].name,
                types : getPokemonTypes(pokemonData[i])
            };
            pokemons.push(pokemon);
        }
        return pokemons;
     
    }

    const getPokemonTypes = (pokemon) =>{
        let types = [];
      
        (pokemon.types).forEach(type => {

            types.push(type.type.name);
        });
        return types;
    }
    
    return {renderPokemonCards,getPokemonsNameAndType }
}

export default ResultSectionLogic;