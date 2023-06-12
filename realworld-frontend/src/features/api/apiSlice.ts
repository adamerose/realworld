import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_BACKEND_URL
console.log({ baseUrl })

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Article'],
  endpoints: (builder) => ({

    ////////////////////////////
    // Articles
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

    ////////////////////////////
    // Authentication
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    // Registration
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (newUser) => ({
        url: '/auth/register',
        method: 'POST',
        body: newUser,
      }),
    }),

  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleByIdQuery,
  useAddNewArticleMutation,
  useEditArticleMutation,

  useLoginMutation,

} = apiSlice;


////////////////////////////
// Types
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  token: string;
}