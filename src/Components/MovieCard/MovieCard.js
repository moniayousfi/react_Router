import React from "react";
import "../MovieCard/MovieCard.css";
import StarRatings from "react-star-ratings";
function MovieCard({ movie }) {
  const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

  const poster =
    movie.posterUrl === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.posterUrl;
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.title}`}
          src={poster}
        />
      </div>
      <p>{movie.description}</p>
      <StarRatings
        rating={movie.rating}
        starRatedColor="yellow"
        numberOfStars={5}
        name="rating"
        starDimension="25px"
        starSpacing="10px"
      />
    </div>
  );
}

export default MovieCard;
