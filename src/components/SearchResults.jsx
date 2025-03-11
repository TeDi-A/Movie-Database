import React from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "./SearchContext";

const SearchResults = () => {
  const { movies, handleDisplayMovie, isSearchResultsVisible } = useSearchContext();

  return (
    <div className={`search-results-list ${isSearchResultsVisible ? "" : "hide-list"}`}>
      <ul>
        {movies.map((movie) => (
          <li className="search-results-item" key={movie.imdbID} onClick={() => handleDisplayMovie(movie)}>
            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;