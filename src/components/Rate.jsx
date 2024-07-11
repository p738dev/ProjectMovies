import React, { useState } from "react";
import StarRating from "./StarRating";

const Rate = () => {
  const [movieRate, setMovieRate] = useState(0);

  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onSetMovieRate={setMovieRate}
      />
      <p>Ten film został oceniony na {movieRate} gwiazdek.</p>
    </div>
  );
};

export default Rate;
