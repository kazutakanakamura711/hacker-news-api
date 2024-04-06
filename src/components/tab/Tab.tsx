import { CategoryType, CategoryTypeDisplay } from '@/types/Category';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  category: CategoryType;
  selectedCategory: CategoryType;
  setSelectedCategory: (category: CategoryType) => void;
};

export const Tab: FC<Props> = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Box
      flex={1}
      textAlign="center"
      cursor="pointer"
      color={selectedCategory === category ? 'blue.200' : 'gray.600'}
      fontWeight={selectedCategory === category ? 'bold' : 'normal'}
      p={4}
      borderBottom={selectedCategory === category ? '2px' : 'none'}
      borderColor="blue.200"
      onClick={() => setSelectedCategory(category)}
    >
      {CategoryTypeDisplay[category]}
    </Box>
  );
};
