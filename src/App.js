import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=4b3ccba43cbb410b2bd37df477bfbc28";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(
      `${API_URL}&query=${encodeURIComponent(title)}`
    );
    const data = await response.json();

    setMovies(data.results); // Assuming the movie results are under 'results' key
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      // Check if search term is not empty
      searchMovies(searchTerm);
    }
  }, [searchTerm]); // Run effect whenever searchTerm changes

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Vyhledat film..."
          value={searchTerm} // Bind input value to searchTerm state
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on change
        />
        <img
          src={SearchIcon}
          alt="Search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Použíjte vyhledávač</h2>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
