import React from 'react'
import './Information.css'
export default function Information(props){
    //const Info = props.Info;
    const movie = props.movie;
    //console.log("in Information");
    //console.log(props);
    return(
        <div className="body">
            <img className="image" src={movie.Poster} alt="Poster"></img>
            <p><b>Title:</b> {movie.Title}</p>
            <p><b>Imdb Rating:</b> {movie.imdbRating}</p>
            <p><b>Release Year: </b>{movie.Year}</p>
            <p><b>Released Date: </b>{movie.Released}</p>
            <p><b>Genre: </b>{movie.Genre}</p>
            <p><b>Actors: </b>{movie.Actors}</p>
        </div>
    )

}