import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import "../MovieList/MovieList.css";

function MovieList({ movies }) {
  return (
    <div className="movies">
      {
  movies.length > 0 ?
      movies.map((movie, i) => (
        <Link to ={`/movie/${movie.title}`} >
        <MovieCard movie={movie} key={i} />
        </Link>
      ))
      :
      <h1 style={{color:'white'}}>No Movie found</h1>
  }
    </div>
  );
}
export default MovieList;
