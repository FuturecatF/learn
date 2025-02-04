// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@.storybook/react';
// import { ThemeDecorator } from '@/shared/config/.storybook/ThemeDecorator/ThemeDecorator';
// import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
// import { Theme } from '@/shared/const/theme';
//
// export default {
//   title: 'pages/ArticleDetailsPageHeader',
//   component: ArticleDetailsPageHeader,
// } as ComponentMeta<typeof ArticleDetailsPageHeader>;
//
// const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  ArticleDetailsPageHeader,
} from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  component: ArticleDetailsPageHeader,
};
export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => (
    <ArticleDetailsPageHeader />

  ),
};
