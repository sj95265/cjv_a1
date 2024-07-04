import React, { useState, useEffect } from 'react';
import { Box, Heading, Image, Text, Grid, GridItem, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const TVShowDetailsPage = () => {
  const { id } = useParams();
  const [tvShow, setTVShow] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/tvShows/?id=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setTVShow(data[0]);
        } else {
          throw new Error('TVShow not found');
        }
      })
      .catch(error => console.error('Error fetching TV show:', error));
  }, [id]);

  if (!tvShow) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={3}>
      <Grid
        templateAreas={{
          base: `"bPoster"
                 "title"
                 "sPoster"
                 "synopsis"
                 "rentPrice"
                 "buyPrice"`,
          md: `"bPoster bPoster bPoster"
               "sPoster title rentPrice"
               "sPoster synopsis buyPrice"`
        }}
        gridTemplateColumns={{ base: '1fr', md: '300px 1fr 1fr' }}
        gridTemplateRows={{
          base: 'auto auto auto auto auto auto',
          md: 'auto auto 1fr'
        }}
        gap={4}
        fontWeight="bold"
      >
        {/* <GridItem area={'bPoster'} h={{ base: 'auto', md: '500px' }}> */}
        <GridItem area={'bPoster'} position="relative" h={{ base: 'auto', md: '500px' }}>
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgImage={`url(${tvShow.largePoster})`}
            bgSize="cover"
            filter="blur(10px)"
            zIndex="-1"
          />
          <Image src={tvShow.largePoster} alt={tvShow.title} w="100%" h="100%" objectFit="contain" />
        </GridItem>
        <GridItem area={'title'} display="flex" alignItems="center" justifyContent="center" h={{ base: 'auto', md: '100px' }}>
          <Heading size="2xl">{tvShow.title}</Heading>
        </GridItem>
        <GridItem area={'sPoster'} h={{ base: 'auto', md: '300px' }} display="flex" justifyContent="center">
          <Image src={tvShow.smallPoster} alt={tvShow.title} h="100%" objectFit="cover" />
        </GridItem>
        <GridItem area={'synopsis'} h={{ base: 'auto', md: '100%' }}>
          <Text>{tvShow.synopsis}</Text>
        </GridItem>
        <GridItem area={'rentPrice'} h={{ base: 'auto', md: '100px' }}>
          <Button colorScheme="blue" w="100%" h="100%" fontSize={{ base: '1.5rem', md: '2rem' }}>Rent Price: ${tvShow.rentPrice}</Button>
        </GridItem>
        <GridItem area={'buyPrice'} h={{ base: 'auto', md: '100px' }}>
          <Button colorScheme="blue" w="100%" h="100%" fontSize={{ base: '1.5rem', md: '2rem' }}>Buy Price: ${tvShow.buyPrice}</Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TVShowDetailsPage;
