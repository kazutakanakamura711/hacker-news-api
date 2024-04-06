import { Box, Heading, Link } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box bg="black" w="100%" p={4} color="blue.200">
      <Heading as="h1" size="lg">
        <Link href="/" target="_blank" rel="noreferrer">
          HackerNewsAPI
        </Link>
      </Heading>
    </Box>
  );
};
