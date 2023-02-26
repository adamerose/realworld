import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Article!', content: 'Hello!' },
  { id: '2', title: 'Second Article', content: 'More text' },
];

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    articleAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { articleAdded } = articlesSlice.actions;

export default articlesSlice.reducer;
