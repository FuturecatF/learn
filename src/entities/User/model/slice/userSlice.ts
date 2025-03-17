import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_AUTH_KEY } from '@/shared/const/localStorage';
import { User, UserSchema } from '../../model/types/user';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
      localStorage.setItem(
        USER_LOCALSTORAGE_AUTH_KEY,
        JSON.stringify(action.payload.id),
      );
      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        action.payload.features?.isAppRedesigned ? 'new' : 'old',
      );
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_AUTH_KEY);
      if (user) {
        const json = JSON.parse(user) as User;
        state.authData = json;
        setFeatureFlags(json.features);
      }
      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_AUTH_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        saveJsonSettings.fulfilled,
        (state, action: PayloadAction<JsonSettings>) => {
          if (state.authData) {
            state.authData.jsonSettings = action.payload;
          }
        },
      )
      .addCase(initAuthData.fulfilled, (state, action: PayloadAction<User>) => {
        state.authData = action.payload;
        setFeatureFlags(action.payload.features);
        state._inited = true;
      })
      .addCase(initAuthData.rejected, (state) => {
        state._inited = true;
      });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
