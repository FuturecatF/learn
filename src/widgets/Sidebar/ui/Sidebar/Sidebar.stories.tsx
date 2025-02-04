import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => <Sidebar />,
};

// const meta: Meta<typeof Sidebar> = {
//   component: Sidebar,
// };
// export default meta;
//
// export const Default: Story = {
//   render: (args) => <Sidebar {...args} />,
//   args: {},
//   },
// };

// export default {
//   title: 'widgets/Sidebar',
//   component: Sidebar,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Sidebar>;

// const Template: Meta<typeof Sidebar> = (args) => <Sidebar {...args} />;

// export const Light = Template.bind({});
// Light.args = {};
// Light.decorators = [
//   StoreDecorator({
//     user: { authData: {} },
//   }),
// ];
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [
//   ThemeDecorator(Theme.DARK),
//   StoreDecorator({
//     user: { authData: {} },
//   }),
// ];
//
// export const NoAuth = Template.bind({});
// NoAuth.decorators = [
//   StoreDecorator({
//     user: {},
//   }),
// ];
