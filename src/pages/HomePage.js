import React from 'react';
import { Container } from '@chakra-ui/react';
import HeroSection from '../components/HeroSection';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTVShows from '../components/FeaturedTVShows';
import ContentSection from '../components/ContentSection';

const HomePage = () => {
    return (
        <Container maxW="container.2xl" h="100%">
            {/* <HeroSection /> */}
            <FeaturedMovies />
            <FeaturedTVShows />
            <ContentSection />
        </Container>
    );
};


export default HomePage;
