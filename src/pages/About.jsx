import { Box, Heading, Text, Image } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>About Me</Heading>
      <Text fontSize="lg">
        Welcome to my personal website! I am a passionate developer with a keen interest in building scalable and efficient applications.
      </Text>
      <Image src="/profile.jpg" alt="Profile Image" boxSize="200px" m="auto" mt={5} />
    </Box>
  );
};

export default About;