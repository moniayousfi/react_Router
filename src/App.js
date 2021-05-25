import React, { useState } from "react";
import './App.css';

import Filter from './Components/Filter/Filter';
import FilterRating from './Components/Filter/FilterRating'
import Add from "./Components/MovieCard/Add";
import MovieList from "./Components/MovieList/MovieList";
import data from './data/data.json'

function App() {

 const[searchValue, setSearchValue] = useState('');
 const[searchRating,setSearchRating]=useState('');
  const[movie, setMovie] = useState(data);

  const AddMovies = (newmovies) =>{
    setMovie([...movie,newmovies
    
  ])
  }
  const searchMovies = title =>{
    setSearchValue(title)

  }
  const searchRatingMovies = rating =>{
    setSearchRating(rating)
  
  }
 
  
  return (
    <div className="app">
        
   
   
      <Filter searchMovies={searchMovies}/>  
      <FilterRating searchRatingMovies={searchRatingMovies}/> 
    
      <MovieList movies={movie.filter(movie=>
      movie.title.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase() ) &&
          (movie.rating>=searchRating)
      )}/>
      <Add onSubmitMovie={AddMovies}/>
    </div>
  );
}

export default App;
