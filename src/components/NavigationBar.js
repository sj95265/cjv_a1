import React from 'react';
import { Link } from 'react-router-dom';
import { HStack, Button, Menu, MenuButton, MenuList, MenuItem, IconButton, Box, Spacer} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavigationBar = ({ onOpenLogin, onOpenRegister }) => (
    <div style={{ height: '100%', width: '100%' }}>
        <Box display={{ base: 'none', md: 'block' }}>
            <HStack>
                <Button as={Link} to="/movies" bg="teal.500">Movies</Button>
                <Button as={Link} to="/tvShows" bg="teal.500">TVShows</Button>
                <Spacer />
                <Button onClick={onOpenRegister} bg="teal.500">Register</Button>
                <Button onClick={onOpenLogin} bg="teal.500">Login</Button>
            </HStack>
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
            <HStack>
                <Spacer />
                <Menu>
                    <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" bg="white" />
                    <MenuList bg="white" color="black">
                        <MenuItem as={Link} to="/">Home</MenuItem>
                        <MenuItem as={Link} to="/movies">Movies</MenuItem>
                        <MenuItem as={Link} to="/">Home</MenuItem>
                        <MenuItem onClick={onOpenRegister}>Register</MenuItem>
                        <MenuItem onClick={onOpenLogin}>Login</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    </div>
);

export default NavigationBar;
