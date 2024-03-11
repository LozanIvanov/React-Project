import React from "react";

import './MovieDetail.css';

export default function MovieDetails({movie}) {

    function renderMovie() {
        return (
            <>
                <h1>{movie.Title} {movie.Year}</h1>
                <img src={movie.Poster} ></img>
                <p className="rating" >{movie.imdbRating}</p>
                <p>{movie.Genre}</p>
                <p>{movie.Plot}</p>
                <p>Actors: {movie.Actors}</p>
            </>
        );
    }
    return (
        <>
            <div className="movie-info">
                {movie.Title && renderMovie()}
            </div>
        </>
    )
}