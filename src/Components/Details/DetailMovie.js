import React from "react";
import { useEffect, useState } from "react";
import data from "../../data/data.json";
import StarRatings from "react-star-ratings";
import "../Details/DetailMovie.css";
import { Link } from "react-router-dom";

const DetailMovie = ({ match }) => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItem] = useState(data);

  const fetchItems = () => {
    const fecthitems = item.filter(
      (itemm) => itemm.title === match.params.title
    );
console.log(fecthitems);
    setItem(...fecthitems);
  };

  return (
    <div class="details">
      <h1 style={{ color: "white" }}>{item.title}</h1>
      <h1 style={{ color: "white" }}>{item.description}</h1>
      <img src={item.posterUrl} alt={item.title} />
      <StarRatings
        rating={item.rating}
        starRatedColor="yellow"
        numberOfStars={5}
        name="rating"
        starDimension="25px"
        starSpacing="10px"
      />
        <iframe src={item.trailerLink} title={item.title}></iframe> 
        <Link to={`/`}>
       Go Back To Home
       </Link>
    </div>
  );
};

export default DetailMovie;
