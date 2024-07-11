import React from "react";

const NumResults = ({ movies }) => {
  return (
    <p className="num-results">
      Znaleziono <strong>{movies.length}</strong> wyniki
    </p>
  );
};

export default NumResults;
