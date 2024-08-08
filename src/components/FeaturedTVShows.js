import React, { useState, useEffect } from 'react';
import { Box, Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const FeaturedTVShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      
      try {
        const featuredShows = await fetch(`${process.env.REACT_APP_API_URL}/tvshows/featured`);
        const showData = await featuredShows.json();
        setTvShows(showData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box p={4}>
      <Heading size="lg" mb={4}>Featured TV Shows</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>
        {tvShows.map(tvShow => (
          <GridItem key={tvShow.id} w={{ base: "50%", md: "auto" }} justifySelf="center">
            <Link to={`/tvShows/${tvShow.id}`}>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" h="100%">
                <Image src={tvShow.smallPoster} alt={tvShow.title} w="100%" h="90%" objectFit="cover" />
                <Text textAlign="center" noOfLines={1} fontWeight="semibold" fontSize="xl" lineHeight="short">
                  {tvShow.title}
                </Text>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedTVShows;
