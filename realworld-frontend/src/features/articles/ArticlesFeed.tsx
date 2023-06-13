// React
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// Redux
import { useAppDispatch } from '../../app/store';
import { apiSlice } from '../api/apiSlice';

// UI
import { Loader } from '@mantine/core';
// Other
import { parseISO, formatDistanceToNow } from 'date-fns';

function ArticlesFeed() {
  const {
    data: articles = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = apiSlice.endpoints.getArticles.useQuery();

  // sort articles by date in descending order
  const orderedArticles = articles
    ? articles.slice().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    : [];

  return (
    <section>
      <hr />
      <h2>Articles</h2>
      {orderedArticles.map((article) => (
        <article key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <h3>{article.title}</h3>
          </Link>
          <div>
            <ArticleAuthor userId={article.authorId} />
            <TimeAgo timestamp={article.createdAt} />
          </div>
          <p>{article.content.substring(0, 100)}</p>
        </article>
      ))}
    </section>
  );
}

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <div title={timestamp}>
      <i>{timeAgo}</i>
    </div>
  );
};

export const ArticleAuthor = ({ userId }) => {
  const {
    data: author,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = apiSlice.endpoints.getArticleById.useQuery(userId);

  return <div>by {author ? author.email : 'Unknown author'}</div>;
};

export default ArticlesFeed;
