import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { ArticleInfinityList } from './ArticleInfinityList';

export default {
  title: 'pages/ArticleInfinityList',
  component: ArticleInfinityList,
} as ComponentMeta<typeof ArticleInfinityList>;

const Template: ComponentStory<typeof ArticleInfinityList> = (args) => <ArticleInfinityList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
