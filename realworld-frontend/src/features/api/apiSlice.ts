import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_BACKEND_URL
console.log({ baseUrl })

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Article'],
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => '/articles',
      providesTags: (result = [], error, arg) => [
        'Article',
        ...result.map(({ id }) => ({ type: 'Article', id })),
      ],
    }),
    getArticle: builder.query({
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

    addReaction: builder.mutation({
      query: ({ articleId, reaction }) => ({
        url: `articles/${articleId}/reactions`,
        method: 'ARTICLE',
        // In a real app, we'd probably need to base this on user ID somehow
        // so that a user can't do the same reaction more than once
        body: { reaction },
      }),
      async onQueryStarted({ articleId, reaction }, { dispatch, queryFulfilled }) {
        // `updateQueryData` requires the endpoint name and cache key arguments,
        // so it knows which piece of cache state to update
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('getArticles', undefined, (draft) => {
            // The `draft` is Immer-wrapped and can be "mutated" like in createSlice
            const article = draft.find((article) => article.id === articleId);
            if (article) {
              article.reactions[reaction]++;
            }
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useEditPostMutation,
  useAddReactionMutation,
} = apiSlice;
