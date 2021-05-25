import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "../MovieList/MovieList.css";

function MovieList({ movies }) {
  return (
    <div className="movies">
      {movies.map((movie, i) => (
        <MovieCard movie={movie} key={i} />
      ))}
    </div>
  );
}
export default MovieList;
