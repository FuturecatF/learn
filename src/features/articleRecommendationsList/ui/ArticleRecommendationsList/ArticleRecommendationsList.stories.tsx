// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@.storybook/react';
//
// import withMock from '.storybook-addon-mock';
// import { StoreDecorator } from '@/shared/config/.storybook/StoreDecorator/StoreDecorator';
// import { Article } from '@/entities/Article';
// import { ArticleRecommendationsList } from './ArticleRecommendationsList';
//
// export default {
//   title: 'features/ArticleRecommendationsList',
//   component: ArticleRecommendationsList,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   decorators: [withMock],
// } as ComponentMeta<typeof ArticleRecommendationsList>;
//
// const article: Article = {
//   id: '1',
//   title: 'Javascript news',
//   subtitle: 'Что нового в JS за 2022 год?',
//   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
//   views: 1022,
//   createdAt: '26.02.2022',
//   type: ['IT'],
//   user: {
//     id: '1',
//     username: 'FuturecatF',
//   },
//   blocks: [],
// };
// const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;
//
// export const Normal = Template.bind({});
// console.log('__API__', __API__);
// Normal.args = {};
// Normal.decorators = [StoreDecorator({})];
// Normal.parameters = {
//   mockData: [
//     {
//       url: `${__API__}/articles?_limit=4`,
//       method: 'GET',
//       status: 200,
//       response: [{ ...article, id: '1' }, { ...article, id: '2' }, { ...article, id: '3' }, { ...article, id: '4' }],
//     },
//   ],
// };

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArticleRecommendationsList } from '../..';

const meta: Meta<typeof ArticleRecommendationsList> = {
  component: ArticleRecommendationsList,
};
export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => (
    <ArticleRecommendationsList />

  ),
};
