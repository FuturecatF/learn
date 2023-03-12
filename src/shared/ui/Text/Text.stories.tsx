import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { Text, TextSize, TextVariant } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Title text',
  text: 'Description Description Description Description',
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Title text',
  text: 'Description Description Description Description',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title text',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title text',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description Description Description Description',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description Description Description Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title text',
  text: 'Description Description Description Description',
  variant: TextVariant.ERROR,
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title text',
  text: 'Description Description Description Description',
  size: TextSize.L,
};
