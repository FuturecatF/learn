import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { CURRENCY } from '@/entities/Currency';
import { COUNTRY } from '@/entities/Country';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 465,
  currency: CURRENCY.USD,
  country: COUNTRY.Russia,
  city: 'Moscow',
  username: 'admin123',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin123' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};
describe('features/EditableProfileCard', () => {
  test('readonly switch', async () => {
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('set initial states with after cancel button click', async () => {
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'Vasya');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'Pupkin');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Vasya');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Pupkin');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
  });

  test('get error validation', async () => {
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('send PUT request', async () => {
    componentRender(<EditableProfileCard />, options);
    const mockPutRequest = jest.spyOn($api, 'put');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
