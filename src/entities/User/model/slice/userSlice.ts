import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../../model/types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
