import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/StoreProvider';
import { User } from '../..';
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_AUTH_KEY } from '@/shared/const/localStorage';
import { getUserDataByIdQuery } from '../../api/userApi';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    const userId = localStorage.getItem(USER_LOCALSTORAGE_AUTH_KEY);

    if (!userId) {
      return rejectWithValue('error');
    }
    try {
      const response = await dispatch(getUserDataByIdQuery(JSON.parse(userId))).unwrap();

      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        response.features?.isAppRedesigned ? 'new' : 'old',
      );

      if (!response) {
        return rejectWithValue('error');
      }
      return response;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
