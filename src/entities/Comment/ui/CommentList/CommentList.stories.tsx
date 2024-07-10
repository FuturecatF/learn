import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/provider/ThemeProvider/lib/ThemeContext';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'hello world',
      user: {
        id: '1',
        username: 'Vasya',
      },
    },
    {
      id: '2',
      text: 'hello world',
      user: {
        id: '2',
        username: 'Ksusha',
      },
    },
  ],
};

export const WithoutComments = Template.bind({});
WithoutComments.args = {};
WithoutComments.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  comments: [],
};
Loading.decorators = [ThemeDecorator(Theme.MONO)];
