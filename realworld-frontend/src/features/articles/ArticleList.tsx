import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articleAdded } from './articlesSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import ArticleAdd from './ArticleAdd';
import { ArticleAuthor } from './ArticleAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButton';

export default function ArticleList() {
  return (
    <>
      <ArticleAdd />
      <ArticlesList />
    </>
  );
}
function ArticlesList() {
  const articles = useSelector((state) => state.articles);

  // sort articles by date in descending order
  const orderedArticles = articles
    ? articles.slice().sort((a, b) => b.date.localeCompare(a.date))
    : [];

  return (
    <section>
      <hr />
      <h2>Posts</h2>
      {articles.map((article) => (
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
          <ReactionButtons article={article} />
        </article>
      ))}
    </section>
  );
}
