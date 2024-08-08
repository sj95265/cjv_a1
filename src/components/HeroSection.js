import React, { useState } from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const heroes = [
    {
      "id": 1,
      "poster": "https://hips.hearstapps.com/hmg-prod/images/best-movies-1624472751.jpg"
    },
    {
      "id": 2,
      "poster": "https://images.squarespace-cdn.com/content/v1/5bfff88170e802806d993220/56245f24-f874-4709-93bf-6702b54e5d13/image-asset.png"
    },
    {
      "id": 3,
      "poster": "https://disappointmentmedia.com/uploads/4/7/9/1/47919861/disappointment-media-s-top-10-films-of-2021-so-far_orig.jpg"
    },
    {
      "id": 4,
      "poster": "https://mma.prnewswire.com/media/1731649/Parrot_Analytics_Global_TV_Demand_Awards.jpg?p=twitter"
    },
    {
      "id": 5,
      "poster": "https://hips.hearstapps.com/hmg-prod/images/besttv2021-longformlede-1638977191.jpeg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide index

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
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
