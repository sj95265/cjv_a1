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
      <Heading as="h1" size="xl" mb={4}>Featured TV Shows</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
        {tvShows.map(tvShow => (
          <GridItem key={tvShow.id}>
            <Link to={`/tvShows/${tvShow.id}`}>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={tvShow.poster} alt={tvShow.title} />
                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Text fontWeight="semibold" fontSize="xl" lineHeight="short">
                      {tvShow.title}
                    </Text>
                  </Box>
                  <Box mt="1" lineHeight="tight">
                    <Text>{tvShow.synopsis}</Text>
                    <Text>Rent Price: ${tvShow.rentPrice}</Text>
                    <Text>Buy Price: ${tvShow.buyPrice}</Text>
                  </Box>
                </Box>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default TVShowsListingPage;
