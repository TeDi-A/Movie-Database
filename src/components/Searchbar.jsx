import React from "react";
import { Search, ArrowRight } from "lucide-react";
import { useSearchContext } from "./SearchContext";

const Searchbar = () => {
  const { searchTerm, handleSearchChange, handleDisplaySearchResults } = useSearchContext();

  return (
    <div className="search-section">
      <Search size={30} />
      <input
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ArrowRight
        size={35}
        onClick={handleDisplaySearchResults}
        className={`arrow-icon ${searchTerm === "" ? "hide-arrow" : ""}`}
      />
    </div>
  );
};

export default Searchbar;