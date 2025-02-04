// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@.storybook/react';
// import { ThemeDecorator } from '@/shared/config/.storybook/ThemeDecorator/ThemeDecorator';
// import ArticleEditPage from './ArticleEditPage';
// import { Theme } from '@/shared/const/theme';
//
// export default {
//   title: 'pages/ArticleEditPage',
//   component: ArticleEditPage,
// } as ComponentMeta<typeof ArticleEditPage>;
//
// const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
  component: ArticleEditPage,
};
export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => (
    <ArticleEditPage />

  ),
};
