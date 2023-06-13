// React
import React from 'react';
import { Link, useParams } from 'react-router-dom';
// Redux
import { apiSlice } from '../api/apiSlice';
// Components
import { ArticleAuthor, TimeAgo } from './ArticlesFeed';

export default function ArticleEditor() {
  const params = useParams();
  const { articleId } = params;

  const {
    data: article,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = apiSlice.endpoints.getArticleById.useQuery(articleId);

  let content;
  if (!article) {
    content = <h2>Article not found!</h2>;
  } else {
    content = (
      <>
        <h2>{article.title}</h2>
        <div>
          <ArticleAuthor userId={article.authorId} />
          <TimeAgo timestamp={article.date} />
        </div>
        <p>{article.content}</p>

        <Link to={`/editor/${article.id}`}>
          <button>Edit Article</button>
        </Link>
      </>
    );
  }

  return (
    <article>
      <Link to="/articles">←Back</Link>
      {content}
    </article>
  );
}
