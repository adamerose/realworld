import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../app/store';
import { useAddNewArticleMutation, useGetArticlesQuery } from '../api/apiSlice';

// UI
import { Loader } from '@mantine/core';

function ArticlesFeed() {
  const dispatch = useAppDispatch();

  const {
    data: articles = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetArticlesQuery();

  // sort articles by date in descending order
  const orderedArticles = articles
    ? articles.slice().sort((a, b) => b.date.localeCompare(a.date))
    : [];

  return (
    <section>
      <hr />
      <h2>Articles</h2>
      {orderedArticles.map((article) => (
        <article>
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className="button muted-button"
          >
            <h3>{article.title}</h3>
          </Link>
          <div>
            <ArticleAuthor userId={article.user} />
            <TimeAgo timestamp={article.date} />
          </div>
          <p className="article-content">{article.content.substring(0, 100)}</p>
        </article>
      ))}
    </section>
  );
}

const ArticleSingle = () => {
  const params = useParams();
  const { articleId } = params;

  const article = useSelector((state) => selectArticleById(state, articleId));

  let content;
  if (!article) {
    content = <h2>Article not found!</h2>;
  } else {
    content = (
      <>
        <h2>{article.title}</h2>
        <div>
          <ArticleAuthor userId={article.user} />
          <TimeAgo timestamp={article.date} />
        </div>
        <p>{article.content}</p>
        <ReactionButtons article={article} />

        <Link to={`/editArticle/${article.id}`}>
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
};

export default ArticlesFeed;
