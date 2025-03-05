import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieInfo from "./components/MovieInfo";
import DisplaySection from "./components/DisplaySection";
import { SearchProvider } from "./components/SearchContext";

function App() {
  return (
    <div className="container">
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;
