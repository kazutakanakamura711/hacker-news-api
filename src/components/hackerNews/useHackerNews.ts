import { ContentsList } from '@/interface/ContentsList';
import { CategoryType } from '@/types/Category';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const limit = 12;

// 各カテゴリに対応したAPIエンドポイントを返す関数
const getCategoryUrl = (category: CategoryType): string => {
  const endpoints = {
    [CategoryType.Top]: '/topstories.json',
    [CategoryType.News]: '/newstories.json',
    [CategoryType.Best]: '/beststories.json',
  };
  return `${BASE_URL}${
    endpoints[category] || endpoints[CategoryType.Top]
  }?print=pretty`;
};

// カテゴリに対応したストーリーIDを取得する関数
const getStoryIds = async (category: CategoryType): Promise<number[]> => {
  const response = await fetch(getCategoryUrl(category));
  return response.json();
};

// ストーリーIDに対応したストーリーの詳細を取得する関数
const getStoryDetails = async (id: number): Promise<ContentsList> => {
  const response = await fetch(`${BASE_URL}/item/${id}.json?print=pretty`);
  return response.json();
};

const getStoriesDetails = async (ids: number[]): Promise<ContentsList[]> => {
  const promises = ids.slice(0, limit).map(id => {
    return getStoryDetails(id);
  });
  // Promise.allですべてのプロミスが解決するのを待ち、各ストーリーの詳細を含む配列を返す
  return Promise.all(promises);
};

type Props = {
  category: CategoryType;
};

export const useHackerNews = ({ category }: Props) => {
  const [stories, setStories] = useState<ContentsList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getStoriesByCategory = async () => {
      setIsLoading(true);
      try {
        const storyIds = await getStoryIds(category);
        const storiesDetails = await getStoriesDetails(storyIds);
        setStories(storiesDetails);
      } catch (error) {
        console.error('Failed to fetch stories', error);
      } finally {
        setIsLoading(false);
      }
    };

    getStoriesByCategory();
  }, [category]);

  return { stories, isLoading };
};
