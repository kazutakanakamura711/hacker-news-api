import { ContentsList } from '@/interface/ContentsList';
import { VStack, Link, Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  stories: ContentsList[];
};

export const Content: FC<Props> = ({ stories }) => (
  <VStack spacing={4} align="stretch" py={6}>
    {stories.map(story => (
      <Link
        key={story.id}
        href={story.url || ''}
        target="_blank"
        rel="noreferrer"
      >
        <Box
          p={4}
          shadow="mb"
          borderWidth="1px"
          borderRadius="md"
          transition="all 0.3s"
          _hover={{ transform: 'scale(1.05)', bg: 'black', color: 'blue.200' }}
        >
          <Text fontSize="lg">{story.title}</Text>
        </Box>
      </Link>
    ))}
  </VStack>
);
