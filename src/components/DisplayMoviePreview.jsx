import React from "react";
import { Link } from "react-router-dom";

function handleOnClick() {
  console.log("Clicked");
}

const DisplayMoviePreview = ({ moviePoster, movieTitle, movieimdbID }) => {
  return (
    <div className="movie-preview" onClick={handleOnClick}>
      <Link to={`/movie/${movieimdbID}`}>
        <img
          className="movie-preview-poster"
          src={moviePoster}
          alt={`movieTitle poster`}
        />
        <p className="movie-preview-text">{movieTitle}</p>
      </Link>
    </div>
  );
};

export default DisplayMoviePreview;
