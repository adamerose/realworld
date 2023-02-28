import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import articlesReducer from '../features/articles/articlesSlice';
import usersReducer from '../features/users/usersSlice';
import counterReducer from '../features/counter/counterSlice';
import { useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    articles: articlesReducer,
    users: usersReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
