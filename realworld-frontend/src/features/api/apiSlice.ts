import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_BACKEND_URL
console.log({ baseUrl })

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: (args, api, extraOptions) => {
    const jwt = localStorage.getItem('jwt');
    return fetchBaseQuery({
      baseUrl,
      ...args,
      headers: {
        ...args.headers,
        Authorization: jwt ? `Bearer ${jwt}` : undefined,
      },
    })(args, api, extraOptions);
  }, tagTypes: ['Article', 'User'],
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

    getUserById: builder.query({
      query: (userId) => `/users/${userId}`,
      providesTags: (result, error, arg) => [{ type: 'User', id: arg }],
    }),

    ////////////////////////////
    // Authentication
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          localStorage.setItem('jwt', result.data.token);
        } catch {
          localStorage.removeItem('jwt');
        }
      },

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