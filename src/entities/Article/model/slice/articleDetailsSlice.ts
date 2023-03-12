import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/Article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    // update: (state, action: PayloadAction<ArticleDetails>) => {
    //   state.data = { ...state.data, ...action.payload };
    // },
    // revert: (state) => {
    //   state.validateErrors = undefined;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // builder
    // .addCase(fetchArticleDetailsData.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = undefined;
    // })
    // .addCase(fetchArticleDetailsData.fulfilled, (state, action: PayloadAction<ArticleDetails>) => {
    //   state.isLoading = false;
    //   state.data = action.payload;
    // })
    // .addCase(fetchArticleDetailsData.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
