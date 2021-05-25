import "../Filter/Filter.css";
import ReactStars from "react-rating-stars-component";

function FilterRating({ searchRatingMovies }) {
  

  return (
    <form className="search">
      <label>Filter By Rating:</label>
{/* use the Component  ReactStars*/}
      <ReactStars
        count={5}
        name="rating"
        onChange={(rat) => {
          searchRatingMovies(rat);
        }}
        size={24}
        activeColor="#ffd700"
      />
    </form>
  );
}

export default FilterRating;
