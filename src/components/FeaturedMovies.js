import React, { useState, useEffect } from 'react';
import { Box, Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react';

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies')
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
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>Featured Movies</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
        {movies.map(movie => (
          <GridItem key={movie.id}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={movie.poster} alt={movie.title} />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" fontSize="xl" lineHeight="short">
                    {movie.title}
                  </Text>
                </Box>
                <Box mt="1" lineHeight="tight">
                  <Text>{movie.synopsis}</Text>
                  <Text>Rent Price: ${movie.rentPrice}</Text>
                  <Text>Buy Price: ${movie.buyPrice}</Text>
                </Box>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedMovies;
