import React, { useState, useEffect } from 'react';
import { Box, Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/movies/featured`);
        const movieData = await response.json();
        console.log("Fetched Movies Data:", movieData);
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box p={4}>
      <Heading size="lg" mb={4}>Featured Movies</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>
        {movies.length > 0 ? (
          movies.map(movie => (
            <GridItem key={movie.id} w={{ base: "50%", md: "auto" }} justifySelf="center">
              <Link to={`/movies/${movie.id}`}>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" h="100%">
                  <Image src={movie.smallPoster} alt={movie.title} w="100%" h="90%" objectFit="cover" />
                  <Text textAlign="center" noOfLines={1} fontWeight="semibold" fontSize="xl" lineHeight="short">
                    {movie.title}
                  </Text>
                </Box>
              </Link>
            </GridItem>
          ))
        ) : (
          <Text>No featured movies available.</Text>
        )}
      </Grid>
    </Box>
  );
};

export default FeaturedMovies;
