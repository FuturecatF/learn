// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@.storybook/react';
// import { action } from '@.storybook/addon-actions';
// import { ThemeDecorator } from '@/shared/config/.storybook/ThemeDecorator/ThemeDecorator';
// import { StoreDecorator } from '@/shared/config/.storybook/StoreDecorator/StoreDecorator';
// import AddCommentForm from './AddCommentForm';
// import { Theme } from '@/shared/const/theme';
//
// export default {
//   title: 'features/AddCommentForm',
//   component: AddCommentForm,
// } as ComponentMeta<typeof AddCommentForm>;
//
// const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//   onSendComment: action('onSendComment'),
// };
// Primary.decorators = [StoreDecorator({})];
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { AddCommentForm } from '../..';

const meta: Meta<typeof AddCommentForm> = {
  component: AddCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => <AddCommentForm onSendComment={action('onSendComment')} />,
};
