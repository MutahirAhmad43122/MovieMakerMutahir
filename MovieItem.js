import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img
        src={movie.poster_path} // This now points to the web URL
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieItem;
