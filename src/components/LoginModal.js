import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

const LoginModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent color="black">
      <ModalHeader>Login</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="teal" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant="ghost">Login</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default LoginModal;
