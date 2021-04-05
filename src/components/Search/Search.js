import React from 'react';


const Search = ({buttonText, placeholder, setSearchPokemon, searchingPokemon}) =>{
    
    const onChangeInput = (keyword) =>{
        setSearchPokemon(keyword);
    }

    const onButtonClick = () =>{
        searchingPokemon();
    }
    return (
             <div class="input-group mb-3 mt-3">
                <input onChange = {(e)=> onChangeInput(e.target.value)} type="text" class="form-control" placeholder={placeholder} />
                <div class="input-group-append">
                    <button onClick = {() => onButtonClick()}class="btn btn-outline-secondary purple-button" type="button">{buttonText}</button>
                </div>
            </div>
    );
}

export default Search;