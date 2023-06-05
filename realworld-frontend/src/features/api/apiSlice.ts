import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_BACKEND_URL
console.log({ baseUrl })

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

export const {
  useGetArticlesQuery,
  useGetArticleByIdQuery,
  useAddNewArticleMutation,
  useEditArticleMutation
} = apiSlice;
