import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetailsPage/addCommentForArticle',
  async (comment, thunkAPI) => {
    const {
      dispatch, extra, rejectWithValue, getState,
    } = thunkAPI;
    const userData = getUserAuthData(getState());

    const article = getArticleDetailsData(getState());

    if (!userData || !article) {
      return rejectWithValue('error no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData.id,
        text: comment,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
