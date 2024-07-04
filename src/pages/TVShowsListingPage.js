import React, { useState, useEffect } from 'react';
import { Box, Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const TVShowsListingPage = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tvShows')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setTVShows(data))
      .catch(error => console.error('Error fetching TV shows:', error));
  }, []);

  return (
    <Box p={4}>
      <Heading size="xl" mb={4} textAlign="center">TV Show List</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }} gap={6}>
        {tvShows.map(tvShow => (
          <GridItem key={tvShow.id} w={{ base: "50%", md: "auto" }} justifySelf="center">
            <Link to={`/tvShows/${tvShow.id}`}>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" h="100%">
                <Image src={tvShow.smallPoster} alt={tvShow.title} w="100%" h="90%" objectFit="cover" />
                {/* <Box p="6"> */}
                {/* <Box d="flex" alignItems="baseline"> */}
                <Text textAlign="center" noOfLines={1} fontWeight="semibold" fontSize="xl" lineHeight="short">
                  {tvShow.title}
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

export default TVShowsListingPage;
