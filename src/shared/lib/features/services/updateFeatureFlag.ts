import { createAsyncThunk } from '@reduxjs/toolkit';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { ThunkConfig } from '@/app/provider/StoreProvider';
import { getAllFeatureFlags, setFeatureFlags } from '../setGetFeatures';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';

interface UpdateFeatureFlagOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlag = createAsyncThunk<
  void,
  UpdateFeatureFlagOptions,
  ThunkConfig<string>
>('features/updateFeatureFlag', async ({ userId, newFeatures }, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;

  const allFeatures = {
    ...getAllFeatureFlags(),
    ...newFeatures,
  };

  try {
    await dispatch(
      updateFeatureFlagsMutation({
        userId,
        features: allFeatures,
      }),
    );

    setFeatureFlags(allFeatures);
    window.location.reload();
    return undefined;
  } catch (e) {
    console.log(e);
    return rejectWithValue('');
  }
});
