import React, { useState, useEffect } from 'react';
import { Box, Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const ids = [1, 2, 3, 4, 5];
      const promises = ids.map(id =>
        fetch(`http://localhost:3001/movies/?id=${id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Request for movie ${id} failed`);
            }
            return response.json();
          })
      );
      Promise.all(promises)
        .then(movieData => {
          const movies = movieData.map(data => data[0]);
          setMovies(movies);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
        });
    };
    fetchData();
  }, []);

  return (
    <Box p={4}>
      <Heading size="lg" mb={4}>Featured Movies</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>
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
                    <Text noOfLines={2}>{movie.synopsis}</Text>
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

export default FeaturedMovies;
