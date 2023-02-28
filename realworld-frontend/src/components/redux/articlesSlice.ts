import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Article!', content: 'Hello!' },
  { id: '2', title: 'Second Article', content: 'More text' },
];

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    articleAdded: {
      reducer: (
        state,
        action: PayloadAction<{ id: string; title: string; content: string }>,
      ) => {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
          meta: {}, // Add a dummy meta field to fix the error
        };
      },
    },

    articleUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingArticle = state.find((article) => article.id === id);
      if (existingArticle) {
        existingArticle.title = title;
        existingArticle.content = content;
      }
    },
  },
});

export const { articleAdded, articleUpdated } = articlesSlice.actions;

export default articlesSlice.reducer;
