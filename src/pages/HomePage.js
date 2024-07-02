import React from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTVShows from '../components/FeaturedTVShows';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';

const HomePage = () => (
    <div>
        <Header />
        <NavigationBar />
        <HeroSection />
        <FeaturedMovies />
        <FeaturedTVShows />
        <ContentSection />
        <Footer />
    </div>
);

export default HomePage;
