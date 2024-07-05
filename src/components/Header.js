import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Image, Stack, HStack, Button, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = ({ onOpenLogin, onOpenRegister }) => (
    <Box h="60px" as="header" bg="gray.500" color="white" p={4} position="fixed" top={0} left={0} right={0} zIndex="1000">
        <Flex align="center" maxW="2000px" mx="auto" h="100%">
            <Link to="/">
                <Image src="/myLogo.png" alt="Logo" h={50} />
            </Link>
            <Stack direction="row" spacing={4} ml={5} w="100%">
                <Box display={{ base: 'none', md: 'block' }} w="100%">
                    <HStack w="100%">
                        <Button as={Link} to="/movies" bg="transparent">Movies</Button>
                        <Button as={Link} to="/tvShows" bg="transparent">TVShows</Button>
                        <Spacer />
                        <Button onClick={onOpenRegister} bg="transparent">Register</Button>
                        <Button onClick={onOpenLogin} bg="transparent">Login</Button>
                    </HStack>
                </Box>
                <Spacer />
                <Box display={{ base: 'block', md: 'none' }}>
                    <HStack>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" bg="white" />
                            <MenuList bg="white" color="black">
                                <MenuItem as={Link} to="/movies">Movies</MenuItem>
                                <MenuItem as={Link} to="/tvShows">TVShows</MenuItem>
                                <MenuItem onClick={onOpenRegister}>Register</MenuItem>
                                <MenuItem onClick={onOpenLogin}>Login</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </Box>
            </Stack>
        </Flex>
    </Box>
);

export default Header;
