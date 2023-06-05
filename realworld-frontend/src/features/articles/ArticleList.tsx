import React from 'react';
import { useGetArticlesQuery } from '../api/apiSlice';

export default function ArticleList() {
  // useGetArticlesQuery
  const { data, error, isLoading } = useGetArticlesQuery();
  return <div>ArticleList</div>;
}
