import React, { useMemo } from 'react';
import { useAppSelector } from '../../app/store';
import { Link, useParams } from 'react-router-dom';

import { selectUserById } from '../users/usersSlice';
import { useGetPostsQuery } from '../api/apiSlice';
import { createSelector } from '@reduxjs/toolkit';

export const UserPage = () => {
  const params = useParams();
  const { userId } = params;

  const user = useAppSelector((state) => selectUserById(state, userId));

  const selectPostsForUser = useMemo(() => {
    // Return a unique selector instance for this page so that
    // the filtered results are correctly memoized
    return createSelector(
      (res) => res.data,
      (res, userId) => userId,
      (data, userId) => data.filter((post) => post.user === userId),
    );
  }, []);

  // Use the same posts query, but extract only part of its data
  const { postsForUser } = useGetPostsQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      // Include a field called `postsForUser` in the hook result object,
      // which will be filtered list of posts
      postsForUser: selectPostsForUser(res, userId),
    }),
  });

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  );
};
