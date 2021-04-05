import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchSection from './routes/searchSection/SearchSection';
import ResultSection from './routes/resultSection/ResultSection';
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';
import StyleSheet from './components/Stylesheet';
import {getAllPokemon, getPokemon} from './services/pokemon';

export default () =>{
    const [pokemonData, setPokemonData]= useState([]);
    const [searchPokemon, setSearchPokemon] = useState('');
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';
    useEffect(()=>{
        async function fetchData(){
            let response = await getAllPokemon(`${initialUrl}?offset=0&limit=9`);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadingPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    },  [])

       async function fetchData(){
            let response = await getAllPokemon(`${initialUrl}?offset=0&limit=9`);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadingPokemon(response.results);
            setLoading(false);
        }

    const loadingPokemon =  async (data) =>{
        let _pokemonData = await Promise.all(data.map(async pokemon =>{
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord;
        })
        ); 
        setPokemonData(_pokemonData);
    }

    const backToIndex = async () =>{
        setLoading(true);
        let data = await getAllPokemon(`${initialUrl}?offset=0&limit=9`);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

  

    const onNextClick = async () =>{
        setLoading(true);
        let data = await getAllPokemon(nextUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const onPreviousClick = async () =>{
        if(!prevUrl){
            return;
        }else{
            setLoading(true);
            let data = await getAllPokemon(prevUrl);
            await loadingPokemon(data.results);
            setNextUrl(data.next);
            setPrevUrl(data.previous);
            setLoading(false);
        }
    }

    const searchingPokemon = async () =>{
        if(searchPokemon){
            setLoading(true);
            let data = await getPokemon(`${initialUrl}/${searchPokemon}`);
            let array = [];
            array.push(data);
            setPokemonData(array);
            console.log(pokemonData);
            setLoading(false);
        }else{
            backToIndex();
        }
        
    }
    return (
        <div className="container">
            <StyleSheet/>
            <Navbar navbarTitle = "Pokedex Api"/>
            <SearchSection setSearchPokemon = {setSearchPokemon} searchingPokemon = {searchingPokemon}/>
            <ResultSection pokemonData = {pokemonData} loading = {loading}/>
            <Pagination onPreviousClick = {onPreviousClick} onNextClick = {onNextClick} />
            <Footer footerTitle = "www.pokedexapi.com"/>
         
        </div>
    )
}