import { FC } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

type Props = {
  isLoading: boolean;
};

export const LoadingSpinner: FC<Props> = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgba(255, 255, 255, 0.8)"
      zIndex="overlay"
    >
      <Spinner
        thickness="4px"
        size="xl"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
      />
    </Box>
  );
};
