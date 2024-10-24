import React from 'react';
import { useParams } from 'react-router-dom';
import { moviesData } from '../moviesData';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id === parseInt(id));

  return (
    <div className="movie-details">
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <img
            src={movie.poster_path} // This now points to the web URL
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDetails;
