import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "./SearchContext";

const DisplaySection = () => {
  return (
    <div>
      <>
        <Searchbar />
        <SearchResults />
      </>
      <div className="display-section"></div>
    </div>
  );
};

export default DisplaySection;
