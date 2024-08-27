import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../api";
import MovieCard from "../components/MovieCard";
import "./SearchPage.css";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchMovies(query);
      setMovies(data);
    };
    fetchData();
  }, [query]);

  return (
    <div className="container search-results-container">
      <h1>Search Results for "{query}"</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
