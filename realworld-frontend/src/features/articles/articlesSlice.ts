import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: '1',
    title: 'First Article!',
    content: 'Hello!',
    user: '0',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '2',
    title: 'Second Article',
    content: 'More text',
    user: '2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
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
      const existingArticle = state.find((article) => article.id === articleId);
      if (existingArticle) {
        existingArticle.reactions[reaction]++;
      }
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

export const { articleAdded, articleUpdated, reactionAdded } =
  articlesSlice.actions;

export default articlesSlice.reducer;
