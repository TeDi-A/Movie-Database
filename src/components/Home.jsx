import React, { useState } from "react";
import Header from "./Header";
import DisplaySection from "./DisplaySection";

const Home = () => {
  const [isSearchResultsVisible, setIsSearchResultsVisible] = useState(false);

  const handleDisplaySearchResults = () => {
    setIsSearchResultsVisible(true);
  };

  return (
    <div>
      <Header />
      <DisplaySection 
        isSearchResultsVisible={isSearchResultsVisible} 
        onDisplaySearchResults={handleDisplaySearchResults} 
      />
    </div>
  );
};

export default Home;