import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import { moviesData } from '../moviesData';

const Home = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
