import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/provider/ThemeProvider/lib/ThemeContext';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: 200,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  width: '100%',
  height: 200,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});
Circle.args = {
  width: 100,
  height: 100,
  borderRadius: '50%',
};

export const CircleDark = Template.bind({});
CircleDark.args = {
  width: 100,
  height: 100,
  borderRadius: '50%',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
