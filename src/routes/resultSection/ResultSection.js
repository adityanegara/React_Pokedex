import React from 'react';
import ResultSectionLogic from './ResultSectionLogic';



const ResultSection = ({pokemonData, loading}) =>{
 
    const {renderPokemonCards, getPokemonsNameAndType} = ResultSectionLogic();
    let pokemons;
    try{
         pokemons = getPokemonsNameAndType(pokemonData);
    }catch{
    }
    if(loading == true){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }else{
        return (
            <section id="result-section ">
                <h1 className="text-center mt-3">Search Result</h1>
                <hr className="purple"></hr>
                <div className="row mt-4">
                    {renderPokemonCards(pokemons)}
                </div>
            </section>
        );
    }
 
}

export default ResultSection;