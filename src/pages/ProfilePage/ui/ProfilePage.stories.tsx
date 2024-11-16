import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatar.jpg';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 666,
        country: COUNTRY.Russia,
        lastname: 'lastname',
        city: 'Moscow',
        currency: CURRENCY.USD,
        first: 'first',
        avatar,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = { userId: '1' };
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 666,
        country: COUNTRY.Russia,
        lastname: 'lastname',
        city: 'Moscow',
        currency: CURRENCY.USD,
        first: 'first',
        avatar,
      },
    },
  }),
];
