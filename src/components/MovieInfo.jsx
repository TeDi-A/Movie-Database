import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";
import { useSearchContext } from "./SearchContext";

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { loading, setLoading } = useSearchContext();

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://www.omdbapi.com/?apikey=c4dcbf63&i=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [id, setLoading]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!movie) {
    return <div className="loading">No movie data available</div>;
  }

  return (
    <div className="">
      <div className="searchbar-top">
        <Searchbar />
        <SearchResults />
      </div>
      <div className="movie-card results">
        <div className="movie-banner">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie-details">
          <h2 className="movie-title">{movie.Title}</h2>
          <div className="movie-genre">
            {movie.Genre &&
              movie.Genre.split(", ").map((genre, index) => (
                <p key={index} className="genre-item">
                  {genre}
                </p>
              ))}
          </div>
          <p className="movie-plot">{movie.Plot}</p>
          <p>
            <span className="movie-people">Director: </span>
            {movie.Director}
          </p>
          <p>
            <span className="movie-people">Writer: </span>
            {movie.Writer}
          </p>
          <p>
            <span className="movie-people">Stars: </span>
            {movie.Actors}
          </p>
          <a
            href={`https://www.imdb.com/title/${movie.imdbID}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="movie-button">View on IMDb</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;