import { useEffect, useContext, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setmovies] = useState([]);
  const [isSearchResultsVisible, setIsSearchResultsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setIsSearchResultsVisible(true);
  };

  const handleDisplayMovie = (movie) => {
    setIsSearchResultsVisible(false);
    setSearchTerm(movie.Title);
    navigate(`/movie/${movie.imdbID}`);
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      fetch(`https://www.omdbapi.com/?apikey=c4dcbf63&s=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Search) {
            setmovies(data.Search);
          } else {
            setmovies([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setmovies([]);
    }
  }, [searchTerm]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        movies,
        setmovies,
        isSearchResultsVisible,
        setIsSearchResultsVisible,
        handleSearchChange,
        handleDisplayMovie,
        loading,
        setLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
