import React, { useState, useEffect } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/?id=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setMovie(data[0]);
        } else {
          throw new Error('Movie not found');
        }
      })
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  if (!movie) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>{movie.title}</Heading>
      <Image src={movie.poster} alt={movie.title} />
      <Text>{movie.synopsis}</Text>
      <Text>Rent Price: ${movie.rentPrice}</Text>
      <Text>Buy Price: ${movie.buyPrice}</Text>
    </Box>
  );
};

export default MovieDetailsPage;
