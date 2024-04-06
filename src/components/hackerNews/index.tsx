import { Box } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useHackerNews } from './useHackerNews';
import { CategoryType } from '@/types/Category';
import { LoadingSpinner } from '../spinner';
import { TabList } from '../tab/TabList';
import { Content } from '../content.tsx';

export const HackerNews: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    CategoryType.Top,
  );
  const { stories, isLoading } = useHackerNews({
    category: selectedCategory || CategoryType.Top,
  });

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      <Box w="80%" m="0 auto">
        <TabList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Content stories={stories} />
      </Box>
    </>
  );
};
