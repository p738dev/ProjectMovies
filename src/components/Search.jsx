import React, { useRef } from "react";
import { useKeydown } from "../hooks/UseKeydown";

const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);
  useKeydown("Enter", () => {
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Szukaj filmu..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default Search;
