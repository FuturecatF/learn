// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@.storybook/react';
// import { ThemeDecorator } from '@/shared/config/.storybook/ThemeDecorator/ThemeDecorator';
// import AdminPanelPage from './AdminPanelPage';
// import { Theme } from '@/shared/const/theme';
//
// export default {
//   title: 'pages/AdminPanelPage',
//   component: AdminPanelPage,
// } as ComponentMeta<typeof AdminPanelPage>;
//
// const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import AdminPanelPage from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
  component: AdminPanelPage,
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => <AdminPanelPage />,
};
