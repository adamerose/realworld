import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function NewArticleForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  return (
    <section>
      <h2>Add a New Article</h2>
      <form>
        <label htmlFor="articleTitle">Article Title:</label>
        <input
          type="text"
          id="articleTitle"
          name="articleTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="articleContent">Content:</label>
        <textarea
          id="articleContent"
          name="articleContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button">Save Article</button>
      </form>
    </section>
  );
}

function ArticlesList() {
  const articles = useSelector((state) => state.articles);

  return (
    <section>
      {/* Display articles */}
      {articles.map((article) => (
        <article key={article.id}>
          <h3>{article.title}</h3>
          <p className="article-content">{article.content.substring(0, 100)}</p>
        </article>
      ))}
    </section>
  );
}

export default function Articles() {
  return (
    <>
      <NewArticleForm />
      <ArticlesList />
    </>
  );
}
