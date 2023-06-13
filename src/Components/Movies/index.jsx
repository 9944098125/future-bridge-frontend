import React from "react";
import { FcRating } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import { getMovies } from "../../Redux/Actions/movies";

export default function Movies() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const movies = useSelector((state) => state.movies.movies);

  return (
    <React.Fragment>
      <div className="movies-container">
        {movies &&
          movies.map((movie, idx) => (
            <div key={idx} className="card">
              <h3 className="name">{movie?.name}</h3>
              <div className="rating-row">
                <FcRating fontSize="25px" />
                <h4 className="release-date">{movie?.rating}</h4>
              </div>
              <div className="rating-row">
                <h5>Release Date: </h5>
                <h4 className="release-date">{movie?.releaseDate}</h4>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}
