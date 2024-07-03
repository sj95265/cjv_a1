import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" bg="teal.500" color="white" p={4} mt={8}>
    <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
      <Text>&copy; 2024 Digital Video Store. All rights reserved.</Text>
      <Flex>
        <Link href="#" mr={4}>Facebook</Link>
        <Link href="#" mr={4}>Twitter</Link>
        <Link href="#">Instagram</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Footer;
