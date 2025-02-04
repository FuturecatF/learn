// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@.storybook/react';
// import { ThemeDecorator } from '@/shared/config/.storybook/ThemeDecorator/ThemeDecorator';
// import { ArticleInfinityList } from './ArticleInfinityList';
// import { Theme } from '@/shared/const/theme';
//
// export default {
//   title: 'pages/ArticleInfinityList',
//   component: ArticleInfinityList,
// } as ComponentMeta<typeof ArticleInfinityList>;
//
// const Template: ComponentStory<typeof ArticleInfinityList> = (args) => <ArticleInfinityList {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArticleInfinityList } from './ArticleInfinityList';

const meta: Meta<typeof ArticleInfinityList> = {
  component: ArticleInfinityList,
};
export default meta;
type Story = StoryObj<typeof ArticleInfinityList>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => (
    <ArticleInfinityList />

  ),
};
