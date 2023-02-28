import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articleAdded } from '../redux/articlesSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

export default function ArticleList() {
  return (
    <>
      <NewArticleForm />
      <ArticlesList />
    </>
  );
}
function ArticlesList() {
  const articles = useSelector((state) => state.articles);

  return (
    <section>
      {articles.map((article) => (
        <Link
          key={article.id}
          to={`/articles/${article.id}`}
          className="button muted-button"
        >
          <article>
            <h3>{article.title}</h3>
            <p className="article-content">
              {article.content.substring(0, 100)}
            </p>
          </article>
        </Link>
      ))}
    </section>
  );
}

function NewArticleForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const dispatch = useDispatch();
  const onSaveArticleClicked = () => {
    if (title && content) {
      dispatch(articleAdded(title, content));

      setTitle('');
      setContent('');
    }
  };

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
        <button type="button" onClick={onSaveArticleClicked}>
          Save Article
        </button>
      </form>
    </section>
  );
}
