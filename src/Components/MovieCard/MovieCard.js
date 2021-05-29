import React from "react";
import "../MovieCard/MovieCard.css";
import StarRatings from "react-star-ratings";
import { Card } from 'react-bootstrap';

function MovieCard({ movie }) {
  const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

  const poster =
    movie.posterUrl === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.posterUrl;
  return (
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={poster} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
      {movie.description}
      </Card.Text>
      <StarRatings
        rating={movie.rating}
        starRatedColor="yellow"
        numberOfStars={5}
        name="rating"
        starDimension="25px"
        starSpacing="10px"
      />
   {/* <Link to={`/movie/${movie.title}`}>
  Details
</Link>
<br/>
<Link to={`/movie/${movie.title}`}>
  Play
  </Link>*/}
    </Card.Body>
  </Card>
  );
}

export default MovieCard;
