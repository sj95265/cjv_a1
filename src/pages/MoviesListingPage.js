import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing';

const MoviesListingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://json-server-vercel-mu-sable.vercel.app/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <Listing items={movies} type={'movies'} />
  );
};

export default MoviesListingPage;
