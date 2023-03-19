import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { getProfileForm } from 'entities/Profile';
import {
  VALIDATE_PROFILE_ERROR,
  validateProfileData,
  ValidateProfileError,
} from 'entities/Profile/model/services/validateProfileData/validateProfileData';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);
    if (errors.length) {
      return rejectWithValue(errors);
    }
    try {
      const response = await extra.api.put<Profile>(`/profile${formData?.id}`, formData);

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      return rejectWithValue([VALIDATE_PROFILE_ERROR.SERVER_ERROR]);
    }
  },
);
