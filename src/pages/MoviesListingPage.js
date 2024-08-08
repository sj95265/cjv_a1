import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Spinner } from '@chakra-ui/react';
import Listing from '../components/Listing';

const MoviesListingPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/movies${query}`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies('');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(`/search?title=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSearch}>
        <Box mb={4} display="flex" alignItems="center">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies..."
            mr={2}
            color="black"
            bg="white"
          />
          <Button type="submit" colorScheme="blue">Search</Button>
        </Box>
      </form>
      {loading ? (
        <Spinner />
      ) : (
        <Listing items={movies} type={'movies'} />
      )}
    </Box>
  );
};

export default MoviesListingPage;
