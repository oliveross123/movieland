import React from "react";

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/400"; // Placeholder image if poster_path is not available

  return (
    <div className="movie">
      <div>
        <p>{movie.release_date}</p>
      </div>
      <div>
        <img src={posterUrl} alt={movie.title} />
      </div>
      <div>
        <span>{movie.vote_average} / 10</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
