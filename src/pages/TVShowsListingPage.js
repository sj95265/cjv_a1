import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Spinner } from '@chakra-ui/react';
import Listing from '../components/Listing';

const TVShowsListingPage = () => {
  const [tvShows, setTVShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchTVShows = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/tvshows${query}`);
      const data = await response.json();
      setTVShows(data);
    } catch (error) {
      console.error('Error fetching TV shows:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTVShows('');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchTVShows(`/search?title=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSearch}>
        <Box mb={4} display="flex" alignItems="center">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for TV shows..."
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
        <Listing items={tvShows} type={'tvShows'} />
      )}
    </Box>
  );
};

export default TVShowsListingPage;
