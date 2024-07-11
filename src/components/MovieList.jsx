import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, onSelectedMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.imdbID}
          onSelectedMovie={onSelectedMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;
