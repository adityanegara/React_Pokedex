import React from 'react';
import CardLogic from './CardLogic';
const Card = ({pokemon}) =>{
    const {renderPokemonTypes} = CardLogic();
    return (
        <div className = "col-md-4 col-lg-4 col-sm-12 mt-3"> 
            <div className="card mb-3 mx-auto" >
                <img className="card-img-top p-5" src={pokemon.img} alt="Card image cap"/>
                    <div className="card-body text-center">
                        <h5 className="card-title text-capitalize">{pokemon.name}</h5>
                        {renderPokemonTypes(pokemon.types)}
                    </div>
            </div>
        </div>
    );
}


export default Card;