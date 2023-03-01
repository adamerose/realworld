import {
  createSlice,
  nanoid,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import { client } from '../../api/client';

const initialState = {
  articles: [],
  status: 'idle',
  error: null,
};

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await client.get('/fakeApi/posts');
    return response.data;
  },
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    articleAdded: {
      reducer: (
        state,
        action: PayloadAction<{ id: string; title: string; content: string }>,
      ) => {
        state.articles.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
          meta: {}, // Add a dummy meta field to fix the error
        };
      },
    },

    reactionAdded(state, action) {
      const { articleId, reaction } = action.payload;
      const existingArticle = state.articles.find(
        (article) => article.id === articleId,
      );

      if (existingArticle) {
        existingArticle.reactions[reaction]++;
      }
    },
    articleUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingArticle = state.articles.find(
        (article) => article.id === id,
      );
      if (existingArticle) {
        existingArticle.title = title;
        existingArticle.content = content;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched articles to the array
        state.articles = state.articles.concat(action.payload);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectAllArticles = (state) => state.articles.articles;
export const selectArticleById = (state, articleId) =>
  state.articles.articles.find((article) => article.id === articleId);

// Actions
export const { articleAdded, articleUpdated, reactionAdded } =
  articlesSlice.actions;

// Reducer
export default articlesSlice.reducer;
