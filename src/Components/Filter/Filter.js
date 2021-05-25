import "../Filter/Filter.css";
function Filter({ searchMovies }) {
  const handleSearchInputChanges = (e) => {
    console.log(e.target.value);
    searchMovies(e.target.value);
  };

  return (
    <form className="search">
      <label>Filter By Title: </label>
      <input
        placeholder="search..."
        type="text"
        onChange={handleSearchInputChanges}
      />
    </form>
  );
}

export default Filter;
