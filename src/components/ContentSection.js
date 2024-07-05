import React from 'react';
import { Box, Heading, Text, Image, Grid, GridItem } from '@chakra-ui/react';

const ContentSection = () => (
    <Box p={5} borderRadius="md" boxShadow="md" mb={8}>
        <Heading size="lg">Content Section</Heading>
        <Grid templateColumns='repeat(2, 1fr)' gap={6} h="100%" p={3}>
            <GridItem>
                <Image
                    borderRadius="md"
                    h="100%"
                    w="100%"
                    objectFit="contain"
                    src="https://fullsuitcase.com/wp-content/uploads/2016/10/The-Ultimate-List-of-Best-Travel-Movies-1.jpg.webp"
                    alt="pic"
                />
            </GridItem>
            <GridItem>
                <Image
                    borderRadius="md"
                    h="100%"
                    w="100%"
                    objectFit="contain"
                    src="https://www.author.thinkwithniche.com/allimages/project/thumb_03b80exciting-upcoming-movies-from-hollywood-in-2024-the-future-of-cinema.jpg"
                    alt="pic"
                />
            </GridItem>
        </Grid>
        <Box p={3}>
            <Heading size="lg" mb={4} textAlign="center">About Us</Heading>
            <Text fontSize="lg" textAlign="center">
                DigiVideo is a streaming site where you can buy or rent all your favorite shows, allowing you to watch high quality movies or TV shows online.
            </Text>
        </Box>
    </Box>
);

export default ContentSection;
