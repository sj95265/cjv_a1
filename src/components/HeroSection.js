import React, { useState, useEffect } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>Most Demanded Movies</Heading>
      <Box display="flex" flexWrap="wrap">
        {movies.map(movie => (
          <Box key={movie.id} p={4} width="25%">
            <Image src={movie.poster} alt={movie.title} />
            <Heading as="h3" size="md" mt={2}>{movie.title}</Heading>
            <Text>{movie.synopsis}</Text>
            <Text>Rent Price: ${movie.rentPrice}</Text>
            <Text>Buy Price: ${movie.buyPrice}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
