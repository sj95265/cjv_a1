import React from 'react';
import { Box, Flex, VStack, Heading, Link as ChakraLink, Spacer, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => (
  <Box as="footer" bg="gray.900" p={4} mt={8}>
    <Flex justify="space-between" align="center" mx="auto">
      <VStack align="flex-start">
        <Heading size="md">Links</Heading>
        <ChakraLink as={RouterLink} to="/" color="gray.400" _hover={{ color: 'white' }}>
          Home
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/movies" color="gray.400" _hover={{ color: 'white' }}>
          Movies
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/tvShows" color="gray.400" _hover={{ color: 'white' }}>
          TVShows
        </ChakraLink>
      </VStack>
      <Spacer />
      <HStack spacing={4}>
        <ChakraLink href="https://www.facebook.com/" color="gray.400" _hover={{ color: 'white' }}>
          Facebook
        </ChakraLink>
        <ChakraLink href="https://x.com/" color="gray.400" _hover={{ color: 'white' }}>
          Twitter
        </ChakraLink>
        <ChakraLink href="https://www.instagram.com/" color="gray.400" _hover={{ color: 'white' }}>
          Instagram
        </ChakraLink>
      </HStack>
    </Flex>
  </Box>
);

export default Footer;
