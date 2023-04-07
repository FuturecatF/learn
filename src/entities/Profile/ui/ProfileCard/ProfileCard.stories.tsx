import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { COUNTRY } from 'entities/Country';
import { CURRENCY } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 666,
    country: COUNTRY.Russia,
    lastname: 'lastname',
    city: 'Moscow',
    currency: CURRENCY.USD,
    first: 'first',
    avatar,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'withError',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
// Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
