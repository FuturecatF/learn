import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  defaultValue: 'Открыть',
  currentValue: undefined,
  items: [
    { content: '1234567910', value: '1' },
    { content: '1234567910', value: '2' },
    { content: '1234567910', value: '3' },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  defaultValue: 'Открыть',
  currentValue: undefined,
  items: [
    { content: '1234567910', value: '1' },
    { content: '1234567910', value: '2' },
    { content: '1234567910', value: '3' },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  defaultValue: 'Открыть',
  currentValue: undefined,
  items: [
    { content: '1234567910', value: '1' },
    { content: '1234567910', value: '2' },
    { content: '1234567910', value: '3' },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  defaultValue: 'Открыть',
  currentValue: undefined,
  items: [
    { content: '1234567910', value: '1' },
    { content: '1234567910', value: '2' },
    { content: '1234567910', value: '3' },
  ],
};
