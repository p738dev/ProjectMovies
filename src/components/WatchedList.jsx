import React from "react";
import WatchedItem from "./WatchedItem";

const WatchedList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedItem movie={movie} />
      ))}
    </ul>
  );
};

export default WatchedList;
