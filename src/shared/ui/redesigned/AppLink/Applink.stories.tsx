// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@.storybook/react';
//
// import { Applink, AppLinkTheme } from '@/shared';
// import { ThemeDecorator } from '@/shared/config/.storybook/ThemeDecorator/ThemeDecorator';
//
// import { Theme } from '@/shared/const/theme';
//
// export default {
//   title: 'shared/Applink',
//   component: Applink,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   args: { to: '/' },
// } as ComponentMeta<typeof Applink>;
//
// const Template: ComponentStory<typeof Applink> = (args) => <Applink {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//   children: 'Text',
//   theme: AppLinkTheme.PRIMARY,
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: 'Text',
//   theme: AppLinkTheme.SECONDARY,
// };
//
// export const Red = Template.bind({});
// Red.args = {
//   children: 'Text',
//   theme: AppLinkTheme.RED,
// };
//
// export const PrimaryDark = Template.bind({});
// PrimaryDark.args = {
//   children: 'Text',
//   theme: AppLinkTheme.PRIMARY,
// };
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const SecondaryDark = Template.bind({});
// SecondaryDark.args = {
//   children: 'Text',
//   theme: AppLinkTheme.SECONDARY,
// };
// SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const RedDark = Template.bind({});
// RedDark.args = {
//   children: 'Text',
//   theme: AppLinkTheme.RED,
// };
// RedDark.decorators = [ThemeDecorator(Theme.DARK)];

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Applink } from '@/shared';

const meta: Meta<typeof Applink> = {
  component: Applink,
};

export default meta;
type Story = StoryObj<typeof Applink>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => (
    <Applink to={'/'}>
      {'Text'}
    </Applink>
  ),
};
