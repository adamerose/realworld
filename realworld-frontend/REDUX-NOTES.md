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

Summary

- State is saved in the **store**
- A **slice** is a collection of reducers and actions for a single feature
- Data is accessed using **selectors** like
- State is modified by dispatching **actions** with arguments as **payloads**
- The store listens for actions and passes them to **reducers**
- Reducers calculate the new state like `(state, action) => newState`

Snippets

- _Counter.jsx_
- _counterSlice.jsx_
- _store.ts_
- _main.tsx_

Setup

- Wrap root component like `<Provider store={store}> <App /> </Provider>`
- Create store with `configureStore` in `store.ts` with reducers of every slice
- `configureStore({`[`reducer,`](https://redux-toolkit.js.org/api/configureStore#reducer) [`middleware,`](https://redux-toolkit.js.org/api/configureStore#middleware) [`devTools,`](https://redux-toolkit.js.org/api/configureStore#devtools) [`preloadedState,`](https://redux-toolkit.js.org/api/configureStore#preloadedstate) [`enhancers`](https://redux-toolkit.js.org/api/configureStore#enhancers)`})`
- Don't use `createStore`, use `configureStore`
- Sets up devtools extension
- Adds redux-thunk middleware
- Adds middleware to check for accidental mutations and non-serializable values
- Optionally specify additional middlware, initial state, and store enhances

Slices

- Create a slice for each domain with `createSlice`
- `createSlice({name, initialState, reducers, extraReducers)}`
- Don't use `createAction` and `createReducer`, instead use `createSlice`
- Pass reducers as an object full of named functions
- Export and use `mySlice.actions` and `mySlice.reducer`
- Named export the selectors and actions. Default export the reducer.

Selectors

- Import selectors & actions to JSX component
- Use `createSelector` for writing memoized selectors

Thunks (often not needed, instead of RTK Query)

- Dispatch “loading” action before fetch
- Dispatch either “success” or “failure” action based on result
- `createAsyncThunk("name", await (myArgs) => {*api stuff* return myPromise})`
- Takes an action type string and a callback that returns a promise
- Generates and dispatches actions for “pending”, “fulfilled”, and “rejected” cases

Normalizing state

- Store items in a lookup table where keys are ids and values are the item
- `createEntityAdapter` creates an adapter with prebuilt functions for CRUD operations on normalized data

RTK Query

- Fully abstracts the data fetching and caching process
- Define an API. Provide a baseUrl and endpoints
- Automatically generates a React hook

# Typescript

- [https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types](https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types)
- Extract the `RootState` type and the `Dispatch` type from store so that they can be referenced as needed
- While it's possible to import the `RootState` and `AppDispatch` types into each component, it's better to **create pre-typed versions of the** `useDispatch` **and** `useSelector` **hooks for usage in your application**

# Notes

- Don't have any side effects in reducers (eg. logging, random, etc). Use [prepare](https://redux.js.org/tutorials/essentials/part-4-using-data#preparing-action-payloads) instead

# Complaints

- RTK often calls things “actions” when they're actually “action creators”. \[[1](https://redux-toolkit.js.org/api/createAction), [2](https://github.com/reduxjs/redux-toolkit/issues/673)\]
- It does this with thunks too. createAsyncThunk creates a thunk action creator.
- Boilerplate
  - Why do we need `extraReducers`
  - Why do we individually import actions and selectors? Compare to OvermindJS and mobx-state-tree where I can just import
