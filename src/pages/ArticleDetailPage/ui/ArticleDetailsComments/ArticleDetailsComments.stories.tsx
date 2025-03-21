// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@.storybook/react';
// import { ThemeDecorator } from '@/shared/config/.storybook/ThemeDecorator/ThemeDecorator';
// import { StoreDecorator } from '@/shared/config/.storybook/StoreDecorator/StoreDecorator';
// import { ArticleDetailsComments } from './ArticleDetailsComments';
// import { Theme } from '@/shared/const/theme';
//
// export default {
//   title: 'pages/ArticleDetailsComments',
//   component: ArticleDetailsComments,
// } as ComponentMeta<typeof ArticleDetailsComments>;
//
// const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//   articleId: '1',
// };
// Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
  component: ArticleDetailsComments,
};
export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => (
    <ArticleDetailsComments />

  ),
};
