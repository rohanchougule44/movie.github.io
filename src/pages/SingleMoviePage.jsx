import React, { useEffect, useState } from "react";
import { getMovieDetails, getMovieCast } from "../api";
import { useParams } from "react-router-dom";
import "./SingleMoviePage.css";

const SingleMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };

    const fetchMovieCast = async () => {
      const data = await getMovieCast(id);
      setCast(data);
    };

    fetchMovieDetails();
    fetchMovieCast();
  }, [id]);

  return (
    <div className="single-movie-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleMoviePage;
