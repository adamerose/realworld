import React from 'react';
import { useSelector } from 'react-redux';

export const ArticleAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId),
  );

  return <div>by {author ? author.name : 'Unknown author'}</div>;
};
