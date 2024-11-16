import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '@/shared';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Text',
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
