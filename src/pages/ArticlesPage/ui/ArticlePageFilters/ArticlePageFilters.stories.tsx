// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@.storybook/react';
// import { ThemeDecorator } from '@/shared/config/.storybook/ThemeDecorator/ThemeDecorator';
// import { ArticlePageFilters } from './ArticlePageFilters';
// import { Theme } from '@/shared/const/theme';
//
// export default {
//   title: 'pages/ArticlePageFilters',
//   component: ArticlePageFilters,
// } as ComponentMeta<typeof ArticlePageFilters>;
//
// const Template: ComponentStory<typeof ArticlePageFilters> = (args) => <ArticlePageFilters {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArticlePageFilters } from './ArticlePageFilters';

const meta: Meta<typeof ArticlePageFilters> = {
  component: ArticlePageFilters,
};
export default meta;
type Story = StoryObj<typeof ArticlePageFilters>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => (
    <ArticlePageFilters />

  ),
};
