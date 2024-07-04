import React, { useState, useEffect } from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide index

  useEffect(() => {
    fetch('http://localhost:3001/heroes')
      .then(response => response.json())
      .then(data => setHeroes(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    // draggable: false,
    pauseOnHover: false,
    autoplay: true,
    // speed: 1000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current), // Update current slide index
    customPaging: function (i) {
      return (
        <Box
          key={i}
          style={{
            width: "30px",
            height: "10px",
            backgroundColor: i === currentSlide ? "white" : "gray",
            borderRadius: "5px",
            margin: "5px 5px"
          }}
        />
      );
    }
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" mb={4}>Most Demanded</Heading>
      <Slider {...settings}>
        {heroes.map(hero => (
          <Box key={hero.id} h={{ base: '100%', md: '500px' }} position="relative">
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bgImage={`url(${hero.poster})`}
              bgSize="cover"
              filter="blur(10px)"
              zIndex="-1"
            />
            <Image src={hero.poster} alt={hero.id} h="100%" w="100%" objectFit="contain" display="flex" alignItems="center" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
