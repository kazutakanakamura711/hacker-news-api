export const CategoryType = {
  Top: 'Top',
  News: 'News',
  Best: 'Best',
} as const;
export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];

export const CategoryTypeDisplay = {
  [CategoryType.Top]: 'TOP',
  [CategoryType.News]: 'NEWS',
  [CategoryType.Best]: 'BEST',
};
