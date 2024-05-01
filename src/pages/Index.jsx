import { Box, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Welcome to My Personal Website</Heading>
      <Button as={Link} to="/about" colorScheme="teal" mr={4}>About Me</Button>
      <Button as={Link} to="/contact" colorScheme="teal">Contact Me</Button>
    </Box>
  );
};

export default Index;