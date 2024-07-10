import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/provider/ThemeProvider/lib/ThemeContext';
import { Button } from '@/shared';
import { DropDown } from './DropDown';

export default {
  title: 'shared/DropDown',
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  trigger: <Button>{'Open'}</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  trigger: <Button>{'Open'}</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
