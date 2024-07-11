import React, { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { useKeydown } from "../hooks/UseKeydown";

const SelectedMovie = ({ selectedId, onCloseMovie, onAddWatchedMovie }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  useKeydown("Escape", onCloseMovie);

  const countRef = useRef(0);

  const KEY = "8fdbcb58";

  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    if (userRating) countRef.current = countRef.current + 1;
  }, [userRating]);

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };
    getMovie();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Film | ${title}`;

    return () => {
      document.title = "Filmy";
    };
  }, [title]);

  const handleAdd = () => {
    const newMovie = {
      imdbID: selectedId,
      title,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecision: countRef.current,
    };
    onAddWatchedMovie(newMovie);
  };

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button
              className="btn-back"
              onClick={onCloseMovie}
            >
              &larr;
            </button>
            <img
              src={poster}
              alt={`Poster of ${movie}`}
            />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>Ocena: {imdbRating}</p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating
                maxRating={10}
                onSetRating={setUserRating}
              />
              {userRating > 0 && (
                <button
                  className="btn-add"
                  onClick={handleAdd}
                >
                  Dodaj do listy
                </button>
              )}
            </div>

            <p>
              <em>{plot}</em>
            </p>
            <p>Występują: {actors}</p>
            <p>Reżyser: {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default SelectedMovie;
