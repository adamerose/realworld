import React from 'react';
import { useSelector } from 'react-redux';

export default function Articles() {
  const articles = useSelector((state) => state.articles);

  return (
    <>
      {articles.map((article) => (
        <article key={article.id}>
          <h3>{article.title}</h3>
          <p className="article-content">{article.content.substring(0, 100)}</p>
        </article>
      ))}
    </>
  );
}

function Article() {
  return <article>Article</article>;
}
