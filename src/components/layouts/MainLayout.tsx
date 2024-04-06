import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box maxW="1024" m="0 auto">
      {children}
    </Box>
  );
};
