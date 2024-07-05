import React from 'react';
import { Box, Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Listing = ({ items, type }) => (
    <Box p={4}>
        <Heading size="xl" mb={4} textAlign="center">
            {type === 'movies' ? 'Movie List' : type === 'tvShows' ? 'TVShow List' : 'no type'}
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }} gap={6}>
            {items.map(item => (
                <GridItem key={item.id} w={{ base: "50%", md: "auto" }} justifySelf="center">
                    <Link to={`/${type}/${item.id}`}>
                        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" h="100%">
                            <Image src={item.smallPoster} alt={item.title} w="100%" h="90%" objectFit="cover" />
                            <Text textAlign="center" noOfLines={1} fontWeight="semibold" fontSize="xl" lineHeight="short">
                                {item.title}
                            </Text>
                        </Box>
                    </Link>
                </GridItem>
            ))}
        </Grid>
    </Box>
);

export default Listing;