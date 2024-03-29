# Setup

```
npm install @reduxjs/toolkit react-redux
npm install @types/react-redux
```

# Concepts

## Action

An **action** is a plain JavaScript object that has a `type` field. **You can think of an action as an event that describes something that happened in the application**. The `type` field should be a string that gives this action a descriptive name, like `"todos/todoAdded"`

```
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

## Action Creator

An **action creator** is a function that creates and returns an action object

## Reducer

A **reducer** is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. You can think of a reducer as an event listener which handles events based on the received action (event) type.

## Store

The current Redux application state lives in an object called the **store** .

The store is created by passing in a reducer, and has a method called `getState` that returns the current state value

## Dispatch

The Redux store has a method called `dispatch`. The only way to update the state is to call `store.dispatch()` and pass in an action object.

## Selectors

**Selectors** are functions that know how to extract specific pieces of information from a store state value.

```
const selectCounterValue = state => state.value
const currentValue = selectCounterValue(store.getState())
```

## Immutability

Redux expects that all state updates are done immutably. RTK takes reducer functions with mutable updates and converts them to immutable using Immer, for any functions passed to `createReducer` or `createSlice`.

## Thunks

A **thunk** is a specific kind of Redux function that can contain asynchronous logic. Thunks are written using two functions:

- An inside thunk function, which gets `dispatch` and `getState` as arguments
- The outside creator function, which creates and returns the thunk function

```
// the outside "thunk creator" function
const fetchUserById = userId => {
  // the inside "thunk function"
  return async (dispatch, getState) => {
    try {
      // make an async call in the thunk
      const user = await userAPI.fetchById(userId)
      // dispatch an action when we get the response back
      dispatch(userLoaded(user))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}
```

# Redux Toolkit

[https://www.youtube.com/watch?v=14XGPHtoW1Y&t=635s](https://www.youtube.com/watch?v=14XGPHtoW1Y&t=635s)

### Summary

- State is saved in the **store**
- A **slice** is a collection of reducers and actions for a single feature
- Data is accessed using **selectors** like
- State is modified by dispatching **actions** with arguments as **payloads**
- The store listens for actions and passes them to **reducers**
- Reducers calculate the new state like `(state, action) => newState`

### Snippets

- _Counter.jsx_
- _counterSlice.jsx_
- _store.ts_
- _main.tsx_

### Setup

- Wrap root component like `<Provider store={store}> <App /> </Provider>`
- Create store with `configureStore` in `store.ts` with reducers of every slice
- `configureStore({`[`reducer,`](https://redux-toolkit.js.org/api/configureStore#reducer) [`middleware,`](https://redux-toolkit.js.org/api/configureStore#middleware) [`devTools,`](https://redux-toolkit.js.org/api/configureStore#devtools) [`preloadedState,`](https://redux-toolkit.js.org/api/configureStore#preloadedstate) [`enhancers`](https://redux-toolkit.js.org/api/configureStore#enhancers)`})`
- Don't use `createStore`, use `configureStore`
- Sets up devtools extension
- Adds redux-thunk middleware
- Adds middleware to check for accidental mutations and non-serializable values
- Optionally specify additional middlware, initial state, and store enhances

### Slices

- Create a slice for each domain with `createSlice`
- `createSlice({name, initialState, reducers, extraReducers)}`
- Don't use `createAction` and `createReducer`, instead use `createSlice`
- Pass reducers as an object full of named functions
- Export and use `mySlice.actions` and `mySlice.reducer`
- Named export the selectors and actions. Default export the reducer.
- `extraReducers` takes all reducers defined outside `createSlice`, like thunks

### Actions

- Action creators get defined automatically by `createSlice`. Export them like:
  - `export const { postAdded, postUpdated} =  postsSlice.actions;`
- Dispatch actions in JSX components like:
  - `const dispatch = useDispatch();`
  - `dispatch(postAdded({title, content}));`

### Selectors

- Define selector in slice and export it
  - `export const selectAllPosts = (state) => state.posts;`
- Import to component and call using `useSelector`. Alternatively write them directly in the component
  - `const posts = useSelector(selectAllPosts)`
  - `const posts = useSelector((state) => state.posts);`
  - `const post = useSelector((state) => selectPostById(state, postId));`
- If a selector returns an array, it will cause performance [problems](https://redux.js.org/tutorials/essentials/part-6-performance-normalization#investigating-render-behavior).
- Use Reselect's `createSelector` for writing memoized selectors to solve that problem

### Thunks

- Often not needed, instead use RTK Query
- Dispatch “loading” action and then either “success” or “failure” action based on result
- `createAsyncThunk` generates these 3 actions for us automatically
  - `createAsyncThunk("name", await (myArgs) => {*api stuff* return myPromise})`
- Takes an action type string and a callback that returns a promise
- Generates and dispatches actions for “pending”, “fulfilled”, and “rejected” cases

### Normalizing state

- Store items in a lookup object where keys are ids and values are the item
- `createEntityAdapter` creates an adapter with prebuilt functions for [CRUD operations](https://redux-toolkit.js.org/api/createEntityAdapter#crud-functions) on normalized data

### [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

- Fully abstracts the data fetching and caching process.
- Autogenerated query hooks replace `useSelector`, `useDispatch`, `useEffect`
- Create an API slice using [`createApi`](https://redux-toolkit.js.org/rtk-query/api/createApi)`()`
  - define a set of endpoints describe how to retrieve data from a series of endpoints
  - "one API slice per base URL" as a rule of thumb
  - `import { createApi } from ‘@reduxjs/toolkit/query/react`
  - [`fetchBaseQuery() -`](https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery) A small wrapper around [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that aims to simplify requests. Intended as the recommended `baseQuery` to be used in `createApi`
  - Export autogenerated Query Hooks like `export const {useGetPostsQuery, useGetPostQuery} = apiSlice`
- [Configure](https://redux-toolkit.js.org/rtk-query/api/createApi) the store with the API slice reducer and middleware

`app/store.js`

```
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
})
```

`features/api/apiSlice.ts`

```
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Article'],
  endpoints: (builder) => ({
    getArticles: builder.query<any, void>({
      query: () => '/articles',
      providesTags: ['Article'],
    }),
    getArticleById: builder.query({
      query: (articleId) => `/articles/${articleId}`,
      providesTags: (result, error, arg) => [{ type: 'Article', id: arg }],
    }),
    addNewArticle: builder.mutation({
      query: (initialArticle) => ({
        url: '/articles',
        method: 'ARTICLE',
        body: initialArticle,
      }),
      invalidatesTags: ['Article'],
    }),
    editArticle: builder.mutation({
      query: (article) => ({
        url: `articles/${article.id}`,
        method: 'PATCH',
        body: article,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Article', id: arg.id }],
    }),
  }),
});
```

# Typescript

- Extract [RootState & AppDispatch](https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types) types from store so that they can be referenced as needed
- Replace `useDispatch & useSelector` with [useAppDispatch & useAppSelector](https://redux.js.org/usage/usage-with-typescript#define-typed-hooks)

# Notes

- Don't have any side effects in reducers (eg. logging, random, etc). Use [prepare](https://redux.js.org/tutorials/essentials/part-4-using-data#preparing-action-payloads) instead
- **Don't feel like you need to write reusable selectors for every single field of your state**. Start by writing them inline in the component and refactor later when you find yourself looking up the same values in many parts of your application code.
- Immer lets us update state in two ways: either _mutating_ the existing state value, or _returning_ a new result. If we return a new value, that will replace the existing state completely with whatever we return. (Note that if you want to manually return a new value, it's up to you to write any immutable update logic that might be needed.)

# Complaints

- RTK often calls things “actions” when they're actually “action creators”. \[[1](https://redux-toolkit.js.org/api/createAction), [2](https://github.com/reduxjs/redux-toolkit/issues/673)\]
- It does this with thunks too. createAsyncThunk creates a thunk action creator.
- Why does `useSelector` do shallow compares? Couldn't [this](https://redux.js.org/tutorials/essentials/part-6-performance-normalization#investigating-render-behavior) problem by solved by doing something like Immer instead of explicit memoization? Is [this](https://www.reddit.com/r/reactjs/comments/jj67v0/proxymemoize_like_immer_but_for_memoized_selectors/) relevant?
- Inconsistency: Normally you provide arguments as a payload object, but if you use `prepare` you provide unpacked arguments directly to the action creator
  - dispatch(postUpdated({ id: postId, title, content }));
  - dispatch(postAdded(title, content));
- Boilerplate
  - Why do we need `extraReducers`
  - Why do we individually import actions and selectors? Compare to OvermindJS and mobx-state-tree where I can just import
- TypeScipt
  - [https://github.com/reduxjs/redux-toolkit/issues/1676](https://github.com/reduxjs/redux-toolkit/issues/1676)
    - Why do I need to type `builder.query<any, void>` instead of `builder.query`?
    - If I have `query: () => '/articles',` it should be able to infer that, no?
