import { CategoryType } from '@/types/Category';
import { HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { Tab } from './Tab';

type Props = {
  selectedCategory: CategoryType;
  setSelectedCategory: (category: CategoryType) => void;
};

export const TabList: FC<Props> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <HStack spacing={4} p={2}>
      {Object.values(CategoryType).map(category => (
        <Tab
          key={category}
          category={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </HStack>
  );
};
