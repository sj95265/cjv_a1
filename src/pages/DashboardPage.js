import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Spinner, useToast } from '@chakra-ui/react';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchUserData = async () => {
      const userID = localStorage.getItem('userID');

      if (!userID) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/customers/${userID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        toast({
          title: 'Error',
          description: 'Unable to load user data. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [toast]);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Dashboard</Heading>
      <Text fontSize="lg"><strong>Email:</strong> {user.email}</Text>
      <Text fontSize="lg"><strong>Name:</strong> {user.username}</Text>
    </Box>
  );
};

export default DashboardPage;
