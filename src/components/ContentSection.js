import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const ContentSection = () => {
  return (
    <Box p={5} borderRadius="md" boxShadow="md" mb={8} >
      <Heading as="h2" size="lg" mb={4} textAlign="center">About Us</Heading>
      <Text fontSize="lg" mb={4} textAlign="center">
        DigiVideo is a movie and TV show streaming site that you can buy or rent, which allows you to watch high quality movies or TV shows online.
      </Text>
      {/* <Box display="flex" justifyContent="center">
        <Image src="https://via.placeholder.com/600x400" alt="Streaming" borderRadius="md" />
      </Box> */}
    </Box>
  );
};

export default ContentSection;
