import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Contact Me</Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Your Name" />
        <FormLabel mt={4}>Email</FormLabel>
        <Input placeholder="Your Email" type="email" />
        <FormLabel mt={4}>Message</FormLabel>
        <Textarea placeholder="Your Message" />
        <Button mt={4} colorScheme="blue">Send Message</Button>
      </FormControl>
    </Box>
  );
};

export default Contact;