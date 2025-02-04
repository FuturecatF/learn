// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@.storybook/react';
//
// import { ThemeDecorator } from '@/shared/config/.storybook/ThemeDecorator/ThemeDecorator';
// import AboutPage from './AboutPage';
// import { Theme } from '@/shared/const/theme';
//
// export default {
//   title: 'pages/AboutPage',
//   component: AboutPage,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof AboutPage>;
//
// const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;
//
// export const Normal = Template.bind({});
// Normal.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => <AboutPage />,
};
