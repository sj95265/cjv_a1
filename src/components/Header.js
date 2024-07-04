import React from 'react';
import { Box, Flex, Spacer, Image, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Header = ({ onOpenLogin, onOpenRegister }) => (
    <Box h="60px" as="header" bg="gray.500" color="white" p={4} position="fixed" top={0} left={0} right={0} zIndex="1000">
        <Flex align="center" maxW="2000px" mx="auto" h="100%">
            <Link to="/">
                <Image src="/myLogo.png" alt="Logo" h={50} />
            </Link>
            <Stack direction="row" spacing={4} ml={5} w="100%">
                {/* <Box> */}
                <NavigationBar onOpenLogin={onOpenLogin} onOpenRegister={onOpenRegister} w="100%" />
                {/* </Box> */}
            </Stack>
            <Spacer />
        </Flex>
    </Box>
);

export default Header;
