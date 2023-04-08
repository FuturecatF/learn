import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
  children: (
    <>
      <div>Hello</div>
      <div>World</div>
      <div>Hello</div>
      <div>World</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>Hello</div>
      <div>World</div>
      <div>Hello</div>
      <div>World</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div>Hello</div>
      <div>World</div>
      <div>Hello</div>
      <div>World</div>
    </>
  ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  children: (
    <>
      <div>Hello</div>
      <div>World</div>
      <div>Hello</div>
      <div>World</div>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div>Hello</div>
      <div>World</div>
      <div>Hello</div>
      <div>World</div>
    </>
  ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32',
  children: (
    <>
      <div>Hello</div>
      <div>World</div>
      <div>Hello</div>
      <div>World</div>
    </>
  ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  gap: '16',
  direction: 'column',
  children: (
    <>
      <div>Hello</div>
      <div>World</div>
      <div>Hello</div>
      <div>World</div>
    </>
  ),
};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];
