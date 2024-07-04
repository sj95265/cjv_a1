import React, { useState, useEffect } from 'react';
import { Box, Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MoviesListingPage = () => {
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
      <Heading size="xl" mb={4} textAlign="center">Movie List</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }} gap={6}>
        {movies.map(movie => (
          <GridItem key={movie.id} w={{ base: "50%", md: "auto" }} justifySelf="center">
            <Link to={`/movies/${movie.id}`}>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" h="100%">
                <Image src={movie.smallPoster} alt={movie.title} w="100%" h="90%" objectFit="cover" />
                {/* <Box p="6"> */}
                {/* <Box d="flex" alignItems="baseline"> */}
                <Text textAlign="center" noOfLines={1} fontWeight="semibold" fontSize="xl" lineHeight="short">
                  {movie.title}
                </Text>
                {/* </Box> */}
                {/* <Box mt="1" lineHeight="tight">
                    <Text noOfLines={3}>{movie.synopsis}</Text>
                    <Text>Rent Price: ${movie.rentPrice}</Text>
                    <Text>Buy Price: ${movie.buyPrice}</Text>
                  </Box> */}
                {/* </Box> */}
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default MoviesListingPage;
