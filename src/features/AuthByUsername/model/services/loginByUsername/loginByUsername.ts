import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_AUTH_KEY } from 'shared/const/localStorage';

interface loginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_AUTH_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
