import React, { useState, useEffect } from 'react';
import { Box, Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react';

const FeaturedTVShows = () => {
  const [featuredTVShows, setFeaturedTVShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tvShows')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFeaturedTVShows(data))
      .catch(error => console.error('Error fetching featured TV shows:', error));
  }, []);

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>Featured TV Shows</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
        {featuredTVShows.map(tvShow => (
          <GridItem key={tvShow.id}>
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
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedTVShows;
