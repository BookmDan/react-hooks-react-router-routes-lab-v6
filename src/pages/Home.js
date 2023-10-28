import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies data here and set it using setMovies
    const apiUrl = 'https://api.example.com/movies';

    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Once data is received, update the 'movies' state with the fetched data
      setMovies(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
