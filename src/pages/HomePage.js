import React from 'react';
import { Container } from '@chakra-ui/react';
import HeroSection from '../components/HeroSection';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTVShows from '../components/FeaturedTVShows';
import ContentSection from '../components/ContentSection';

const HomePage = () => (
    <Container maxW="container.lg" pt={4} h="100%">
        <HeroSection />
        {/* <Heading as="h1" size="xl" mb={4}>Welcome to the Digital Video Store</Heading> */}
        {/* <Text fontSize="lg">Browse our collection of movies and find your favorite!</Text> */}
        <FeaturedMovies />
        <FeaturedTVShows />
        <ContentSection />
    </Container>
);


export default HomePage;
