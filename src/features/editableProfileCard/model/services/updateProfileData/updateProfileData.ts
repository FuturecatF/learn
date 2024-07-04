import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Profile } from 'entities/Profile';
import { VALIDATE_PROFILE_ERROR, ValidateProfileError } from '../../consts';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import {
  validateProfileData,

} from '../validateProfileData/validateProfileData';

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
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      return rejectWithValue([VALIDATE_PROFILE_ERROR.SERVER_ERROR]);
    }
  },
);
