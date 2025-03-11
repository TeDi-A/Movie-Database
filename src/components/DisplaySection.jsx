import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";
import DisplayMoviePreview from "./DisplayMoviePreview";
import { useSearchContext } from "./SearchContext";
import { DotLoader } from "react-spinners";

const DisplaySection = () => {
  const {
    movies,
    handleDisplaySearchResults,
    loading,
    setLoading,
    isSearchResultsVisible,
  } = useSearchContext();

  if (loading) {
    return (
      <div className="loading">
        <DotLoader color="white" />
      </div>
    );
  }

  console.log(loading);
  return (
    <div className="display-section">
      <>
        <Searchbar />
        <SearchResults />
      </>
      {}
      {!isSearchResultsVisible && movies && (
        <div className="movie-preview-items">
          {movies.map((movie) => (
            <DisplayMoviePreview
              key={movie.imdbID}
              moviePoster={movie.Poster}
              movieTitle={movie.Title}
              movieimdbID={movie.imdbID}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplaySection;
