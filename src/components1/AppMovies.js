import React,{useEffect, useRef, useState} from "react";
import Header from "./HeaderM";
import SearchBar from "./SearchBar";
import MovieDetails from "./MovieDetail";
export default function AppMovies(){

    const[searchterm,setSearchterm]=useState('');
    const[movie,setMovie]=useState({});

    function searchMovie(){
            fetch(`https://www.omdbapi.com/?apikey=4490a55c&t=${searchterm}`)
            .then(response => response.json())
            .then(movie => {
                setMovie(movie);

            })
    }
    return(
        <div>
            <Header/>
            <SearchBar onButtonClick={searchMovie}
            setSearchterm={setSearchterm} />
            <MovieDetails 
            movie={movie}
            />
        </div>
    )
}