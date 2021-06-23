import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDiv = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres: </p>
        <ul>{movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
      </div>
    )
  })

  return (
  <div>
    <h1>Movies Page</h1>
      {movieDiv}
  </div>)
}

export default Movies;
