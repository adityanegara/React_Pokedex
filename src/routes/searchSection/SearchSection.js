import React from 'react';
import Search from '../../components/Search/Search';

const SearchSection = ({setSearchPokemon, searchingPokemon}) =>{
    return (
        <section id="search-section">
            <Search setSearchPokemon = {setSearchPokemon} 
                    searchingPokemon = {searchingPokemon}
                    buttonText = "Search" 
                    placeholder = "Pokemon name..."/>
        </section>
    );
}

export default SearchSection;