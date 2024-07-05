import React from 'react';
import { Box, Heading, Image, Text, Grid, GridItem, Button } from '@chakra-ui/react';

const Details = ({ item }) => (
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
      <GridItem area={'bPoster'} position="relative" h={{ base: 'auto', md: '500px' }}>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgImage={`url(${item.largePoster})`}
          bgSize="cover"
          filter="blur(10px)"
          zIndex="-1"
        />
        <Image src={item.largePoster} alt={item.title} w="100%" h="100%" objectFit="contain" />
      </GridItem>
      <GridItem area={'title'} display="flex" alignItems="center" justifyContent="center" h={{ base: 'auto', md: '100px' }}>
        <Heading size="2xl">{item.title}</Heading>
      </GridItem>
      <GridItem area={'sPoster'} h={{ base: 'auto', md: '300px' }} display="flex" justifyContent="center">
        <Image src={item.smallPoster} alt={item.title} h="100%" objectFit="cover" />
      </GridItem>
      <GridItem area={'synopsis'} h={{ base: 'auto', md: '100%' }}>
        <Text>{item.synopsis}</Text>
      </GridItem>
      <GridItem area={'rentPrice'} h={{ base: 'auto', md: '100px' }}>
        <Button colorScheme="blue" w="100%" h="100%" fontSize={{ base: '1.5rem', md: '2rem' }}>Rent Price: ${item.rentPrice}</Button>
      </GridItem>
      <GridItem area={'buyPrice'} h={{ base: 'auto', md: '100px' }}>
        <Button colorScheme="blue" w="100%" h="100%" fontSize={{ base: '1.5rem', md: '2rem' }}>Buy Price: ${item.buyPrice}</Button>
      </GridItem>
    </Grid>
  </Box>
);

export default Details;
