import React, { useState, useEffect } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
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
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>{tvShow.title}</Heading>
      <Image src={tvShow.largePoster} alt={tvShow.title} />
      <Text>{tvShow.synopsis}</Text>
      <Text>Rent Price: ${tvShow.rentPrice}</Text>
      <Text>Buy Price: ${tvShow.buyPrice}</Text>
    </Box>
  );
};

export default TVShowDetailsPage;
